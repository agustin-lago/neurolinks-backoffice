import OpenAI from "openai";
import { getArgentinaDatetimeString } from "../../utils/ArgentinaTime";
import { executeDbQuery } from "../../db/dbHandler";
import { SystemLogger } from "../../utils/logger.js";
import { RagToolManager } from "../../rag/ragToolManager.js";

// Instancias perezosas para Hot-update con cache multi-tenant.
const _openaiMap =
    new Map<string, OpenAI>();

const _openaiVisionMap =
    new Map<string, OpenAI>();


export function getOpenAIProxyHeaders(
    baseURL: string | undefined
): Record<string, string> | undefined {

    if (!baseURL) {
        return undefined;
    }

    let hostname: string;

    try {
        hostname =
            new URL(baseURL)
                .hostname
                .toLowerCase();
    } catch {
        return undefined;
    }

    // Nunca enviar nuestro secreto a un endpoint externo.
    if (
        hostname !==
        'openai-proxy.clientesneurolinks.com'
    ) {
        return undefined;
    }

    const token =
        process.env
            .NEUROLINKS_PROXY_AUTH_TOKEN
            ?.trim();

    if (!token) {
        return undefined;
    }

    return {
        'x-proxy-token':
            token
    };
}


export function getOpenAIBaseUrl():
    string | undefined {

    const envBaseURL =
        process.env
            .NEUROLINKS_OPENAI_BASE_URL;


    // Proxy propio del backoffice nuevo.
    if (!envBaseURL) {
        return 'https://openai-proxy.clientesneurolinks.com/v1';
    }


    let clean =
        envBaseURL.trim();


    if (
        (
            clean.startsWith("'") &&
            clean.endsWith("'")
        ) ||
        (
            clean.startsWith('"') &&
            clean.endsWith('"')
        )
    ) {
        clean =
            clean
                .slice(1, -1)
                .trim();
    }


    if (
        clean.toLowerCase() ===
        'direct'
    ) {
        return undefined;
    }

    return clean;
}


/**
 * Obtiene la instancia OpenAI principal.
 */
export async function getOpenAI(
    projectId?: string,
    serviceId?: string
): Promise<OpenAI | null> {

    const {
        HistoryHandler
    } =
        await import(
            "../../db/historyHandler"
        );


    const targetProjectId =
        projectId ||
        HistoryHandler
            .PROJECT_IDENTIFIER;

    const targetServiceId =
        serviceId ||
        HistoryHandler
            .SERVICE_IDENTIFIER;


    const key =
        await HistoryHandler.getConfig(
            'OPENAI_API_KEY',
            targetProjectId,
            targetServiceId
        );


    if (
        !key ||
        key.includes('*****') ||
        key === 'tu_api_key_aqui' ||
        key.trim() === ''
    ) {
        console.warn(
            `[OpenAI] No se detecto una OPENAI_API_KEY valida para proyecto ${targetProjectId}.`
        );

        return null;
    }


    const baseURL =
        getOpenAIBaseUrl();

    const proxyHeaders =
        getOpenAIProxyHeaders(
            baseURL
        );


    // baseURL forma parte de la cache.
    //
    // Si NEUROLINKS_OPENAI_BASE_URL cambia en caliente,
    // no reutilizar una instancia creada contra
    // el proxy anterior.
    const cacheKey =
        `${targetProjectId}:` +
        `${targetServiceId}:` +
        `${key}:` +
        `${baseURL || 'direct'}`;


    if (
        !_openaiMap.has(
            cacheKey
        )
    ) {
        console.log(
            `[OpenAI] Inicializando nueva instancia para ${targetProjectId}:${targetServiceId}`
        );


        const instance =
            new OpenAI({
                apiKey: key,

                ...(baseURL
                    ? {
                        baseURL
                    }
                    : {}),

                ...(proxyHeaders
                    ? {
                        defaultHeaders:
                            proxyHeaders
                    }
                    : {})
            });


        _openaiMap.set(
            cacheKey,
            instance
        );
    }


    return (
        _openaiMap.get(
            cacheKey
        ) ||
        null
    );
}


/**
 * Obtiene instancia OpenAI para vision/imagenes.
 */
