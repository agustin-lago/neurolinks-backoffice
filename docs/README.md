# neurolinks-backoffice

Documentacion tecnica del backoffice de Neurolinks para bots de WhatsApp, CRM operativo, integraciones de IA y administracion multicliente.

Este proyecto centraliza la operacion del bot, el dashboard web, la persistencia en Supabase, la configuracion por proyecto y las integraciones externas necesarias para atender conversaciones, registrar leads, operar el CRM y sincronizar datos.

## Resumen

- Backend Node.js con TypeScript.
- Bot basado en BuilderBot.
- Proveedores WhatsApp: Baileys y Meta Cloud API.
- IA: OpenAI Assistants API.
- Base de datos: Supabase/PostgreSQL.
- Infraestructura objetivo: Railway y Docker.
- Integraciones Google: Sheets, Docs, Drive, Calendar y Maps/Geocoding.
- Integraciones externas detectadas: Aquavita, Ganamos Net y Cas-EPC.
- Frontend administrativo servido desde `src/frontend`.

## Entrada Principal

- `src/app.ts`: arranque del servidor, inicializacion de Supabase, proveedores WhatsApp, rutas HTTP, workers, sincronizacion Google y manager de IA.
- `dist/app.js`: bundle generado por `pnpm build`, usado por `npm start`.

## Configuracion

La configuracion productiva se toma principalmente desde la tabla `public.settings` de Supabase, usando esta forma:

```text
project_id | key | value
```

El proyecto master/template configurado en codigo es:

```text
backoffice-default
```

Los proyectos nuevos clonan variables faltantes desde ese `project_id` master durante el bootstrap.

Variables importantes:

- `SUPABASE_URL`
- `SUPABASE_KEY`
- `RAILWAY_PROJECT_ID`
- `OPENAI_API_KEY`
- `OPENAI_ADMIN_API_KEY`
- `OPENAI_API_KEY_TOOLS`
- `ASSISTANT_ID`
- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_MAPS_API_KEY`
- `GOOGLE_CALENDAR_ID`
- `SHEET_ID_RESUMEN`
- `SHEET_ID_UPDATE`
- `DOCX_ID_UPDATE`
- `META_APP_ID`
- `META_APP_SECRET`
- `META_CONFIG_ID`
- `BACKOFFICE_TOKEN`

## Modulos Principales

- `src/backend/db/historyHandler.ts`: acceso a Supabase, bootstrap de settings, cache, tablas, usuarios, chats, tickets, grupos y configuracion dinamica.
- `src/backend/apis/google/googleAuth.ts`: autenticacion con service account y proxy opcional para Google APIs.
- `src/backend/apis/google/calendarEvents.ts`: creacion, actualizacion, borrado y consulta de disponibilidad en Google Calendar.
- `src/backend/apis/google/updateSheet.ts`: sincronizacion con Google Sheets.
- `src/backend/apis/google/updateDoc.ts`: sincronizacion con Google Docs.
- `src/backend/apis/google/googleDriveHandler.ts`: operaciones con Google Drive.
- `src/backend/apis/openai/openaiHelper.ts`: clientes OpenAI y resolucion de configuracion.
- `src/backend/bot/ai.manager.ts`: procesamiento central de mensajes con IA y flujos.
- `src/backend/providers/SupabaseBaileysProvider.ts`: proveedor Baileys con persistencia Supabase.
- `src/backend/providers/MetaCloudProvider.ts`: proveedor para Meta Cloud API.
- `src/backend/backoffice/routes/backoffice.routes.ts`: rutas principales del backoffice, CRM, WhatsApp, configuracion, Meta y Mercado Pago.
- `src/backend/backoffice/routes/dashboard.routes.ts`: rutas del dashboard.
- `src/backend/backoffice/routes/static.routes.ts`: archivos estaticos y vistas frontend.
- `src/backend/backoffice/webchat/routes/webchat.routes.ts`: rutas del webchat.
- `src/backend/apis/external/external_api.routes.ts`: rutas para integraciones externas.

## Areas Funcionales

- Dashboard web para operar conversaciones, CRM, configuracion y sesiones.
- Gestion de chats, mensajes, etiquetas, tickets y leads.
- Encendido/apagado del bot por contacto.
- Envio manual y masivo de mensajes/templates.
- Onboarding y sincronizacion de Meta WhatsApp.
- Persistencia y restauracion de sesiones WhatsApp.
- Reportes y grupos de resumen.
- Integracion con Google Calendar para eventos/disponibilidad.
- Integracion con Google Maps Geocoding para ubicaciones.
- Integracion con Google Drive/Docs/Sheets para archivos y sincronizaciones.
- Integracion con Mercado Pago.

## Rutas HTTP

El inventario completo de rutas esta en `contexto.md`. Grupos principales:

- `/api/backoffice/*`: autenticacion, usuarios, chats, mensajes, CRM, WhatsApp, settings, Mercado Pago y Meta.
- `/api/dashboard/*`: informacion del dashboard.
- `/api/webchat/*`: webchat.
- `/api/railway/*`: operaciones asociadas a Railway.
- `/api/clientes/mercadopago/*`: webhooks/callbacks de clientes.
- `/health`: estado del servidor.

## Build y Ejecucion

Instalar dependencias:

```bash
pnpm install
```

Compilar:

```bash
pnpm build
```

Ejecutar bundle:

```bash
npm start
```

Modo desarrollo:

```bash
pnpm run dev
```

Docker:

```bash
docker compose up --build
```

## Deploy

El flujo recomendado para un nuevo deploy/template es:

1. Subir el repo actualizado a GitHub.
2. Crear en Supabase las filas master con `project_id = backoffice-default`.
3. Cargar en ese master las variables oficiales de Neurolinks.
4. Crear el template/deploy en Railway desde el repo.
5. Configurar las variables minimas de arranque en Railway.
6. Hacer deploy y verificar logs de bootstrap.

## Documentacion Relacionada

- `contexto.md`: auditoria general del proyecto.
- `docs/configuracion/variables-entorno.md`: variables de entorno.
- `docs/modulos/google-api.md`: integracion Google.
- `docs/modulos/database.md`: Supabase y persistencia.
- `docs/modulos/session-sync.md`: sesiones WhatsApp.
- `docs/api/backoffice.md`: API del backoffice.
- `docs/whatsapp/comandos.md`: comandos administrativos.

## Última prueba de update Railway: 2026-07-23