export async function getOpenAIVision(
    projectId?: string,
    serviceId?: string
): Promise<OpenAI | null> {

    const {
        HistoryHandler
    } =
        await import(
            "../../db/historyHandler"
        );


    const targetProjectId =
        projectId ||
        HistoryHandler
            .PROJECT_IDENTIFIER;

    const targetServiceId =
        serviceId ||
        HistoryHandler
            .SERVICE_IDENTIFIER;


    const key =
        await HistoryHandler.getConfig(
            'OPENAI_API_KEY_IMG',
            targetProjectId,
            targetServiceId
        );


    if (!key) {
        return await getOpenAI(
            targetProjectId,
            targetServiceId
        );
    }


    const baseURL =
        getOpenAIBaseUrl();

    const proxyHeaders =
        getOpenAIProxyHeaders(
            baseURL
        );


    const cacheKey =
        `${targetProjectId}:` +
        `${targetServiceId}:` +
        `${key}:` +
        `${baseURL || 'direct'}`;


    if (
        !_openaiVisionMap.has(
            cacheKey
        )
    ) {
        console.log(
            `[OpenAI-Vision] Inicializando nueva instancia para ${targetProjectId}:${targetServiceId}`
        );


        const instance =
            new OpenAI({
                apiKey: key,

                ...(baseURL
                    ? {
                        baseURL
                    }
                    : {}),

                ...(proxyHeaders
                    ? {
                        defaultHeaders:
                            proxyHeaders
                    }
                    : {})
            });


        _openaiVisionMap.set(
            cacheKey,
            instance
        );
    }


    return (
        _openaiVisionMap.get(
            cacheKey
        ) ||
        null
    );
}

/**
 * Limpia y parsea un string JSON que puede venir envuelto en comillas literales (comÃºn en variables de entorno).
 */
function safeParseJson(jsonStr: string | undefined): any {
    if (!jsonStr) return null;
    let clean = jsonStr.trim();
    // Eliminar comillas simples o dobles envolventes si existen
    if ((clean.startsWith("'") && clean.endsWith("'")) || (clean.startsWith('"') && clean.endsWith('"'))) {
        clean = clean.slice(1, -1);
    }
    return JSON.parse(clean);
}

/**
 * Sincroniza las herramientas (tools) definidas en las variables de entorno con el asistente de OpenAI.
 * Esto evita tener que configurar manualmente el Dashboard.
 */
export async function syncAssistantTools(assistantId: string, projectId: string | null = null, serviceId: string | null = null): Promise<boolean> {
    try {
        const { HistoryHandler } = await import("../../db/historyHandler");
        const targetProjectId = projectId || HistoryHandler.PROJECT_IDENTIFIER;
        const targetServiceId = serviceId || HistoryHandler.SERVICE_IDENTIFIER;
        const openai = await getOpenAI(targetProjectId, targetServiceId);
        if (!openai || !assistantId) return false;

        let toolsJson = await HistoryHandler.getSetting('OPENAI_TOOLS_DEFINITION', targetProjectId, targetServiceId);

        if (!toolsJson) {
            console.log("[openaiHelper] No se detectÃ³ OPENAI_TOOLS_DEFINITION. Verificando DB_TABLES para autogeneraciÃ³n...");
            const dbTablesStr = await HistoryHandler.getSetting('DB_TABLES', targetProjectId, targetServiceId);

            if (dbTablesStr && dbTablesStr.trim() !== "") {
                try {
                    const { autoUpdateBotAbilities } = await import("./toolGenerator");
                    const tableNames = dbTablesStr.split(',').map(t => t.trim());
                    console.log(`[openaiHelper] ðŸ¤– Intentando autogenerar tools para tablas: ${dbTablesStr}`);
                    await autoUpdateBotAbilities(tableNames, targetProjectId, targetServiceId || undefined);

                    // Re-intentar obtener la definiciÃ³n reciÃ©n generada
                    toolsJson = await HistoryHandler.getSetting('OPENAI_TOOLS_DEFINITION', targetProjectId, targetServiceId);
                } catch (genError: any) {
                    console.error("[openaiHelper] âŒ Error en autogeneraciÃ³n de tools:", genError.message);
                }
            }

            if (!toolsJson) {
                console.log("[openaiHelper] âš ï¸ SincronizaciÃ³n de tools omitida: No hay definiciÃ³n ni tablas para generar.");
                return false;
            }
        }

        const tools = safeParseJson(toolsJson);
        if (!Array.isArray(tools)) {
            console.log("[openaiHelper] âš ï¸ DefiniciÃ³n de tools no es un array vÃ¡lido.");
            return false;
        }

        // --- FILTRADO AUTOMÃTICO DE HERRAMIENTAS POR PROMPT DEL ASISTENTE ---
        // 1. Identificar cuÃ¡l de los 5 asistentes (asistente1..5) corresponde a este assistantId
        const assistantsKeys = ['ASSISTANT_ID', 'ASSISTANT_2', 'ASSISTANT_3', 'ASSISTANT_4', 'ASSISTANT_5'];
        let assistantIndex = '1';
        for (const envKey of assistantsKeys) {
            const val = await HistoryHandler.getSetting(envKey, targetProjectId, targetServiceId);
            if (val === assistantId) {
                if (envKey === 'ASSISTANT_ID') assistantIndex = '1';
                else assistantIndex = envKey.replace('ASSISTANT_', '');
                break;
            }
        }

        // 2. Obtener el prompt especÃ­fico del asistente correspondiente
        const promptKey = assistantIndex === '1' ? 'ASSISTANT_PROMPT' : `ASSISTANT_PROMPT_${assistantIndex}`;
        const prompt = await HistoryHandler.getSetting(promptKey, targetProjectId, targetServiceId);

        // 3. Filtrar herramientas: Solo incluimos la herramienta si su nombre lÃ³gico se menciona en el prompt
        let filteredTools = tools;
        if (prompt && prompt.trim() !== '') {
            filteredTools = tools.filter((tool: any) => {
                const funcName = tool.function?.name || tool.name;
                if (!funcName) return true; // Si no tiene nombre por alguna razÃ³n, dejarla

                // Buscamos la palabra exacta del nombre de la herramienta en el prompt
                const regex = new RegExp(`\\b${funcName}\\b`, 'i');
                const isMentioned = regex.test(prompt);

                if (!isMentioned) {
                    console.log(`ðŸ” [openaiHelper] Excluyendo herramienta '${funcName}' para el asistente ${assistantIndex} (No mencionada en el prompt).`);
                }
                return isMentioned;
            });
        }

        console.log(`[openaiHelper] ðŸ”„ Sincronizando ${filteredTools.length} de ${tools.length} herramientas con el asistente ${assistantId}...`);

        await openai.beta.assistants.update(assistantId, {
            tools: filteredTools
        });

        console.log("[openaiHelper] âœ… Herramientas sincronizadas correctamente.");
        return true;
    } catch (error: any) {
        console.error("[openaiHelper] âŒ Error sincronizando herramientas:", error.message);
        return false;
    }
}

export const askWithFunctions = async (assistantId: string, message: string, state: any, userId: string = 'unknown', forceDb: boolean = false, projectId: string | null = null, directMode: boolean = true, agentName: string | undefined = undefined, serviceId: string | null = null): Promise<string> => {
    try {
        const { HistoryHandler } = await import("../../db/historyHandler");
        const stateServiceId = (typeof state?.get === 'function') ? state.get('dynamicServiceId') : state?.dynamicServiceId;
        const targetProjectId = projectId || HistoryHandler.PROJECT_IDENTIFIER;
        const targetServiceId = serviceId || stateServiceId || HistoryHandler.SERVICE_IDENTIFIER;

        const openai = await getOpenAI(targetProjectId, targetServiceId);
        if (!openai) {
            console.warn("âš ï¸ OPENAI_API_KEY no detectada. El asistente de IA estÃ¡ desactivado.");
            return "";
        }

        // 1. Cargar Historial (Contexto)
        // Si el mensaje es una peticiÃ³n de resumen, traemos mucho mÃ¡s contexto (50 mensajes)
        const isSummaryRequest = /GET_RESUMEN/i.test(message);
        const historyLimit = isSummaryRequest ? 50 : 15;
        const history = await HistoryHandler.getMessages(userId, historyLimit, 0, targetProjectId, targetServiceId);
        console.log(`[openaiHelper] ðŸ“œ Historial recuperado para ${userId}: ${history.length} mensajes (Limit: ${historyLimit}) | Project: ${targetProjectId} | Service: ${targetServiceId}`);

        // Cargar datos del chat para obtener el Ãºltimo resultado de BD y service_id
        const chatData = await HistoryHandler.getChat(userId, targetProjectId, targetServiceId);
        const lastDbResult = chatData?.last_db_result;
        const chatServiceId = chatData?.service_id || targetServiceId;

        // 2. Preparar el prompt del sistema
        // Intentar obtener un prompt especÃ­fico para este asistente usando su nombre lÃ³gico (asistente1, asistente2...)
        let promptKey = 'ASSISTANT_PROMPT';
        if (agentName && agentName !== 'asistente1') {
            const num = agentName.replace('asistente', '');
            promptKey = `ASSISTANT_PROMPT_${num}`;
        }

        let systemPrompt = await HistoryHandler.getSetting(promptKey, targetProjectId, chatServiceId);

        // Fallback: si no hay por nombre lÃ³gico, intentar por Assistant ID (legacy)
        if (!systemPrompt) {
            systemPrompt = await HistoryHandler.getSetting(`ASSISTANT_PROMPT_${assistantId}`, targetProjectId, chatServiceId);
        }

        // Segundo Fallback: usar el genÃ©rico 'ASSISTANT_PROMPT'
        if (!systemPrompt) {
            const dbPrompt = await HistoryHandler.getSetting('ASSISTANT_PROMPT', targetProjectId, chatServiceId);
            systemPrompt = dbPrompt || await HistoryHandler.getConfig('ASSISTANT_PROMPT', targetProjectId, chatServiceId) || "Eres un asistente servicial.";
        }
        
        // Obtener CLIENT_SLUG para formatear contexto de cliente
        const slug = await HistoryHandler.getConfig('CLIENT_SLUG', targetProjectId, chatServiceId);
        const cleanSlug = String(slug || '').trim().toLowerCase();

        if (cleanSlug === 'aquavita') {
            systemPrompt += `\n\nINSTRUCCIÃ“N CRÃTICA DE PERSISTENCIA Y MEMORIA:
- Dispones de la herramienta 'ACTUALIZAR_CONTEXTO'.
- Tan pronto como el usuario te proporcione datos clave como su nombre, direcciÃ³n (calle y nÃºmero), telÃ©fono o DNI/CUIT, DEBES llamar inmediatamente a la herramienta 'ACTUALIZAR_CONTEXTO' para registrar estos datos en la memoria de la conversaciÃ³n.
- Esto es sumamente importante para evitar que el bot olvide la informaciÃ³n si la conversaciÃ³n se extiende, ya que el historial de mensajes se trunca.`;
        }

        // Filtrar mensajes vÃ¡lidos y formatear para OpenAI
        const formattedHistory = history
            .filter(m => m.role === 'user' || m.role === 'assistant')
            .filter(m => m.content && m.content.trim() !== "")
            .map(m => ({
                role: m.role as "user" | "assistant",
                content: m.content
            }));

        // 2.2 Evitar duplicar el mensaje actual si ya se guardÃ³ en el historial (comÃºn en este sistema)
        const lastMsg = formattedHistory.length > 0 ? formattedHistory[formattedHistory.length - 1] : null;
        const isAlreadyInHistory = lastMsg && lastMsg.role === 'user' && lastMsg.content.trim() === message.trim();

        const messages: any[] = [
            { role: "system", content: systemPrompt },
            ...formattedHistory
        ];

        // 2.5 Refuerzo para ResÃºmenes: Si es un resumen, inyectar una instrucciÃ³n clara ANTES del comando
        if (isSummaryRequest) {
            console.log(`[openaiHelper] ðŸ“‹ Solicitud de Resumen detectada. Historial disponible: ${formattedHistory.length} mensajes.`);
            messages.push({
                role: "system",
                content: `INSTRUCCIÃ“N CRÃTICA DE RESUMEN:
                - Se te ha pasado un historial de ${formattedHistory.length} mensajes arriba.
                - Tu tarea ÃšNICA es generar un resumen estructurado basado en esos mensajes.
                - Si el historial es corto, resume lo que hay (ej: 'InteracciÃ³n inicial, solo saludos').
                - NUNCA respondas con frases de error como 'No tengo suficiente informaciÃ³n' o similares.
                - Sigue la ESTRUCTURA definida en tu prompt (ej: 'Tipo: ...', 'Nombre: ...').
                - Si el prompt pide JSON, responde JSON. Si pide texto plano, responde texto plano.
                - Responde Ãºnicamente con la informaciÃ³n solicitada en el bloque GET_RESUMEN.`
            });
        }

        // Agregar el mensaje actual del usuario solo si NO estÃ¡ ya en el historial
        if (!isAlreadyInHistory) {
            messages.push({ role: "user", content: message });
        }

        // Inyectar fecha y hora actual en el system prompt o como mensaje adicional
        const currentDatetimeArg = getArgentinaDatetimeString();
        const contactNameInfo = chatData?.name ? `\nNombre de Contacto: ${chatData.name}` : '';

        // Cargar contexto temporal (pre-contexto) desde state y desde chats.metadata en la DB
        let preContextData: any = {};
        if (state && typeof state.get === 'function') {
            preContextData = state.get('datosClienteContext') || {};
        }
        const dbContext = await HistoryHandler.getClientContext(
            userId,
            targetProjectId,
            chatServiceId
        );
        if (dbContext) {
            preContextData = {
                ...dbContext,
                ...preContextData
            };
        }

        const finalName = chatData?.name || preContextData.nombre || 'No identificado';
        const finalDni = chatData?.cuit_dni || preContextData.dni_cuit || preContextData.numCliente || 'No registrado';
        const finalEmail = chatData?.email || preContextData.email || 'No registrado';
        const finalAddress = chatData?.address || preContextData.direccion || 'No registrado';
        const finalTax = chatData?.tax_status || preContextData.tipoCliente || 'No identificado';

        let leadContext = '';
        if (cleanSlug === 'ganemos' || cleanSlug === 'ganemos-net' || cleanSlug === 'cas-epc' || cleanSlug === 'casepc') {
            leadContext = `\n\nDATOS DEL CLIENTE EN CRM (Ãšsalos para personalizar tu respuesta):
- Nombre: ${finalName}
- Usuario / DNI (Nombre de usuario en la plataforma de juego): ${finalDni}
- Correo ElectrÃ³nico: ${finalEmail}
- Domicilio: ${finalAddress}
- Notas del CRM: ${chatData?.notes || 'Sin notas'}

INSTRUCCIÃ“N CRÃTICA DE IDENTIDAD DE JUGADOR:
- El campo 'Usuario / DNI' representa el nombre de usuario oficial del jugador en la plataforma.
- Para las llamadas de herramientas 'DEPOSITAR' o 'RETIRAR', debes utilizar este nombre de usuario registrado en la base de datos (${finalDni}) como argumento 'username', a menos que el usuario del chat te indique explÃ­citamente en su mensaje que la operaciÃ³n es para un usuario distinto.`;
        } else if (cleanSlug === 'aquavita') {
            leadContext = `\n\nDATOS DEL CLIENTE EN CRM (Ãšsalos para personalizar tu respuesta y evitar volver a preguntarlos):
- Nombre: ${finalName}
- Nro Cliente / DNI: ${finalDni}
- Correo ElectrÃ³nico: ${finalEmail}
- DirecciÃ³n: ${finalAddress}
- Tipo Cliente: ${finalTax}
- Producto Ofrecido: ${chatData?.offered_product || 'No especificado'}
- Notas del CRM: ${chatData?.notes || 'Sin notas'}`;
        } else {
            leadContext = `\n\nDATOS DEL CLIENTE EN CRM (Ãšsalos para personalizar tu respuesta):
- Nombre: ${finalName}
- Cuil / Cuit / DNI: ${finalDni}
- Correo ElectrÃ³nico: ${finalEmail}
- Domicilio: ${finalAddress}
- SituaciÃ³n Impositiva: ${finalTax}
- Producto Ofrecido: ${chatData?.offered_product || 'No especificado'}
- Notas del CRM: ${chatData?.notes || 'Sin notas'}`;
        }

        messages[0].content += `\n\nFecha/Hora Actual (Argentina): ${currentDatetimeArg}\nID de Usuario: ${userId}${contactNameInfo}\nProject ID: ${targetProjectId}${leadContext}`;

        // Inyectar el Ãºltimo resultado de base de datos si existe en la base de datos
        if (lastDbResult) {
            messages[0].content += `\n\n[ÃšLTIMO RESULTADO DE BASE DE DATOS CACHEADO]:\n${lastDbResult}\n(Usa esta informaciÃ³n de mÃ¡quinas/preguntas anteriores si el usuario se refiere a ella o te pregunta al respecto, para responder de inmediato sin necesidad de volver a ejecutar la consulta query_database a menos que sea estrictamente necesario)`;
        }

        // Inyectar contexto RAG de documentos de Supabase si existe coincidencia semÃ¡ntica
        // 3. Preparar Herramientas (Tools)
        let tools: any[] = [];
        const toolsJson = await HistoryHandler.getSetting('OPENAI_TOOLS_DEFINITION', targetProjectId, chatServiceId);
        if (toolsJson) {
            try {
                const rawTools = safeParseJson(toolsJson);
                if (Array.isArray(rawTools)) {
                    const unparsedTools = rawTools.map(tool => {
                        let processed = tool;
                        // 1. Envolver si falta el nivel superior
                        if (!processed.type && (processed.name || processed.parameters || processed.description)) {
                            processed = { type: "function", function: processed };
                        }

                        // 2. Corregir esquema de parÃ¡metros si es invÃ¡lido
                        if (processed.function && processed.function.parameters) {
                            if (!processed.function.parameters.type || processed.function.parameters.type === 'None') {
                                processed.function.parameters.type = 'object';
                            }
                            if (!processed.function.parameters.required) {
                                processed.function.parameters.required = ['tabla', 'dato'];
                            }
                        }
                        return processed;
                    });

                    // Filtrar dinÃ¡micamente las herramientas por menciÃ³n en el prompt del sistema
                    if (systemPrompt && systemPrompt.trim() !== '') {
                        tools = unparsedTools.filter((tool: any) => {
                            const funcName = tool.function?.name || tool.name;
                            if (!funcName) return true;
                            // Filtro de palabra exacta del nombre del tool en el prompt
                            const regex = new RegExp(`\\b${funcName}\\b`, 'i');
                            return regex.test(systemPrompt);
                        });
                    } else {
                        tools = unparsedTools;
                    }
                }
            } catch (e) {
                console.error("[openaiHelper] Error parseando o reparando tools:", e);
            }
        }

        // Inyectar definiciones de herramientas RAG si se requieren segÃºn el prompt
        tools = RagToolManager.injectRagToolsIfNeeded(tools, systemPrompt);


        // 4. Bucle de ejecuciÃ³n para Chat Completions con Function Calling
        let responseContent = "";
        let continueLoop = true;
        let attempts = 0;

        while (continueLoop && attempts < 10) {
            attempts++;
            const openaiModel = await HistoryHandler.getConfig('OPENAI_MODEL', targetProjectId, chatServiceId) || "gpt-4o-mini";
            const completion = await openai.chat.completions.create({
                model: openaiModel,
                messages: messages,
                tools: tools.length > 0 ? tools : undefined,
                tool_choice: tools.length > 0 ? "auto" : undefined,
            });

            const responseMessage = completion.choices[0].message;

            if (responseMessage.tool_calls && responseMessage.tool_calls.length > 0) {
                // Agregar la peticiÃ³n de la herramienta al historial del chat
                messages.push(responseMessage);

                // Procesar cada llamada a herramienta
                for (const toolCall of responseMessage.tool_calls) {
                    const funcName = toolCall.function.name;
                    const args = JSON.parse(toolCall.function.arguments || "{}");

                    console.log(`[ChatCompletion] Tool Call: ${funcName}`, args);

                    let toolResult = "";
                    if (funcName === "query_database") {
                        const { tabla, dato } = args as any;
                        // Usar el projectId dinÃ¡mico para validar las tablas permitidas de los clientes.
                        const dbTablesStr = await HistoryHandler.getConfig('DB_TABLES', targetProjectId, chatServiceId) || "";
                        const allowedTables = dbTablesStr.split(',').map(t => t.trim());

                        if (!allowedTables.includes(tabla)) {
                            toolResult = JSON.stringify({ error: `Acceso denegado a la tabla ${tabla}.`, success: false });
                        } else {
                            const safeDato = dato.replace(/'/g, "''");
                            const sql = `SELECT * FROM "${tabla}" WHERE "${tabla}"::text ~* '${safeDato}' LIMIT 25;`;
                            toolResult = await executeDbQuery(sql);

                            // Persistir el resultado para que estÃ© disponible en futuros turnos del contexto
                            await HistoryHandler.updateLastDbResult(userId, toolResult, targetProjectId ?? undefined, chatServiceId);
                        }
                    } else if (funcName === "search_knowledge_base" || funcName === "file_search") {
                        try {
                            const query = args.query || args.busqueda || args.q || "";
                            const { searchKnowledgeBase } = await import("../../rag/ragService.js");
                            toolResult = await searchKnowledgeBase(targetProjectId || "default", query, 5, chatServiceId);
                            if (!toolResult) toolResult = "No se encontrÃ³ informaciÃ³n relevante en la base de conocimientos.";
                        } catch (ragToolErr: any) {
                            toolResult = "Error consultando la base de conocimientos: " + ragToolErr.message;
                        }
                    } else {
                        // Intentar enrutar a herramientas del cliente o Mercado Pago
                        try {
                            const { executeClientTool } = await import("../../bot/toolRouter");
                            const context = {
                                state,
                                ctx: { from: userId },
                                projectId: targetProjectId,
                                serviceId: chatServiceId
                            };
                            console.log(`[ChatCompletion] Enrutando tool call '${funcName}' al router de cliente...`);
                            const routerRes = await executeClientTool(funcName, args, context);

                            // Si retorna un string, lo envolvemos en un objeto resultado; si es objeto, lo pasamos directo
                            toolResult = typeof routerRes === 'string' ? JSON.stringify({ result: routerRes }) : JSON.stringify(routerRes);
                        } catch (err: any) {
                            console.error(`[ChatCompletion] Error enrutando tool '${funcName}':`, err.message);
                            toolResult = JSON.stringify({ error: `Function ${funcName} failed: ` + err.message });
                        }
                    }

                    // Agregar el resultado de la herramienta al historial
                    messages.push({
                        tool_call_id: toolCall.id,
                        role: "tool",
                        name: funcName,
                        content: toolResult,
                    });
                }
                // El bucle continuarÃ¡ para que OpenAI procese los resultados de las herramientas
            } else {
                responseContent = responseMessage.content || "";
                continueLoop = false;
            }
        }

        return responseContent;

    } catch (error: any) {
        const errorCode = error.status || error.code || 'OAI_ERR';

        let humanMessage = `Error [${errorCode}]: OpenAI no pudo generar una respuesta para el mensaje de [${userId}]. Detalle: ${error.message}`;
        if (errorCode === 429) {
            humanMessage = `Error [429]: Saldo insuficiente o lÃ­mite de cuota excedido en OpenAI. El bot no le contestÃ³ a [${userId}].`;
        }

        await SystemLogger.error('OPENAI', humanMessage, userId, {
            message: error.message,
            stack: error.stack,
            status: error.status
        });

        console.error("[openaiHelper] âŒ Error en Chat Completions:", error.message);
        throw error;
    }
};


/**
 * PeticiÃ³n Segura con Reintentos (safeToAsk)
 * Centraliza la lÃ³gica de comunicaciÃ³n con OpenAI Chat Completions.
 */
export const safeToAsk = async (
    assistantId: string,
    message: string,
    state: any,
    userId: string = 'unknown',
    errorReporter?: any,
    maxRetries = 3,
    forceDb = false,
    projectId: string | null = null,
    directMode: boolean = true,
    agentName: string | undefined = undefined,
    serviceId: string | null = null
) => {
    const SAFE_TIMEOUT = 120000;

    return Promise.race([
        (async () => {
            let attempt = 0;
            while (attempt < maxRetries) {
                try {
                    return await askWithFunctions(assistantId, message, state, userId, forceDb, projectId, directMode, agentName, serviceId);
                } catch (err: any) {
                    attempt++;
                    console.error(`[openaiHelper] Intento ${attempt} fallido:`, err.message);

                    const status = err.status || err.code;
                    // Si es un error de clave invÃ¡lida o permisos, abortar de inmediato sin reintentar
                    if (status === 401 || status === 403) {
                        console.error("[openaiHelper] ðŸ›‘ Error de autenticaciÃ³n (401/403) detectado. Abortando reintentos.");
                        throw err;
                    }

                    if (attempt >= maxRetries) throw err;
                    await new Promise(r => setTimeout(r, 2000 * attempt));
                }
            }
        })(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT_SAFE_TO_ASK')), SAFE_TIMEOUT))
    ]);
};

