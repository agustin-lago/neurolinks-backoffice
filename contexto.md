# Contexto - neurolinks-backoffice

Generado: 2026-07-22. Alcance: auditoria local de todos los archivos bajo `neurolinks-backoffice`, excluyendo solamente `.git/` y `node_modules/`.

Nota de seguridad: `.env` se audita por nombres de variables, con valores redactados. Los binarios/assets se auditan por ruta, tipo y tamano.

## Resumen del proyecto

- Archivos auditados: 223
- Archivos de texto auditados: 200
- Binarios/assets auditados: 23
- Rutas HTTP detectadas: 408
- Variables de entorno referenciadas/declaradas: 72
- Tablas/RPC Supabase detectadas: 26
- URLs externas detectadas: 1134

## Seccion DUSK CODES

| Archivo | Linea | Referencia |
|---|---:|---|
| `dist/app.js` | 4225 | googleProxyUrl = envGoogleProxy === "direct" ? null : envGoogleProxy \|\| "https://google-proxy.duskcodes.com.ar"; |
| `dist/app.js` | 7376 | return "https://proxy.duskcodes.com.ar/v1"; |
| `dist/app.js` | 13569 | return res.redirect("https://duskcodes.com.ar/dashboard.html?metaStatus=success"); |
| `dist/app.js` | 13581 | <a href="https://duskcodes.com.ar/dashboard.html" style="background: #3182ce; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Volver al Dashboard</a> |
| `dist/app.js` | 13727 | { ...data, syncedBy: "duskcodes-master-router" } |
| `dist/backend/app.js` | 4121 | googleProxyUrl = envGoogleProxy === "direct" ? null : envGoogleProxy \|\| "https://google-proxy.duskcodes.com.ar"; |
| `dist/backend/app.js` | 6528 | return "https://proxy.duskcodes.com.ar/v1"; |
| `dist/backend/app.js` | 12352 | return res.redirect("https://duskcodes.com.ar/dashboard.html?metaStatus=success"); |
| `dist/backend/app.js` | 12364 | <a href="https://duskcodes.com.ar/dashboard.html" style="background: #3182ce; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Volver al Dashboard</a> |
| `dist/backend/app.js` | 12510 | { ...data, syncedBy: "duskcodes-master-router" } |
| `LICENSE` | 1 | Copyright (c) 2026 Hugo Pereyra - DuskCodes. Todos los derechos reservados. |
| `LICENSE` | 4 | Este software y su documentación son propiedad exclusiva de Hugo Pereyra (DuskCodes). |
| `LICENSE` | 12 | EN NINGÚN CASO EL AUTOR O DUSKCODES SERÁN RESPONSABLES POR CUALQUIER RECLAMACIÓN, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO TIPO, QUE SURJA DE, FUERA DE O EN CONEXIÓN CON EL SOFTWAR... |
| `LICENSE` | 16 | - duskcodes.pereyrahugo@gmail.com |
| `LICENSE` | 17 | - Web: duskcodes.com.ar |
| `LICENSE` | 20 | Todos los derechos reservados por DuskCodes. |
| `package.json` | 2 | "name": "bot_duskcodes_crm_api_meta", |
| `package.json` | 92 | "author": "DuskCodes - Pereyra Hugo", |
| `package-lock.json` | 2 | "name": "bot_duskcodes_crm_api_meta", |
| `package-lock.json` | 8 | "name": "bot_duskcodes_crm_api_meta", |
| `src/backend/apis/google/googleAuth.ts` | 8 | const googleProxyUrl = envGoogleProxy === 'direct' ? null : (envGoogleProxy \|\| "https://google-proxy.duskcodes.com.ar"); |
| `src/backend/apis/openai/openaiHelper.ts` | 15 | return "https://proxy.duskcodes.com.ar/v1"; |
| `src/backend/backoffice/routes/backoffice.routes.ts` | 2640 | return res.redirect("https://duskcodes.com.ar/dashboard.html?metaStatus=success"); |
| `src/backend/backoffice/routes/backoffice.routes.ts` | 2654 | <a href="https://duskcodes.com.ar/dashboard.html" style="background: #3182ce; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Volver al Dashboard</a> |
| `src/backend/backoffice/routes/backoffice.routes.ts` | 2839 | { ...data, syncedBy: 'duskcodes-master-router' } |
| `src/frontend/js/backoffice/backoffice.js` | 2155 | // Abrir DuskCodes con parámetros de redirección dinámica |
| `src/frontend/js/backoffice/backoffice.js` | 2156 | const url = new URL('https://duskcodes.com.ar/meta-auth'); |
| `src/frontend/js/meta/meta.view.js` | 665 | const url = new URL('https://duskcodes.com.ar/meta-auth'); |

## Variables de entorno

- `ADMIN_PASS`
- `ADMIN_USER`
- `AQUAVITA_SWS_BASE_URL`
- `AQUAVITA_SWS_PASSWORD`
- `AQUAVITA_SWS_USERNAME`
- `ASSISTANT_ID`
- `ASSISTANT_ID_IMG`
- `ASSISTANT_NAME`
- `BACKOFFICE_TOKEN`
- `BOT_NAME`
- `CASEPC_PASS`
- `CASEPC_USER`
- `CLIENT_SLUG`
- `CRM_VISIBLE`
- `DOCX_ID_UPDATE`
- `GANAMOSNET_PASS`
- `GANAMOSNET_USER`
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_MAPS_API_KEY`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_PROXY_URL`
- `ID_GRUPO_RESUMEN`
- `ID_GRUPO_RESUMEN_2`
- `META_ACCESS_TOKEN`
- `META_API_VERSION`
- `META_APP_ID`
- `META_APP_SECRET`
- `META_CONFIG_ID`
- `META_PHONE_ID`
- `META_VERIFY_TOKEN`
- `META_WABA_ID`
- `MP_ACCESS_TOKEN`
- `MP_APP_ID`
- `MP_PASS`
- `MP_TOKEN_TEST`
- `msjCierre`
- `msjSeguimiento1`
- `msjSeguimiento2`
- `msjSeguimiento3`
- `OPENAI_ADMIN_API_KEY`
- `OPENAI_API_KEY`
- `OPENAI_API_KEY_IMG`
- `OPENAI_API_KEY_TOOLS`
- `OPENAI_BASE_URL`
- `PORT`
- `PROJECT_ID`
- `PROJECT_NAME`
- `PROJECT_URL`
- `RAILWAY_ENVIRONMENT_ID`
- `RAILWAY_PROJECT_ID`
- `RAILWAY_PROJECT_NAME`
- `RAILWAY_PUBLIC_DOMAIN`
- `RAILWAY_SERVICE_ID`
- `RAILWAY_SERVICE_NAME`
- `RAILWAY_STATIC_URL`
- `RAILWAY_TOKEN`
- `SELENIUM_HEADLESS`
- `SHEET_ID_RESUMEN`
- `SHEET_ID_UPDATE`
- `SHEET_RESUMEN_RANGE`
- `STORAGE_MODE`
- `SUPABASE_KEY`
- `SUPABASE_URL`
- `SWS_BASE_URL`
- `SWS_PASSWORD`
- `SWS_USERNAME`
- `SYSTEM_CONFIG_VISIBLE`
- `timeOutCierre`
- `timeOutSeguimiento2`
- `timeOutSeguimiento3`
- `VECTOR_STORE_ID`

## Rutas HTTP detectadas

- `app.GET /favicon.ico` -> `dist/app.js:11427`
- `app.GET /app.js` -> `dist/app.js:11442`
- `app.USE /js` -> `dist/app.js:11445`
- `app.USE /style` -> `dist/app.js:11446`
- `app.USE /assets` -> `dist/app.js:11447`
- `app.USE /assets` -> `dist/app.js:11448`
- `app.USE /vendor/toast` -> `dist/app.js:11449`
- `app.USE /vendor/fontawesome` -> `dist/app.js:11450`
- `app.USE /uploads` -> `dist/app.js:11451`
- `app.USE /temp` -> `dist/app.js:11452`
- `app.USE /app/temp` -> `dist/app.js:11453`
- `app.USE /tmp` -> `dist/app.js:11454`
- `app.USE /app/tmp` -> `dist/app.js:11455`
- `app.GET /qr.png` -> `dist/app.js:11456`
- `app.GET /bot.groups.qr.png` -> `dist/app.js:11477`
- `app.POST /api/backoffice/log-error` -> `dist/app.js:12014`
- `app.POST /api/backoffice/auth` -> `dist/app.js:12022`
- `app.GET /api/backoffice/me` -> `dist/app.js:12058`
- `app.GET /api/backoffice/users` -> `dist/app.js:12080`
- `app.POST /api/backoffice/users` -> `dist/app.js:12084`
- `app.PUT /api/backoffice/users/:id` -> `dist/app.js:12092`
- `app.DELETE /api/backoffice/users/:id` -> `dist/app.js:12101`
- `app.POST /api/backoffice/chat/assign` -> `dist/app.js:12109`
- `app.GET /api/backoffice/chats` -> `dist/app.js:12114`
- `app.DELETE /api/backoffice/chats/vaciar` -> `dist/app.js:12125`
- `app.GET /api/backoffice/notifications/summary` -> `dist/app.js:12143`
- `app.GET /api/backoffice/chats/import-template` -> `dist/app.js:12213`
- `app.GET /api/backoffice/chats/:id` -> `dist/app.js:12230`
- `app.POST /api/backoffice/chats/import` -> `dist/app.js:12241`
- `app.GET /api/backoffice/quick-messages` -> `dist/app.js:12244`
- `app.POST /api/backoffice/quick-messages` -> `dist/app.js:12253`
- `app.DELETE /api/backoffice/quick-messages/:id` -> `dist/app.js:12266`
- `app.GET /api/backoffice/messages/:chatId` -> `dist/app.js:12276`
- `app.GET /api/backoffice/profile-pic/:chatId` -> `dist/app.js:12283`
- `app.POST /api/backoffice/whatsapp/sync-contacts` -> `dist/app.js:12327`
- `app.POST /api/backoffice/send-message` -> `dist/app.js:12518`
- `app.DELETE /api/backoffice/messages/:chatId/:messageId` -> `dist/app.js:12532`
- `app.POST /api/backoffice/forward-message` -> `dist/app.js:12583`
- `app.POST /api/backoffice/baileys/start` -> `dist/app.js:12668`
- `app.POST /api/backoffice/toggle-bot` -> `dist/app.js:12715`
- `app.GET /api/backoffice/tags` -> `dist/app.js:12729`
- `app.GET /api/backoffice/chat/:id/contact` -> `dist/app.js:12734`
- `app.PUT /api/backoffice/chat/:id/contact` -> `dist/app.js:12747`
- `app.POST /api/backoffice/chat/manual-lead` -> `dist/app.js:12771`
- `app.POST /api/backoffice/tags` -> `dist/app.js:12782`
- `app.PUT /api/backoffice/tags/:id` -> `dist/app.js:12787`
- `app.DELETE /api/backoffice/tags/:id` -> `dist/app.js:12792`
- `app.POST /api/backoffice/chats/:chatId/tags` -> `dist/app.js:12796`
- `app.DELETE /api/backoffice/chats/:chatId/tags/:tagId` -> `dist/app.js:12801`
- `app.GET /api/backoffice/tickets/pending-count` -> `dist/app.js:12805`
- `app.GET /api/backoffice/tickets` -> `dist/app.js:12811`
- `app.POST /api/backoffice/tickets` -> `dist/app.js:12822`
- `app.PUT /api/backoffice/crm/ticket/:id` -> `dist/app.js:12831`
- `app.PUT /api/backoffice/tickets/:id` -> `dist/app.js:12840`
- `app.DELETE /api/backoffice/tickets/:id` -> `dist/app.js:12849`
- `app.GET /api/backoffice/crm/config` -> `dist/app.js:12859`
- `app.POST /api/backoffice/crm/config` -> `dist/app.js:12869`
- `app.GET /api/backoffice/crm/tasks` -> `dist/app.js:12879`
- `app.GET /api/backoffice/leads` -> `dist/app.js:12888`
- `app.GET /api/backoffice/whatsapp/config` -> `dist/app.js:12895`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `dist/app.js:12916`
- `app.GET /api/backoffice/whatsapp/templates` -> `dist/app.js:12971`
- `app.GET /api/backoffice/whatsapp/library-templates` -> `dist/app.js:12985`
- `app.POST /api/backoffice/whatsapp/templates` -> `dist/app.js:13002`
- `app.POST /api/backoffice/whatsapp/register-step-1` -> `dist/app.js:13030`
- `app.POST /api/backoffice/whatsapp/register-step-2` -> `dist/app.js:13067`
- `app.GET /api/backoffice/whatsapp/template-excel/:templateName` -> `dist/app.js:13091`
- `app.POST /api/backoffice/whatsapp/send-bulk-template` -> `dist/app.js:13214`
- `app.POST /api/backoffice/whatsapp/send-quick-template` -> `dist/app.js:13218`
- `app.GET /api/backoffice/chats/import-template` -> `dist/app.js:13367`
- `app.GET /api/backoffice/whatsapp/onboard-callback` -> `dist/app.js:13382`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `dist/app.js:13587`
- `app.POST /api/backoffice/whatsapp/sync-ids` -> `dist/app.js:13610`
- `app.POST /api/backoffice/whatsapp/unlink-meta` -> `dist/app.js:13654`
- `app.POST /api/backoffice/whatsapp/onboard` -> `dist/app.js:13708`
- `app.POST /api/backoffice/sync-assistant-prompt` -> `dist/app.js:13734`
- `app.GET /api/backoffice/get-setting` -> `dist/app.js:13759`
- `app.POST /api/backoffice/save-setting` -> `dist/app.js:13770`
- `app.GET /api/backoffice/mercadopago/status` -> `dist/app.js:13789`
- `app.GET /api/backoffice/mercadopago/accounts` -> `dist/app.js:13808`
- `app.POST /api/backoffice/mercadopago/accounts/activate` -> `dist/app.js:13818`
- `app.POST /api/backoffice/mercadopago/accounts/delete` -> `dist/app.js:13834`
- `app.GET /api/backoffice/mercadopago/auth-url` -> `dist/app.js:13876`
- `app.GET /api/backoffice/mercadopago/callback` -> `dist/app.js:13905`
- `app.GET /api/mercadopago/callback` -> `dist/app.js:14009`
- `app.GET /api/clientes/mercadopago/webhook` -> `dist/app.js:14142`
- `app.POST /api/clientes/mercadopago/webhook` -> `dist/app.js:14146`
- `app.POST /api/backoffice/mercadopago/disconnect` -> `dist/app.js:14251`
- `app.POST /api/backoffice/mercadopago/create-link` -> `dist/app.js:14264`
- `app.POST /api/backoffice/whatsapp/sync-smb` -> `dist/app.js:14278`
- `app.GET whatsappProvider` -> `dist/app.js:14284`
- `app.GET /api/backoffice/whatsapp/groups` -> `dist/app.js:14308`
- `app.GET /api/backoffice/crm/tasks` -> `dist/app.js:14340`
- `app.POST /api/backoffice/crm/update-lead` -> `dist/app.js:14349`
- `app.POST /api/backoffice/chat/assign` -> `dist/app.js:14363`
- `app.GET /api/backoffice/crm/config` -> `dist/app.js:14383`
- `app.POST /api/backoffice/crm/config` -> `dist/app.js:14392`
- `app.GET /api/backoffice/config` -> `dist/app.js:14402`
- `app.POST /api/backoffice/save-settings-bulk` -> `dist/app.js:14433`
- `app.GET /api/backoffice/settings` -> `dist/app.js:14463`
- `app.GET /api/backoffice/get-prompt` -> `dist/app.js:14484`
- `app.GET /api/backoffice/openai/models` -> `dist/app.js:14500`
- `app.POST /api/backoffice/update-prompt` -> `dist/app.js:14528`
- `app.GET /api/backoffice/get-docs` -> `dist/app.js:14565`
- `app.GET /api/backoffice/blacklist/status` -> `dist/app.js:14591`
- `app.POST /api/backoffice/blacklist/activate` -> `dist/app.js:14599`
- `app.POST /api/backoffice/blacklist/deactivate` -> `dist/app.js:14610`
- `app.GET /api/backoffice/blacklist` -> `dist/app.js:14623`
- `app.POST /api/backoffice/blacklist` -> `dist/app.js:14645`
- `app.DELETE /api/backoffice/blacklist/:chatId` -> `dist/app.js:14664`
- `app.GET /api/backoffice/blacklist/check/:chatId` -> `dist/app.js:14674`
- `app.POST /api/backoffice/blacklist/toggle/:chatId` -> `dist/app.js:14683`
- `app.GET /api/backoffice/notifications/status` -> `dist/app.js:14707`
- `app.POST /api/backoffice/notifications/activate` -> `dist/app.js:14714`
- `app.POST /api/backoffice/notifications/deactivate` -> `dist/app.js:14725`
- `app.GET /api/backoffice/reportes/status` -> `dist/app.js:14746`
- `app.POST /api/backoffice/reportes/activate` -> `dist/app.js:14754`
- `app.POST /api/backoffice/reportes/deactivate` -> `dist/app.js:14765`
- `app.GET /api/backoffice/reportes` -> `dist/app.js:14776`
- `app.GET /api/backoffice/waba-groups/status` -> `dist/app.js:14788`
- `app.POST /api/backoffice/waba-groups/status` -> `dist/app.js:14797`
- `app.GET /api/backoffice/waba-groups` -> `dist/app.js:14807`
- `app.POST /api/backoffice/waba-groups` -> `dist/app.js:14816`
- `app.DELETE /api/backoffice/waba-groups/:id` -> `dist/app.js:15030`
- `app.POST /api/backoffice/chat/read/:chatId` -> `dist/app.js:15078`
- `app.GET /api/dashboard/openai-usage` -> `dist/app.js:15211`
- `app.GET /api/dashboard/stats` -> `dist/app.js:15235`
- `app.POST /webchat-api` -> `dist/app.js:15434`
- `app.POST /api/restart-bot` -> `dist/app.js:15609`
- `app.GET /api/variables` -> `dist/app.js:15628`
- `app.POST /api/update-variables` -> `dist/app.js:15641`
- `app.POST /api/v1/auth` -> `dist/app.js:16773`
- `app.POST /api/v1/send-template` -> `dist/app.js:16826`
- `app.GET /health` -> `dist/app.js:17963`
- `app.GET /api/test-proxy` -> `dist/app.js:17964`
- `app.GET /api/assistant-name` -> `dist/app.js:18005`
- `app.GET /api/dashboard-status` -> `dist/app.js:18020`
- `app.POST /api/delete-session` -> `dist/app.js:18021`
- `app.GET /favicon.ico` -> `dist/backend/app.js:10290`
- `app.USE /js` -> `dist/backend/app.js:10305`
- `app.USE /style` -> `dist/backend/app.js:10306`
- `app.USE /assets` -> `dist/backend/app.js:10307`
- `app.USE /assets` -> `dist/backend/app.js:10308`
- `app.USE /vendor/toast` -> `dist/backend/app.js:10309`
- `app.USE /vendor/fontawesome` -> `dist/backend/app.js:10310`
- `app.USE /uploads` -> `dist/backend/app.js:10311`
- `app.USE /temp` -> `dist/backend/app.js:10312`
- `app.USE /app/temp` -> `dist/backend/app.js:10313`
- `app.USE /tmp` -> `dist/backend/app.js:10314`
- `app.USE /app/tmp` -> `dist/backend/app.js:10315`
- `app.GET /qr.png` -> `dist/backend/app.js:10316`
- `app.GET /bot.groups.qr.png` -> `dist/backend/app.js:10336`
- `app.POST /api/backoffice/log-error` -> `dist/backend/app.js:10838`
- `app.POST /api/backoffice/auth` -> `dist/backend/app.js:10846`
- `app.GET /api/backoffice/users` -> `dist/backend/app.js:10882`
- `app.POST /api/backoffice/users` -> `dist/backend/app.js:10886`
- `app.PUT /api/backoffice/users/:id` -> `dist/backend/app.js:10894`
- `app.DELETE /api/backoffice/users/:id` -> `dist/backend/app.js:10903`
- `app.POST /api/backoffice/chat/assign` -> `dist/backend/app.js:10911`
- `app.GET /api/backoffice/chats` -> `dist/backend/app.js:10916`
- `app.GET /api/backoffice/notifications/summary` -> `dist/backend/app.js:10927`
- `app.GET /api/backoffice/chats/import-template` -> `dist/backend/app.js:10997`
- `app.GET /api/backoffice/chats/:id` -> `dist/backend/app.js:11014`
- `app.POST /api/backoffice/chats/import` -> `dist/backend/app.js:11025`
- `app.GET /api/backoffice/quick-messages` -> `dist/backend/app.js:11028`
- `app.POST /api/backoffice/quick-messages` -> `dist/backend/app.js:11037`
- `app.DELETE /api/backoffice/quick-messages/:id` -> `dist/backend/app.js:11050`
- `app.GET /api/backoffice/messages/:chatId` -> `dist/backend/app.js:11060`
- `app.GET /api/backoffice/profile-pic/:chatId` -> `dist/backend/app.js:11067`
- `app.POST /api/backoffice/whatsapp/sync-contacts` -> `dist/backend/app.js:11111`
- `app.POST /api/backoffice/send-message` -> `dist/backend/app.js:11302`
- `app.DELETE /api/backoffice/messages/:chatId/:messageId` -> `dist/backend/app.js:11316`
- `app.POST /api/backoffice/forward-message` -> `dist/backend/app.js:11367`
- `app.POST /api/backoffice/baileys/start` -> `dist/backend/app.js:11452`
- `app.POST /api/backoffice/toggle-bot` -> `dist/backend/app.js:11499`
- `app.GET /api/backoffice/tags` -> `dist/backend/app.js:11513`
- `app.GET /api/backoffice/chat/:id/contact` -> `dist/backend/app.js:11518`
- `app.PUT /api/backoffice/chat/:id/contact` -> `dist/backend/app.js:11531`
- `app.POST /api/backoffice/chat/manual-lead` -> `dist/backend/app.js:11554`
- `app.POST /api/backoffice/tags` -> `dist/backend/app.js:11565`
- `app.PUT /api/backoffice/tags/:id` -> `dist/backend/app.js:11570`
- `app.DELETE /api/backoffice/tags/:id` -> `dist/backend/app.js:11575`
- `app.POST /api/backoffice/chats/:chatId/tags` -> `dist/backend/app.js:11579`
- `app.DELETE /api/backoffice/chats/:chatId/tags/:tagId` -> `dist/backend/app.js:11584`
- `app.GET /api/backoffice/tickets/pending-count` -> `dist/backend/app.js:11588`
- `app.GET /api/backoffice/tickets` -> `dist/backend/app.js:11594`
- `app.POST /api/backoffice/tickets` -> `dist/backend/app.js:11605`
- `app.PUT /api/backoffice/crm/ticket/:id` -> `dist/backend/app.js:11614`
- `app.PUT /api/backoffice/tickets/:id` -> `dist/backend/app.js:11623`
- `app.DELETE /api/backoffice/tickets/:id` -> `dist/backend/app.js:11632`
- `app.GET /api/backoffice/crm/config` -> `dist/backend/app.js:11642`
- `app.POST /api/backoffice/crm/config` -> `dist/backend/app.js:11652`
- `app.GET /api/backoffice/crm/tasks` -> `dist/backend/app.js:11662`
- `app.GET /api/backoffice/leads` -> `dist/backend/app.js:11671`
- `app.GET /api/backoffice/whatsapp/config` -> `dist/backend/app.js:11678`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `dist/backend/app.js:11699`
- `app.GET /api/backoffice/whatsapp/templates` -> `dist/backend/app.js:11754`
- `app.GET /api/backoffice/whatsapp/library-templates` -> `dist/backend/app.js:11768`
- `app.POST /api/backoffice/whatsapp/templates` -> `dist/backend/app.js:11785`
- `app.POST /api/backoffice/whatsapp/register-step-1` -> `dist/backend/app.js:11813`
- `app.POST /api/backoffice/whatsapp/register-step-2` -> `dist/backend/app.js:11850`
- `app.GET /api/backoffice/whatsapp/template-excel/:templateName` -> `dist/backend/app.js:11874`
- `app.POST /api/backoffice/whatsapp/send-bulk-template` -> `dist/backend/app.js:11997`
- `app.POST /api/backoffice/whatsapp/send-quick-template` -> `dist/backend/app.js:12001`
- `app.GET /api/backoffice/chats/import-template` -> `dist/backend/app.js:12150`
- `app.GET /api/backoffice/whatsapp/onboard-callback` -> `dist/backend/app.js:12165`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `dist/backend/app.js:12370`
- `app.POST /api/backoffice/whatsapp/sync-ids` -> `dist/backend/app.js:12393`
- `app.POST /api/backoffice/whatsapp/unlink-meta` -> `dist/backend/app.js:12437`
- `app.POST /api/backoffice/whatsapp/onboard` -> `dist/backend/app.js:12491`
- `app.POST /api/backoffice/sync-assistant-prompt` -> `dist/backend/app.js:12517`
- `app.GET /api/backoffice/get-setting` -> `dist/backend/app.js:12542`
- `app.POST /api/backoffice/save-setting` -> `dist/backend/app.js:12553`
- `app.GET /api/backoffice/mercadopago/status` -> `dist/backend/app.js:12572`
- `app.GET /api/backoffice/mercadopago/auth-url` -> `dist/backend/app.js:12622`
- `app.GET /api/backoffice/mercadopago/callback` -> `dist/backend/app.js:12638`
- `app.GET /api/mercadopago/callback` -> `dist/backend/app.js:12705`
- `app.GET /api/clientes/mercadopago/webhook` -> `dist/backend/app.js:12838`
- `app.POST /api/clientes/mercadopago/webhook` -> `dist/backend/app.js:12842`
- `app.POST /api/backoffice/mercadopago/disconnect` -> `dist/backend/app.js:12947`
- `app.POST /api/backoffice/mercadopago/create-link` -> `dist/backend/app.js:12960`
- `app.POST /api/backoffice/whatsapp/sync-smb` -> `dist/backend/app.js:12974`
- `app.GET whatsappProvider` -> `dist/backend/app.js:12980`
- `app.GET /api/backoffice/whatsapp/groups` -> `dist/backend/app.js:13004`
- `app.GET /api/backoffice/crm/tasks` -> `dist/backend/app.js:13036`
- `app.POST /api/backoffice/crm/update-lead` -> `dist/backend/app.js:13045`
- `app.POST /api/backoffice/chat/assign` -> `dist/backend/app.js:13059`
- `app.GET /api/backoffice/crm/config` -> `dist/backend/app.js:13079`
- `app.POST /api/backoffice/crm/config` -> `dist/backend/app.js:13088`
- `app.GET /api/backoffice/config` -> `dist/backend/app.js:13098`
- `app.POST /api/backoffice/save-settings-bulk` -> `dist/backend/app.js:13129`
- `app.GET /api/backoffice/settings` -> `dist/backend/app.js:13159`
- `app.GET /api/backoffice/get-prompt` -> `dist/backend/app.js:13180`
- `app.GET /api/backoffice/openai/models` -> `dist/backend/app.js:13196`
- `app.POST /api/backoffice/update-prompt` -> `dist/backend/app.js:13224`
- `app.GET /api/backoffice/get-docs` -> `dist/backend/app.js:13261`
- `app.GET /api/backoffice/blacklist/status` -> `dist/backend/app.js:13287`
- `app.POST /api/backoffice/blacklist/activate` -> `dist/backend/app.js:13295`
- `app.POST /api/backoffice/blacklist/deactivate` -> `dist/backend/app.js:13306`
- `app.GET /api/backoffice/blacklist` -> `dist/backend/app.js:13319`
- `app.POST /api/backoffice/blacklist` -> `dist/backend/app.js:13341`
- `app.DELETE /api/backoffice/blacklist/:chatId` -> `dist/backend/app.js:13360`
- `app.GET /api/backoffice/blacklist/check/:chatId` -> `dist/backend/app.js:13370`
- `app.POST /api/backoffice/blacklist/toggle/:chatId` -> `dist/backend/app.js:13379`
- `app.GET /api/backoffice/notifications/status` -> `dist/backend/app.js:13403`
- `app.POST /api/backoffice/notifications/activate` -> `dist/backend/app.js:13410`
- `app.POST /api/backoffice/notifications/deactivate` -> `dist/backend/app.js:13421`
- `app.GET /api/backoffice/reportes/status` -> `dist/backend/app.js:13442`
- `app.POST /api/backoffice/reportes/activate` -> `dist/backend/app.js:13450`
- `app.POST /api/backoffice/reportes/deactivate` -> `dist/backend/app.js:13461`
- `app.GET /api/backoffice/reportes` -> `dist/backend/app.js:13472`
- `app.GET /api/backoffice/waba-groups/status` -> `dist/backend/app.js:13484`
- `app.POST /api/backoffice/waba-groups/status` -> `dist/backend/app.js:13493`
- `app.GET /api/backoffice/waba-groups` -> `dist/backend/app.js:13503`
- `app.POST /api/backoffice/waba-groups` -> `dist/backend/app.js:13512`
- `app.DELETE /api/backoffice/waba-groups/:id` -> `dist/backend/app.js:13726`
- `app.POST /api/backoffice/chat/read/:chatId` -> `dist/backend/app.js:13774`
- `app.GET /api/dashboard/openai-usage` -> `dist/backend/app.js:13907`
- `app.GET /api/dashboard/stats` -> `dist/backend/app.js:13931`
- `app.POST /webchat-api` -> `dist/backend/app.js:14019`
- `app.POST /api/restart-bot` -> `dist/backend/app.js:14282`
- `app.GET /api/variables` -> `dist/backend/app.js:14301`
- `app.POST /api/update-variables` -> `dist/backend/app.js:14314`
- `app.POST /api/v1/auth` -> `dist/backend/app.js:15586`
- `app.POST /api/v1/send-template` -> `dist/backend/app.js:15639`
- `app.GET /health` -> `dist/backend/app.js:16794`
- `app.GET /api/test-proxy` -> `dist/backend/app.js:16795`
- `app.GET /api/assistant-name` -> `dist/backend/app.js:16836`
- `app.GET /api/dashboard-status` -> `dist/backend/app.js:16837`
- `app.POST /api/delete-session` -> `dist/backend/app.js:16838`
- `app.GET /health` -> `src/app.ts:413`
- `app.GET /api/test-proxy` -> `src/app.ts:414`
- `app.GET /api/assistant-name` -> `src/app.ts:459`
- `app.GET /api/dashboard-status` -> `src/app.ts:481`
- `app.POST /api/delete-session` -> `src/app.ts:484`
- `app.POST /api/v1/auth` -> `src/backend/apis/external/external_api.routes.ts:42`
- `app.POST /api/v1/send-template` -> `src/backend/apis/external/external_api.routes.ts:121`
- `app.POST /api/restart-bot` -> `src/backend/apis/railway/railway.routes.ts:9`
- `app.GET /api/variables` -> `src/backend/apis/railway/railway.routes.ts:34`
- `app.POST /api/update-variables` -> `src/backend/apis/railway/railway.routes.ts:48`
- `app.POST /api/backoffice/log-error` -> `src/backend/backoffice/routes/backoffice.routes.ts:668`
- `app.POST /api/backoffice/auth` -> `src/backend/backoffice/routes/backoffice.routes.ts:678`
- `app.GET /api/backoffice/me` -> `src/backend/backoffice/routes/backoffice.routes.ts:722`
- `app.GET /api/backoffice/users` -> `src/backend/backoffice/routes/backoffice.routes.ts:748`
- `app.POST /api/backoffice/users` -> `src/backend/backoffice/routes/backoffice.routes.ts:753`
- `app.PUT /api/backoffice/users/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:762`
- `app.DELETE /api/backoffice/users/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:772`
- `app.POST /api/backoffice/chat/assign` -> `src/backend/backoffice/routes/backoffice.routes.ts:781`
- `app.GET /api/backoffice/chats` -> `src/backend/backoffice/routes/backoffice.routes.ts:789`
- `app.DELETE /api/backoffice/chats/vaciar` -> `src/backend/backoffice/routes/backoffice.routes.ts:804`
- `app.GET /api/backoffice/notifications/summary` -> `src/backend/backoffice/routes/backoffice.routes.ts:825`
- `app.GET /api/backoffice/chats/import-template` -> `src/backend/backoffice/routes/backoffice.routes.ts:951`
- `app.GET /api/backoffice/chats/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:970`
- `app.POST /api/backoffice/chats/import` -> `src/backend/backoffice/routes/backoffice.routes.ts:982`
- `app.GET /api/backoffice/quick-messages` -> `src/backend/backoffice/routes/backoffice.routes.ts:989`
- `app.POST /api/backoffice/quick-messages` -> `src/backend/backoffice/routes/backoffice.routes.ts:999`
- `app.DELETE /api/backoffice/quick-messages/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1013`
- `app.GET /api/backoffice/messages/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:1024`
- `app.GET /api/backoffice/profile-pic/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:1032`
- `app.POST /api/backoffice/whatsapp/sync-contacts` -> `src/backend/backoffice/routes/backoffice.routes.ts:1091`
- `app.POST /api/backoffice/send-message` -> `src/backend/backoffice/routes/backoffice.routes.ts:1357`
- `app.DELETE /api/backoffice/messages/:chatId/:messageId` -> `src/backend/backoffice/routes/backoffice.routes.ts:1375`
- `app.POST /api/backoffice/forward-message` -> `src/backend/backoffice/routes/backoffice.routes.ts:1441`
- `app.POST /api/backoffice/baileys/start` -> `src/backend/backoffice/routes/backoffice.routes.ts:1550`
- `app.POST /api/backoffice/toggle-bot` -> `src/backend/backoffice/routes/backoffice.routes.ts:1607`
- `app.GET /api/backoffice/tags` -> `src/backend/backoffice/routes/backoffice.routes.ts:1625`
- `app.GET /api/backoffice/chat/:id/contact` -> `src/backend/backoffice/routes/backoffice.routes.ts:1631`
- `app.PUT /api/backoffice/chat/:id/contact` -> `src/backend/backoffice/routes/backoffice.routes.ts:1645`
- `app.POST /api/backoffice/chat/manual-lead` -> `src/backend/backoffice/routes/backoffice.routes.ts:1663`
- `app.POST /api/backoffice/tags` -> `src/backend/backoffice/routes/backoffice.routes.ts:1675`
- `app.PUT /api/backoffice/tags/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1681`
- `app.DELETE /api/backoffice/tags/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1687`
- `app.POST /api/backoffice/chats/:chatId/tags` -> `src/backend/backoffice/routes/backoffice.routes.ts:1692`
- `app.DELETE /api/backoffice/chats/:chatId/tags/:tagId` -> `src/backend/backoffice/routes/backoffice.routes.ts:1698`
- `app.GET /api/backoffice/tickets/pending-count` -> `src/backend/backoffice/routes/backoffice.routes.ts:1705`
- `app.GET /api/backoffice/tickets` -> `src/backend/backoffice/routes/backoffice.routes.ts:1712`
- `app.POST /api/backoffice/tickets` -> `src/backend/backoffice/routes/backoffice.routes.ts:1724`
- `app.PUT /api/backoffice/crm/ticket/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1734`
- `app.PUT /api/backoffice/tickets/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1744`
- `app.DELETE /api/backoffice/tickets/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:1754`
- `app.GET /api/backoffice/crm/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:1767`
- `app.POST /api/backoffice/crm/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:1778`
- `app.GET /api/backoffice/crm/tasks` -> `src/backend/backoffice/routes/backoffice.routes.ts:1789`
- `app.GET /api/backoffice/leads` -> `src/backend/backoffice/routes/backoffice.routes.ts:1799`
- `app.GET /api/backoffice/whatsapp/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:1809`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `src/backend/backoffice/routes/backoffice.routes.ts:1837`
- `app.GET /api/backoffice/whatsapp/templates` -> `src/backend/backoffice/routes/backoffice.routes.ts:1903`
- `app.GET /api/backoffice/whatsapp/library-templates` -> `src/backend/backoffice/routes/backoffice.routes.ts:1920`
- `app.POST /api/backoffice/whatsapp/templates` -> `src/backend/backoffice/routes/backoffice.routes.ts:1940`
- `app.POST /api/backoffice/whatsapp/register-step-1` -> `src/backend/backoffice/routes/backoffice.routes.ts:1975`
- `app.POST /api/backoffice/whatsapp/register-step-2` -> `src/backend/backoffice/routes/backoffice.routes.ts:2027`
- `app.GET /api/backoffice/whatsapp/template-excel/:templateName` -> `src/backend/backoffice/routes/backoffice.routes.ts:2060`
- `app.POST /api/backoffice/whatsapp/send-bulk-template` -> `src/backend/backoffice/routes/backoffice.routes.ts:2217`
- `app.POST /api/backoffice/whatsapp/send-quick-template` -> `src/backend/backoffice/routes/backoffice.routes.ts:2222`
- `app.GET /api/backoffice/chats/import-template` -> `src/backend/backoffice/routes/backoffice.routes.ts:2403`
- `app.GET /api/backoffice/whatsapp/onboard-callback` -> `src/backend/backoffice/routes/backoffice.routes.ts:2423`
- `app.POST /api/backoffice/whatsapp/sync-manual` -> `src/backend/backoffice/routes/backoffice.routes.ts:2665`
- `app.POST /api/backoffice/whatsapp/sync-ids` -> `src/backend/backoffice/routes/backoffice.routes.ts:2695`
- `app.POST /api/backoffice/whatsapp/unlink-meta` -> `src/backend/backoffice/routes/backoffice.routes.ts:2748`
- `app.POST /api/backoffice/whatsapp/onboard` -> `src/backend/backoffice/routes/backoffice.routes.ts:2819`
- `app.POST /api/backoffice/sync-assistant-prompt` -> `src/backend/backoffice/routes/backoffice.routes.ts:2849`
- `app.GET /api/backoffice/get-setting` -> `src/backend/backoffice/routes/backoffice.routes.ts:2878`
- `app.POST /api/backoffice/save-setting` -> `src/backend/backoffice/routes/backoffice.routes.ts:2890`
- `app.GET /api/backoffice/mercadopago/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:2911`
- `app.GET /api/backoffice/mercadopago/accounts` -> `src/backend/backoffice/routes/backoffice.routes.ts:2939`
- `app.POST /api/backoffice/mercadopago/accounts/activate` -> `src/backend/backoffice/routes/backoffice.routes.ts:2955`
- `app.POST /api/backoffice/mercadopago/accounts/delete` -> `src/backend/backoffice/routes/backoffice.routes.ts:2986`
- `app.GET /api/backoffice/mercadopago/auth-url` -> `src/backend/backoffice/routes/backoffice.routes.ts:3061`
- `app.GET /api/backoffice/mercadopago/callback` -> `src/backend/backoffice/routes/backoffice.routes.ts:3101`
- `app.GET /api/mercadopago/callback` -> `src/backend/backoffice/routes/backoffice.routes.ts:3228`
- `app.GET /api/clientes/mercadopago/webhook` -> `src/backend/backoffice/routes/backoffice.routes.ts:3366`
- `app.POST /api/clientes/mercadopago/webhook` -> `src/backend/backoffice/routes/backoffice.routes.ts:3371`
- `app.POST /api/backoffice/mercadopago/disconnect` -> `src/backend/backoffice/routes/backoffice.routes.ts:3523`
- `app.POST /api/backoffice/mercadopago/create-link` -> `src/backend/backoffice/routes/backoffice.routes.ts:3545`
- `app.POST /api/backoffice/whatsapp/sync-smb` -> `src/backend/backoffice/routes/backoffice.routes.ts:3565`
- `app.GET whatsappProvider` -> `src/backend/backoffice/routes/backoffice.routes.ts:3573`
- `app.GET /api/backoffice/whatsapp/groups` -> `src/backend/backoffice/routes/backoffice.routes.ts:3601`
- `app.GET /api/backoffice/crm/tasks` -> `src/backend/backoffice/routes/backoffice.routes.ts:3643`
- `app.POST /api/backoffice/crm/update-lead` -> `src/backend/backoffice/routes/backoffice.routes.ts:3653`
- `app.POST /api/backoffice/chat/assign` -> `src/backend/backoffice/routes/backoffice.routes.ts:3678`
- `app.GET /api/backoffice/crm/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:3710`
- `app.POST /api/backoffice/crm/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:3720`
- `app.GET /api/backoffice/config` -> `src/backend/backoffice/routes/backoffice.routes.ts:3737`
- `app.POST /api/backoffice/save-settings-bulk` -> `src/backend/backoffice/routes/backoffice.routes.ts:3781`
- `app.GET /api/backoffice/settings` -> `src/backend/backoffice/routes/backoffice.routes.ts:3818`
- `app.GET /api/backoffice/get-prompt` -> `src/backend/backoffice/routes/backoffice.routes.ts:3844`
- `app.GET /api/backoffice/openai/models` -> `src/backend/backoffice/routes/backoffice.routes.ts:3863`
- `app.POST /api/backoffice/update-prompt` -> `src/backend/backoffice/routes/backoffice.routes.ts:3915`
- `app.GET /api/backoffice/get-docs` -> `src/backend/backoffice/routes/backoffice.routes.ts:3966`
- `app.GET /api/backoffice/blacklist/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:4001`
- `app.POST /api/backoffice/blacklist/activate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4011`
- `app.POST /api/backoffice/blacklist/deactivate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4027`
- `app.GET /api/backoffice/blacklist` -> `src/backend/backoffice/routes/backoffice.routes.ts:4049`
- `app.POST /api/backoffice/blacklist` -> `src/backend/backoffice/routes/backoffice.routes.ts:4080`
- `app.DELETE /api/backoffice/blacklist/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:4103`
- `app.GET /api/backoffice/blacklist/check/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:4119`
- `app.POST /api/backoffice/blacklist/toggle/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:4135`
- `app.GET /api/backoffice/notifications/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:4174`
- `app.POST /api/backoffice/notifications/activate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4183`
- `app.POST /api/backoffice/notifications/deactivate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4198`
- `app.GET /api/backoffice/reportes/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:4234`
- `app.POST /api/backoffice/reportes/activate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4244`
- `app.POST /api/backoffice/reportes/deactivate` -> `src/backend/backoffice/routes/backoffice.routes.ts:4259`
- `app.GET /api/backoffice/reportes` -> `src/backend/backoffice/routes/backoffice.routes.ts:4274`
- `app.GET /api/backoffice/waba-groups/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:4294`
- `app.POST /api/backoffice/waba-groups/status` -> `src/backend/backoffice/routes/backoffice.routes.ts:4305`
- `app.GET /api/backoffice/waba-groups` -> `src/backend/backoffice/routes/backoffice.routes.ts:4317`
- `app.POST /api/backoffice/waba-groups` -> `src/backend/backoffice/routes/backoffice.routes.ts:4328`
- `app.DELETE /api/backoffice/waba-groups/:id` -> `src/backend/backoffice/routes/backoffice.routes.ts:4585`
- `app.POST /api/backoffice/chat/read/:chatId` -> `src/backend/backoffice/routes/backoffice.routes.ts:4641`
- `app.GET /api/dashboard/openai-usage` -> `src/backend/backoffice/routes/dashboard.routes.ts:55`
- `app.GET /api/dashboard/stats` -> `src/backend/backoffice/routes/dashboard.routes.ts:84`
- `app.GET /favicon.ico` -> `src/backend/backoffice/routes/static.routes.ts:173`
- `app.GET /app.js` -> `src/backend/backoffice/routes/static.routes.ts:189`
- `app.USE /js` -> `src/backend/backoffice/routes/static.routes.ts:192`
- `app.USE /style` -> `src/backend/backoffice/routes/static.routes.ts:193`
- `app.USE /assets` -> `src/backend/backoffice/routes/static.routes.ts:194`
- `app.USE /assets` -> `src/backend/backoffice/routes/static.routes.ts:195`
- `app.USE /vendor/toast` -> `src/backend/backoffice/routes/static.routes.ts:197`
- `app.USE /vendor/fontawesome` -> `src/backend/backoffice/routes/static.routes.ts:198`
- `app.USE /uploads` -> `src/backend/backoffice/routes/static.routes.ts:199`
- `app.USE /temp` -> `src/backend/backoffice/routes/static.routes.ts:200`
- `app.USE /app/temp` -> `src/backend/backoffice/routes/static.routes.ts:201`
- `app.USE /tmp` -> `src/backend/backoffice/routes/static.routes.ts:202`
- `app.USE /app/tmp` -> `src/backend/backoffice/routes/static.routes.ts:203`
- `app.GET /qr.png` -> `src/backend/backoffice/routes/static.routes.ts:206`
- `app.GET /bot.groups.qr.png` -> `src/backend/backoffice/routes/static.routes.ts:232`
- `app.POST /webchat-api` -> `src/backend/backoffice/webchat/routes/webchat.routes.ts:15`

## Tablas y RPC Supabase detectadas

- `api_logs`
- `api_tokens`
- `auditoria_acciones`
- `blacklist`
- `chat_tags`
- `chats`
- `clientes`
- `mercadopago_acount_user`
- `mercadopago_payments_clients`
- `mercadopago_user_routoing`
- `messages`
- `meta_onboarding`
- `proyectos_railway`
- `quick_messages`
- `routing_table`
- `rpc:delete_whatsapp_session`
- `rpc:exec_sql`
- `rpc:get_whatsapp_session`
- `rpc:save_whatsapp_session`
- `settings`
- `system_logs`
- `tags`
- `tickets`
- `users`
- `waba_report_groups`
- `whatsapp_sessions`

## URLs externas detectadas

- `http://${host}`
- `http://dl.google.com/linux/chrome/deb/`
- `http://localhost:${port}`
- `http://localhost:${PORT}`
- `http://localhost:${PORT}\n`
- `http://localhost:${port}`]`
- `http://www.w3.org/2000/svg`
- `https://${baseUrl}`
- `https://${domain}`
- `https://${host}`
- `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
- `https://${publicDomain}`
- `https://${settingsData.value}`
- `https://admin.epcbet.net/index.php`
- `https://admin.epcbet.net/index.php?act=admin&area=login`
- `https://agents.ganamosnet.org`
- `https://agents.ganamosnet.org/`
- `https://agents.ganamosnet.org/user/create-player`
- `https://agents.ganamosnet.org/users/all`
- `https://api.imgur.com/3/image`
- `https://api.ipify.org?format=json`
- `https://api.mercadopago.com/oauth/token`
- `https://api.mercadopago.com/oauth/token/revoke`
- `https://api.mercadopago.com/users/me`
- `https://api.mercadopago.com/v1/payments/${paymentId}`
- `https://api.openai.com/v1/organization/costs`
- `https://api.sws.com/v1`
- `https://auth.mercadopago.com.ar/authorization?client_id=${appId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${projectId2}`
- `https://auth.mercadopago.com.ar/authorization?client_id=${appId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${stateBase64}`
- `https://backboard.railway.app/graphql/v2`
- `https://backboard.railway.com/graphql/v2`
- `https://bot-rialway-monoagente-production-1287.up.railway.app`
- `https://bot-rialway-monoagente-production-ab3b.up.railway.app`
- `https://bot-rialway-monoagente-production-ab3b.up.railway.app/api/v1/auth`
- `https://bot-rialway-monoagente-production-ab3b.up.railway.app/api/v1/send-template`
- `https://builderbot.app/`
- `https://business.facebook.com/latest/whatsapp_manager/message_templates`
- `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${_metaConfig.waba_id}`
- `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${_metaConfig.waba_id}&edit_template=${template.name}`
- `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${config.waba_id}`
- `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${window.metaConfig.waba_id}&edit_template=${template.name}`
- `https://business.facebook.com/latest/whatsapp_manager/template_library`
- `https://business.facebook.com/latest/whatsapp_manager/template_library?asset_id=${_metaConfig.waba_id}`
- `https://business.facebook.com/latest/whatsapp_manager/template_library?asset_id=${config.waba_id}`
- `https://buymeacoffee.com/borewit`
- `https://calendar.googleapis.com`
- `https://cdn.jsdelivr.net/npm/chart.js`
- `https://cdn.jsdelivr.net/npm/marked/marked.min.js`
- `https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js`
- `https://cdn.jsdelivr.net/npm/sweetalert2@11`
- `https://cdn.socket.io/4.7.2/socket.io.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css`
- `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/markdown/markdown.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/dracula.min.css`
- `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- `https://clientesneurolinks.com/portal/dashboard`
- `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f`
- `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f:`
- `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f}`
- `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7`
- `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7:`
- `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7}`
- `https://connect.facebook.net/es_LA/sdk.js`
- `https://console.cloud.google.com/`
- `https://deno.land/std@0.168.0/http/server.ts`
- `https://developers.facebook.com/`
- `https://dl-ssl.google.com/linux/linux_signing_key.pub`
- `https://docs.vapi.ai/`
- `https://dotenvx.com`
- `https://drive.google.com/uc?export=download&id=${driveIdMatch[1]}`
- `https://drive.googleapis.com`
- `https://duskcodes.com.ar/dashboard.html`
- `https://duskcodes.com.ar/dashboard.html?metaStatus=success`
- `https://duskcodes.com.ar/meta-auth`
- `https://eslint.org/version-support`
- `https://esm.sh/@supabase/supabase-js@2.21.0`
- `https://feross.org/support`
- `https://fontawesome.com`
- `https://fontawesome.com/license/free`
- `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@400;500;600&display=swap`
- `https://git.ffmpeg.org/gitweb/ffmpeg.git/blob_plain/HEAD:/LICENSE.md`
- `https://github.com/chalk/ansi-regex?sponsor=1`
- `https://github.com/chalk/ansi-styles?sponsor=1`
- `https://github.com/chalk/chalk?sponsor=1`
- `https://github.com/chalk/strip-ansi?sponsor=1`
- `https://github.com/chalk/wrap-ansi?sponsor=1`
- `https://github.com/cheeriojs/cheerio?sponsor=1`
- `https://github.com/cheeriojs/dom-serializer?sponsor=1`
- `https://github.com/fb55/domhandler?sponsor=1`
- `https://github.com/fb55/domutils?sponsor=1`
- `https://github.com/fb55/encoding-sniffer?sponsor=1`
- `https://github.com/fb55/entities?sponsor=1`
- `https://github.com/fb55/htmlparser2?sponsor=1`
- `https://github.com/fb55/nth-check?sponsor=1`
- `https://github.com/inikulin/parse5?sponsor=1`
- `https://github.com/privatenumber/get-tsconfig?sponsor=1`
- `https://github.com/privatenumber/resolve-pkg-maps?sponsor=1`
- `https://github.com/sindresorhus/file-type?sponsor=1`
- `https://github.com/sponsors/ai`
- `https://github.com/sponsors/antonk52`
- `https://github.com/sponsors/Borewit`
- `https://github.com/sponsors/broofa`
- `https://github.com/sponsors/colinhacks`
- `https://github.com/sponsors/ctavan`
- `https://github.com/sponsors/epoberezkin`
- `https://github.com/sponsors/eshaz`
- `https://github.com/sponsors/fastify`
- `https://github.com/sponsors/fb55`
- `https://github.com/sponsors/feross`
- `https://github.com/sponsors/isaacs`
- `https://github.com/sponsors/jimmywarting`
- `https://github.com/sponsors/jonschlinkert`
- `https://github.com/sponsors/limonte`
- `https://github.com/sponsors/ljharb`
- `https://github.com/sponsors/nzakas`
- `https://github.com/sponsors/rawify`
- `https://github.com/sponsors/RubenVerborgh`
- `https://github.com/sponsors/SeleniumHQ`
- `https://github.com/sponsors/sindresorhus`
- `https://github.com/sponsors/SuperchupuDev`
- `https://github.com/WhiskeySockets/Baileys/security/advisories/GHSA-qvv5-jq5g-4cgg`
- `https://github.com/whiskeysockets/libsignal-node.git`
- `https://google-proxy.duskcodes.com.ar`
- `https://graph.facebook.com/${apiVersion}/${mediaId}`
- `https://graph.facebook.com/${apiVersion}/${phone_number_id}/media`
- `https://graph.facebook.com/${apiVersion}/${phone_number_id}/messages`
- `https://graph.facebook.com/v20.0/`
- `https://graph.facebook.com/v20.0/${WABA_ID}/subscribed_apps`
- `https://graph.facebook.com/v20.0/${WABA_ID}?fields=owner_business_info,name`
- `https://graph.facebook.com/v20.0/${WABA_ID}?fields=owner_business_info,name,status`
- `https://graph.facebook.com/v20.0/me/permissions`
- `https://graph.facebook.com/v20.0/me?fields=id,name`
- `https://graph.facebook.com/v22.0/`
- `https://graph.facebook.com/v22.0/${biz.id}/client_whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/${biz.id}/whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/${business.id}/client_whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/${business.id}/owned_whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/${businessId}/whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/${existingGroup.jid}/invite_link`
- `https://graph.facebook.com/v22.0/${finalPhoneId}/register`
- `https://graph.facebook.com/v22.0/${finalWabaId}/subscribed_apps`
- `https://graph.facebook.com/v22.0/${groupId}/invite_link`
- `https://graph.facebook.com/v22.0/${groupJid}`
- `https://graph.facebook.com/v22.0/${groupJid}/invite_link`
- `https://graph.facebook.com/v22.0/${MASTER_WABA_ID}/message_templates?fields=id,name,components,language,category,status&limit=100`
- `https://graph.facebook.com/v22.0/${metaOnboarding.whatsappBusinessId}`
- `https://graph.facebook.com/v22.0/${pageId}/subscribed_apps`
- `https://graph.facebook.com/v22.0/${phone_number_id}/messages`
- `https://graph.facebook.com/v22.0/${phone_number_id}/smb_app_data`
- `https://graph.facebook.com/v22.0/${phoneId}`
- `https://graph.facebook.com/v22.0/${phoneId}/deregister`
- `https://graph.facebook.com/v22.0/${phoneId}/register`
- `https://graph.facebook.com/v22.0/${phoneId}/request_code`
- `https://graph.facebook.com/v22.0/${phoneId}/smb_app_data`
- `https://graph.facebook.com/v22.0/${phoneId}/verify_code`
- `https://graph.facebook.com/v22.0/${waba_id}/message_templates`
- `https://graph.facebook.com/v22.0/${waba_id}/message_templates?fields=id,name,status,components,language,category,parameter_format`
- `https://graph.facebook.com/v22.0/${wabaId}`
- `https://graph.facebook.com/v22.0/${wabaId}/phone_numbers`
- `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`
- `https://graph.facebook.com/v22.0/${whatsappNumberId}/groups`
- `https://graph.facebook.com/v22.0/${whatsappNumberId}/messages`
- `https://graph.facebook.com/v22.0/debug_token`
- `https://graph.facebook.com/v22.0/me/accounts`
- `https://graph.facebook.com/v22.0/me/businesses`
- `https://graph.facebook.com/v22.0/me/whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/me?fields=id,name,whatsapp_business_accounts,owned_whatsapp_business_accounts,client_whatsapp_business_accounts`
- `https://graph.facebook.com/v22.0/me?fields=name,id,email`
- `https://graph.facebook.com/v22.0/message_template_library?fields=id,name,components,language,category,status&limit=100`
- `https://graph.facebook.com/v22.0/oauth/access_token`
- `https://graph.facebook.com/v25.0/me/messages?access_token=${access_token}`
- `https://img.freepik.com/vector-gratis/robot-vectorial-graident-ai_78370-4114.jpg?semt=ais_hybrid&w=740&q=80`
- `https://neurolinks.com/descarga/456`
- `https://neurolinks.com/pago/123`
- `https://oauth2.googleapis.com`
- `https://opencollective.com/eslint`
- `https://opencollective.com/express`
- `https://opencollective.com/fastify`
- `https://opencollective.com/libvips`
- `https://opencollective.com/nodemon`
- `https://opencollective.com/pnpm`
- `https://opencollective.com/postcss/`
- `https://opencollective.com/selenium`
- `https://opencollective.com/typescript-eslint`
- `https://paulmillr.com/funding/`
- `https://paypal.me/jimmywarting`
- `https://platform.openai.com/api-keys`
- `https://proxy.duskcodes.com.ar/v1`
- `https://registry.npmjs.org/@adiwajshing/keyed-db/-/keyed-db-0.2.4.tgz`
- `https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz`
- `https://registry.npmjs.org/@arr/every/-/every-1.0.1.tgz`
- `https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz`
- `https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz`
- `https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz`
- `https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz`
- `https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz`
- `https://registry.npmjs.org/@bazel/runfiles/-/runfiles-6.5.0.tgz`
- `https://registry.npmjs.org/@borewit/text-codec/-/text-codec-0.1.1.tgz`
- `https://registry.npmjs.org/@borewit/text-codec/-/text-codec-0.2.0.tgz`
- `https://registry.npmjs.org/@builderbot/bot/-/bot-1.3.5.tgz`
- `https://registry.npmjs.org/@builderbot/provider-baileys/-/provider-baileys-1.3.5.tgz`
- `https://registry.npmjs.org/@builderbot-plugins/openai-assistants/-/openai-assistants-0.0.2.tgz`
- `https://registry.npmjs.org/@cacheable/memoize/-/memoize-2.0.3.tgz`
- `https://registry.npmjs.org/@cacheable/memory/-/memory-2.0.4.tgz`
- `https://registry.npmjs.org/@cacheable/node-cache/-/node-cache-1.7.4.tgz`
- `https://registry.npmjs.org/@cacheable/utils/-/utils-2.2.0.tgz`
- `https://registry.npmjs.org/@deepgram/captions/-/captions-1.2.0.tgz`
- `https://registry.npmjs.org/@deepgram/sdk/-/sdk-3.13.0.tgz`
- `https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.4.tgz`
- `https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.12.tgz`
- `https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.4.tgz`
- `https://registry.npmjs.org/@eshaz/web-worker/-/web-worker-1.2.2.tgz`
- `https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz`
- `https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz`
- `https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz`
- `https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz`
- `https://registry.npmjs.org/@fast-csv/format/-/format-4.3.5.tgz`
- `https://registry.npmjs.org/@fast-csv/parse/-/parse-4.3.6.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/darwin-arm64/-/darwin-arm64-4.1.5.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/darwin-x64/-/darwin-x64-4.1.0.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/ffmpeg/-/ffmpeg-1.1.0.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/linux-arm/-/linux-arm-4.1.3.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/linux-arm64/-/linux-arm64-4.1.4.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/linux-ia32/-/linux-ia32-4.1.0.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/linux-x64/-/linux-x64-4.1.0.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/win32-ia32/-/win32-ia32-4.1.0.tgz`
- `https://registry.npmjs.org/@ffmpeg-installer/win32-x64/-/win32-x64-4.1.0.tgz`
- `https://registry.npmjs.org/@fortawesome/fontawesome-free/-/fontawesome-free-7.2.0.tgz`
- `https://registry.npmjs.org/@googlemaps/google-maps-services-js/-/google-maps-services-js-3.4.2.tgz`
- `https://registry.npmjs.org/@googlemaps/url-signature/-/url-signature-1.0.40.tgz`
- `https://registry.npmjs.org/@hapi/boom/-/boom-9.1.4.tgz`
- `https://registry.npmjs.org/@hapi/hoek/-/hoek-9.3.0.tgz`
- `https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz`
- `https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz`
- `https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz`
- `https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz`
- `https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.0.tgz`
- `https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz`
- `https://registry.npmjs.org/@jimp/core/-/core-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/diff/-/diff-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/file-ops/-/file-ops-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/js-bmp/-/js-bmp-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/js-gif/-/js-gif-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/js-jpeg/-/js-jpeg-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/js-png/-/js-png-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/js-tiff/-/js-tiff-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-blit/-/plugin-blit-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-blur/-/plugin-blur-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-circle/-/plugin-circle-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-color/-/plugin-color-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-contain/-/plugin-contain-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-cover/-/plugin-cover-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-crop/-/plugin-crop-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-displace/-/plugin-displace-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-dither/-/plugin-dither-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-fisheye/-/plugin-fisheye-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-flip/-/plugin-flip-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-hash/-/plugin-hash-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-mask/-/plugin-mask-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-print/-/plugin-print-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-quantize/-/plugin-quantize-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-resize/-/plugin-resize-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-rotate/-/plugin-rotate-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/plugin-threshold/-/plugin-threshold-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/types/-/types-1.6.0.tgz`
- `https://registry.npmjs.org/@jimp/utils/-/utils-1.6.0.tgz`
- `https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz`
- `https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz`
- `https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz`
- `https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz`
- `https://registry.npmjs.org/@jsdoc/salty/-/salty-0.2.9.tgz`
- `https://registry.npmjs.org/@keyv/bigmap/-/bigmap-1.1.0.tgz`
- `https://registry.npmjs.org/@keyv/serialize/-/serialize-1.1.1.tgz`
- `https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz`
- `https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz`
- `https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz`
- `https://registry.npmjs.org/@pinojs/redact/-/redact-0.4.0.tgz`
- `https://registry.npmjs.org/@polka/url/-/url-0.5.0.tgz`
- `https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz`
- `https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz`
- `https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.4.tgz`
- `https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz`
- `https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz`
- `https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz`
- `https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.0.tgz`
- `https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz`
- `https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz`
- `https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.0.tgz`
- `https://registry.npmjs.org/@rollup/plugin-typescript/-/plugin-typescript-12.3.0.tgz`
- `https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.3.0.tgz`
- `https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.53.2.tgz`
- `https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.53.2.tgz`
- `https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.2.tgz`
- `https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.87.1.tgz`
- `https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.87.1.tgz`
- `https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.87.1.tgz`
- `https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.87.1.tgz`
- `https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.87.1.tgz`
- `https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.87.1.tgz`
- `https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.17.tgz`
- `https://registry.npmjs.org/@tokenizer/inflate/-/inflate-0.3.1.tgz`
- `https://registry.npmjs.org/@tokenizer/token/-/token-0.3.0.tgz`
- `https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz`
- `https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz`
- `https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz`
- `https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz`
- `https://registry.npmjs.org/@types/express/-/express-5.0.5.tgz`
- `https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.0.tgz`
- `https://registry.npmjs.org/@types/fs-extra/-/fs-extra-11.0.4.tgz`
- `https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz`
- `https://registry.npmjs.org/@types/jsonfile/-/jsonfile-6.1.4.tgz`
- `https://registry.npmjs.org/@types/linkify-it/-/linkify-it-5.0.0.tgz`
- `https://registry.npmjs.org/@types/long/-/long-4.0.2.tgz`
- `https://registry.npmjs.org/@types/markdown-it/-/markdown-it-14.1.2.tgz`
- `https://registry.npmjs.org/@types/mdurl/-/mdurl-2.0.0.tgz`
- `https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz`
- `https://registry.npmjs.org/@types/multer/-/multer-1.4.13.tgz`
- `https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz`
- `https://registry.npmjs.org/@types/node/-/node-14.18.63.tgz`
- `https://registry.npmjs.org/@types/node/-/node-16.9.1.tgz`
- `https://registry.npmjs.org/@types/node/-/node-18.19.130.tgz`
- `https://registry.npmjs.org/@types/node/-/node-20.19.24.tgz`
- `https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.13.tgz`
- `https://registry.npmjs.org/@types/phoenix/-/phoenix-1.6.7.tgz`
- `https://registry.npmjs.org/@types/pino/-/pino-7.0.4.tgz`
- `https://registry.npmjs.org/@types/polka/-/polka-0.5.8.tgz`
- `https://registry.npmjs.org/@types/qrcode/-/qrcode-1.5.6.tgz`
- `https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz`
- `https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz`
- `https://registry.npmjs.org/@types/selenium-webdriver/-/selenium-webdriver-4.35.6.tgz`
- `https://registry.npmjs.org/@types/send/-/send-0.17.6.tgz`
- `https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz`
- `https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.10.tgz`
- `https://registry.npmjs.org/@types/trouter/-/trouter-3.1.4.tgz`
- `https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz`
- `https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/parser/-/parser-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/types/-/types-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/utils/-/utils-7.18.0.tgz`
- `https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-7.18.0.tgz`
- `https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz`
- `https://registry.npmjs.org/@wasm-audio-decoders/common/-/common-9.0.7.tgz`
- `https://registry.npmjs.org/@wasm-audio-decoders/opus-ml/-/opus-ml-0.0.2.tgz`
- `https://registry.npmjs.org/@whiskeysockets/baileys/-/baileys-6.7.21.tgz`
- `https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz`
- `https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz`
- `https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz`
- `https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz`
- `https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz`
- `https://registry.npmjs.org/adler-32/-/adler-32-1.3.1.tgz`
- `https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz`
- `https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.6.0.tgz`
- `https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz`
- `https://registry.npmjs.org/ambi/-/ambi-2.0.0.tgz`
- `https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz`
- `https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz`
- `https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz`
- `https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz`
- `https://registry.npmjs.org/any-base/-/any-base-1.1.0.tgz`
- `https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz`
- `https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz`
- `https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz`
- `https://registry.npmjs.org/archiver/-/archiver-5.3.2.tgz`
- `https://registry.npmjs.org/archiver-utils/-/archiver-utils-2.1.0.tgz`
- `https://registry.npmjs.org/archiver-utils/-/archiver-utils-3.0.4.tgz`
- `https://registry.npmjs.org/arg/-/arg-5.0.2.tgz`
- `https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz`
- `https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz`
- `https://registry.npmjs.org/async/-/async-0.2.10.tgz`
- `https://registry.npmjs.org/async/-/async-3.2.6.tgz`
- `https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz`
- `https://registry.npmjs.org/async-mutex/-/async-mutex-0.5.0.tgz`
- `https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz`
- `https://registry.npmjs.org/await-to-js/-/await-to-js-3.0.0.tgz`
- `https://registry.npmjs.org/axios/-/axios-0.24.0.tgz`
- `https://registry.npmjs.org/axios/-/axios-1.13.2.tgz`
- `https://registry.npmjs.org/b4a/-/b4a-1.7.3.tgz`
- `https://registry.npmjs.org/baileys/-/baileys-7.0.0-rc.5.tgz`
- `https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz`
- `https://registry.npmjs.org/bal-util/-/bal-util-1.18.0.tgz`
- `https://registry.npmjs.org/bare-events/-/bare-events-2.8.2.tgz`
- `https://registry.npmjs.org/bare-fs/-/bare-fs-4.5.0.tgz`
- `https://registry.npmjs.org/bare-os/-/bare-os-3.6.2.tgz`
- `https://registry.npmjs.org/bare-path/-/bare-path-3.0.0.tgz`
- `https://registry.npmjs.org/bare-stream/-/bare-stream-2.7.0.tgz`
- `https://registry.npmjs.org/bare-url/-/bare-url-2.3.2.tgz`
- `https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz`
- `https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz`
- `https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz`
- `https://registry.npmjs.org/big-integer/-/big-integer-1.6.52.tgz`
- `https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.3.1.tgz`
- `https://registry.npmjs.org/binary/-/binary-0.3.0.tgz`
- `https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz`
- `https://registry.npmjs.org/bl/-/bl-0.4.2.tgz`
- `https://registry.npmjs.org/bl/-/bl-4.1.0.tgz`
- `https://registry.npmjs.org/bluebird/-/bluebird-3.4.7.tgz`
- `https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz`
- `https://registry.npmjs.org/bmp-ts/-/bmp-ts-1.0.9.tgz`
- `https://registry.npmjs.org/body-parser/-/body-parser-1.20.4.tgz`
- `https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz`
- `https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz`
- `https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz`
- `https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz`
- `https://registry.npmjs.org/braces/-/braces-3.0.3.tgz`
- `https://registry.npmjs.org/brotli/-/brotli-1.3.3.tgz`
- `https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz`
- `https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz`
- `https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz`
- `https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz`
- `https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz`
- `https://registry.npmjs.org/buffer-indexof-polyfill/-/buffer-indexof-polyfill-1.0.2.tgz`
- `https://registry.npmjs.org/buffers/-/buffers-0.1.1.tgz`
- `https://registry.npmjs.org/builderbot-provider-sherpa/-/builderbot-provider-sherpa-0.1.0.tgz`
- `https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz`
- `https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz`
- `https://registry.npmjs.org/cacheable/-/cacheable-2.1.1.tgz`
- `https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz`
- `https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz`
- `https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz`
- `https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz`
- `https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz`
- `https://registry.npmjs.org/catharsis/-/catharsis-0.9.0.tgz`
- `https://registry.npmjs.org/cfb/-/cfb-1.2.2.tgz`
- `https://registry.npmjs.org/chainsaw/-/chainsaw-0.1.0.tgz`
- `https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz`
- `https://registry.npmjs.org/cheerio/-/cheerio-1.1.2.tgz`
- `https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz`
- `https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz`
- `https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz`
- `https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz`
- `https://registry.npmjs.org/clone/-/clone-2.1.2.tgz`
- `https://registry.npmjs.org/codec-parser/-/codec-parser-2.5.0.tgz`
- `https://registry.npmjs.org/codepage/-/codepage-1.15.0.tgz`
- `https://registry.npmjs.org/color/-/color-4.2.3.tgz`
- `https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz`
- `https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz`
- `https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz`
- `https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz`
- `https://registry.npmjs.org/commander/-/commander-0.5.2.tgz`
- `https://registry.npmjs.org/commander/-/commander-4.1.1.tgz`
- `https://registry.npmjs.org/complex.js/-/complex.js-2.4.3.tgz`
- `https://registry.npmjs.org/compress-commons/-/compress-commons-4.1.2.tgz`
- `https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz`
- `https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz`
- `https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz`
- `https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.0.tgz`
- `https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz`
- `https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz`
- `https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz`
- `https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz`
- `https://registry.npmjs.org/cors/-/cors-2.8.5.tgz`
- `https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz`
- `https://registry.npmjs.org/crc32-stream/-/crc32-stream-4.0.3.tgz`
- `https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.2.0.tgz`
- `https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz`
- `https://registry.npmjs.org/crypto-js/-/crypto-js-4.2.0.tgz`
- `https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz`
- `https://registry.npmjs.org/css-select/-/css-select-5.2.2.tgz`
- `https://registry.npmjs.org/css-what/-/css-what-6.2.2.tgz`
- `https://registry.npmjs.org/curve25519-js/-/curve25519-js-0.0.4.tgz`
- `https://registry.npmjs.org/dayjs/-/dayjs-1.11.19.tgz`
- `https://registry.npmjs.org/debug/-/debug-2.6.9.tgz`
- `https://registry.npmjs.org/debug/-/debug-4.3.7.tgz`
- `https://registry.npmjs.org/debug/-/debug-4.4.3.tgz`
- `https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz`
- `https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz`
- `https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.2.tgz`
- `https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz`
- `https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz`
- `https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz`
- `https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz`
- `https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz`
- `https://registry.npmjs.org/depd/-/depd-2.0.0.tgz`
- `https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz`
- `https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz`
- `https://registry.npmjs.org/dfa/-/dfa-1.2.0.tgz`
- `https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz`
- `https://registry.npmjs.org/dijkstrajs/-/dijkstrajs-1.0.3.tgz`
- `https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz`
- `https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz`
- `https://registry.npmjs.org/docker/-/docker-0.2.14.tgz`
- `https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz`
- `https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz`
- `https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz`
- `https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz`
- `https://registry.npmjs.org/domutils/-/domutils-3.2.2.tgz`
- `https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz`
- `https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz`
- `https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz`
- `https://registry.npmjs.org/duplexify/-/duplexify-4.1.3.tgz`
- `https://registry.npmjs.org/eachr/-/eachr-2.0.4.tgz`
- `https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz`
- `https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz`
- `https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz`
- `https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz`
- `https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz`
- `https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz`
- `https://registry.npmjs.org/encoding-sniffer/-/encoding-sniffer-0.2.1.tgz`
- `https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz`
- `https://registry.npmjs.org/engine.io/-/engine.io-6.6.4.tgz`
- `https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.2.3.tgz`
- `https://registry.npmjs.org/entities/-/entities-4.5.0.tgz`
- `https://registry.npmjs.org/entities/-/entities-6.0.1.tgz`
- `https://registry.npmjs.org/esbuild/-/esbuild-0.25.12.tgz`
- `https://registry.npmjs.org/esbuild/-/esbuild-0.27.4.tgz`
- `https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz`
- `https://registry.npmjs.org/escape-latex/-/escape-latex-1.2.0.tgz`
- `https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz`
- `https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz`
- `https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz`
- `https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz`
- `https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz`
- `https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz`
- `https://registry.npmjs.org/eslint-plugin-builderbot/-/eslint-plugin-builderbot-1.3.5.tgz`
- `https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz`
- `https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz`
- `https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz`
- `https://registry.npmjs.org/espree/-/espree-9.6.1.tgz`
- `https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz`
- `https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz`
- `https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz`
- `https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz`
- `https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz`
- `https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz`
- `https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz`
- `https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz`
- `https://registry.npmjs.org/etag/-/etag-1.8.1.tgz`
- `https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz`
- `https://registry.npmjs.org/events/-/events-3.3.0.tgz`
- `https://registry.npmjs.org/events-universal/-/events-universal-1.0.1.tgz`
- `https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz`
- `https://registry.npmjs.org/exceljs/-/exceljs-4.4.0.tgz`
- `https://registry.npmjs.org/exif-parser/-/exif-parser-0.1.12.tgz`
- `https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz`
- `https://registry.npmjs.org/express/-/express-5.2.1.tgz`
- `https://registry.npmjs.org/extend/-/extend-3.0.2.tgz`
- `https://registry.npmjs.org/extendr/-/extendr-2.0.1.tgz`
- `https://registry.npmjs.org/fast-csv/-/fast-csv-4.3.6.tgz`
- `https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz`
- `https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz`
- `https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz`
- `https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz`
- `https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz`
- `https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz`
- `https://registry.npmjs.org/fast-redact/-/fast-redact-3.5.0.tgz`
- `https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz`
- `https://registry.npmjs.org/fflate/-/fflate-0.8.2.tgz`
- `https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz`
- `https://registry.npmjs.org/file-type/-/file-type-16.5.4.tgz`
- `https://registry.npmjs.org/file-type/-/file-type-21.1.0.tgz`
- `https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz`
- `https://registry.npmjs.org/filter-obj/-/filter-obj-1.1.0.tgz`
- `https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.0.tgz`
- `https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz`
- `https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz`
- `https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz`
- `https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz`
- `https://registry.npmjs.org/fluent-ffmpeg/-/fluent-ffmpeg-2.1.3.tgz`
- `https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz`
- `https://registry.npmjs.org/fontkit/-/fontkit-2.0.4.tgz`
- `https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz`
- `https://registry.npmjs.org/form-data/-/form-data-4.0.4.tgz`
- `https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-1.7.2.tgz`
- `https://registry.npmjs.org/formdata-node/-/formdata-node-4.4.1.tgz`
- `https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz`
- `https://registry.npmjs.org/frac/-/frac-1.1.2.tgz`
- `https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz`
- `https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz`
- `https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz`
- `https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz`
- `https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz`
- `https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz`
- `https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.2.tgz`
- `https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz`
- `https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz`
- `https://registry.npmjs.org/futoin-hkdf/-/futoin-hkdf-1.5.3.tgz`
- `https://registry.npmjs.org/gaxios/-/gaxios-6.7.1.tgz`
- `https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz`
- `https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz`
- `https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz`
- `https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz`
- `https://registry.npmjs.org/getsetdeep/-/getsetdeep-2.0.0.tgz`
- `https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz`
- `https://registry.npmjs.org/gifwrap/-/gifwrap-0.10.1.tgz`
- `https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz`
- `https://registry.npmjs.org/glob/-/glob-11.0.3.tgz`
- `https://registry.npmjs.org/glob/-/glob-7.2.3.tgz`
- `https://registry.npmjs.org/glob/-/glob-8.1.0.tgz`
- `https://registry.npmjs.org/globals/-/globals-13.24.0.tgz`
- `https://registry.npmjs.org/globby/-/globby-11.1.0.tgz`
- `https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz`
- `https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz`
- `https://registry.npmjs.org/googleapis/-/googleapis-144.0.0.tgz`
- `https://registry.npmjs.org/googleapis-common/-/googleapis-common-7.2.0.tgz`
- `https://registry.npmjs.org/google-auth-library/-/google-auth-library-9.15.1.tgz`
- `https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz`
- `https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz`
- `https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz`
- `https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz`
- `https://registry.npmjs.org/gtoken/-/gtoken-7.1.0.tgz`
- `https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz`
- `https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz`
- `https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz`
- `https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz`
- `https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz`
- `https://registry.npmjs.org/hookified/-/hookified-1.12.2.tgz`
- `https://registry.npmjs.org/htmlparser2/-/htmlparser2-10.0.0.tgz`
- `https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz`
- `https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz`
- `https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz`
- `https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz`
- `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz`
- `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz`
- `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.1.tgz`
- `https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz`
- `https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz`
- `https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz`
- `https://registry.npmjs.org/image-q/-/image-q-4.0.0.tgz`
- `https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz`
- `https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz`
- `https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz`
- `https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz`
- `https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz`
- `https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz`
- `https://registry.npmjs.org/ini/-/ini-1.3.8.tgz`
- `https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz`
- `https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz`
- `https://registry.npmjs.org/ip-address/-/ip-address-10.2.0.tgz`
- `https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz`
- `https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz`
- `https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.4.tgz`
- `https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz`
- `https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz`
- `https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz`
- `https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz`
- `https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz`
- `https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz`
- `https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz`
- `https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz`
- `https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz`
- `https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz`
- `https://registry.npmjs.org/jackspeak/-/jackspeak-4.1.1.tgz`
- `https://registry.npmjs.org/javascript-natural-sort/-/javascript-natural-sort-0.7.1.tgz`
- `https://registry.npmjs.org/jimp/-/jimp-1.6.0.tgz`
- `https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz`
- `https://registry.npmjs.org/jpeg-exif/-/jpeg-exif-1.1.4.tgz`
- `https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.4.4.tgz`
- `https://registry.npmjs.org/js2xmlparser/-/js2xmlparser-4.0.2.tgz`
- `https://registry.npmjs.org/jsdoc/-/jsdoc-4.0.5.tgz`
- `https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz`
- `https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz`
- `https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz`
- `https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz`
- `https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz`
- `https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz`
- `https://registry.npmjs.org/jszip/-/jszip-3.10.1.tgz`
- `https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz`
- `https://registry.npmjs.org/jws/-/jws-4.0.0.tgz`
- `https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz`
- `https://registry.npmjs.org/keyv/-/keyv-5.5.3.tgz`
- `https://registry.npmjs.org/klaw/-/klaw-3.0.0.tgz`
- `https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz`
- `https://registry.npmjs.org/levn/-/levn-0.3.0.tgz`
- `https://registry.npmjs.org/levn/-/levn-0.4.1.tgz`
- `https://registry.npmjs.org/lie/-/lie-3.3.0.tgz`
- `https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz`
- `https://registry.npmjs.org/linebreak/-/linebreak-1.1.0.tgz`
- `https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz`
- `https://registry.npmjs.org/linkify-it/-/linkify-it-5.0.0.tgz`
- `https://registry.npmjs.org/listenercount/-/listenercount-1.0.1.tgz`
- `https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz`
- `https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz`
- `https://registry.npmjs.org/lodash.defaults/-/lodash.defaults-4.2.0.tgz`
- `https://registry.npmjs.org/lodash.difference/-/lodash.difference-4.5.0.tgz`
- `https://registry.npmjs.org/lodash.escaperegexp/-/lodash.escaperegexp-4.1.2.tgz`
- `https://registry.npmjs.org/lodash.flatten/-/lodash.flatten-4.4.0.tgz`
- `https://registry.npmjs.org/lodash.groupby/-/lodash.groupby-4.6.0.tgz`
- `https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz`
- `https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz`
- `https://registry.npmjs.org/lodash.isfunction/-/lodash.isfunction-3.0.9.tgz`
- `https://registry.npmjs.org/lodash.isnil/-/lodash.isnil-4.0.0.tgz`
- `https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz`
- `https://registry.npmjs.org/lodash.isundefined/-/lodash.isundefined-3.0.1.tgz`
- `https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz`
- `https://registry.npmjs.org/lodash.union/-/lodash.union-4.6.0.tgz`
- `https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz`
- `https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz`
- `https://registry.npmjs.org/long/-/long-4.0.0.tgz`
- `https://registry.npmjs.org/long/-/long-5.3.2.tgz`
- `https://registry.npmjs.org/lru-cache/-/lru-cache-11.2.2.tgz`
- `https://registry.npmjs.org/markdown-it/-/markdown-it-14.1.0.tgz`
- `https://registry.npmjs.org/markdown-it-anchor/-/markdown-it-anchor-8.6.7.tgz`
- `https://registry.npmjs.org/marked/-/marked-4.3.0.tgz`
- `https://registry.npmjs.org/matchit/-/matchit-1.1.0.tgz`
- `https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz`
- `https://registry.npmjs.org/mathjs/-/mathjs-15.1.0.tgz`
- `https://registry.npmjs.org/mdurl/-/mdurl-2.0.0.tgz`
- `https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz`
- `https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz`
- `https://registry.npmjs.org/mercadopago/-/mercadopago-3.1.0.tgz`
- `https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz`
- `https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz`
- `https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz`
- `https://registry.npmjs.org/mime/-/mime-3.0.0.tgz`
- `https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz`
- `https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz`
- `https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz`
- `https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz`
- `https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz`
- `https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz`
- `https://registry.npmjs.org/minimatch/-/minimatch-10.1.1.tgz`
- `https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz`
- `https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz`
- `https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz`
- `https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz`
- `https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz`
- `https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.2.tgz`
- `https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.5.tgz`
- `https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz`
- `https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz`
- `https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz`
- `https://registry.npmjs.org/moment/-/moment-2.30.1.tgz`
- `https://registry.npmjs.org/moment-timezone/-/moment-timezone-0.6.0.tgz`
- `https://registry.npmjs.org/ms/-/ms-2.0.0.tgz`
- `https://registry.npmjs.org/ms/-/ms-2.1.3.tgz`
- `https://registry.npmjs.org/multer/-/multer-1.4.5-lts.1.tgz`
- `https://registry.npmjs.org/multer/-/multer-2.1.1.tgz`
- `https://registry.npmjs.org/music-metadata/-/music-metadata-11.10.0.tgz`
- `https://registry.npmjs.org/music-metadata/-/music-metadata-7.14.0.tgz`
- `https://registry.npmjs.org/mz/-/mz-2.7.0.tgz`
- `https://registry.npmjs.org/nanoid/-/nanoid-3.3.13.tgz`
- `https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz`
- `https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz`
- `https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz`
- `https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz`
- `https://registry.npmjs.org/node-abi/-/node-abi-3.80.0.tgz`
- `https://registry.npmjs.org/node-addon-api/-/node-addon-api-6.1.0.tgz`
- `https://registry.npmjs.org/node-cache/-/node-cache-5.1.2.tgz`
- `https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz`
- `https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz`
- `https://registry.npmjs.org/nodemon/-/nodemon-3.1.10.tgz`
- `https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz`
- `https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz`
- `https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz`
- `https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz`
- `https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz`
- `https://registry.npmjs.org/object-keys/-/object-keys-0.4.0.tgz`
- `https://registry.npmjs.org/ogg-opus-decoder/-/ogg-opus-decoder-1.7.3.tgz`
- `https://registry.npmjs.org/omggif/-/omggif-1.0.10.tgz`
- `https://registry.npmjs.org/once/-/once-1.4.0.tgz`
- `https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-0.2.0.tgz`
- `https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-2.1.2.tgz`
- `https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz`
- `https://registry.npmjs.org/openai/-/openai-4.104.0.tgz`
- `https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz`
- `https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz`
- `https://registry.npmjs.org/opus-decoder/-/opus-decoder-0.7.11.tgz`
- `https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz`
- `https://registry.npmjs.org/pako/-/pako-0.2.9.tgz`
- `https://registry.npmjs.org/pako/-/pako-1.0.11.tgz`
- `https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz`
- `https://registry.npmjs.org/parse5/-/parse5-7.3.0.tgz`
- `https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-7.1.0.tgz`
- `https://registry.npmjs.org/parse5-parser-stream/-/parse5-parser-stream-7.1.2.tgz`
- `https://registry.npmjs.org/parse-bmfont-ascii/-/parse-bmfont-ascii-1.0.6.tgz`
- `https://registry.npmjs.org/parse-bmfont-binary/-/parse-bmfont-binary-1.0.6.tgz`
- `https://registry.npmjs.org/parse-bmfont-xml/-/parse-bmfont-xml-1.1.6.tgz`
- `https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz`
- `https://registry.npmjs.org/path/-/path-0.12.7.tgz`
- `https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz`
- `https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz`
- `https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz`
- `https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz`
- `https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.1.tgz`
- `https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz`
- `https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz`
- `https://registry.npmjs.org/pdfkit/-/pdfkit-0.16.0.tgz`
- `https://registry.npmjs.org/peek-readable/-/peek-readable-4.1.0.tgz`
- `https://registry.npmjs.org/pg/-/pg-8.16.3.tgz`
- `https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.2.7.tgz`
- `https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.9.1.tgz`
- `https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz`
- `https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz`
- `https://registry.npmjs.org/pg-pool/-/pg-pool-3.10.1.tgz`
- `https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.10.3.tgz`
- `https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz`
- `https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz`
- `https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz`
- `https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz`
- `https://registry.npmjs.org/pify/-/pify-2.3.0.tgz`
- `https://registry.npmjs.org/pino/-/pino-10.1.0.tgz`
- `https://registry.npmjs.org/pino/-/pino-7.11.0.tgz`
- `https://registry.npmjs.org/pino/-/pino-9.14.0.tgz`
- `https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-0.5.0.tgz`
- `https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-2.0.0.tgz`
- `https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-4.0.0.tgz`
- `https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-7.0.0.tgz`
- `https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz`
- `https://registry.npmjs.org/pixelmatch/-/pixelmatch-5.3.0.tgz`
- `https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz`
- `https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz`
- `https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz`
- `https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz`
- `https://registry.npmjs.org/png-js/-/png-js-1.0.0.tgz`
- `https://registry.npmjs.org/pngjs/-/pngjs-5.0.0.tgz`
- `https://registry.npmjs.org/pngjs/-/pngjs-6.0.0.tgz`
- `https://registry.npmjs.org/pngjs/-/pngjs-7.0.0.tgz`
- `https://registry.npmjs.org/pnpm/-/pnpm-9.15.9.tgz`
- `https://registry.npmjs.org/polka/-/polka-0.5.2.tgz`
- `https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz`
- `https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz`
- `https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz`
- `https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz`
- `https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz`
- `https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.4.tgz`
- `https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz`
- `https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz`
- `https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz`
- `https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz`
- `https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz`
- `https://registry.npmjs.org/p-queue/-/p-queue-9.0.0.tgz`
- `https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz`
- `https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz`
- `https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz`
- `https://registry.npmjs.org/process/-/process-0.11.10.tgz`
- `https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz`
- `https://registry.npmjs.org/process-warning/-/process-warning-1.0.0.tgz`
- `https://registry.npmjs.org/process-warning/-/process-warning-5.0.0.tgz`
- `https://registry.npmjs.org/protobufjs/-/protobufjs-6.8.8.tgz`
- `https://registry.npmjs.org/protobufjs/-/protobufjs-7.5.4.tgz`
- `https://registry.npmjs.org/protobufjs-cli/-/protobufjs-cli-1.1.3.tgz`
- `https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz`
- `https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz`
- `https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz`
- `https://registry.npmjs.org/p-timeout/-/p-timeout-7.0.1.tgz`
- `https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz`
- `https://registry.npmjs.org/pump/-/pump-3.0.3.tgz`
- `https://registry.npmjs.org/punycode.js/-/punycode.js-2.3.1.tgz`
- `https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz`
- `https://registry.npmjs.org/pygmentize-bundled/-/pygmentize-bundled-2.1.1.tgz`
- `https://registry.npmjs.org/qified/-/qified-0.5.1.tgz`
- `https://registry.npmjs.org/qrcode/-/qrcode-1.5.4.tgz`
- `https://registry.npmjs.org/qrcode-terminal/-/qrcode-terminal-0.12.0.tgz`
- `https://registry.npmjs.org/qs/-/qs-6.14.0.tgz`
- `https://registry.npmjs.org/query-string/-/query-string-7.1.3.tgz`
- `https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz`
- `https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.4.tgz`
- `https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz`
- `https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz`
- `https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz`
- `https://registry.npmjs.org/rc/-/rc-1.2.8.tgz`
- `https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.34.tgz`
- `https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz`
- `https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz`
- `https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz`
- `https://registry.npmjs.org/readable-stream/-/readable-stream-4.7.0.tgz`
- `https://registry.npmjs.org/readable-web-to-node-stream/-/readable-web-to-node-stream-3.0.4.tgz`
- `https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz`
- `https://registry.npmjs.org/readdir-glob/-/readdir-glob-1.1.3.tgz`
- `https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz`
- `https://registry.npmjs.org/readline-sync/-/readline-sync-1.4.10.tgz`
- `https://registry.npmjs.org/real-require/-/real-require-0.1.0.tgz`
- `https://registry.npmjs.org/real-require/-/real-require-0.2.0.tgz`
- `https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz`
- `https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz`
- `https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz`
- `https://registry.npmjs.org/requizzle/-/requizzle-0.2.4.tgz`
- `https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz`
- `https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz`
- `https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz`
- `https://registry.npmjs.org/restructure/-/restructure-3.0.2.tgz`
- `https://registry.npmjs.org/retry-axios/-/retry-axios-2.6.0.tgz`
- `https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz`
- `https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz`
- `https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz`
- `https://registry.npmjs.org/rollup/-/rollup-4.53.2.tgz`
- `https://registry.npmjs.org/router/-/router-2.2.0.tgz`
- `https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz`
- `https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz`
- `https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz`
- `https://registry.npmjs.org/safecallback/-/safecallback-1.0.1.tgz`
- `https://registry.npmjs.org/safefs/-/safefs-2.0.3.tgz`
- `https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz`
- `https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz`
- `https://registry.npmjs.org/sax/-/sax-1.4.3.tgz`
- `https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz`
- `https://registry.npmjs.org/seedrandom/-/seedrandom-3.0.5.tgz`
- `https://registry.npmjs.org/selenium-webdriver/-/selenium-webdriver-4.45.0.tgz`
- `https://registry.npmjs.org/semver/-/semver-7.7.3.tgz`
- `https://registry.npmjs.org/send/-/send-1.2.0.tgz`
- `https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz`
- `https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz`
- `https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz`
- `https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz`
- `https://registry.npmjs.org/sharp/-/sharp-0.32.6.tgz`
- `https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz`
- `https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz`
- `https://registry.npmjs.org/shelljs/-/shelljs-0.8.5.tgz`
- `https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz`
- `https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz`
- `https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz`
- `https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz`
- `https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz`
- `https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz`
- `https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz`
- `https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.4.tgz`
- `https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz`
- `https://registry.npmjs.org/simple-xml-to-json/-/simple-xml-to-json-1.2.3.tgz`
- `https://registry.npmjs.org/simple-yenc/-/simple-yenc-1.0.4.tgz`
- `https://registry.npmjs.org/slash/-/slash-3.0.0.tgz`
- `https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz`
- `https://registry.npmjs.org/socket.io/-/socket.io-4.8.1.tgz`
- `https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.5.5.tgz`
- `https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.2.4.tgz`
- `https://registry.npmjs.org/socks/-/socks-2.8.9.tgz`
- `https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.5.tgz`
- `https://registry.npmjs.org/sonic-boom/-/sonic-boom-2.8.0.tgz`
- `https://registry.npmjs.org/sonic-boom/-/sonic-boom-4.2.0.tgz`
- `https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz`
- `https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz`
- `https://registry.npmjs.org/split2/-/split2-4.2.0.tgz`
- `https://registry.npmjs.org/split-on-first/-/split-on-first-1.1.0.tgz`
- `https://registry.npmjs.org/ssf/-/ssf-0.11.2.tgz`
- `https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz`
- `https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz`
- `https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.3.tgz`
- `https://registry.npmjs.org/streamx/-/streamx-2.23.0.tgz`
- `https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-2.0.0.tgz`
- `https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz`
- `https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz`
- `https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz`
- `https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz`
- `https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz`
- `https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz`
- `https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz`
- `https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz`
- `https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz`
- `https://registry.npmjs.org/strtok3/-/strtok3-10.3.4.tgz`
- `https://registry.npmjs.org/strtok3/-/strtok3-6.3.0.tgz`
- `https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz`
- `https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz`
- `https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz`
- `https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz`
- `https://registry.npmjs.org/sweetalert2/-/sweetalert2-11.26.25.tgz`
- `https://registry.npmjs.org/sweetalert2-react-content/-/sweetalert2-react-content-5.1.2.tgz`
- `https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz`
- `https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.4.tgz`
- `https://registry.npmjs.org/tar-fs/-/tar-fs-3.1.1.tgz`
- `https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz`
- `https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.7.tgz`
- `https://registry.npmjs.org/taskgroup/-/taskgroup-2.0.0.tgz`
- `https://registry.npmjs.org/text-decoder/-/text-decoder-1.2.3.tgz`
- `https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz`
- `https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz`
- `https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz`
- `https://registry.npmjs.org/thread-stream/-/thread-stream-0.15.2.tgz`
- `https://registry.npmjs.org/thread-stream/-/thread-stream-3.1.0.tgz`
- `https://registry.npmjs.org/through2/-/through2-0.2.3.tgz`
- `https://registry.npmjs.org/tinycolor2/-/tinycolor2-1.6.0.tgz`
- `https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-2.1.0.tgz`
- `https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz`
- `https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz`
- `https://registry.npmjs.org/tmp/-/tmp-0.2.7.tgz`
- `https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz`
- `https://registry.npmjs.org/token-types/-/token-types-4.2.1.tgz`
- `https://registry.npmjs.org/token-types/-/token-types-6.1.1.tgz`
- `https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz`
- `https://registry.npmjs.org/touch/-/touch-3.1.1.tgz`
- `https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz`
- `https://registry.npmjs.org/traverse/-/traverse-0.3.9.tgz`
- `https://registry.npmjs.org/trouter/-/trouter-2.0.1.tgz`
- `https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz`
- `https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz`
- `https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz`
- `https://registry.npmjs.org/tsx/-/tsx-4.20.6.tgz`
- `https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz`
- `https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz`
- `https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz`
- `https://registry.npmjs.org/typechecker/-/typechecker-2.0.8.tgz`
- `https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz`
- `https://registry.npmjs.org/typed-function/-/typed-function-4.2.2.tgz`
- `https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz`
- `https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz`
- `https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz`
- `https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz`
- `https://registry.npmjs.org/typescript/-/typescript-6.0.2.tgz`
- `https://registry.npmjs.org/uc.micro/-/uc.micro-2.1.0.tgz`
- `https://registry.npmjs.org/uglify-js/-/uglify-js-3.19.3.tgz`
- `https://registry.npmjs.org/uint8array-extras/-/uint8array-extras-1.5.0.tgz`
- `https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz`
- `https://registry.npmjs.org/underscore/-/underscore-1.13.7.tgz`
- `https://registry.npmjs.org/undici/-/undici-7.16.0.tgz`
- `https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz`
- `https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz`
- `https://registry.npmjs.org/unicode-properties/-/unicode-properties-1.4.1.tgz`
- `https://registry.npmjs.org/unicode-trie/-/unicode-trie-2.0.0.tgz`
- `https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz`
- `https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz`
- `https://registry.npmjs.org/unzipper/-/unzipper-0.10.14.tgz`
- `https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz`
- `https://registry.npmjs.org/url-template/-/url-template-2.0.8.tgz`
- `https://registry.npmjs.org/utif2/-/utif2-4.1.0.tgz`
- `https://registry.npmjs.org/util/-/util-0.10.4.tgz`
- `https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz`
- `https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz`
- `https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz`
- `https://registry.npmjs.org/vary/-/vary-1.1.2.tgz`
- `https://registry.npmjs.org/wabt/-/wabt-1.0.39.tgz`
- `https://registry.npmjs.org/watchr/-/watchr-2.3.10.tgz`
- `https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz`
- `https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-4.0.0-beta.3.tgz`
- `https://registry.npmjs.org/whaileys/-/whaileys-6.5.0.tgz`
- `https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-3.1.1.tgz`
- `https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-4.0.0.tgz`
- `https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz`
- `https://registry.npmjs.org/which/-/which-1.3.1.tgz`
- `https://registry.npmjs.org/which/-/which-2.0.2.tgz`
- `https://registry.npmjs.org/which-module/-/which-module-2.0.1.tgz`
- `https://registry.npmjs.org/whisper-node/-/whisper-node-1.1.1.tgz`
- `https://registry.npmjs.org/wmf/-/wmf-1.0.2.tgz`
- `https://registry.npmjs.org/word/-/word-0.3.0.tgz`
- `https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz`
- `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz`
- `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz`
- `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz`
- `https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz`
- `https://registry.npmjs.org/ws/-/ws-8.17.1.tgz`
- `https://registry.npmjs.org/ws/-/ws-8.21.0.tgz`
- `https://registry.npmjs.org/xlsx/-/xlsx-0.18.5.tgz`
- `https://registry.npmjs.org/xml2js/-/xml2js-0.5.0.tgz`
- `https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz`
- `https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz`
- `https://registry.npmjs.org/xmlcreate/-/xmlcreate-2.0.4.tgz`
- `https://registry.npmjs.org/xml-parse-from-string/-/xml-parse-from-string-1.0.1.tgz`
- `https://registry.npmjs.org/xtend/-/xtend-2.1.2.tgz`
- `https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz`
- `https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz`
- `https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz`
- `https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz`
- `https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz`
- `https://registry.npmjs.org/zip-stream/-/zip-stream-4.1.1.tgz`
- `https://registry.npmjs.org/zod/-/zod-3.25.76.tgz`
- `https://sheets.googleapis.com`
- `https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0`
- `https://tidelift.com/funding/github/npm/postcss`
- `https://tu-imagen.com/foto.jpg`
- `https://via.placeholder.com/300x150?text=Imagen+de+Cabecera`
- `https://wa.me/${cleanPhone}`
- `https://wa.me/${ctx.from.replace(/[^0-9]/g`
- `https://wa.me/${phone.replace(/\D/g`
- `https://wa.me/${phone}`
- `https://web.whatsapp.com`
- `https://www.google.com`
- `https://www.googleapis.com`
- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.npmjs.com/support`
- `https://www.patreon.com/feross`
- `https://ygyicozjewxbyixtpjlo.supabase.co/functions/v1/whatsapp-router/register`

## Auditoria carpeta por carpeta

### `.`

#### `.dockerignore`

- Tipo: texto; extension: `.dockerignore`; tamano: 539 bytes; lineas: 44
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `.env`

- Tipo: texto; extension: `.env`; tamano: 4403 bytes; lineas: 44
- Nota: Archivo de entorno auditado con valores redactados.
- Variables entorno vinculadas: `ASSISTANT_ID`, `ASSISTANT_ID_IMG`, `ASSISTANT_NAME`, `BACKOFFICE_TOKEN`, `GOOGLE_CALENDAR_ID`, `GOOGLE_CLIENT_EMAIL`, `GOOGLE_MAPS_API_KEY`, `GOOGLE_PRIVATE_KEY`, `ID_GRUPO_RESUMEN`, `ID_GRUPO_RESUMEN_2`, `msjCierre`, `msjSeguimiento1`, `msjSeguimiento2`, `msjSeguimiento3`, `OPENAI_API_KEY`, `OPENAI_API_KEY_IMG`, `RAILWAY_TOKEN`, `SHEET_ID_RESUMEN`, `timeOutCierre`, `timeOutSeguimiento2`, `timeOutSeguimiento3`, `VECTOR_STORE_ID`, `SUPABASE_KEY`, `SUPABASE_URL`, `META_APP_ID`, `META_APP_SECRET`, `META_CONFIG_ID`, `RAILWAY_PROJECT_ID`, `RAILWAY_ENVIRONMENT_ID`, `RAILWAY_SERVICE_ID`, `RAILWAY_PUBLIC_DOMAIN`, `META_WABA_ID`, `META_PHONE_ID`, `SYSTEM_CONFIG_VISIBLE`

#### `.eslintrc.json`

- Tipo: texto; extension: `.json`; tamano: 700 bytes; lineas: 26
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `.gitattributes`

- Tipo: texto; extension: `.gitattributes`; tamano: 68 bytes; lineas: 3
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `.gitignore`

- Tipo: texto; extension: `.gitignore`; tamano: 775 bytes; lineas: 50
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `.npmrc`

- Tipo: texto; extension: `.npmrc`; tamano: 23 bytes; lineas: 2
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `aquavita-multi.md`

- Tipo: texto; extension: `.md`; tamano: 30996 bytes; lineas: 859
- Funciones/clases/simbolos:
  - `L715: function extractArray`
- Eventos/listeners:
  - `L25: setting_changed`

#### `baileys.log`

- Tipo: texto; extension: `.log`; tamano: 1708 bytes; lineas: 29
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `core.class.log`

- Tipo: texto; extension: `.log`; tamano: 0 bytes; lineas: 0
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `dev-tunnel.js`

- Tipo: texto; extension: `.js`; tamano: 1891 bytes; lineas: 61
- Funciones/clases/simbolos:
  - `L10: function printUrlIfReady`
- Vincula/importa: `child_process`
- Eventos/listeners:
  - `L25: data`
  - `L34: data`
  - `L44: data`
  - `L55: SIGINT`
- Variables entorno vinculadas: `PORT`
- URLs externas:
  - `http://localhost:${port}`
  - `http://localhost:${port}`]`

#### `docker-compose.yml`

- Tipo: texto; extension: `.yml`; tamano: 316 bytes; lineas: 17
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `Dockerfile`

- Tipo: texto; extension: ``; tamano: 2870 bytes; lineas: 76
- URLs externas:
  - `https://dl-ssl.google.com/linux/linux_signing_key.pub`
  - `http://dl.google.com/linux/chrome/deb/`

#### `LICENSE`

- Tipo: texto; extension: ``; tamano: 1074 bytes; lineas: 21
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `nodemon.json`

- Tipo: texto; extension: `.json`; tamano: 178 bytes; lineas: 12
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `package.json`

- Tipo: texto; extension: `.json`; tamano: 3508 bytes; lineas: 103
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `package-lock.json`

- Tipo: texto; extension: `.json`; tamano: 464459 bytes; lineas: 12465
- Vincula/importa: `node:util`
- URLs externas:
  - `https://registry.npmjs.org/@adiwajshing/keyed-db/-/keyed-db-0.2.4.tgz`
  - `https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz`
  - `https://github.com/sponsors/sindresorhus`
  - `https://registry.npmjs.org/@arr/every/-/every-1.0.1.tgz`
  - `https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz`
  - `https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz`
  - `https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz`
  - `https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz`
  - `https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz`
  - `https://registry.npmjs.org/@bazel/runfiles/-/runfiles-6.5.0.tgz`
  - `https://registry.npmjs.org/@borewit/text-codec/-/text-codec-0.2.0.tgz`
  - `https://github.com/sponsors/Borewit`
  - `https://registry.npmjs.org/@builderbot-plugins/openai-assistants/-/openai-assistants-0.0.2.tgz`
  - `https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz`
  - `https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz`
  - `https://registry.npmjs.org/multer/-/multer-1.4.5-lts.1.tgz`
  - `https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz`
  - `https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz`
  - `https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz`
  - `https://registry.npmjs.org/@builderbot/bot/-/bot-1.3.5.tgz`
  - `https://registry.npmjs.org/body-parser/-/body-parser-1.20.4.tgz`
  - `https://registry.npmjs.org/debug/-/debug-2.6.9.tgz`
  - `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz`
  - `https://registry.npmjs.org/ms/-/ms-2.0.0.tgz`
  - `https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz`
  - `https://registry.npmjs.org/@builderbot/provider-baileys/-/provider-baileys-1.3.5.tgz`
  - `https://registry.npmjs.org/@cacheable/memoize/-/memoize-2.0.3.tgz`
  - `https://registry.npmjs.org/@cacheable/memory/-/memory-2.0.4.tgz`
  - `https://registry.npmjs.org/@cacheable/node-cache/-/node-cache-1.7.4.tgz`
  - `https://registry.npmjs.org/@cacheable/utils/-/utils-2.2.0.tgz`
  - `https://registry.npmjs.org/@deepgram/captions/-/captions-1.2.0.tgz`
  - `https://registry.npmjs.org/@deepgram/sdk/-/sdk-3.13.0.tgz`
  - `https://registry.npmjs.org/@types/node/-/node-18.19.130.tgz`
  - `https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz`
  - `https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.4.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.4.tgz`
  - `https://registry.npmjs.org/@eshaz/web-worker/-/web-worker-1.2.2.tgz`
  - `https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz`
  - `https://opencollective.com/eslint`
  - `https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz`
  - `https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz`
  - `https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz`
  - `https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz`
  - `https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz`
  - `https://registry.npmjs.org/@fast-csv/format/-/format-4.3.5.tgz`
  - `https://registry.npmjs.org/@types/node/-/node-14.18.63.tgz`
  - `https://registry.npmjs.org/@fast-csv/parse/-/parse-4.3.6.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/darwin-arm64/-/darwin-arm64-4.1.5.tgz`
  - `https://git.ffmpeg.org/gitweb/ffmpeg.git/blob_plain/HEAD:/LICENSE.md`
  - `https://registry.npmjs.org/@ffmpeg-installer/darwin-x64/-/darwin-x64-4.1.0.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/ffmpeg/-/ffmpeg-1.1.0.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/linux-arm/-/linux-arm-4.1.3.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/linux-arm64/-/linux-arm64-4.1.4.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/linux-ia32/-/linux-ia32-4.1.0.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/linux-x64/-/linux-x64-4.1.0.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/win32-ia32/-/win32-ia32-4.1.0.tgz`
  - `https://registry.npmjs.org/@ffmpeg-installer/win32-x64/-/win32-x64-4.1.0.tgz`
  - `https://registry.npmjs.org/@fortawesome/fontawesome-free/-/fontawesome-free-7.2.0.tgz`
  - `https://registry.npmjs.org/@googlemaps/google-maps-services-js/-/google-maps-services-js-3.4.2.tgz`
  - `https://registry.npmjs.org/@googlemaps/url-signature/-/url-signature-1.0.40.tgz`
  - `https://registry.npmjs.org/@hapi/boom/-/boom-9.1.4.tgz`
  - `https://registry.npmjs.org/@hapi/hoek/-/hoek-9.3.0.tgz`
  - `https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz`
  - `https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz`
  - `https://github.com/sponsors/nzakas`
  - `https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz`
  - `https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz`
  - `https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.0.tgz`
  - `https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz`
  - `https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz`
  - `https://github.com/chalk/ansi-regex?sponsor=1`
  - `https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz`
  - `https://github.com/chalk/strip-ansi?sponsor=1`
  - `https://registry.npmjs.org/@jimp/core/-/core-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/diff/-/diff-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/file-ops/-/file-ops-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/js-bmp/-/js-bmp-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/js-gif/-/js-gif-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/js-jpeg/-/js-jpeg-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/js-png/-/js-png-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/js-tiff/-/js-tiff-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-blit/-/plugin-blit-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-blur/-/plugin-blur-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-circle/-/plugin-circle-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-color/-/plugin-color-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-contain/-/plugin-contain-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-cover/-/plugin-cover-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-crop/-/plugin-crop-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-displace/-/plugin-displace-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-dither/-/plugin-dither-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-fisheye/-/plugin-fisheye-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-flip/-/plugin-flip-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-hash/-/plugin-hash-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-mask/-/plugin-mask-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-print/-/plugin-print-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-quantize/-/plugin-quantize-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-resize/-/plugin-resize-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-rotate/-/plugin-rotate-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/plugin-threshold/-/plugin-threshold-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/types/-/types-1.6.0.tgz`
  - `https://registry.npmjs.org/@jimp/utils/-/utils-1.6.0.tgz`
  - `https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz`
  - `https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz`
  - `https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz`
  - `https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz`
  - `https://registry.npmjs.org/@jsdoc/salty/-/salty-0.2.9.tgz`
  - `https://registry.npmjs.org/@keyv/bigmap/-/bigmap-1.1.0.tgz`
  - `https://registry.npmjs.org/@keyv/serialize/-/serialize-1.1.1.tgz`
  - `https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz`
  - `https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz`
  - `https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz`
  - `https://registry.npmjs.org/@pinojs/redact/-/redact-0.4.0.tgz`
  - `https://registry.npmjs.org/@polka/url/-/url-0.5.0.tgz`
  - `https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz`
  - `https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz`
  - `https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.4.tgz`
  - `https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz`
  - `https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz`
  - `https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz`
  - `https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.0.tgz`
  - `https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz`
  - `https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz`
  - `https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.0.tgz`
  - `https://registry.npmjs.org/@rollup/plugin-typescript/-/plugin-typescript-12.3.0.tgz`
  - `https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.3.0.tgz`
  - `https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz`
  - `https://github.com/sponsors/jonschlinkert`
  - `https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.53.2.tgz`
  - `https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.53.2.tgz`
  - `https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.2.tgz`
  - `https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.87.1.tgz`
  - `https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.17.tgz`
  - `https://registry.npmjs.org/@tokenizer/inflate/-/inflate-0.3.1.tgz`
  - `https://registry.npmjs.org/@borewit/text-codec/-/text-codec-0.1.1.tgz`
  - `https://registry.npmjs.org/token-types/-/token-types-6.1.1.tgz`
  - `https://registry.npmjs.org/@tokenizer/token/-/token-0.3.0.tgz`
  - `https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz`
  - `https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz`
  - `https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz`
  - `https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz`
  - `https://registry.npmjs.org/@types/express/-/express-5.0.5.tgz`
  - `https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.0.tgz`
  - `https://registry.npmjs.org/@types/fs-extra/-/fs-extra-11.0.4.tgz`
  - `https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz`
  - `https://registry.npmjs.org/@types/jsonfile/-/jsonfile-6.1.4.tgz`
  - `https://registry.npmjs.org/@types/linkify-it/-/linkify-it-5.0.0.tgz`
  - `https://registry.npmjs.org/@types/long/-/long-4.0.2.tgz`
  - `https://registry.npmjs.org/@types/markdown-it/-/markdown-it-14.1.2.tgz`
  - `https://registry.npmjs.org/@types/mdurl/-/mdurl-2.0.0.tgz`
  - `https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz`
  - `https://registry.npmjs.org/@types/multer/-/multer-1.4.13.tgz`
  - `https://registry.npmjs.org/@types/node/-/node-20.19.24.tgz`
  - `https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.13.tgz`
  - `https://registry.npmjs.org/@types/phoenix/-/phoenix-1.6.7.tgz`
  - `https://registry.npmjs.org/@types/pino/-/pino-7.0.4.tgz`
  - `https://registry.npmjs.org/@types/polka/-/polka-0.5.8.tgz`
  - `https://registry.npmjs.org/@types/qrcode/-/qrcode-1.5.6.tgz`
  - `https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz`
  - `https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz`
  - `https://registry.npmjs.org/@types/selenium-webdriver/-/selenium-webdriver-4.35.6.tgz`
  - `https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz`
  - `https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.10.tgz`
  - `https://registry.npmjs.org/@types/send/-/send-0.17.6.tgz`
  - `https://registry.npmjs.org/@types/trouter/-/trouter-3.1.4.tgz`
  - `https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-7.18.0.tgz`
  - `https://opencollective.com/typescript-eslint`
  - `https://registry.npmjs.org/@typescript-eslint/parser/-/parser-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/types/-/types-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/utils/-/utils-7.18.0.tgz`
  - `https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-7.18.0.tgz`
  - `https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz`
  - `https://registry.npmjs.org/@wasm-audio-decoders/common/-/common-9.0.7.tgz`
  - `https://registry.npmjs.org/@wasm-audio-decoders/opus-ml/-/opus-ml-0.0.2.tgz`
  - `https://github.com/sponsors/eshaz`
  - `https://registry.npmjs.org/@whiskeysockets/baileys/-/baileys-6.7.21.tgz`
  - `https://github.com/whiskeysockets/libsignal-node.git`
  - `https://registry.npmjs.org/pino/-/pino-9.14.0.tgz`
  - `https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz`
  - `https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz`
  - `https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz`
  - `https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz`
  - `https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz`
  - `https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz`
  - `https://registry.npmjs.org/adler-32/-/adler-32-1.3.1.tgz`
  - `https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz`
  - `https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.6.0.tgz`
  - `https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz`
  - `https://github.com/sponsors/epoberezkin`
  - `https://registry.npmjs.org/ambi/-/ambi-2.0.0.tgz`
  - `https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz`
  - `https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz`
  - `https://github.com/chalk/ansi-styles?sponsor=1`
  - `https://registry.npmjs.org/any-base/-/any-base-1.1.0.tgz`
  - `https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz`
  - `https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz`
  - `https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz`
  - `https://registry.npmjs.org/archiver/-/archiver-5.3.2.tgz`
  - `https://registry.npmjs.org/archiver-utils/-/archiver-utils-2.1.0.tgz`
  - `https://registry.npmjs.org/glob/-/glob-7.2.3.tgz`
  - `https://github.com/sponsors/isaacs`
  - `https://registry.npmjs.org/arg/-/arg-5.0.2.tgz`
  - `https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz`
  - `https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz`
  - `https://registry.npmjs.org/async/-/async-3.2.6.tgz`
  - `https://registry.npmjs.org/async-mutex/-/async-mutex-0.5.0.tgz`
  - `https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz`
  - `https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz`
  - `https://registry.npmjs.org/await-to-js/-/await-to-js-3.0.0.tgz`
  - `https://registry.npmjs.org/axios/-/axios-1.13.2.tgz`
  - `https://registry.npmjs.org/b4a/-/b4a-1.7.3.tgz`
  - `https://registry.npmjs.org/baileys/-/baileys-7.0.0-rc.5.tgz`
  - `https://registry.npmjs.org/bal-util/-/bal-util-1.18.0.tgz`
  - `https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz`
  - `https://registry.npmjs.org/bare-events/-/bare-events-2.8.2.tgz`
  - `https://registry.npmjs.org/bare-fs/-/bare-fs-4.5.0.tgz`
  - `https://registry.npmjs.org/bare-os/-/bare-os-3.6.2.tgz`
  - `https://registry.npmjs.org/bare-path/-/bare-path-3.0.0.tgz`
  - `https://registry.npmjs.org/bare-stream/-/bare-stream-2.7.0.tgz`
  - `https://registry.npmjs.org/bare-url/-/bare-url-2.3.2.tgz`
  - `https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz`
  - `https://github.com/sponsors/feross`
  - `https://www.patreon.com/feross`
  - `https://feross.org/support`
  - `https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz`
  - `https://registry.npmjs.org/big-integer/-/big-integer-1.6.52.tgz`
  - `https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.3.1.tgz`
  - `https://registry.npmjs.org/binary/-/binary-0.3.0.tgz`
  - `https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz`
  - `https://registry.npmjs.org/bl/-/bl-0.4.2.tgz`
  - `https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz`
  - `https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.34.tgz`
  - `https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz`
  - `https://registry.npmjs.org/bluebird/-/bluebird-3.4.7.tgz`
  - `https://registry.npmjs.org/bmp-ts/-/bmp-ts-1.0.9.tgz`
  - `https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz`
  - `https://opencollective.com/express`
  - `https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz`
  - `https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz`
  - `https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz`
  - `https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz`
  - `https://registry.npmjs.org/braces/-/braces-3.0.3.tgz`
  - `https://registry.npmjs.org/brotli/-/brotli-1.3.3.tgz`
  - `https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz`
  - `https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz`
  - `https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz`
  - `https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz`
  - `https://registry.npmjs.org/buffer-indexof-polyfill/-/buffer-indexof-polyfill-1.0.2.tgz`
  - `https://registry.npmjs.org/buffers/-/buffers-0.1.1.tgz`
  - `https://registry.npmjs.org/builderbot-provider-sherpa/-/builderbot-provider-sherpa-0.1.0.tgz`
  - `https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz`
  - `https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz`
  - `https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz`
  - `https://registry.npmjs.org/cacheable/-/cacheable-2.1.1.tgz`
  - `https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz`
  - `https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz`
  - `https://github.com/sponsors/ljharb`
  - `https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz`
  - `https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz`
  - `https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz`
  - `https://registry.npmjs.org/catharsis/-/catharsis-0.9.0.tgz`
  - `https://registry.npmjs.org/cfb/-/cfb-1.2.2.tgz`
  - `https://registry.npmjs.org/chainsaw/-/chainsaw-0.1.0.tgz`
  - `https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz`
  - `https://github.com/chalk/chalk?sponsor=1`
  - `https://registry.npmjs.org/cheerio/-/cheerio-1.1.2.tgz`
  - `https://github.com/cheeriojs/cheerio?sponsor=1`
  - `https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz`
  - `https://github.com/sponsors/fb55`
  - `https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz`
  - `https://paulmillr.com/funding/`
  - `https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz`
  - `https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz`
  - `https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz`
  - `https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz`
  - `https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz`
  - `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz`
  - `https://registry.npmjs.org/clone/-/clone-2.1.2.tgz`
  - `https://registry.npmjs.org/codec-parser/-/codec-parser-2.5.0.tgz`
  - `https://registry.npmjs.org/codepage/-/codepage-1.15.0.tgz`
  - `https://registry.npmjs.org/color/-/color-4.2.3.tgz`
  - `https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz`
  - `https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz`
  - `https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz`
  - `https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz`
  - `https://registry.npmjs.org/commander/-/commander-0.5.2.tgz`
  - `https://registry.npmjs.org/complex.js/-/complex.js-2.4.3.tgz`
  - `https://github.com/sponsors/rawify`
  - `https://registry.npmjs.org/compress-commons/-/compress-commons-4.1.2.tgz`
  - `https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz`
  - `https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz`
  - `https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.0.tgz`
  - `https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz`
  - `https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz`
  - `https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz`
  - `https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz`
  - `https://registry.npmjs.org/cors/-/cors-2.8.5.tgz`
  - `https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz`
  - `https://registry.npmjs.org/crc32-stream/-/crc32-stream-4.0.3.tgz`
  - `https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.2.0.tgz`
  - `https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz`
  - `https://registry.npmjs.org/crypto-js/-/crypto-js-4.2.0.tgz`
  - `https://registry.npmjs.org/css-select/-/css-select-5.2.2.tgz`
  - `https://registry.npmjs.org/css-what/-/css-what-6.2.2.tgz`
  - `https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz`
  - `https://registry.npmjs.org/curve25519-js/-/curve25519-js-0.0.4.tgz`
  - `https://registry.npmjs.org/dayjs/-/dayjs-1.11.19.tgz`
  - `https://registry.npmjs.org/debug/-/debug-4.4.3.tgz`
  - `https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz`
  - `https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz`
  - `https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.2.tgz`
  - `https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz`
  - `https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz`
  - `https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz`
  - `https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz`
  - `https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz`
  - `https://registry.npmjs.org/depd/-/depd-2.0.0.tgz`
  - `https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz`
  - `https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz`
  - `https://registry.npmjs.org/dfa/-/dfa-1.2.0.tgz`
  - `https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz`
  - `https://registry.npmjs.org/dijkstrajs/-/dijkstrajs-1.0.3.tgz`
  - `https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz`
  - `https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz`
  - `https://registry.npmjs.org/docker/-/docker-0.2.14.tgz`
  - `https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz`
  - `https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz`
  - `https://github.com/cheeriojs/dom-serializer?sponsor=1`
  - `https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz`
  - `https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz`
  - `https://github.com/fb55/domhandler?sponsor=1`
  - `https://registry.npmjs.org/domutils/-/domutils-3.2.2.tgz`
  - `https://github.com/fb55/domutils?sponsor=1`
  - `https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz`
  - `https://dotenvx.com`
  - `https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz`
  - `https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz`
  - `https://registry.npmjs.org/duplexify/-/duplexify-4.1.3.tgz`
  - `https://registry.npmjs.org/eachr/-/eachr-2.0.4.tgz`
  - `https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz`
  - `https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz`
  - `https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz`
  - `https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz`
  - `https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz`
  - `https://registry.npmjs.org/encoding-sniffer/-/encoding-sniffer-0.2.1.tgz`
  - `https://github.com/fb55/encoding-sniffer?sponsor=1`
  - `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz`
  - `https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz`
  - `https://registry.npmjs.org/engine.io/-/engine.io-6.6.4.tgz`
  - `https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.2.3.tgz`
  - `https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz`
  - `https://registry.npmjs.org/debug/-/debug-4.3.7.tgz`
  - `https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz`
  - `https://registry.npmjs.org/ws/-/ws-8.17.1.tgz`
  - `https://registry.npmjs.org/entities/-/entities-4.5.0.tgz`
  - `https://github.com/fb55/entities?sponsor=1`
  - `https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz`
  - `https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz`
  - `https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz`
  - `https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz`
  - `https://registry.npmjs.org/esbuild/-/esbuild-0.27.4.tgz`
  - `https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz`
  - `https://registry.npmjs.org/escape-latex/-/escape-latex-1.2.0.tgz`
  - `https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz`
  - `https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz`
  - `https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz`
  - `https://registry.npmjs.org/levn/-/levn-0.3.0.tgz`
  - `https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz`
  - `https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz`
  - `https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz`
  - `https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz`
  - `https://eslint.org/version-support`
  - `https://registry.npmjs.org/eslint-plugin-builderbot/-/eslint-plugin-builderbot-1.3.5.tgz`
  - `https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz`
  - `https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz`
  - `https://registry.npmjs.org/espree/-/espree-9.6.1.tgz`
  - `https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz`
  - `https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz`
  - `https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz`
  - `https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz`
  - `https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz`
  - `https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz`
  - `https://registry.npmjs.org/etag/-/etag-1.8.1.tgz`
  - `https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz`
  - `https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz`
  - `https://registry.npmjs.org/events/-/events-3.3.0.tgz`
  - `https://registry.npmjs.org/events-universal/-/events-universal-1.0.1.tgz`
  - `https://registry.npmjs.org/exceljs/-/exceljs-4.4.0.tgz`
  - `https://registry.npmjs.org/exif-parser/-/exif-parser-0.1.12.tgz`
  - `https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz`
  - `https://registry.npmjs.org/express/-/express-5.2.1.tgz`
  - `https://registry.npmjs.org/extend/-/extend-3.0.2.tgz`
  - `https://registry.npmjs.org/extendr/-/extendr-2.0.1.tgz`
  - `https://registry.npmjs.org/fast-csv/-/fast-csv-4.3.6.tgz`
  - `https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz`
  - `https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz`
  - `https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz`
  - `https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz`
  - `https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz`
  - `https://registry.npmjs.org/fast-redact/-/fast-redact-3.5.0.tgz`
  - `https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz`
  - `https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz`
  - `https://registry.npmjs.org/fflate/-/fflate-0.8.2.tgz`
  - `https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz`
  - `https://registry.npmjs.org/file-type/-/file-type-16.5.4.tgz`
  - `https://github.com/sindresorhus/file-type?sponsor=1`
  - `https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz`
  - `https://registry.npmjs.org/filter-obj/-/filter-obj-1.1.0.tgz`
  - `https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.0.tgz`
  - `https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz`
  - `https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz`
  - `https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz`
  - `https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz`
  - `https://registry.npmjs.org/fluent-ffmpeg/-/fluent-ffmpeg-2.1.3.tgz`
  - `https://www.npmjs.com/support`
  - `https://registry.npmjs.org/async/-/async-0.2.10.tgz`
  - `https://registry.npmjs.org/which/-/which-1.3.1.tgz`
  - `https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz`
  - `https://github.com/sponsors/RubenVerborgh`
  - `https://registry.npmjs.org/fontkit/-/fontkit-2.0.4.tgz`
  - `https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz`
  - `https://registry.npmjs.org/form-data/-/form-data-4.0.4.tgz`
  - `https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-1.7.2.tgz`
  - `https://registry.npmjs.org/formdata-node/-/formdata-node-4.4.1.tgz`
  - `https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz`
  - `https://registry.npmjs.org/frac/-/frac-1.1.2.tgz`
  - `https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz`
  - `https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz`
  - `https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz`
  - `https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz`
  - `https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.2.tgz`
  - `https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz`
  - `https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz`
  - `https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz`
  - `https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz`
  - `https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz`
  - `https://registry.npmjs.org/futoin-hkdf/-/futoin-hkdf-1.5.3.tgz`
  - `https://registry.npmjs.org/gaxios/-/gaxios-6.7.1.tgz`
  - `https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz`
  - `https://github.com/sponsors/broofa`
  - `https://github.com/sponsors/ctavan`
  - `https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz`
  - `https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz`
  - `https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz`
  - `https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz`
  - `https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz`
  - `https://github.com/privatenumber/get-tsconfig?sponsor=1`
  - `https://registry.npmjs.org/getsetdeep/-/getsetdeep-2.0.0.tgz`
  - `https://registry.npmjs.org/gifwrap/-/gifwrap-0.10.1.tgz`
  - `https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz`
  - `https://registry.npmjs.org/glob/-/glob-11.0.3.tgz`
  - `https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz`
  - `https://registry.npmjs.org/minimatch/-/minimatch-10.1.1.tgz`
  - `https://registry.npmjs.org/globals/-/globals-13.24.0.tgz`
  - `https://registry.npmjs.org/globby/-/globby-11.1.0.tgz`
  - `https://registry.npmjs.org/google-auth-library/-/google-auth-library-9.15.1.tgz`
  - `https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz`
  - `https://registry.npmjs.org/googleapis/-/googleapis-144.0.0.tgz`
  - `https://registry.npmjs.org/googleapis-common/-/googleapis-common-7.2.0.tgz`
  - `https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz`
  - `https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz`
  - `https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz`
  - `https://registry.npmjs.org/gtoken/-/gtoken-7.1.0.tgz`
  - `https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz`
  - `https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz`
  - `https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz`
  - `https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz`
  - `https://registry.npmjs.org/hookified/-/hookified-1.12.2.tgz`
  - `https://registry.npmjs.org/htmlparser2/-/htmlparser2-10.0.0.tgz`
  - `https://github.com/fb55/htmlparser2?sponsor=1`
  - `https://registry.npmjs.org/entities/-/entities-6.0.1.tgz`
  - `https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz`
  - `https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz`
  - `https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz`
  - `https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz`
  - `https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.1.tgz`
  - `https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz`
  - `https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz`
  - `https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz`
  - `https://registry.npmjs.org/image-q/-/image-q-4.0.0.tgz`
  - `https://registry.npmjs.org/@types/node/-/node-16.9.1.tgz`
  - `https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz`
  - `https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz`
  - `https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz`
  - `https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz`
  - `https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz`
  - `https://registry.npmjs.org/ini/-/ini-1.3.8.tgz`
  - `https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz`
  - `https://registry.npmjs.org/ip-address/-/ip-address-10.2.0.tgz`
  - `https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz`
  - `https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.4.tgz`
  - `https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz`
  - `https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz`
  - `https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz`
  - `https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz`
  - `https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz`
  - `https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz`
  - `https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz`
  - `https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz`
  - `https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz`
  - `https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz`
  - `https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz`
  - `https://registry.npmjs.org/jackspeak/-/jackspeak-4.1.1.tgz`
  - `https://registry.npmjs.org/javascript-natural-sort/-/javascript-natural-sort-0.7.1.tgz`
  - `https://registry.npmjs.org/jimp/-/jimp-1.6.0.tgz`
  - `https://registry.npmjs.org/jpeg-exif/-/jpeg-exif-1.1.4.tgz`
  - `https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.4.4.tgz`
  - `https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz`
  - `https://registry.npmjs.org/js2xmlparser/-/js2xmlparser-4.0.2.tgz`
  - `https://registry.npmjs.org/jsdoc/-/jsdoc-4.0.5.tgz`
  - `https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz`
  - `https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz`
  - `https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz`
  - `https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz`
  - `https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz`
  - `https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz`
  - `https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz`
  - `https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz`
  - `https://registry.npmjs.org/jszip/-/jszip-3.10.1.tgz`
  - `https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz`
  - `https://registry.npmjs.org/jws/-/jws-4.0.0.tgz`
  - `https://registry.npmjs.org/keyv/-/keyv-5.5.3.tgz`
  - `https://registry.npmjs.org/klaw/-/klaw-3.0.0.tgz`
  - `https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz`
  - `https://registry.npmjs.org/levn/-/levn-0.4.1.tgz`
  - `https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz`
  - `https://registry.npmjs.org/long/-/long-4.0.0.tgz`
  - `https://registry.npmjs.org/protobufjs/-/protobufjs-6.8.8.tgz`
  - `https://registry.npmjs.org/lie/-/lie-3.3.0.tgz`
  - `https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz`
  - `https://github.com/sponsors/antonk52`
  - `https://registry.npmjs.org/linebreak/-/linebreak-1.1.0.tgz`
  - `https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz`
  - `https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz`
  - `https://registry.npmjs.org/linkify-it/-/linkify-it-5.0.0.tgz`
  - `https://registry.npmjs.org/listenercount/-/listenercount-1.0.1.tgz`
  - `https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz`
  - `https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz`
  - `https://registry.npmjs.org/lodash.defaults/-/lodash.defaults-4.2.0.tgz`
  - `https://registry.npmjs.org/lodash.difference/-/lodash.difference-4.5.0.tgz`
  - `https://registry.npmjs.org/lodash.escaperegexp/-/lodash.escaperegexp-4.1.2.tgz`
  - `https://registry.npmjs.org/lodash.flatten/-/lodash.flatten-4.4.0.tgz`
  - `https://registry.npmjs.org/lodash.groupby/-/lodash.groupby-4.6.0.tgz`
  - `https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz`
  - `https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz`
  - `https://registry.npmjs.org/lodash.isfunction/-/lodash.isfunction-3.0.9.tgz`
  - `https://registry.npmjs.org/lodash.isnil/-/lodash.isnil-4.0.0.tgz`
  - `https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz`
  - `https://registry.npmjs.org/lodash.isundefined/-/lodash.isundefined-3.0.1.tgz`
  - `https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz`
  - `https://registry.npmjs.org/lodash.union/-/lodash.union-4.6.0.tgz`
  - `https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz`
  - `https://registry.npmjs.org/long/-/long-5.3.2.tgz`
  - `https://registry.npmjs.org/lru-cache/-/lru-cache-11.2.2.tgz`
  - `https://registry.npmjs.org/markdown-it/-/markdown-it-14.1.0.tgz`
  - `https://registry.npmjs.org/markdown-it-anchor/-/markdown-it-anchor-8.6.7.tgz`
  - `https://registry.npmjs.org/marked/-/marked-4.3.0.tgz`
  - `https://registry.npmjs.org/matchit/-/matchit-1.1.0.tgz`
  - `https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz`
  - `https://registry.npmjs.org/mathjs/-/mathjs-15.1.0.tgz`
  - `https://registry.npmjs.org/mdurl/-/mdurl-2.0.0.tgz`
  - `https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz`
  - `https://registry.npmjs.org/mercadopago/-/mercadopago-3.1.0.tgz`
  - `https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz`
  - `https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz`
  - `https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz`
  - `https://registry.npmjs.org/mime/-/mime-3.0.0.tgz`
  - `https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz`
  - `https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz`
  - `https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz`
  - `https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz`
  - `https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz`
  - `https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz`
  - `https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.2.tgz`
  - `https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz`
  - `https://registry.npmjs.org/moment/-/moment-2.30.1.tgz`
  - `https://registry.npmjs.org/moment-timezone/-/moment-timezone-0.6.0.tgz`
  - `https://registry.npmjs.org/ms/-/ms-2.1.3.tgz`
  - `https://registry.npmjs.org/multer/-/multer-2.1.1.tgz`
  - `https://registry.npmjs.org/music-metadata/-/music-metadata-11.10.0.tgz`
  - `https://buymeacoffee.com/borewit`
  - `https://registry.npmjs.org/file-type/-/file-type-21.1.0.tgz`
  - `https://registry.npmjs.org/strtok3/-/strtok3-10.3.4.tgz`
  - `https://registry.npmjs.org/mz/-/mz-2.7.0.tgz`
  - `https://registry.npmjs.org/nanoid/-/nanoid-3.3.13.tgz`
  - `https://github.com/sponsors/ai`
  - `https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz`
  - `https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz`
  - `https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz`
  - `https://registry.npmjs.org/node-abi/-/node-abi-3.80.0.tgz`
  - `https://registry.npmjs.org/node-addon-api/-/node-addon-api-6.1.0.tgz`
  - `https://registry.npmjs.org/node-cache/-/node-cache-5.1.2.tgz`
  - `https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz`
  - `https://github.com/sponsors/jimmywarting`
  - `https://paypal.me/jimmywarting`
  - `https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz`
  - `https://registry.npmjs.org/nodemon/-/nodemon-3.1.10.tgz`
  - `https://opencollective.com/nodemon`
  - `https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz`
  - `https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz`
  - `https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz`
  - `https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz`
  - `https://github.com/fb55/nth-check?sponsor=1`
  - `https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz`
  - `https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz`
  - `https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz`
  - `https://registry.npmjs.org/object-keys/-/object-keys-0.4.0.tgz`
  - `https://registry.npmjs.org/ogg-opus-decoder/-/ogg-opus-decoder-1.7.3.tgz`
  - `https://registry.npmjs.org/omggif/-/omggif-1.0.10.tgz`
  - `https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-2.1.2.tgz`
  - `https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz`
  - `https://registry.npmjs.org/once/-/once-1.4.0.tgz`
  - `https://registry.npmjs.org/openai/-/openai-4.104.0.tgz`
  - `https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz`
  - `https://registry.npmjs.org/opus-decoder/-/opus-decoder-0.7.11.tgz`
  - `https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz`
  - `https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz`
  - `https://registry.npmjs.org/p-queue/-/p-queue-9.0.0.tgz`
  - `https://registry.npmjs.org/p-timeout/-/p-timeout-7.0.1.tgz`
  - `https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz`
  - `https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz`
  - `https://registry.npmjs.org/pako/-/pako-1.0.11.tgz`
  - `https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz`
  - `https://registry.npmjs.org/parse-bmfont-ascii/-/parse-bmfont-ascii-1.0.6.tgz`
  - `https://registry.npmjs.org/parse-bmfont-binary/-/parse-bmfont-binary-1.0.6.tgz`
  - `https://registry.npmjs.org/parse-bmfont-xml/-/parse-bmfont-xml-1.1.6.tgz`
  - `https://registry.npmjs.org/parse5/-/parse5-7.3.0.tgz`
  - `https://github.com/inikulin/parse5?sponsor=1`
  - `https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-7.1.0.tgz`
  - `https://registry.npmjs.org/parse5-parser-stream/-/parse5-parser-stream-7.1.2.tgz`
  - `https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz`
  - `https://registry.npmjs.org/path/-/path-0.12.7.tgz`
  - `https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz`
  - `https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz`
  - `https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz`
  - `https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz`
  - `https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.1.tgz`
  - `https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz`
  - `https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz`
  - `https://registry.npmjs.org/pdfkit/-/pdfkit-0.16.0.tgz`
  - `https://registry.npmjs.org/peek-readable/-/peek-readable-4.1.0.tgz`
  - `https://registry.npmjs.org/pg/-/pg-8.16.3.tgz`
  - `https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.2.7.tgz`
  - `https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.9.1.tgz`
  - `https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz`
  - `https://registry.npmjs.org/pg-pool/-/pg-pool-3.10.1.tgz`
  - `https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.10.3.tgz`
  - `https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz`
  - `https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz`
  - `https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz`
  - `https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz`
  - `https://registry.npmjs.org/pify/-/pify-2.3.0.tgz`
  - `https://registry.npmjs.org/pino/-/pino-10.1.0.tgz`
  - `https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-2.0.0.tgz`
  - `https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-7.0.0.tgz`
  - `https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz`
  - `https://registry.npmjs.org/pixelmatch/-/pixelmatch-5.3.0.tgz`
  - `https://registry.npmjs.org/pngjs/-/pngjs-6.0.0.tgz`
  - `https://registry.npmjs.org/png-js/-/png-js-1.0.0.tgz`
  - `https://registry.npmjs.org/pngjs/-/pngjs-7.0.0.tgz`
  - `https://registry.npmjs.org/pnpm/-/pnpm-9.15.9.tgz`
  - `https://opencollective.com/pnpm`
  - `https://registry.npmjs.org/polka/-/polka-0.5.2.tgz`
  - `https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz`
  - `https://opencollective.com/postcss/`
  - `https://tidelift.com/funding/github/npm/postcss`
  - `https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz`
  - `https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz`
  - `https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz`
  - `https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.4.tgz`
  - `https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz`
  - `https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz`
  - `https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz`
  - `https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz`
  - `https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz`
  - `https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz`
  - `https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.4.tgz`
  - `https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz`
  - `https://registry.npmjs.org/process/-/process-0.11.10.tgz`
  - `https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz`
  - `https://registry.npmjs.org/process-warning/-/process-warning-5.0.0.tgz`
  - `https://github.com/sponsors/fastify`
  - `https://opencollective.com/fastify`
  - `https://registry.npmjs.org/protobufjs/-/protobufjs-7.5.4.tgz`
  - `https://registry.npmjs.org/protobufjs-cli/-/protobufjs-cli-1.1.3.tgz`
  - `https://registry.npmjs.org/glob/-/glob-8.1.0.tgz`
  - `https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz`
  - `https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz`
  - `https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz`
  - `https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz`
  - `https://registry.npmjs.org/pump/-/pump-3.0.3.tgz`
  - `https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz`
  - `https://registry.npmjs.org/punycode.js/-/punycode.js-2.3.1.tgz`
  - `https://registry.npmjs.org/pygmentize-bundled/-/pygmentize-bundled-2.1.1.tgz`
  - `https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.5.tgz`
  - `https://registry.npmjs.org/qified/-/qified-0.5.1.tgz`
  - `https://registry.npmjs.org/qrcode/-/qrcode-1.5.4.tgz`
  - `https://registry.npmjs.org/qrcode-terminal/-/qrcode-terminal-0.12.0.tgz`
  - `https://registry.npmjs.org/pngjs/-/pngjs-5.0.0.tgz`
  - `https://registry.npmjs.org/qs/-/qs-6.14.0.tgz`
  - `https://registry.npmjs.org/query-string/-/query-string-7.1.3.tgz`
  - `https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz`
  - `https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.4.tgz`
  - `https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz`
  - `https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz`
  - `https://registry.npmjs.org/rc/-/rc-1.2.8.tgz`
  - `https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz`
  - `https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz`
  - `https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz`
  - `https://registry.npmjs.org/readable-web-to-node-stream/-/readable-web-to-node-stream-3.0.4.tgz`
  - `https://registry.npmjs.org/readable-stream/-/readable-stream-4.7.0.tgz`
  - `https://registry.npmjs.org/readdir-glob/-/readdir-glob-1.1.3.tgz`
  - `https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz`
  - `https://registry.npmjs.org/readline-sync/-/readline-sync-1.4.10.tgz`
  - `https://registry.npmjs.org/real-require/-/real-require-0.2.0.tgz`
  - `https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz`
  - `https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz`
  - `https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz`
  - `https://registry.npmjs.org/requizzle/-/requizzle-0.2.4.tgz`
  - `https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz`
  - `https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz`
  - `https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz`
  - `https://github.com/privatenumber/resolve-pkg-maps?sponsor=1`
  - `https://registry.npmjs.org/restructure/-/restructure-3.0.2.tgz`
  - `https://registry.npmjs.org/retry-axios/-/retry-axios-2.6.0.tgz`
  - `https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz`
  - `https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz`
  - `https://registry.npmjs.org/rollup/-/rollup-4.53.2.tgz`
  - `https://registry.npmjs.org/router/-/router-2.2.0.tgz`
  - `https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz`
  - `https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz`
  - `https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz`
  - `https://registry.npmjs.org/safecallback/-/safecallback-1.0.1.tgz`
  - `https://registry.npmjs.org/safefs/-/safefs-2.0.3.tgz`
  - `https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz`
  - `https://registry.npmjs.org/sax/-/sax-1.4.3.tgz`
  - `https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz`
  - `https://registry.npmjs.org/seedrandom/-/seedrandom-3.0.5.tgz`
  - `https://registry.npmjs.org/selenium-webdriver/-/selenium-webdriver-4.45.0.tgz`
  - `https://github.com/sponsors/SeleniumHQ`
  - `https://opencollective.com/selenium`
  - `https://registry.npmjs.org/semver/-/semver-7.7.3.tgz`
  - `https://registry.npmjs.org/send/-/send-1.2.0.tgz`
  - `https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz`
  - `https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz`
  - `https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz`
  - `https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz`
  - `https://registry.npmjs.org/sharp/-/sharp-0.32.6.tgz`
  - `https://opencollective.com/libvips`
  - `https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz`
  - `https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz`
  - `https://registry.npmjs.org/shelljs/-/shelljs-0.8.5.tgz`
  - `https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz`
  - `https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz`
  - `https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz`
  - `https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz`
  - `https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz`
  - `https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz`
  - `https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz`
  - `https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.4.tgz`
  - `https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz`
  - `https://registry.npmjs.org/simple-xml-to-json/-/simple-xml-to-json-1.2.3.tgz`
  - `https://registry.npmjs.org/simple-yenc/-/simple-yenc-1.0.4.tgz`
  - `https://registry.npmjs.org/slash/-/slash-3.0.0.tgz`
  - `https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz`
  - `https://registry.npmjs.org/socket.io/-/socket.io-4.8.1.tgz`
  - `https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.5.5.tgz`
  - `https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.2.4.tgz`
  - `https://registry.npmjs.org/socks/-/socks-2.8.9.tgz`
  - `https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.5.tgz`
  - `https://registry.npmjs.org/sonic-boom/-/sonic-boom-4.2.0.tgz`
  - `https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz`
  - `https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz`
  - `https://registry.npmjs.org/split-on-first/-/split-on-first-1.1.0.tgz`
  - `https://registry.npmjs.org/split2/-/split2-4.2.0.tgz`
  - `https://registry.npmjs.org/ssf/-/ssf-0.11.2.tgz`
  - `https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz`
  - `https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.3.tgz`
  - `https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz`
  - `https://registry.npmjs.org/streamx/-/streamx-2.23.0.tgz`
  - `https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-2.0.0.tgz`
  - `https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz`
  - `https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz`
  - `https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz`
  - `https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz`
  - `https://registry.npmjs.org/strtok3/-/strtok3-6.3.0.tgz`
  - `https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz`
  - `https://registry.npmjs.org/commander/-/commander-4.1.1.tgz`
  - `https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz`
  - `https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz`
  - `https://registry.npmjs.org/sweetalert2/-/sweetalert2-11.26.25.tgz`
  - `https://github.com/sponsors/limonte`
  - `https://registry.npmjs.org/sweetalert2-react-content/-/sweetalert2-react-content-5.1.2.tgz`
  - `https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz`
  - `https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz`
  - `https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz`
  - `https://registry.npmjs.org/tar-fs/-/tar-fs-3.1.1.tgz`
  - `https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.7.tgz`
  - `https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz`
  - `https://registry.npmjs.org/bl/-/bl-4.1.0.tgz`
  - `https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz`
  - `https://registry.npmjs.org/taskgroup/-/taskgroup-2.0.0.tgz`
  - `https://registry.npmjs.org/text-decoder/-/text-decoder-1.2.3.tgz`
  - `https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz`
  - `https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz`
  - `https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz`
  - `https://registry.npmjs.org/thread-stream/-/thread-stream-3.1.0.tgz`
  - `https://registry.npmjs.org/through2/-/through2-0.2.3.tgz`
  - `https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz`
  - `https://registry.npmjs.org/xtend/-/xtend-2.1.2.tgz`
  - `https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-2.1.0.tgz`
  - `https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz`
  - `https://registry.npmjs.org/tinycolor2/-/tinycolor2-1.6.0.tgz`
  - `https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz`
  - `https://github.com/sponsors/SuperchupuDev`
  - `https://registry.npmjs.org/tmp/-/tmp-0.2.7.tgz`
  - `https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz`
  - `https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz`
  - `https://registry.npmjs.org/token-types/-/token-types-4.2.1.tgz`
  - `https://registry.npmjs.org/touch/-/touch-3.1.1.tgz`
  - `https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz`
  - `https://registry.npmjs.org/traverse/-/traverse-0.3.9.tgz`
  - `https://registry.npmjs.org/trouter/-/trouter-2.0.1.tgz`
  - `https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz`
  - `https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz`
  - `https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz`
  - `https://registry.npmjs.org/tsx/-/tsx-4.20.6.tgz`
  - `https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.12.tgz`
  - `https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.12.tgz`
  - `https://registry.npmjs.org/esbuild/-/esbuild-0.25.12.tgz`
  - `https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz`
  - `https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz`
  - `https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz`
  - `https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz`
  - `https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz`
  - `https://registry.npmjs.org/typechecker/-/typechecker-2.0.8.tgz`
  - `https://registry.npmjs.org/typed-function/-/typed-function-4.2.2.tgz`
  - `https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz`
  - `https://registry.npmjs.org/typescript/-/typescript-6.0.2.tgz`
  - `https://registry.npmjs.org/uc.micro/-/uc.micro-2.1.0.tgz`
  - `https://registry.npmjs.org/uglify-js/-/uglify-js-3.19.3.tgz`
  - `https://registry.npmjs.org/uint8array-extras/-/uint8array-extras-1.5.0.tgz`
  - `https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz`
  - `https://registry.npmjs.org/underscore/-/underscore-1.13.7.tgz`
  - `https://registry.npmjs.org/undici/-/undici-7.16.0.tgz`
  - `https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz`
  - `https://registry.npmjs.org/unicode-properties/-/unicode-properties-1.4.1.tgz`
  - `https://registry.npmjs.org/unicode-trie/-/unicode-trie-2.0.0.tgz`
  - `https://registry.npmjs.org/pako/-/pako-0.2.9.tgz`
  - `https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz`
  - `https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz`
  - `https://registry.npmjs.org/unzipper/-/unzipper-0.10.14.tgz`
  - `https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz`
  - `https://registry.npmjs.org/url-template/-/url-template-2.0.8.tgz`
  - `https://registry.npmjs.org/utif2/-/utif2-4.1.0.tgz`
  - `https://registry.npmjs.org/util/-/util-0.10.4.tgz`
  - `https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz`
  - `https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz`
  - `https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz`
  - `https://registry.npmjs.org/vary/-/vary-1.1.2.tgz`
  - `https://registry.npmjs.org/wabt/-/wabt-1.0.39.tgz`
  - `https://registry.npmjs.org/watchr/-/watchr-2.3.10.tgz`
  - `https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-4.0.0-beta.3.tgz`
  - `https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz`
  - `https://registry.npmjs.org/whaileys/-/whaileys-6.5.0.tgz`
  - `https://registry.npmjs.org/axios/-/axios-0.24.0.tgz`
  - `https://registry.npmjs.org/music-metadata/-/music-metadata-7.14.0.tgz`
  - `https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-0.2.0.tgz`
  - `https://registry.npmjs.org/pino/-/pino-7.11.0.tgz`
  - `https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-0.5.0.tgz`
  - `https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-4.0.0.tgz`
  - `https://registry.npmjs.org/process-warning/-/process-warning-1.0.0.tgz`
  - `https://registry.npmjs.org/real-require/-/real-require-0.1.0.tgz`
  - `https://registry.npmjs.org/sonic-boom/-/sonic-boom-2.8.0.tgz`
  - `https://registry.npmjs.org/thread-stream/-/thread-stream-0.15.2.tgz`
  - `https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-3.1.1.tgz`
  - `https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-4.0.0.tgz`
  - `https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz`
  - `https://registry.npmjs.org/which/-/which-2.0.2.tgz`
  - `https://registry.npmjs.org/which-module/-/which-module-2.0.1.tgz`
  - `https://registry.npmjs.org/whisper-node/-/whisper-node-1.1.1.tgz`
  - `https://registry.npmjs.org/wmf/-/wmf-1.0.2.tgz`
  - `https://registry.npmjs.org/word/-/word-0.3.0.tgz`
  - `https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz`
  - `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz`
  - `https://github.com/chalk/wrap-ansi?sponsor=1`
  - `https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz`
  - `https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz`
  - `https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz`
  - `https://registry.npmjs.org/ws/-/ws-8.21.0.tgz`
  - `https://registry.npmjs.org/xlsx/-/xlsx-0.18.5.tgz`
  - `https://registry.npmjs.org/xml-parse-from-string/-/xml-parse-from-string-1.0.1.tgz`
  - `https://registry.npmjs.org/xml2js/-/xml2js-0.5.0.tgz`
  - `https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz`
  - `https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz`
  - `https://registry.npmjs.org/xmlcreate/-/xmlcreate-2.0.4.tgz`
  - `https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz`
  - `https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz`
  - `https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz`
  - `https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz`
  - `https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz`
  - `https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz`
  - `https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz`
  - `https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz`
  - `https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz`
  - `https://registry.npmjs.org/zip-stream/-/zip-stream-4.1.1.tgz`
  - `https://registry.npmjs.org/archiver-utils/-/archiver-utils-3.0.4.tgz`
  - `https://registry.npmjs.org/zod/-/zod-3.25.76.tgz`
  - `https://github.com/sponsors/colinhacks`

#### `pnpm-lock.yaml`

- Tipo: texto; extension: `.yaml`; tamano: 264536 bytes; lineas: 8361
- Vincula/importa: `node:util`
- URLs externas:
  - `https://github.com/WhiskeySockets/Baileys/security/advisories/GHSA-qvv5-jq5g-4cgg`
  - `https://eslint.org/version-support`
  - `https://www.npmjs.com/support`
  - `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f:`
  - `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f}`
  - `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7:`
  - `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7}`
  - `https://codeload.github.com/whiskeysockets/libsignal-node/tar.gz/bcea72df9ec34d9d9140ab30619cf479c7c144c7`
  - `https://codeload.github.com/canove/libsignal-node/tar.gz/105ad38dc8d7668b5d5e3688e710915bef5cdc7f`

#### `queue.class.log`

- Tipo: texto; extension: `.log`; tamano: 0 bytes; lineas: 0
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `railway.json`

- Tipo: texto; extension: `.json`; tamano: 3400 bytes; lineas: 147
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `rollup.config.js`

- Tipo: texto; extension: `.js`; tamano: 554 bytes; lineas: 20
- Vincula/importa: `@rollup/plugin-typescript`
- Exporta:
  - `L3: export default {`

#### `tsconfig.json`

- Tipo: texto; extension: `.json`; tamano: 710 bytes; lineas: 34
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `assets`

#### `assets/android-chrome-192x192.png`

- Tipo: binario/asset; extension: `.png`; tamano: 16220 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/android-chrome-512x512.png`

- Tipo: binario/asset; extension: `.png`; tamano: 68706 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/apple-touch-icon.png`

- Tipo: binario/asset; extension: `.png`; tamano: 14584 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/favicon.ico`

- Tipo: binario/asset; extension: `.ico`; tamano: 15406 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/favicon-16x16.png`

- Tipo: binario/asset; extension: `.png`; tamano: 442 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/favicon-32x32.png`

- Tipo: binario/asset; extension: `.png`; tamano: 1077 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/logo.jpg`

- Tipo: binario/asset; extension: `.jpg`; tamano: 60994 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `assets/wa-bg-light.webp`

- Tipo: binario/asset; extension: `.webp`; tamano: 78998 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `dist`

#### `dist/app.js`

- Tipo: texto; extension: `.js`; tamano: 842295 bytes; lineas: 18106
- Funciones/clases/simbolos:
  - `L3: var __esm =>`
  - `L6: var __export =>`
  - `L24: const init =>`
  - `L44: const saveToDb =>`
  - `L58: const clearSession =>`
  - `L68: const saveToDbDebounced =>`
  - `L158: function restoreSessionFromDb`
  - `L206: function isSessionInDb`
  - `L219: function deleteSessionFromDb`
  - `L232: function deleteAllProjectSessionsFromDb`
  - `L245: function startSessionSync`
  - `L258: function syncToDb`
  - `L324: function ensureStoreDir`
  - `L329: function readJsonFile`
  - `L343: function writeJsonFile`
  - `L1744: const thirtySecondsAgo = new`
  - `L2235: const blockedIds = new`
  - `L3103: const currentKeys = new`
  - `L3579: function getArgentinaDatetimeString`
  - `L3580: const nowUtc = new`
  - `L3581: const gmt3 = new`
  - `L3599: function executeDbQuery`
  - `L3660: function setSessionToken`
  - `L3664: function setTokenVencimiento`
  - `L3667: function setUsuarioId`
  - `L3670: function getSessionToken`
  - `L3673: function getTokenVencimiento`
  - `L3676: function getUsuarioId`
  - `L3679: function ensureValidToken`
  - `L3844: function getMapsUbication`
  - `L3854: const client = new`
  - `L3882: function parseDomicilioString`
  - `L3973: const sanitizeQuery =>`
  - `L4234: const parsed = new`
  - `L4404: function limpiarBloquesJSON`
  - `L4961: function toDDMMYYYY`
  - `L4981: function parseDate`
  - `L4986: function validarRangoFechas`
  - `L5001: function getFechaCierreEstimado`
  - `L5015: function esRespuestaExitosa`
  - `L5023: function logApiResponse`
  - `L5792: method constructor`
  - `L5802: method login`
  - `L5864: function generateUsername`
  - `L5871: function createUserSelenium`
  - `L5873: const options = new`
  - `L5881: const authenticator = new`
  - `L6005: function rechargeUserSelenium`
  - `L6011: const options = new`
  - `L6018: const authenticator = new`
  - `L6150: function withdrawalUser`
  - `L6156: const options = new`
  - `L6163: const authenticator = new`
  - `L6444: method constructor`
  - `L6454: method login`
  - `L6515: function generateUsername2`
  - `L6520: function createUserSelenium2`
  - `L6522: const options = new`
  - `L6533: const authenticator = new`
  - `L6706: function rechargeUserSelenium2`
  - `L6712: const options = new`
  - `L6722: const authenticator = new`
  - `L6867: function withdrawalUser2`
  - `L6873: const options = new`
  - `L6883: const authenticator = new`
  - `L7186: function loadActiveClientModule`
  - `L7214: function createMercadoPagoPreference`
  - `L7225: const client = new`
  - `L7226: const preference = new`
  - `L7254: function verifyMercadoPagoPayment`
  - `L7285: function getActiveModule`
  - `L7291: function invalidateModuleCache`
  - `L7294: function executeClientTool`
  - `L7373: function getOpenAIBaseUrl`
  - `L7384: function getOpenAI`
  - `L7402: function getOpenAIVision`
  - `L7416: function safeParseJson`
  - `L7424: function syncAssistantTools`
  - `L7472: const regex = new`
  - `L7632: const regex = new`
  - `L7753: function autoUpdateBotAbilities`
  - `L7769: const openai2 = new`
  - `L7873: function updateAllSheets`
  - `L7891: function ensureTableExists`
  - `L7932: function processSheetById`
  - `L7962: const colToLetter =>`
  - `L8077: function uploadDataToAssistant`
  - `L8110: function attachFileToVectorStore`
  - `L8135: function deleteOldFiles`
  - `L8152: function deleteTemporaryFiles`
  - `L8227: function compressImageToDisk`
  - `L8244: const handleQR =>`
  - `L8489: const getStatus =>`
  - `L8610: function discoverMetaIds`
  - `L8612: const logDiag =>`
  - `L8831: function addPhoneNumberToWaba`
  - `L8858: function requestPhoneNumberOtp`
  - `L8871: function verifyPhoneNumberOtp`
  - `L8890: function getWabaStatus`
  - `L8904: function getPhoneLimit`
  - `L8929: function discoverAndLinkMetaPages`
  - `L9244: function processImageWithVision`
  - `L9266: const openai2 = new`
  - `L9337: function verifyReceiptFlow`
  - `L9457: method constructor`
  - `L9846: function migrateLidChatToPhone`
  - `L9939: method constructor`
  - `L9947: method updateConfig`
  - `L9961: method saveFile`
  - `L10042: method getExtByMimeOrType`
  - `L10061: method initProvider`
  - `L10064: method initVendor`
  - `L10071: method beforeHttpServerInit`
  - `L10073: method afterHttpServerInit`
  - `L10088: method getTemplates`
  - `L10109: method createTemplate`
  - `L10190: method formatNumberForMeta`
  - `L10202: method sendTemplate`
  - `L10239: method getLibraryTemplates`
  - `L10285: method getDemoTemplates`
  - `L10310: method transcodeToSupportedFormat`
  - `L10357: method uploadMedia`
  - `L10376: const form = new`
  - `L10463: method sendMessage`
  - `L10598: method requestSmbSync`
  - `L10620: method sendImage`
  - `L10623: method sendSticker`
  - `L10626: method sendVideo`
  - `L10629: method sendAudio`
  - `L10632: method sendFile`
  - `L10638: method sendText`
  - `L10809: const timeoutPromise = new`
  - `L10895: method sendMessenger`
  - `L10921: method constructor`
  - `L10925: method reportError`
  - `L10954: var getDriveClient2 =>`
  - `L10958: var getOpenAIClient2 =>`
  - `L10966: function updateAllDocs`
  - `L10976: function processDocById`
  - `L11042: function attachFileToVectorStore2`
  - `L11067: function deleteTemporaryDocx`
  - `L11079: var updateMain =>`
  - `L11096: var registerProcessCallback =>`
  - `L11099: var handleQueue =>`
  - `L11141: function invalidateAuthCache`
  - `L11147: function _getUserInfo`
  - `L11167: function _fetchAdminPass`
  - `L11173: const fallback = new`
  - `L11182: var backofficeAuth =>`
  - `L11191: const searchParams = new`
  - `L11247: var systemConfigAuth =>`
  - `L11255: const searchParams = new`
  - `L11298: var invalidateVisibilityCache =>`
  - `L11301: var registerStaticRoutes =>`
  - `L11302: const serveHtmlPage =>`
  - `L11303: const handler =>`
  - `L11324: const resolveDisplayName =>`
  - `L11340: const getSettingSafe =>`
  - `L11342: const timeoutPromise = new`
  - `L11568: function triggerMetaSync`
  - `L11583: var processSendMessage =>`
  - `L11685: var sendJson =>`
  - `L11691: var processBulkTemplate =>`
  - `L11988: var registerBackofficeRoutes =>`
  - `L12010: const resolveProjectId =>`
  - `L12308: const timeout = new`
  - `L12426: const existingIds = new`
  - `L12603: const parsed = new`
  - `L12900: const isAbsent =>`
  - `L12950: const syncMetaProvider =>`
  - `L13157: const msgDate = new`
  - `L13231: const msgDate = new`
  - `L13483: function toggleLogs`
  - `L13488: function saveManual`
  - `L13620: const isAbsent =>`
  - `L13883: const urlObj = new`
  - `L14829: const sendDirectWabaMessage =>`
  - `L14859: const attemptCreateMetaWabaGroup =>`
  - `L15098: var processImportExcel =>`
  - `L15175: function getOpenAICost`
  - `L15177: const startOfMonth = new`
  - `L15178: const endOfMonth = new`
  - `L15206: var registerDashboardRoutes =>`
  - `L15207: const resolveProjectId =>`
  - `L15222: const date = new`
  - `L15276: const tAss = new`
  - `L15277: const tUser = new`
  - `L15319: method addUserMessage`
  - `L15324: method addAssistantMessage`
  - `L15329: method clear`
  - `L15339: method getSession`
  - `L15346: method resetSession`
  - `L15361: var transcribeAudioFile =>`
  - `L15409: function withRetry`
  - `L15433: var registerWebchatRoutes =>`
  - `L15550: const webChatAdapterFn =>`
  - `L15578: const flowDynamic =>`
  - `L15608: var registerRailwayRoutes =>`
  - `L15669: var initSocketIO =>`
  - `L15676: const io = new`
  - `L15733: const flowDynamic =>`
  - `L15770: var startHumanInactivityWorker =>`
  - `L15776: const threshold = new`
  - `L15805: var startFileCleanupWorker =>`
  - `L15807: const cleanDirectory =>`
  - `L15833: const runCleanup =>`
  - `L15869: var extraerDatosResumen =>`
  - `L15872: const cleanValue =>`
  - `L15924: var addToSheet =>`
  - `L15980: method constructor`
  - `L15996: method start`
  - `L16106: method waitForUserResponse`
  - `L16109: const onMessage =>`
  - `L16135: method getState`
  - `L16144: method restoreState`
  - `L16154: function formatSummary`
  - `L16172: function sendTextToGroup`
  - `L16183: function sendMediaToGroup`
  - `L16247: function cleanUpMediaFiles`
  - `L16266: function reportAndClose`
  - `L16370: const reconFlow = new`
  - `L16424: const reconFlow = new`
  - `L16483: var start =>`
  - `L16497: var reset =>`
  - `L16505: var stop =>`
  - `L16513: method constructor`
  - `L16524: method getAssistantMap`
  - `L16538: method getAssignedAssistantId`
  - `L16580: method analizarDestinoRecepcionista`
  - `L16598: method extraerResumenRecepcionista`
  - `L16753: function logApiRequest`
  - `L16771: var registerExternalApiRoutes =>`
  - `L16777: const fifteenMinsAgo = new`
  - `L16806: const expiresAt = new`
  - `L16898: const regex = new`
  - `L16946: function processExternalBulk`
  - `L16970: const regex = new`
  - `L16998: var compatibilityLayer =>`
  - `L17070: var rootRedirect =>`
  - `L17084: var smartBodyParser =>`
  - `L17456: function extraerPaginasComoPNG`
  - `L17555: function getAddressFromCoordinates`
  - `L17560: const client = new`
  - `L17713: function registerSafeErrorHandlers`
  - `L17723: var main =>`
  - `L17944: const adapterFlow = createFlow`
  - `L17945: const adapterDB = new`
  - `L17968: const agent = new`
  - `L18085: var processUserMessage =>`
- Vincula/importa: `@supabase/supabase-js`, `@whiskeysockets/baileys`, `fs`, `path`, `crypto`, `events`, `dotenv`, `axios`, `@googlemaps/google-maps-services-js`, `googleapis`, `google-auth-library`, `dotenv/config`, `stream/promises`, `moment`, `openai`, `moment-timezone`, `util`, `selenium-webdriver`, `selenium-webdriver/chrome.js`, `mercadopago`, `glob`, `qrcode`, `url`, `@builderbot/bot`, `@builderbot-plugins/openai-assistants`, `builderbot-provider-sherpa`, `pino`, `child_process`, `form-data`, `body-parser`, `xlsx`, `serve-static`, `multer`, `socket.io`
- Exporta:
  - `L18089: export {`
- Rutas HTTP:
  - `L11427: app.GET /favicon.ico`
  - `L11442: app.GET /app.js`
  - `L11445: app.USE /js`
  - `L11446: app.USE /style`
  - `L11447: app.USE /assets`
  - `L11448: app.USE /assets`
  - `L11449: app.USE /vendor/toast`
  - `L11450: app.USE /vendor/fontawesome`
  - `L11451: app.USE /uploads`
  - `L11452: app.USE /temp`
  - `L11453: app.USE /app/temp`
  - `L11454: app.USE /tmp`
  - `L11455: app.USE /app/tmp`
  - `L11456: app.GET /qr.png`
  - `L11477: app.GET /bot.groups.qr.png`
  - `L12014: app.POST /api/backoffice/log-error`
  - `L12022: app.POST /api/backoffice/auth`
  - `L12058: app.GET /api/backoffice/me`
  - `L12080: app.GET /api/backoffice/users`
  - `L12084: app.POST /api/backoffice/users`
  - `L12092: app.PUT /api/backoffice/users/:id`
  - `L12101: app.DELETE /api/backoffice/users/:id`
  - `L12109: app.POST /api/backoffice/chat/assign`
  - `L12114: app.GET /api/backoffice/chats`
  - `L12125: app.DELETE /api/backoffice/chats/vaciar`
  - `L12143: app.GET /api/backoffice/notifications/summary`
  - `L12213: app.GET /api/backoffice/chats/import-template`
  - `L12230: app.GET /api/backoffice/chats/:id`
  - `L12241: app.POST /api/backoffice/chats/import`
  - `L12244: app.GET /api/backoffice/quick-messages`
  - `L12253: app.POST /api/backoffice/quick-messages`
  - `L12266: app.DELETE /api/backoffice/quick-messages/:id`
  - `L12276: app.GET /api/backoffice/messages/:chatId`
  - `L12283: app.GET /api/backoffice/profile-pic/:chatId`
  - `L12327: app.POST /api/backoffice/whatsapp/sync-contacts`
  - `L12518: app.POST /api/backoffice/send-message`
  - `L12532: app.DELETE /api/backoffice/messages/:chatId/:messageId`
  - `L12583: app.POST /api/backoffice/forward-message`
  - `L12668: app.POST /api/backoffice/baileys/start`
  - `L12715: app.POST /api/backoffice/toggle-bot`
  - `L12729: app.GET /api/backoffice/tags`
  - `L12734: app.GET /api/backoffice/chat/:id/contact`
  - `L12747: app.PUT /api/backoffice/chat/:id/contact`
  - `L12771: app.POST /api/backoffice/chat/manual-lead`
  - `L12782: app.POST /api/backoffice/tags`
  - `L12787: app.PUT /api/backoffice/tags/:id`
  - `L12792: app.DELETE /api/backoffice/tags/:id`
  - `L12796: app.POST /api/backoffice/chats/:chatId/tags`
  - `L12801: app.DELETE /api/backoffice/chats/:chatId/tags/:tagId`
  - `L12805: app.GET /api/backoffice/tickets/pending-count`
  - `L12811: app.GET /api/backoffice/tickets`
  - `L12822: app.POST /api/backoffice/tickets`
  - `L12831: app.PUT /api/backoffice/crm/ticket/:id`
  - `L12840: app.PUT /api/backoffice/tickets/:id`
  - `L12849: app.DELETE /api/backoffice/tickets/:id`
  - `L12859: app.GET /api/backoffice/crm/config`
  - `L12869: app.POST /api/backoffice/crm/config`
  - `L12879: app.GET /api/backoffice/crm/tasks`
  - `L12888: app.GET /api/backoffice/leads`
  - `L12895: app.GET /api/backoffice/whatsapp/config`
  - `L12916: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L12971: app.GET /api/backoffice/whatsapp/templates`
  - `L12985: app.GET /api/backoffice/whatsapp/library-templates`
  - `L13002: app.POST /api/backoffice/whatsapp/templates`
  - `L13030: app.POST /api/backoffice/whatsapp/register-step-1`
  - `L13067: app.POST /api/backoffice/whatsapp/register-step-2`
  - `L13091: app.GET /api/backoffice/whatsapp/template-excel/:templateName`
  - `L13214: app.POST /api/backoffice/whatsapp/send-bulk-template`
  - `L13218: app.POST /api/backoffice/whatsapp/send-quick-template`
  - `L13367: app.GET /api/backoffice/chats/import-template`
  - `L13382: app.GET /api/backoffice/whatsapp/onboard-callback`
  - `L13587: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L13610: app.POST /api/backoffice/whatsapp/sync-ids`
  - `L13654: app.POST /api/backoffice/whatsapp/unlink-meta`
  - `L13708: app.POST /api/backoffice/whatsapp/onboard`
  - `L13734: app.POST /api/backoffice/sync-assistant-prompt`
  - `L13759: app.GET /api/backoffice/get-setting`
  - `L13770: app.POST /api/backoffice/save-setting`
  - `L13789: app.GET /api/backoffice/mercadopago/status`
  - `L13808: app.GET /api/backoffice/mercadopago/accounts`
  - `L13818: app.POST /api/backoffice/mercadopago/accounts/activate`
  - `L13834: app.POST /api/backoffice/mercadopago/accounts/delete`
  - `L13876: app.GET /api/backoffice/mercadopago/auth-url`
  - `L13905: app.GET /api/backoffice/mercadopago/callback`
  - `L14009: app.GET /api/mercadopago/callback`
  - `L14142: app.GET /api/clientes/mercadopago/webhook`
  - `L14146: app.POST /api/clientes/mercadopago/webhook`
  - `L14251: app.POST /api/backoffice/mercadopago/disconnect`
  - `L14264: app.POST /api/backoffice/mercadopago/create-link`
  - `L14278: app.POST /api/backoffice/whatsapp/sync-smb`
  - `L14284: app.GET whatsappProvider`
  - `L14308: app.GET /api/backoffice/whatsapp/groups`
  - `L14340: app.GET /api/backoffice/crm/tasks`
  - `L14349: app.POST /api/backoffice/crm/update-lead`
  - `L14363: app.POST /api/backoffice/chat/assign`
  - `L14383: app.GET /api/backoffice/crm/config`
  - `L14392: app.POST /api/backoffice/crm/config`
  - `L14402: app.GET /api/backoffice/config`
  - `L14433: app.POST /api/backoffice/save-settings-bulk`
  - `L14463: app.GET /api/backoffice/settings`
  - `L14484: app.GET /api/backoffice/get-prompt`
  - `L14500: app.GET /api/backoffice/openai/models`
  - `L14528: app.POST /api/backoffice/update-prompt`
  - `L14565: app.GET /api/backoffice/get-docs`
  - `L14591: app.GET /api/backoffice/blacklist/status`
  - `L14599: app.POST /api/backoffice/blacklist/activate`
  - `L14610: app.POST /api/backoffice/blacklist/deactivate`
  - `L14623: app.GET /api/backoffice/blacklist`
  - `L14645: app.POST /api/backoffice/blacklist`
  - `L14664: app.DELETE /api/backoffice/blacklist/:chatId`
  - `L14674: app.GET /api/backoffice/blacklist/check/:chatId`
  - `L14683: app.POST /api/backoffice/blacklist/toggle/:chatId`
  - `L14707: app.GET /api/backoffice/notifications/status`
  - `L14714: app.POST /api/backoffice/notifications/activate`
  - `L14725: app.POST /api/backoffice/notifications/deactivate`
  - `L14746: app.GET /api/backoffice/reportes/status`
  - `L14754: app.POST /api/backoffice/reportes/activate`
  - `L14765: app.POST /api/backoffice/reportes/deactivate`
  - `L14776: app.GET /api/backoffice/reportes`
  - `L14788: app.GET /api/backoffice/waba-groups/status`
  - `L14797: app.POST /api/backoffice/waba-groups/status`
  - `L14807: app.GET /api/backoffice/waba-groups`
  - `L14816: app.POST /api/backoffice/waba-groups`
  - `L15030: app.DELETE /api/backoffice/waba-groups/:id`
  - `L15078: app.POST /api/backoffice/chat/read/:chatId`
  - `L15211: app.GET /api/dashboard/openai-usage`
  - `L15235: app.GET /api/dashboard/stats`
  - `L15434: app.POST /webchat-api`
  - `L15609: app.POST /api/restart-bot`
  - `L15628: app.GET /api/variables`
  - `L15641: app.POST /api/update-variables`
  - `L16773: app.POST /api/v1/auth`
  - `L16826: app.POST /api/v1/send-template`
  - `L17963: app.GET /health`
  - `L17964: app.GET /api/test-proxy`
  - `L18005: app.GET /api/assistant-name`
  - `L18020: app.GET /api/dashboard-status`
  - `L18021: app.POST /api/delete-session`
- Eventos/listeners:
  - `L2861: postgres_changes`
  - `L2884: postgres_changes`
  - `L2911: postgres_changes`
  - `L7353: setting_changed`
  - `L8270: qr`
  - `L8271: require_action`
  - `L8272: auth_require`
  - `L8273: message`
  - `L8367: message_from_me`
  - `L8454: contacts_sync`
  - `L8475: ready`
  - `L9612: messaging-history.set`
  - `L9628: contacts.upsert`
  - `L9647: contacts.update`
  - `L9663: creds.update`
  - `L9666: connection.update`
  - `L9721: messages.upsert`
  - `L10028: finish`
  - `L10032: error`
  - `L10996: end`
  - `L10996: error`
  - `L11009: end`
  - `L11009: error`
  - `L11519: setting_changed`
  - `L11994: uncaughtException`
  - `L12001: unhandledRejection`
  - `L15680: new_message`
  - `L15683: message_deleted`
  - `L15686: bot_toggled`
  - `L15689: contact_updated`
  - `L15692: ticket_updated`
  - `L15695: ticket_deleted`
  - `L15698: setting_changed`
  - `L15701: reporte_created`
  - `L15704: message_status_update`
  - `L15707: user_updated`
  - `L15710: connection`
  - `L15711: message`
  - `L16123: message`
  - `L17050: error`
  - `L17716: uncaughtException`
  - `L17719: unhandledRejection`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`, `ASSISTANT_NAME`, `BOT_NAME`, `RAILWAY_SERVICE_NAME`, `PROJECT_ID`, `STORAGE_MODE`, `SYSTEM_CONFIG_VISIBLE`, `RAILWAY_STATIC_URL`, `RAILWAY_PUBLIC_DOMAIN`, `PROJECT_URL`, `OPENAI_API_KEY`, `OPENAI_ADMIN_API_KEY`, `OPENAI_API_KEY_TOOLS`, `AQUAVITA_SWS_BASE_URL`, `SWS_BASE_URL`, `AQUAVITA_SWS_USERNAME`, `SWS_USERNAME`, `AQUAVITA_SWS_PASSWORD`, `SWS_PASSWORD`, `GOOGLE_MAPS_API_KEY`, `GOOGLE_PROXY_URL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_CLIENT_EMAIL`, `GOOGLE_CALENDAR_ID`, `GANAMOSNET_USER`, `GANAMOSNET_PASS`, `SELENIUM_HEADLESS`, `CASEPC_USER`, `CASEPC_PASS`, `CLIENT_SLUG`, `OPENAI_BASE_URL`, `SHEET_ID_UPDATE`, `VECTOR_STORE_ID`, `META_APP_ID`, `META_APP_SECRET`, `RAILWAY_TOKEN`, `RAILWAY_ENVIRONMENT_ID`, `RAILWAY_SERVICE_ID`, `META_API_VERSION`, `DOCX_ID_UPDATE`, `ADMIN_PASS`, `BACKOFFICE_TOKEN`, `CRM_VISIBLE`, `ADMIN_USER`, `PROJECT_NAME`, `META_WABA_ID`, `META_PHONE_ID`, `META_ACCESS_TOKEN`, `META_CONFIG_ID`, `META_VERIFY_TOKEN`, `MP_APP_ID`, `MP_PASS`, `MP_TOKEN_TEST`, `MP_ACCESS_TOKEN`, `SHEET_ID_RESUMEN`, `SHEET_RESUMEN_RANGE`, `ASSISTANT_ID`, `PORT`
- Tablas/RPC vinculadas: `whatsapp_sessions`, `rpc:exec_sql`, `chats`, `messages`, `tickets`, `meta_onboarding`, `waba_report_groups`, `mercadopago_acount_user`, `settings`, `proyectos_railway`, `tags`, `chat_tags`, `blacklist`, `users`, `routing_table`, `system_logs`, `quick_messages`, `mercadopago_payments_clients`, `clientes`, `mercadopago_user_routoing`, `auditoria_acciones`, `api_logs`, `api_tokens`
- URLs externas:
  - `https://${publicDomain}`
  - `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`
  - `https://google-proxy.duskcodes.com.ar`
  - `https://www.googleapis.com`
  - `https://oauth2.googleapis.com`
  - `https://sheets.googleapis.com`
  - `https://calendar.googleapis.com`
  - `https://drive.googleapis.com`
  - `https://www.googleapis.com/auth/calendar`
  - `https://www.googleapis.com/auth/drive.readonly`
  - `https://www.googleapis.com/auth/drive.file`
  - `https://agents.ganamosnet.org/`
  - `https://agents.ganamosnet.org/users/all`
  - `https://agents.ganamosnet.org/user/create-player`
  - `https://admin.epcbet.net/index.php?act=admin&area=login`
  - `https://admin.epcbet.net/index.php`
  - `https://api.mercadopago.com/v1/payments/${paymentId}`
  - `https://proxy.duskcodes.com.ar/v1`
  - `https://www.googleapis.com/auth/spreadsheets`
  - `https://graph.facebook.com/v22.0/${phoneId}`
  - `https://graph.facebook.com/v22.0/${metaOnboarding.whatsappBusinessId}`
  - `https://graph.facebook.com/v22.0/me?fields=name,id,email`
  - `https://graph.facebook.com/v22.0/me/businesses`
  - `https://graph.facebook.com/v22.0/${business.id}/owned_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${business.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me?fields=id,name,whatsapp_business_accounts,owned_whatsapp_business_accounts,client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/debug_token`
  - `https://graph.facebook.com/v22.0/${businessId}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${wabaId}/phone_numbers`
  - `https://graph.facebook.com/v22.0/${phoneId}/request_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/verify_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/register`
  - `https://graph.facebook.com/v22.0/${wabaId}`
  - `https://graph.facebook.com/v22.0/me/accounts`
  - `https://graph.facebook.com/v22.0/${pageId}/subscribed_apps`
  - `https://backboard.railway.com/graphql/v2`
  - `https://api.imgur.com/3/image`
  - `https://graph.facebook.com/${apiVersion}/${mediaId}`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates?fields=id,name,status,components,language,category,parameter_format`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/message_template_library?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/v22.0/${MASTER_WABA_ID}/message_templates?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/media`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/smb_app_data`
  - `https://graph.facebook.com/v25.0/me/messages?access_token=${access_token}`
  - `https://graph.facebook.com/v22.0/${phoneId}/smb_app_data`
  - `https://drive.google.com/uc?export=download&id=${driveIdMatch[1]}`
  - `https://${host}`
  - `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  - `http://${host}`
  - `https://${baseUrl}`
  - `https://tu-imagen.com/foto.jpg`
  - `https://graph.facebook.com/v22.0/oauth/access_token`
  - `https://graph.facebook.com/v22.0/${finalPhoneId}/register`
  - `https://graph.facebook.com/v22.0/${finalWabaId}/subscribed_apps`
  - `https://duskcodes.com.ar/dashboard.html?metaStatus=success`
  - `https://duskcodes.com.ar/dashboard.html`
  - `https://graph.facebook.com/v22.0/${phoneId}/deregister`
  - `https://ygyicozjewxbyixtpjlo.supabase.co/functions/v1/whatsapp-router/register`
  - `https://api.mercadopago.com/oauth/token/revoke`
  - `https://${domain}`
  - `https://auth.mercadopago.com.ar/authorization?client_id=${appId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${stateBase64}`
  - `https://api.mercadopago.com/oauth/token`
  - `https://api.mercadopago.com/users/me`
  - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/messages`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/groups`
  - `https://graph.facebook.com/v22.0/${groupId}/invite_link`
  - `https://graph.facebook.com/v22.0/${groupJid}`
  - `https://graph.facebook.com/v22.0/${groupJid}/invite_link`
  - `https://graph.facebook.com/v22.0/${existingGroup.jid}/invite_link`
  - `https://api.openai.com/v1/organization/costs`
  - `https://wa.me/${phone}`
  - `https://wa.me/${ctx.from.replace(/[^0-9]/g`
  - `https://www.google.com`
  - `https://api.ipify.org?format=json`
  - `https://web.whatsapp.com`
  - `http://localhost:${PORT}`

#### `dist/tsconfig.tsbuildinfo`

- Tipo: binario/asset; extension: `.tsbuildinfo`; tamano: 404234 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `dist/backend`

#### `dist/backend/app.js`

- Tipo: texto; extension: `.js`; tamano: 780686 bytes; lineas: 16897
- Funciones/clases/simbolos:
  - `L3: var __esm =>`
  - `L6: var __export =>`
  - `L24: const init =>`
  - `L44: const saveToDb =>`
  - `L58: const clearSession =>`
  - `L68: const saveToDbDebounced =>`
  - `L157: function restoreSessionFromDb`
  - `L205: function isSessionInDb`
  - `L218: function deleteSessionFromDb`
  - `L231: function startSessionSync`
  - `L246: function syncToDb`
  - `L316: function ensureStoreDir`
  - `L321: function readJsonFile`
  - `L335: function writeJsonFile`
  - `L1703: const thirtySecondsAgo = new`
  - `L2188: const blockedIds = new`
  - `L3475: function getArgentinaDatetimeString`
  - `L3476: const nowUtc = new`
  - `L3477: const gmt3 = new`
  - `L3495: function executeDbQuery`
  - `L3556: function setSessionToken`
  - `L3560: function setTokenVencimiento`
  - `L3563: function setUsuarioId`
  - `L3566: function getSessionToken`
  - `L3569: function getTokenVencimiento`
  - `L3572: function getUsuarioId`
  - `L3575: function ensureValidToken`
  - `L3740: function getMapsUbication`
  - `L3750: const client = new`
  - `L3778: function parseDomicilioString`
  - `L3869: const sanitizeQuery =>`
  - `L4130: const parsed = new`
  - `L4300: function limpiarBloquesJSON`
  - `L4857: function toDDMMYYYY`
  - `L4877: function parseDate`
  - `L4882: function validarRangoFechas`
  - `L4897: function getFechaCierreEstimado`
  - `L4911: function esRespuestaExitosa`
  - `L4919: function logApiResponse`
  - `L5688: method constructor`
  - `L5698: method login`
  - `L5760: function generateUsername`
  - `L5767: function createUserSelenium`
  - `L5769: const options = new`
  - `L5777: const authenticator = new`
  - `L5899: function rechargeUserSelenium`
  - `L5905: const options = new`
  - `L5912: const authenticator = new`
  - `L6042: function withdrawalUser`
  - `L6048: const options = new`
  - `L6055: const authenticator = new`
  - `L6355: function loadActiveClientModule`
  - `L6381: function createMercadoPagoPreference`
  - `L6395: const client = new`
  - `L6396: const preference = new`
  - `L6437: function getActiveModule`
  - `L6443: function invalidateModuleCache`
  - `L6446: function executeClientTool`
  - `L6525: function getOpenAIBaseUrl`
  - `L6536: function getOpenAI`
  - `L6554: function getOpenAIVision`
  - `L6568: function safeParseJson`
  - `L6576: function syncAssistantTools`
  - `L6624: const regex = new`
  - `L6747: const regex = new`
  - `L6868: function autoUpdateBotAbilities`
  - `L6884: const openai3 = new`
  - `L6988: function updateAllSheets`
  - `L7006: function ensureTableExists`
  - `L7047: function processSheetById`
  - `L7077: const colToLetter =>`
  - `L7192: function uploadDataToAssistant`
  - `L7225: function attachFileToVectorStore`
  - `L7250: function deleteOldFiles`
  - `L7267: function deleteTemporaryFiles`
  - `L7342: function compressImageToDisk`
  - `L7359: const handleQR =>`
  - `L7604: const getStatus =>`
  - `L7725: function discoverMetaIds`
  - `L7727: const logDiag =>`
  - `L7946: function addPhoneNumberToWaba`
  - `L7973: function requestPhoneNumberOtp`
  - `L7986: function verifyPhoneNumberOtp`
  - `L8005: function getWabaStatus`
  - `L8019: function getPhoneLimit`
  - `L8044: function discoverAndLinkMetaPages`
  - `L8388: method constructor`
  - `L8759: function migrateLidChatToPhone`
  - `L8852: method constructor`
  - `L8860: method updateConfig`
  - `L8874: method saveFile`
  - `L8955: method getExtByMimeOrType`
  - `L8974: method initProvider`
  - `L8977: method initVendor`
  - `L8984: method beforeHttpServerInit`
  - `L8986: method afterHttpServerInit`
  - `L9001: method getTemplates`
  - `L9022: method createTemplate`
  - `L9103: method formatNumberForMeta`
  - `L9115: method sendTemplate`
  - `L9152: method getLibraryTemplates`
  - `L9198: method getDemoTemplates`
  - `L9223: method transcodeToSupportedFormat`
  - `L9270: method uploadMedia`
  - `L9289: const form = new`
  - `L9376: method sendMessage`
  - `L9511: method requestSmbSync`
  - `L9533: method sendImage`
  - `L9536: method sendSticker`
  - `L9539: method sendVideo`
  - `L9542: method sendAudio`
  - `L9545: method sendFile`
  - `L9551: method sendText`
  - `L9722: const timeoutPromise = new`
  - `L9808: method sendMessenger`
  - `L9834: method constructor`
  - `L9838: method reportError`
  - `L9867: var getDriveClient2 =>`
  - `L9871: var getOpenAIClient2 =>`
  - `L9879: function updateAllDocs`
  - `L9889: function processDocById`
  - `L9955: function attachFileToVectorStore2`
  - `L9980: function deleteTemporaryDocx`
  - `L9992: var updateMain =>`
  - `L10018: function invalidateAuthCache`
  - `L10024: function _getUserInfo`
  - `L10044: function _fetchAdminPass`
  - `L10050: const fallback = new`
  - `L10059: var backofficeAuth =>`
  - `L10068: const searchParams = new`
  - `L10124: var systemConfigAuth =>`
  - `L10132: const searchParams = new`
  - `L10173: var invalidateVisibilityCache =>`
  - `L10176: var registerStaticRoutes =>`
  - `L10177: const serveHtmlPage =>`
  - `L10178: const handler =>`
  - `L10202: const getSettingSafe =>`
  - `L10204: const timeoutPromise = new`
  - `L10399: function triggerMetaSync`
  - `L10414: var processSendMessage =>`
  - `L10513: var sendJson =>`
  - `L10519: var processBulkTemplate =>`
  - `L10814: var registerBackofficeRoutes =>`
  - `L10834: const resolveProjectId =>`
  - `L11092: const timeout = new`
  - `L11210: const existingIds = new`
  - `L11387: const parsed = new`
  - `L11683: const isAbsent =>`
  - `L11733: const syncMetaProvider =>`
  - `L11940: const msgDate = new`
  - `L12014: const msgDate = new`
  - `L12266: function toggleLogs`
  - `L12271: function saveManual`
  - `L12403: const isAbsent =>`
  - `L13525: const sendDirectWabaMessage =>`
  - `L13555: const attemptCreateMetaWabaGroup =>`
  - `L13794: var processImportExcel =>`
  - `L13871: function getOpenAICost`
  - `L13873: const startOfMonth = new`
  - `L13874: const endOfMonth = new`
  - `L13902: var registerDashboardRoutes =>`
  - `L13903: const resolveProjectId =>`
  - `L13918: const date = new`
  - `L13972: const tAss = new`
  - `L13973: const tUser = new`
  - `L14134: const webChatAdapterFn =>`
  - `L14162: const flowDynamic =>`
  - `L14195: var mountBackoffice =>`
  - `L14209: method addUserMessage`
  - `L14214: method addAssistantMessage`
  - `L14219: method clear`
  - `L14229: method getSession`
  - `L14236: method resetSession`
  - `L14250: var registerProcessCallback =>`
  - `L14253: var handleQueue =>`
  - `L14281: var registerRailwayRoutes =>`
  - `L14346: var transcribeAudioFile =>`
  - `L14385: function withRetry`
  - `L14410: var initSocketIO =>`
  - `L14417: const io = new`
  - `L14474: const flowDynamic =>`
  - `L14511: var startHumanInactivityWorker =>`
  - `L14516: const threshold = new`
  - `L14542: var startFileCleanupWorker =>`
  - `L14544: const cleanDirectory =>`
  - `L14570: const runCleanup =>`
  - `L14606: var extraerDatosResumen =>`
  - `L14609: const cleanValue =>`
  - `L14661: var addToSheet =>`
  - `L14717: method constructor`
  - `L14733: method start`
  - `L14843: method waitForUserResponse`
  - `L14846: const onMessage =>`
  - `L14872: method getState`
  - `L14881: method restoreState`
  - `L14891: function formatSummary`
  - `L14909: function sendMediaToGroup`
  - `L14953: function cleanUpMediaFiles`
  - `L14972: function dispatchVirtualGroupReports`
  - `L15074: function reportAndClose`
  - `L15179: const reconFlow = new`
  - `L15234: const reconFlow = new`
  - `L15293: var start =>`
  - `L15307: var reset =>`
  - `L15315: var stop =>`
  - `L15323: method constructor`
  - `L15338: method getAssistantMap`
  - `L15352: method getAssignedAssistantId`
  - `L15394: method analizarDestinoRecepcionista`
  - `L15412: method extraerResumenRecepcionista`
  - `L15566: function logApiRequest`
  - `L15584: var registerExternalApiRoutes =>`
  - `L15590: const fifteenMinsAgo = new`
  - `L15619: const expiresAt = new`
  - `L15711: const regex = new`
  - `L15759: function processExternalBulk`
  - `L15783: const regex = new`
  - `L15811: var compatibilityLayer =>`
  - `L15883: var rootRedirect =>`
  - `L15897: var smartBodyParser =>`
  - `L16266: function processImageWithVision`
  - `L16331: function extraerPaginasComoPNG`
  - `L16413: function getAddressFromCoordinates`
  - `L16418: const client = new`
  - `L16578: function registerSafeErrorHandlers`
  - `L16588: var main =>`
  - `L16778: const adapterFlow = createFlow`
  - `L16779: const adapterDB = new`
  - `L16799: const agent = new`
  - `L16876: var processUserMessage =>`
- Vincula/importa: `@supabase/supabase-js`, `@whiskeysockets/baileys`, `fs`, `path`, `crypto`, `events`, `dotenv`, `axios`, `@googlemaps/google-maps-services-js`, `googleapis`, `google-auth-library`, `dotenv/config`, `stream/promises`, `moment`, `openai`, `moment-timezone`, `util`, `selenium-webdriver`, `selenium-webdriver/chrome.js`, `mercadopago`, `glob`, `qrcode`, `url`, `multer`, `@builderbot/bot`, `@builderbot-plugins/openai-assistants`, `builderbot-provider-sherpa`, `pino`, `child_process`, `form-data`, `body-parser`, `xlsx`, `serve-static`, `socket.io`
- Exporta:
  - `L16880: export {`
- Rutas HTTP:
  - `L10290: app.GET /favicon.ico`
  - `L10305: app.USE /js`
  - `L10306: app.USE /style`
  - `L10307: app.USE /assets`
  - `L10308: app.USE /assets`
  - `L10309: app.USE /vendor/toast`
  - `L10310: app.USE /vendor/fontawesome`
  - `L10311: app.USE /uploads`
  - `L10312: app.USE /temp`
  - `L10313: app.USE /app/temp`
  - `L10314: app.USE /tmp`
  - `L10315: app.USE /app/tmp`
  - `L10316: app.GET /qr.png`
  - `L10336: app.GET /bot.groups.qr.png`
  - `L10838: app.POST /api/backoffice/log-error`
  - `L10846: app.POST /api/backoffice/auth`
  - `L10882: app.GET /api/backoffice/users`
  - `L10886: app.POST /api/backoffice/users`
  - `L10894: app.PUT /api/backoffice/users/:id`
  - `L10903: app.DELETE /api/backoffice/users/:id`
  - `L10911: app.POST /api/backoffice/chat/assign`
  - `L10916: app.GET /api/backoffice/chats`
  - `L10927: app.GET /api/backoffice/notifications/summary`
  - `L10997: app.GET /api/backoffice/chats/import-template`
  - `L11014: app.GET /api/backoffice/chats/:id`
  - `L11025: app.POST /api/backoffice/chats/import`
  - `L11028: app.GET /api/backoffice/quick-messages`
  - `L11037: app.POST /api/backoffice/quick-messages`
  - `L11050: app.DELETE /api/backoffice/quick-messages/:id`
  - `L11060: app.GET /api/backoffice/messages/:chatId`
  - `L11067: app.GET /api/backoffice/profile-pic/:chatId`
  - `L11111: app.POST /api/backoffice/whatsapp/sync-contacts`
  - `L11302: app.POST /api/backoffice/send-message`
  - `L11316: app.DELETE /api/backoffice/messages/:chatId/:messageId`
  - `L11367: app.POST /api/backoffice/forward-message`
  - `L11452: app.POST /api/backoffice/baileys/start`
  - `L11499: app.POST /api/backoffice/toggle-bot`
  - `L11513: app.GET /api/backoffice/tags`
  - `L11518: app.GET /api/backoffice/chat/:id/contact`
  - `L11531: app.PUT /api/backoffice/chat/:id/contact`
  - `L11554: app.POST /api/backoffice/chat/manual-lead`
  - `L11565: app.POST /api/backoffice/tags`
  - `L11570: app.PUT /api/backoffice/tags/:id`
  - `L11575: app.DELETE /api/backoffice/tags/:id`
  - `L11579: app.POST /api/backoffice/chats/:chatId/tags`
  - `L11584: app.DELETE /api/backoffice/chats/:chatId/tags/:tagId`
  - `L11588: app.GET /api/backoffice/tickets/pending-count`
  - `L11594: app.GET /api/backoffice/tickets`
  - `L11605: app.POST /api/backoffice/tickets`
  - `L11614: app.PUT /api/backoffice/crm/ticket/:id`
  - `L11623: app.PUT /api/backoffice/tickets/:id`
  - `L11632: app.DELETE /api/backoffice/tickets/:id`
  - `L11642: app.GET /api/backoffice/crm/config`
  - `L11652: app.POST /api/backoffice/crm/config`
  - `L11662: app.GET /api/backoffice/crm/tasks`
  - `L11671: app.GET /api/backoffice/leads`
  - `L11678: app.GET /api/backoffice/whatsapp/config`
  - `L11699: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L11754: app.GET /api/backoffice/whatsapp/templates`
  - `L11768: app.GET /api/backoffice/whatsapp/library-templates`
  - `L11785: app.POST /api/backoffice/whatsapp/templates`
  - `L11813: app.POST /api/backoffice/whatsapp/register-step-1`
  - `L11850: app.POST /api/backoffice/whatsapp/register-step-2`
  - `L11874: app.GET /api/backoffice/whatsapp/template-excel/:templateName`
  - `L11997: app.POST /api/backoffice/whatsapp/send-bulk-template`
  - `L12001: app.POST /api/backoffice/whatsapp/send-quick-template`
  - `L12150: app.GET /api/backoffice/chats/import-template`
  - `L12165: app.GET /api/backoffice/whatsapp/onboard-callback`
  - `L12370: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L12393: app.POST /api/backoffice/whatsapp/sync-ids`
  - `L12437: app.POST /api/backoffice/whatsapp/unlink-meta`
  - `L12491: app.POST /api/backoffice/whatsapp/onboard`
  - `L12517: app.POST /api/backoffice/sync-assistant-prompt`
  - `L12542: app.GET /api/backoffice/get-setting`
  - `L12553: app.POST /api/backoffice/save-setting`
  - `L12572: app.GET /api/backoffice/mercadopago/status`
  - `L12622: app.GET /api/backoffice/mercadopago/auth-url`
  - `L12638: app.GET /api/backoffice/mercadopago/callback`
  - `L12705: app.GET /api/mercadopago/callback`
  - `L12838: app.GET /api/clientes/mercadopago/webhook`
  - `L12842: app.POST /api/clientes/mercadopago/webhook`
  - `L12947: app.POST /api/backoffice/mercadopago/disconnect`
  - `L12960: app.POST /api/backoffice/mercadopago/create-link`
  - `L12974: app.POST /api/backoffice/whatsapp/sync-smb`
  - `L12980: app.GET whatsappProvider`
  - `L13004: app.GET /api/backoffice/whatsapp/groups`
  - `L13036: app.GET /api/backoffice/crm/tasks`
  - `L13045: app.POST /api/backoffice/crm/update-lead`
  - `L13059: app.POST /api/backoffice/chat/assign`
  - `L13079: app.GET /api/backoffice/crm/config`
  - `L13088: app.POST /api/backoffice/crm/config`
  - `L13098: app.GET /api/backoffice/config`
  - `L13129: app.POST /api/backoffice/save-settings-bulk`
  - `L13159: app.GET /api/backoffice/settings`
  - `L13180: app.GET /api/backoffice/get-prompt`
  - `L13196: app.GET /api/backoffice/openai/models`
  - `L13224: app.POST /api/backoffice/update-prompt`
  - `L13261: app.GET /api/backoffice/get-docs`
  - `L13287: app.GET /api/backoffice/blacklist/status`
  - `L13295: app.POST /api/backoffice/blacklist/activate`
  - `L13306: app.POST /api/backoffice/blacklist/deactivate`
  - `L13319: app.GET /api/backoffice/blacklist`
  - `L13341: app.POST /api/backoffice/blacklist`
  - `L13360: app.DELETE /api/backoffice/blacklist/:chatId`
  - `L13370: app.GET /api/backoffice/blacklist/check/:chatId`
  - `L13379: app.POST /api/backoffice/blacklist/toggle/:chatId`
  - `L13403: app.GET /api/backoffice/notifications/status`
  - `L13410: app.POST /api/backoffice/notifications/activate`
  - `L13421: app.POST /api/backoffice/notifications/deactivate`
  - `L13442: app.GET /api/backoffice/reportes/status`
  - `L13450: app.POST /api/backoffice/reportes/activate`
  - `L13461: app.POST /api/backoffice/reportes/deactivate`
  - `L13472: app.GET /api/backoffice/reportes`
  - `L13484: app.GET /api/backoffice/waba-groups/status`
  - `L13493: app.POST /api/backoffice/waba-groups/status`
  - `L13503: app.GET /api/backoffice/waba-groups`
  - `L13512: app.POST /api/backoffice/waba-groups`
  - `L13726: app.DELETE /api/backoffice/waba-groups/:id`
  - `L13774: app.POST /api/backoffice/chat/read/:chatId`
  - `L13907: app.GET /api/dashboard/openai-usage`
  - `L13931: app.GET /api/dashboard/stats`
  - `L14019: app.POST /webchat-api`
  - `L14282: app.POST /api/restart-bot`
  - `L14301: app.GET /api/variables`
  - `L14314: app.POST /api/update-variables`
  - `L15586: app.POST /api/v1/auth`
  - `L15639: app.POST /api/v1/send-template`
  - `L16794: app.GET /health`
  - `L16795: app.GET /api/test-proxy`
  - `L16836: app.GET /api/assistant-name`
  - `L16837: app.GET /api/dashboard-status`
  - `L16838: app.POST /api/delete-session`
- Eventos/listeners:
  - `L2814: postgres_changes`
  - `L2837: postgres_changes`
  - `L2864: postgres_changes`
  - `L6505: setting_changed`
  - `L7385: qr`
  - `L7386: require_action`
  - `L7387: auth_require`
  - `L7388: message`
  - `L7482: message_from_me`
  - `L7569: contacts_sync`
  - `L7590: ready`
  - `L8543: messaging-history.set`
  - `L8555: contacts.upsert`
  - `L8568: contacts.update`
  - `L8580: creds.update`
  - `L8583: connection.update`
  - `L8638: messages.upsert`
  - `L8941: finish`
  - `L8945: error`
  - `L9909: end`
  - `L9909: error`
  - `L9922: end`
  - `L9922: error`
  - `L10356: setting_changed`
  - `L10818: uncaughtException`
  - `L10825: unhandledRejection`
  - `L14421: new_message`
  - `L14424: message_deleted`
  - `L14427: bot_toggled`
  - `L14430: contact_updated`
  - `L14433: ticket_updated`
  - `L14436: ticket_deleted`
  - `L14439: setting_changed`
  - `L14442: reporte_created`
  - `L14445: message_status_update`
  - `L14448: user_updated`
  - `L14451: connection`
  - `L14452: message`
  - `L14860: message`
  - `L15863: error`
  - `L16581: uncaughtException`
  - `L16584: unhandledRejection`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`, `ASSISTANT_NAME`, `BOT_NAME`, `RAILWAY_SERVICE_NAME`, `PROJECT_ID`, `STORAGE_MODE`, `SYSTEM_CONFIG_VISIBLE`, `RAILWAY_PUBLIC_DOMAIN`, `PROJECT_URL`, `OPENAI_API_KEY`, `OPENAI_ADMIN_API_KEY`, `OPENAI_API_KEY_TOOLS`, `AQUAVITA_SWS_BASE_URL`, `SWS_BASE_URL`, `AQUAVITA_SWS_USERNAME`, `SWS_USERNAME`, `AQUAVITA_SWS_PASSWORD`, `SWS_PASSWORD`, `GOOGLE_MAPS_API_KEY`, `GOOGLE_PROXY_URL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_CLIENT_EMAIL`, `GOOGLE_CALENDAR_ID`, `GANAMOSNET_USER`, `GANAMOSNET_PASS`, `CLIENT_SLUG`, `MP_TOKEN_TEST`, `MP_ACCESS_TOKEN`, `OPENAI_BASE_URL`, `SHEET_ID_UPDATE`, `VECTOR_STORE_ID`, `META_APP_ID`, `META_APP_SECRET`, `RAILWAY_TOKEN`, `RAILWAY_ENVIRONMENT_ID`, `RAILWAY_SERVICE_ID`, `META_API_VERSION`, `DOCX_ID_UPDATE`, `ADMIN_PASS`, `BACKOFFICE_TOKEN`, `RAILWAY_PROJECT_NAME`, `CRM_VISIBLE`, `ADMIN_USER`, `META_WABA_ID`, `META_PHONE_ID`, `META_ACCESS_TOKEN`, `META_CONFIG_ID`, `META_VERIFY_TOKEN`, `MP_APP_ID`, `MP_PASS`, `SHEET_ID_RESUMEN`, `SHEET_RESUMEN_RANGE`, `ASSISTANT_ID`, `OPENAI_API_KEY_IMG`, `ASSISTANT_ID_IMG`, `PORT`
- Tablas/RPC vinculadas: `whatsapp_sessions`, `rpc:exec_sql`, `chats`, `messages`, `tickets`, `meta_onboarding`, `waba_report_groups`, `settings`, `proyectos_railway`, `tags`, `chat_tags`, `blacklist`, `users`, `routing_table`, `system_logs`, `quick_messages`, `mercadopago_acount_user`, `mercadopago_user_routoing`, `mercadopago_payments_clients`, `auditoria_acciones`, `api_logs`, `api_tokens`
- URLs externas:
  - `https://${publicDomain}`
  - `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`
  - `https://google-proxy.duskcodes.com.ar`
  - `https://www.googleapis.com`
  - `https://oauth2.googleapis.com`
  - `https://sheets.googleapis.com`
  - `https://calendar.googleapis.com`
  - `https://drive.googleapis.com`
  - `https://www.googleapis.com/auth/calendar`
  - `https://www.googleapis.com/auth/drive.readonly`
  - `https://www.googleapis.com/auth/drive.file`
  - `https://agents.ganamosnet.org/`
  - `https://agents.ganamosnet.org/users/all`
  - `https://agents.ganamosnet.org/user/create-player`
  - `https://proxy.duskcodes.com.ar/v1`
  - `https://www.googleapis.com/auth/spreadsheets`
  - `https://graph.facebook.com/v22.0/${phoneId}`
  - `https://graph.facebook.com/v22.0/${metaOnboarding.whatsappBusinessId}`
  - `https://graph.facebook.com/v22.0/me?fields=name,id,email`
  - `https://graph.facebook.com/v22.0/me/businesses`
  - `https://graph.facebook.com/v22.0/${business.id}/owned_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${business.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me?fields=id,name,whatsapp_business_accounts,owned_whatsapp_business_accounts,client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/debug_token`
  - `https://graph.facebook.com/v22.0/${businessId}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${wabaId}/phone_numbers`
  - `https://graph.facebook.com/v22.0/${phoneId}/request_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/verify_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/register`
  - `https://graph.facebook.com/v22.0/${wabaId}`
  - `https://graph.facebook.com/v22.0/me/accounts`
  - `https://graph.facebook.com/v22.0/${pageId}/subscribed_apps`
  - `https://backboard.railway.com/graphql/v2`
  - `https://graph.facebook.com/${apiVersion}/${mediaId}`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates?fields=id,name,status,components,language,category,parameter_format`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/message_template_library?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/v22.0/${MASTER_WABA_ID}/message_templates?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/media`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/smb_app_data`
  - `https://graph.facebook.com/v25.0/me/messages?access_token=${access_token}`
  - `https://graph.facebook.com/v22.0/${phoneId}/smb_app_data`
  - `https://drive.google.com/uc?export=download&id=${driveIdMatch[1]}`
  - `https://${host}`
  - `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  - `http://${host}`
  - `https://${baseUrl}`
  - `https://tu-imagen.com/foto.jpg`
  - `https://graph.facebook.com/v22.0/oauth/access_token`
  - `https://graph.facebook.com/v22.0/${finalPhoneId}/register`
  - `https://graph.facebook.com/v22.0/${finalWabaId}/subscribed_apps`
  - `https://duskcodes.com.ar/dashboard.html?metaStatus=success`
  - `https://duskcodes.com.ar/dashboard.html`
  - `https://graph.facebook.com/v22.0/${phoneId}/deregister`
  - `https://ygyicozjewxbyixtpjlo.supabase.co/functions/v1/whatsapp-router/register`
  - `https://api.mercadopago.com/users/me`
  - `https://auth.mercadopago.com.ar/authorization?client_id=${appId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${projectId2}`
  - `https://api.mercadopago.com/oauth/token`
  - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
  - `https://api.mercadopago.com/v1/payments/${paymentId}`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/messages`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/groups`
  - `https://graph.facebook.com/v22.0/${groupId}/invite_link`
  - `https://graph.facebook.com/v22.0/${groupJid}`
  - `https://graph.facebook.com/v22.0/${groupJid}/invite_link`
  - `https://graph.facebook.com/v22.0/${existingGroup.jid}/invite_link`
  - `https://api.openai.com/v1/organization/costs`
  - `https://wa.me/${phone}`
  - `https://wa.me/${ctx.from.replace(/[^0-9]/g`
  - `https://api.imgur.com/3/image`
  - `https://www.google.com`
  - `https://api.ipify.org?format=json`
  - `https://web.whatsapp.com`
  - `http://localhost:${PORT}`

### `docs`

#### `docs/INSTRUCCIONES_API.md`

- Tipo: texto; extension: `.md`; tamano: 6941 bytes; lineas: 170
- URLs externas:
  - `https://bot-rialway-monoagente-production-ab3b.up.railway.app`
  - `https://bot-rialway-monoagente-production-ab3b.up.railway.app/api/v1/auth`
  - `https://neurolinks.com/pago/123`
  - `https://bot-rialway-monoagente-production-ab3b.up.railway.app/api/v1/send-template`
  - `https://neurolinks.com/descarga/456`

#### `docs/INSTRUCCIONES_USO.md`

- Tipo: texto; extension: `.md`; tamano: 6314 bytes; lineas: 108
- URLs externas:
  - `https://developers.facebook.com/`

#### `docs/README.md`

- Tipo: texto; extension: `.md`; tamano: 1255 bytes; lineas: 22
- URLs externas:
  - `https://builderbot.app/`

#### `docs/SUMMARY.md`

- Tipo: texto; extension: `.md`; tamano: 930 bytes; lineas: 28
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `docs/api`

#### `docs/api/assistant.md`

- Tipo: texto; extension: `.md`; tamano: 999 bytes; lineas: 37
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/api/backoffice.md`

- Tipo: texto; extension: `.md`; tamano: 3426 bytes; lineas: 88
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/api/dashboard.md`

- Tipo: texto; extension: `.md`; tamano: 1619 bytes; lineas: 62
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/api/restart.md`

- Tipo: texto; extension: `.md`; tamano: 840 bytes; lineas: 33
- URLs externas:
  - `https://backboard.railway.app/graphql/v2`

#### `docs/api/session.md`

- Tipo: texto; extension: `.md`; tamano: 1269 bytes; lineas: 43
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/api/variables.md`

- Tipo: texto; extension: `.md`; tamano: 1398 bytes; lineas: 62
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/api/webchat.md`

- Tipo: texto; extension: `.md`; tamano: 1623 bytes; lineas: 53
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `docs/configuracion`

#### `docs/configuracion/variables-entorno.md`

- Tipo: texto; extension: `.md`; tamano: 2938 bytes; lineas: 52
- URLs externas:
  - `https://platform.openai.com/api-keys`

### `docs/modulos`

#### `docs/modulos/assistant-processor.md`

- Tipo: texto; extension: `.md`; tamano: 1274 bytes; lineas: 24
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/modulos/database.md`

- Tipo: texto; extension: `.md`; tamano: 1173 bytes; lineas: 28
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/modulos/google-api.md`

- Tipo: texto; extension: `.md`; tamano: 1266 bytes; lineas: 32
- URLs externas:
  - `https://console.cloud.google.com/`

#### `docs/modulos/railway-api.md`

- Tipo: texto; extension: `.md`; tamano: 1035 bytes; lineas: 30
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/modulos/session-sync.md`

- Tipo: texto; extension: `.md`; tamano: 1203 bytes; lineas: 19
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `docs/whatsapp`

#### `docs/whatsapp/comandos.md`

- Tipo: texto; extension: `.md`; tamano: 1042 bytes; lineas: 27
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/whatsapp/flujo-inactividad.md`

- Tipo: texto; extension: `.md`; tamano: 1299 bytes; lineas: 32
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/whatsapp/flujos-bienvenida.md`

- Tipo: texto; extension: `.md`; tamano: 1502 bytes; lineas: 33
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/whatsapp/flujo-ubicacion.md`

- Tipo: texto; extension: `.md`; tamano: 1129 bytes; lineas: 22
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `docs/whatsapp/meta-groups.md`

- Tipo: texto; extension: `.md`; tamano: 5549 bytes; lineas: 131
- URLs externas:
  - `https://graph.facebook.com/v22.0/`

### `scripts`

#### `scripts/add_bot_name_column.sql`

- Tipo: texto; extension: `.sql`; tamano: 1038 bytes; lineas: 28
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `scripts/apply_session_migration.ts`

- Tipo: texto; extension: `.ts`; tamano: 2650 bytes; lineas: 61
- Funciones/clases/simbolos:
  - `L20: function applyMigration`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`, `fs`, `path`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `rpc:exec_sql`

#### `scripts/automate_release.js`

- Tipo: texto; extension: `.js`; tamano: 2006 bytes; lineas: 54
- Funciones/clases/simbolos:
  - `L10: function runProcess`
- Vincula/importa: `@supabase/supabase-js`, `axios`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `meta_onboarding`
- URLs externas:
  - `https://graph.facebook.com/v20.0/${WABA_ID}/subscribed_apps`
  - `https://graph.facebook.com/v20.0/${WABA_ID}?fields=owner_business_info,name,status`

#### `scripts/check_token_perms.cjs`

- Tipo: texto; extension: `.cjs`; tamano: 1539 bytes; lineas: 42
- Funciones/clases/simbolos:
  - `L6: function checkPermissions`
- Vincula/importa: `axios`
- URLs externas:
  - `https://graph.facebook.com/v20.0/me/permissions`
  - `https://graph.facebook.com/v20.0/me?fields=id,name`

#### `scripts/create_session_table.sql`

- Tipo: texto; extension: `.sql`; tamano: 2649 bytes; lineas: 86
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `scripts/final_release.cjs`

- Tipo: texto; extension: `.cjs`; tamano: 2463 bytes; lineas: 55
- Funciones/clases/simbolos:
  - `L8: function finalRelease`
- Vincula/importa: `axios`
- URLs externas:
  - `https://graph.facebook.com/v20.0/`

#### `scripts/find_meta_session.js`

- Tipo: texto; extension: `.js`; tamano: 665 bytes; lineas: 23
- Funciones/clases/simbolos:
  - `L8: function findInSessions`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `whatsapp_sessions`

#### `scripts/fix_rpc.ts`

- Tipo: texto; extension: `.ts`; tamano: 1669 bytes; lineas: 56
- Funciones/clases/simbolos:
  - `L19: function setup`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `rpc:exec_sql`

#### `scripts/get_meta_token.js`

- Tipo: texto; extension: `.js`; tamano: 820 bytes; lineas: 30
- Funciones/clases/simbolos:
  - `L8: function getToken`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `meta_onboarding`

#### `scripts/inspect_meta.js`

- Tipo: texto; extension: `.js`; tamano: 1214 bytes; lineas: 28
- Funciones/clases/simbolos:
  - `L8: function inspectTables`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `meta_onboarding`, `settings`

#### `scripts/release_meta.cjs`

- Tipo: texto; extension: `.cjs`; tamano: 1755 bytes; lineas: 50
- Funciones/clases/simbolos:
  - `L12: function run`
- Vincula/importa: `axios`
- URLs externas:
  - `https://graph.facebook.com/v20.0/`

#### `scripts/release_meta.js`

- Tipo: texto; extension: `.js`; tamano: 1597 bytes; lineas: 40
- Funciones/clases/simbolos:
  - `L12: function releaseWaba`
- Vincula/importa: `axios`
- URLs externas:
  - `https://graph.facebook.com/v20.0/${WABA_ID}/subscribed_apps`
  - `https://graph.facebook.com/v20.0/${WABA_ID}?fields=owner_business_info,name`

#### `scripts/save_meta_token.js`

- Tipo: texto; extension: `.js`; tamano: 1210 bytes; lineas: 32
- Funciones/clases/simbolos:
  - `L11: function saveToken`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`
- Tablas/RPC vinculadas: `meta_onboarding`

#### `scripts/update_meta_token.js`

- Tipo: texto; extension: `.js`; tamano: 1004 bytes; lineas: 29
- Funciones/clases/simbolos:
  - `L10: function updateToken`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `meta_onboarding`

### `sessions`

#### `sessions/Asistente_sin_Nombre_Definido__store.json`

- Tipo: texto; extension: `.json`; tamano: 40 bytes; lineas: 1
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `src`

#### `src/app.ts`

- Tipo: texto; extension: `.ts`; tamano: 28782 bytes; lineas: 570
- Funciones/clases/simbolos:
  - `L73: function registerSafeErrorHandlers`
  - `L87: const main =>`
  - `L382: const adapterFlow = createFlow`
  - `L383: const adapterDB = new`
  - `L418: const agent = new`
  - `L565: const processUserMessage =>`
- Vincula/importa: `dotenv/config`, `fs`, `path`, `url`, `@builderbot/bot`, `@builderbot-plugins/openai-assistants`, `./backend/providers/SupabaseBaileysProvider`, `./backend/providers/MetaCloudProvider`, `./backend/providers/instances`, `./backend/providers/sessionSync`, `./backend/bot/errorReporter`, `./backend/apis/google/updateMain`, `./backend/db/historyHandler`, `./backend/bot/queueManager`, `./backend/backoffice/routes/backoffice.routes`, `./backend/backoffice/routes/dashboard.routes`, `./backend/backoffice/routes/static.routes`, `./backend/backoffice/webchat/routes/webchat.routes`, `./backend/apis/railway/railway.routes`, `./backend/middleware/upload`, `./backend/sockets/socket.manager`, `./backend/providers/provider.manager`, `./backend/workers/humanInactivity.worker`, `./backend/workers/fileCleanup.worker`, `./backend/bot/ai.manager`, `./backend/apis/external/external_api.routes`, `./backend/apis/openai/openaiHelper`, `./backend/apis/meta/metaDiscovery`, `./backend/apis/railway/Railway`, `./backend/middleware/global`, `./backend/backoffice/middleware/auth`, `body-parser`, `./backend/bot/flows/welcomeFlowTxt`, `./backend/bot/flows/welcomeFlowVoice`, `./backend/bot/flows/welcomeFlowImg`, `./backend/bot/flows/welcomeFlowVideo`, `./backend/bot/flows/welcomeFlowDoc`, `./backend/bot/flows/locationFlow`, `./backend/bot/flows/idleFlow`, `./backend/bot/flows/welcomeFlowButton`, `./backend/bot/timeOut`
- Exporta:
  - `L60: export let adapterProvider: any;`
  - `L61: export let groupProvider: any;`
  - `L62: export let errorReporter: any;`
  - `L63: export let aiManagerInstance: AiManager;`
  - `L560: export {`
  - `L565: export const processUserMessage = async (ctx: any, items: any) => {`
- Rutas HTTP:
  - `L413: app.GET /health`
  - `L414: app.GET /api/test-proxy`
  - `L459: app.GET /api/assistant-name`
  - `L481: app.GET /api/dashboard-status`
  - `L484: app.POST /api/delete-session`
- Eventos/listeners:
  - `L76: uncaughtException`
  - `L79: unhandledRejection`
- Variables entorno vinculadas: `PORT`, `META_ACCESS_TOKEN`, `META_PHONE_ID`, `META_WABA_ID`, `META_VERIFY_TOKEN`, `RAILWAY_PROJECT_ID`, `RAILWAY_SERVICE_NAME`, `ASSISTANT_NAME`, `BOT_NAME`, `PROJECT_ID`
- Tablas/RPC vinculadas: `proyectos_railway`
- URLs externas:
  - `https://www.google.com`
  - `https://api.ipify.org?format=json`
  - `https://web.whatsapp.com`
  - `http://localhost:${PORT}\n`

### `src/backend/apis/external`

#### `src/backend/apis/external/external_api.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 16441 bytes; lineas: 354
- Funciones/clases/simbolos:
  - `L9: function logApiRequest`
  - `L38: const registerExternalApiRoutes =>`
  - `L48: const fifteenMinsAgo = new`
  - `L91: const expiresAt = new`
  - `L232: const regex = new`
  - `L298: function processExternalBulk`
  - `L331: const regex = new`
- Vincula/importa: `crypto`, `body-parser`, `../../db/historyHandler`
- Exporta:
  - `L38: export const registerExternalApiRoutes = (app: any, deps: any) => {`
- Rutas HTTP:
  - `L42: app.POST /api/v1/auth`
  - `L121: app.POST /api/v1/send-template`
- Tablas/RPC vinculadas: `api_logs`, `api_tokens`

### `src/backend/apis/external/Aquavita`

#### `src/backend/apis/external/Aquavita/ClientesApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 8590 bytes; lineas: 255
- Funciones/clases/simbolos:
  - `L4: class ClientesApi`
  - `L30: const sanitizeQuery =>`
  - `L186: function parseDomicilioString`
- Vincula/importa: `./swsClient`, `./getMapsUbication`
- Exporta:
  - `L4: export class ClientesApi {`

#### `src/backend/apis/external/Aquavita/FacturacionApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 3363 bytes; lineas: 82
- Funciones/clases/simbolos:
  - `L3: class AdministracionApi`
- Vincula/importa: `./swsClient`
- Exporta:
  - `L3: export class AdministracionApi {`

#### `src/backend/apis/external/Aquavita/getMapsUbication.ts`

- Tipo: texto; extension: `.ts`; tamano: 1573 bytes; lineas: 49
- Funciones/clases/simbolos:
  - `L7: function getMapsUbication`
  - `L23: const client = new`
- Vincula/importa: `@googlemaps/google-maps-services-js`
- Exporta:
  - `L7: export async function getMapsUbication(`
- Variables entorno vinculadas: `GOOGLE_MAPS_API_KEY`

#### `src/backend/apis/external/Aquavita/IncidentesApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 372 bytes; lineas: 14
- Funciones/clases/simbolos:
  - `L3: class IncidentesApi`
- Vincula/importa: `./swsClient`
- Exporta:
  - `L3: export class IncidentesApi {`

#### `src/backend/apis/external/Aquavita/ListaDePreciosApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 1130 bytes; lineas: 32
- Funciones/clases/simbolos:
  - `L4: class ListaDePreciosApi`
- Vincula/importa: `./swsClient`
- Exporta:
  - `L4: export class ListaDePreciosApi {`

#### `src/backend/apis/external/Aquavita/MovimientosApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 283 bytes; lineas: 10
- Funciones/clases/simbolos:
  - `L3: class MovimientosApi`
- Vincula/importa: `./swsClient`
- Exporta:
  - `L3: export class MovimientosApi {`

#### `src/backend/apis/external/Aquavita/RepartosApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 3257 bytes; lineas: 95
- Funciones/clases/simbolos:
  - `L4: class RepartosApi`
- Vincula/importa: `./getMapsUbication`, `./swsClient`
- Exporta:
  - `L4: export class RepartosApi {`

#### `src/backend/apis/external/Aquavita/SessionApi.ts`

- Tipo: texto; extension: `.ts`; tamano: 3745 bytes; lineas: 119
- Funciones/clases/simbolos:
  - `L3: const getBaseUrl =>`
  - `L10: function setSessionToken`
  - `L15: function setTokenVencimiento`
  - `L19: function setUsuarioId`
  - `L23: function getSessionToken`
  - `L27: function getTokenVencimiento`
  - `L31: function getUsuarioId`
  - `L35: class SessionApi`
  - `L90: function ensureValidToken`
  - `L95: const ahora = new`
- Vincula/importa: `axios`
- Exporta:
  - `L10: export function setSessionToken(token: string) {`
  - `L15: export function setTokenVencimiento(vencimiento: string) {`
  - `L19: export function setUsuarioId(id: number) {`
  - `L23: export function getSessionToken(): string \| null {`
  - `L27: export function getTokenVencimiento(): string \| null {`
  - `L31: export function getUsuarioId(): number \| null {`
  - `L35: export class SessionApi {`
  - `L90: export async function ensureValidToken(username?: string, password?: string): Promise<string \| null> {`
- Variables entorno vinculadas: `AQUAVITA_SWS_BASE_URL`, `SWS_BASE_URL`, `AQUAVITA_SWS_USERNAME`, `SWS_USERNAME`, `AQUAVITA_SWS_PASSWORD`, `SWS_PASSWORD`

#### `src/backend/apis/external/Aquavita/swsClient.ts`

- Tipo: texto; extension: `.ts`; tamano: 3741 bytes; lineas: 88
- Funciones/clases/simbolos:
  - `L4: const getBaseUrl =>`
- Vincula/importa: `axios`, `./SessionApi`
- Exporta:
  - `L6: export const swsClient = axios.create({`
- Variables entorno vinculadas: `AQUAVITA_SWS_BASE_URL`, `SWS_BASE_URL`

### `src/backend/apis/external/Cas-EPC`

#### `src/backend/apis/external/Cas-EPC/createUser-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 12501 bytes; lineas: 249
- Funciones/clases/simbolos:
  - `L10: function generateUsername`
  - `L22: function createUserSelenium`
  - `L28: const options = new`
  - `L45: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L22: export async function createUserSelenium(`
- Variables entorno vinculadas: `SELENIUM_HEADLESS`, `CASEPC_USER`, `CASEPC_PASS`
- URLs externas:
  - `https://admin.epcbet.net/index.php`

#### `src/backend/apis/external/Cas-EPC/loginAdmin-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 4267 bytes; lineas: 92
- Funciones/clases/simbolos:
  - `L7: class LoginAdminSelenium`
  - `L10: method constructor`
  - `L21: method login`
- Vincula/importa: `selenium-webdriver`
- Exporta:
  - `L7: export class LoginAdminSelenium {`
- URLs externas:
  - `https://admin.epcbet.net/index.php?act=admin&area=login`

#### `src/backend/apis/external/Cas-EPC/rechargeUser-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 10080 bytes; lineas: 202
- Funciones/clases/simbolos:
  - `L14: function rechargeUserSelenium`
  - `L27: const options = new`
  - `L42: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L14: export async function rechargeUserSelenium(`
- Variables entorno vinculadas: `SELENIUM_HEADLESS`, `CASEPC_USER`, `CASEPC_PASS`
- URLs externas:
  - `https://admin.epcbet.net/index.php`

#### `src/backend/apis/external/Cas-EPC/withdrawalUser-Selunium.ts`

- Tipo: texto; extension: `.ts`; tamano: 10135 bytes; lineas: 202
- Funciones/clases/simbolos:
  - `L14: function withdrawalUser`
  - `L27: const options = new`
  - `L42: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L14: export async function withdrawalUser(`
- Variables entorno vinculadas: `SELENIUM_HEADLESS`, `CASEPC_USER`, `CASEPC_PASS`
- URLs externas:
  - `https://admin.epcbet.net/index.php`

### `src/backend/apis/external/Ganemos-net`

#### `src/backend/apis/external/Ganemos-net/createUser-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 9090 bytes; lineas: 187
- Funciones/clases/simbolos:
  - `L10: function generateUsername`
  - `L24: function createUserSelenium`
  - `L30: const options = new`
  - `L44: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L24: export async function createUserSelenium(`
- Variables entorno vinculadas: `GANAMOSNET_USER`, `GANAMOSNET_PASS`
- URLs externas:
  - `https://agents.ganamosnet.org/users/all`
  - `https://agents.ganamosnet.org/user/create-player`

#### `src/backend/apis/external/Ganemos-net/loginAdmin-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 4332 bytes; lineas: 93
- Funciones/clases/simbolos:
  - `L7: class LoginAdminSelenium`
  - `L10: method constructor`
  - `L21: method login`
- Vincula/importa: `selenium-webdriver`
- Exporta:
  - `L7: export class LoginAdminSelenium {`
- URLs externas:
  - `https://agents.ganamosnet.org/`

#### `src/backend/apis/external/Ganemos-net/rechargeUser-Selenium.ts`

- Tipo: texto; extension: `.ts`; tamano: 8626 bytes; lineas: 185
- Funciones/clases/simbolos:
  - `L14: function rechargeUserSelenium`
  - `L27: const options = new`
  - `L39: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L14: export async function rechargeUserSelenium(`
- Variables entorno vinculadas: `GANAMOSNET_USER`, `GANAMOSNET_PASS`
- URLs externas:
  - `https://agents.ganamosnet.org/users/all`

#### `src/backend/apis/external/Ganemos-net/withdrawalUser-Selunium.ts`

- Tipo: texto; extension: `.ts`; tamano: 9094 bytes; lineas: 194
- Funciones/clases/simbolos:
  - `L14: function withdrawalUser`
  - `L27: const options = new`
  - `L39: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `./loginAdmin-Selenium.js`, `fs`, `path`
- Exporta:
  - `L14: export async function withdrawalUser(`
- Variables entorno vinculadas: `GANAMOSNET_USER`, `GANAMOSNET_PASS`
- URLs externas:
  - `https://agents.ganamosnet.org/users/all`

### `src/backend/apis/google`

#### `src/backend/apis/google/calendarEvents.ts`

- Tipo: texto; extension: `.ts`; tamano: 1990 bytes; lineas: 62
- Funciones/clases/simbolos:
  - `L9: class CalendarEvents`
- Vincula/importa: `googleapis`, `./googleAuth`
- Exporta:
  - `L9: export class CalendarEvents {`
- Variables entorno vinculadas: `GOOGLE_CALENDAR_ID`
- URLs externas:
  - `https://www.googleapis.com/auth/calendar`

#### `src/backend/apis/google/googleAuth.ts`

- Tipo: texto; extension: `.ts`; tamano: 3485 bytes; lineas: 89
- Funciones/clases/simbolos:
  - `L19: const parsed = new`
  - `L63: const getGoogleCredentials =>`
  - `L74: const createGoogleAuth =>`
- Vincula/importa: `googleapis`, `google-auth-library`, `dotenv/config`
- Exporta:
  - `L47: export const getGooglePrivateKey = (): string => {`
  - `L63: export const getGoogleCredentials = () => {`
  - `L74: export const createGoogleAuth = (scopes: string[]) => {`
- Variables entorno vinculadas: `GOOGLE_PROXY_URL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_CLIENT_EMAIL`
- URLs externas:
  - `https://google-proxy.duskcodes.com.ar`
  - `https://www.googleapis.com`
  - `https://oauth2.googleapis.com`
  - `https://sheets.googleapis.com`
  - `https://calendar.googleapis.com`
  - `https://drive.googleapis.com`

#### `src/backend/apis/google/googleDriveHandler.ts`

- Tipo: texto; extension: `.ts`; tamano: 2838 bytes; lineas: 76
- Funciones/clases/simbolos:
  - `L8: const getDriveClient =>`
- Vincula/importa: `googleapis`, `./googleAuth`, `fs`, `path`, `stream/promises`
- Exporta:
  - `L22: export const downloadFileFromDrive = async (fileId: string): Promise<string> => {`
- URLs externas:
  - `https://www.googleapis.com/auth/drive.readonly`
  - `https://www.googleapis.com/auth/drive.file`

#### `src/backend/apis/google/googleSheetsResumen.ts`

- Tipo: texto; extension: `.ts`; tamano: 2382 bytes; lineas: 53
- Vincula/importa: `googleapis`, `moment`, `dotenv/config`, `../../utils/extractJsonData`, `./googleAuth`
- Exporta:
  - `L18: export const addToSheet = async (data: GenericResumenData, spreadsheetId?: string, customRange?: string): Promise<void> => {`
- Variables entorno vinculadas: `SHEET_ID_RESUMEN`, `SHEET_RESUMEN_RANGE`
- URLs externas:
  - `https://www.googleapis.com/auth/spreadsheets`

#### `src/backend/apis/google/JsonBlockFinder.ts`

- Tipo: texto; extension: `.ts`; tamano: 2123 bytes; lineas: 56
- Funciones/clases/simbolos:
  - `L3: class JsonBlockFinder`
  - `L14: const regex = new`
- Exporta:
  - `L3: export class JsonBlockFinder {`

#### `src/backend/apis/google/updateDoc.ts`

- Tipo: texto; extension: `.ts`; tamano: 7387 bytes; lineas: 188
- Funciones/clases/simbolos:
  - `L18: const getDriveClient =>`
  - `L23: const getOpenAIClient =>`
  - `L34: function updateAllDocs`
  - `L51: function processDocById`
  - `L132: function attachFileToVectorStore`
  - `L161: function deleteOldDocxFiles`
  - `L179: function deleteTemporaryDocx`
- Vincula/importa: `fs`, `path`, `googleapis`, `dotenv`, `openai`, `glob`, `./googleAuth`, `../openai/openaiHelper`
- Exporta:
  - `L34: export async function updateAllDocs() {`
- Eventos/listeners:
  - `L76: end`
  - `L77: error`
  - `L93: end`
  - `L94: error`
- Variables entorno vinculadas: `OPENAI_API_KEY`, `DOCX_ID_UPDATE`, `VECTOR_STORE_ID`
- URLs externas:
  - `https://www.googleapis.com/auth/drive.readonly`

#### `src/backend/apis/google/updateMain.ts`

- Tipo: texto; extension: `.ts`; tamano: 506 bytes; lineas: 16
- Funciones/clases/simbolos:
  - `L7: const updateMain =>`
- Vincula/importa: `./updateSheet`, `./updateDoc`
- Exporta:
  - `L7: export const updateMain = async () => {`

#### `src/backend/apis/google/updateSheet.ts`

- Tipo: texto; extension: `.ts`; tamano: 18879 bytes; lineas: 427
- Funciones/clases/simbolos:
  - `L27: const getSheetsClient =>`
  - `L32: const getOpenAIClient =>`
  - `L43: function updateAllSheets`
  - `L71: const sanitizeTableName =>`
  - `L76: const sanitizeColumnName =>`
  - `L84: function ensureTableExists`
  - `L136: function processSheetById`
  - `L176: const colToLetter =>`
  - `L334: function uploadDataToAssistant`
  - `L368: function attachFileToVectorStore`
  - `L396: function deleteOldFiles`
  - `L414: function deleteTemporaryFiles`
- Vincula/importa: `fs`, `googleapis`, `path`, `dotenv`, `openai`, `glob`, `@supabase/supabase-js`, `../../db/vault`, `../openai/toolGenerator`, `./googleAuth`, `../openai/openaiHelper`
- Exporta:
  - `L43: export async function updateAllSheets(options: { forceRecreate?: boolean } = {}) {`
  - `L334: export async function uploadDataToAssistant(filePath: string, stateId: string) {`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `OPENAI_API_KEY`, `SHEET_ID_UPDATE`, `VECTOR_STORE_ID`
- Tablas/RPC vinculadas: `rpc:exec_sql`
- URLs externas:
  - `https://www.googleapis.com/auth/spreadsheets`

### `src/backend/apis/mercadopago/supabase/functions/clientes-mercadopago-webhook`

#### `src/backend/apis/mercadopago/supabase/functions/clientes-mercadopago-webhook/index.ts`

- Tipo: texto; extension: `.ts`; tamano: 5991 bytes; lineas: 153
- Funciones/clases/simbolos:
  - `L6: const url = new`
- Vincula/importa: `https://deno.land/std@0.168.0/http/server.ts`, `https://esm.sh/@supabase/supabase-js@2.21.0`
- Tablas/RPC vinculadas: `mercadopago_user_routoing`, `settings`
- URLs externas:
  - `https://deno.land/std@0.168.0/http/server.ts`
  - `https://esm.sh/@supabase/supabase-js@2.21.0`
  - `https://${settingsData.value}`

### `src/backend/apis/meta`

#### `src/backend/apis/meta/metaDiscovery.ts`

- Tipo: texto; extension: `.ts`; tamano: 19198 bytes; lineas: 420
- Funciones/clases/simbolos:
  - `L33: function discoverMetaIds`
  - `L41: const logDiag =>`
  - `L309: function addPhoneNumberToWaba`
  - `L344: function requestPhoneNumberOtp`
  - `L362: function verifyPhoneNumberOtp`
  - `L388: function getWabaStatus`
  - `L406: function getPhoneLimit`
- Vincula/importa: `axios`
- Exporta:
  - `L7: export interface DiagnosticEntry {`
  - `L16: export interface DiscoveryResult {`
  - `L33: export async function discoverMetaIds(`
  - `L309: export async function addPhoneNumberToWaba(accessToken: string, wabaId: string, phoneNumber: string, verifiedName: string) {`
  - `L344: export async function requestPhoneNumberOtp(accessToken: string, phoneId: string, method: 'SMS' \| 'VOICE' = 'SMS') {`
  - `L362: export async function verifyPhoneNumberOtp(accessToken: string, phoneId: string, code: string) {`
  - `L388: export async function getWabaStatus(wabaId: string, accessToken: string) {`
  - `L406: export async function getPhoneLimit(phoneId: string, accessToken: string) {`
- Variables entorno vinculadas: `META_APP_ID`, `META_APP_SECRET`
- URLs externas:
  - `https://graph.facebook.com/v22.0/me?fields=name,id,email`
  - `https://graph.facebook.com/v22.0/me/businesses`
  - `https://graph.facebook.com/v22.0/${business.id}/owned_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${business.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/me?fields=id,name,whatsapp_business_accounts,owned_whatsapp_business_accounts,client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/debug_token`
  - `https://graph.facebook.com/v22.0/${businessId}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/client_whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${biz.id}/whatsapp_business_accounts`
  - `https://graph.facebook.com/v22.0/${wabaId}/phone_numbers`
  - `https://graph.facebook.com/v22.0/${phoneId}/request_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/verify_code`
  - `https://graph.facebook.com/v22.0/${phoneId}/register`
  - `https://graph.facebook.com/v22.0/${wabaId}`
  - `https://graph.facebook.com/v22.0/${phoneId}`

#### `src/backend/apis/meta/metaPageDiscovery.ts`

- Tipo: texto; extension: `.ts`; tamano: 2785 bytes; lineas: 66
- Funciones/clases/simbolos:
  - `L6: function discoverAndLinkMetaPages`
- Vincula/importa: `axios`
- Exporta:
  - `L6: export async function discoverAndLinkMetaPages(userAccessToken: string) {`
- URLs externas:
  - `https://graph.facebook.com/v22.0/me/accounts`
  - `https://graph.facebook.com/v22.0/${pageId}/subscribed_apps`

### `src/backend/apis/openai`

#### `src/backend/apis/openai/AssistantResponseProcessor.ts`

- Tipo: texto; extension: `.ts`; tamano: 26439 bytes; lineas: 534
- Funciones/clases/simbolos:
  - `L3: function toArgentinaTime`
  - `L7: const date = new`
  - `L40: const userApiBlockMap = new`
  - `L43: function limpiarBloquesJSON`
  - `L90: function corregirFechaAnioVigente`
  - `L91: const ahora = new`
  - `L100: function esFechaFutura`
  - `L101: const ahora = new`
  - `L102: const fechaReserva = new`
  - `L106: class AssistantResponseProcessor`
- Vincula/importa: `../../db/dbHandler`, `../google/JsonBlockFinder`, `../google/calendarEvents`, `../google/googleDriveHandler`, `fs`, `path`, `moment`, `openai`, `./openaiHelper`, `./audioTranscriptior`, `../../db/historyHandler`, `../../bot/toolRouter`
- Exporta:
  - `L106: export class AssistantResponseProcessor {`
- Variables entorno vinculadas: `OPENAI_API_KEY`

#### `src/backend/apis/openai/audioTranscriptior.ts`

- Tipo: texto; extension: `.ts`; tamano: 2413 bytes; lineas: 65
- Vincula/importa: `fs`, `openai`, `./openaiHelper`, `../../utils/logger`
- Exporta:
  - `L11: export const transcribeAudioFile = async (filePath: string): Promise<string \| null> => {`

#### `src/backend/apis/openai/openaiHelper.ts`

- Tipo: texto; extension: `.ts`; tamano: 24217 bytes; lineas: 489
- Funciones/clases/simbolos:
  - `L12: function getOpenAIBaseUrl`
  - `L30: function getOpenAI`
  - `L52: function getOpenAIVision`
  - `L71: function safeParseJson`
  - `L85: function syncAssistantTools`
  - `L149: const regex = new`
  - `L331: const regex = new`
- Vincula/importa: `openai`, `../../utils/ArgentinaTime`, `../../db/dbHandler`, `../../utils/logger.js`
- Exporta:
  - `L12: export function getOpenAIBaseUrl(): string \| undefined {`
  - `L30: export async function getOpenAI(): Promise<OpenAI \| null> {`
  - `L52: export async function getOpenAIVision(): Promise<OpenAI \| null> {`
  - `L85: export async function syncAssistantTools(assistantId: string, projectId: string \| null = null): Promise<boolean> {`
  - `L173: export const askWithFunctions = async (assistantId: string, message: string, state: any, userId: string = 'unknown', forceDb: boolean = false, projectId: string \| null = null, directMode: boolean = true, agentName?: stri...`
  - `L449: export const safeToAsk = async (`
- Variables entorno vinculadas: `OPENAI_BASE_URL`
- URLs externas:
  - `https://proxy.duskcodes.com.ar/v1`

#### `src/backend/apis/openai/processImageWithVision.ts`

- Tipo: texto; extension: `.ts`; tamano: 3921 bytes; lineas: 113
- Funciones/clases/simbolos:
  - `L8: function processImageWithVision`
  - `L45: const openai = new`
- Vincula/importa: `axios`, `openai`, `fs`, `./openaiHelper`
- Exporta:
  - `L8: export async function processImageWithVision(`
- URLs externas:
  - `https://api.imgur.com/3/image`

#### `src/backend/apis/openai/toolGenerator.ts`

- Tipo: texto; extension: `.ts`; tamano: 6651 bytes; lineas: 151
- Funciones/clases/simbolos:
  - `L11: function autoUpdateBotAbilities`
  - `L33: const openai = new`
- Vincula/importa: `openai`, `@supabase/supabase-js`, `../../db/historyHandler`, `./openaiHelper`, `../../db/vault`
- Exporta:
  - `L11: export async function autoUpdateBotAbilities(tableNames: string[]) {`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`

### `src/backend/apis/railway`

#### `src/backend/apis/railway/railway.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 3609 bytes; lineas: 76
- Funciones/clases/simbolos:
  - `L7: const registerRailwayRoutes =>`
- Vincula/importa: `../../backoffice/middleware/auth`, `../../providers/sessionSync`
- Exporta:
  - `L7: export const registerRailwayRoutes = (app: any, { RailwayApi }: any) => {`
- Rutas HTTP:
  - `L9: app.POST /api/restart-bot`
  - `L34: app.GET /api/variables`
  - `L48: app.POST /api/update-variables`
- Variables entorno vinculadas: `BOT_NAME`, `ASSISTANT_NAME`

#### `src/backend/apis/railway/Railway.ts`

- Tipo: texto; extension: `.ts`; tamano: 9856 bytes; lineas: 302
- Funciones/clases/simbolos:
  - `L6: const getRailwayConfig =>`
  - `L29: class RailwayApi`
- Vincula/importa: `dotenv/config`
- Exporta:
  - `L29: export class RailwayApi {`
- Variables entorno vinculadas: `RAILWAY_TOKEN`, `RAILWAY_PROJECT_ID`, `RAILWAY_ENVIRONMENT_ID`, `RAILWAY_SERVICE_ID`
- URLs externas:
  - `https://backboard.railway.com/graphql/v2`

### `src/backend/assets`

#### `src/backend/assets/android-chrome-192x192.png`

- Tipo: binario/asset; extension: `.png`; tamano: 16220 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/android-chrome-512x512.png`

- Tipo: binario/asset; extension: `.png`; tamano: 68706 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/apple-touch-icon.png`

- Tipo: binario/asset; extension: `.png`; tamano: 14584 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/favicon.ico`

- Tipo: binario/asset; extension: `.ico`; tamano: 15406 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/favicon-16x16.png`

- Tipo: binario/asset; extension: `.png`; tamano: 442 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/favicon-32x32.png`

- Tipo: binario/asset; extension: `.png`; tamano: 1077 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/msgReceived.mp3`

- Tipo: binario/asset; extension: `.mp3`; tamano: 5762 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/wa-bg-dark.webp`

- Tipo: binario/asset; extension: `.webp`; tamano: 136454 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/assets/wa-bg-light.webp`

- Tipo: binario/asset; extension: `.webp`; tamano: 78998 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `src/backend/backoffice`

#### `src/backend/backoffice/meta_webhook_register.ts`

- Tipo: texto; extension: `.ts`; tamano: 6040 bytes; lineas: 133
- Funciones/clases/simbolos:
  - `L23: function main`
- Vincula/importa: `@supabase/supabase-js`, `axios`, `../db/vault`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `meta_onboarding`, `settings`, `routing_table`
- URLs externas:
  - `https://bot-rialway-monoagente-production-1287.up.railway.app`
  - `https://${domain}`
  - `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`

#### `src/backend/backoffice/vaciar_base_backoffice.ts`

- Tipo: texto; extension: `.ts`; tamano: 5593 bytes; lineas: 126
- Funciones/clases/simbolos:
  - `L29: function main`
  - `L87: function executeCleanup`
- Vincula/importa: `@supabase/supabase-js`, `readline`, `../db/vault`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `chat_tags`, `messages`, `tickets`, `chats`, `tags`

### `src/backend/backoffice/db`

#### `src/backend/backoffice/db/historyHandler.ts`

- Tipo: texto; extension: `.ts`; tamano: 407 bytes; lineas: 11
- Vincula/importa: `../../db/historyHandler`
- Exporta:
  - `L9: export const HistoryHandler = CoreHistoryHandler;`
  - `L10: export { supabase, historyEvents };`

#### `src/backend/backoffice/db/vault.ts`

- Tipo: texto; extension: `.ts`; tamano: 910 bytes; lineas: 18
- Funciones/clases/simbolos:
  - `L8: const decode =>`
- Exporta:
  - `L14: export const vault = {`

### `src/backend/backoffice/middleware`

#### `src/backend/backoffice/middleware/auth.ts`

- Tipo: texto; extension: `.ts`; tamano: 7769 bytes; lineas: 201
- Funciones/clases/simbolos:
  - `L9: const _userCache = new`
  - `L13: function invalidateAuthCache`
  - `L20: function _getUserRole`
  - `L41: function _getUserInfo`
  - `L62: function _fetchAdminPass`
  - `L69: const fallback = new`
  - `L83: const backofficeAuth =>`
  - `L93: const searchParams = new`
  - `L161: const systemConfigAuth =>`
  - `L169: const searchParams = new`
- Vincula/importa: `../db/historyHandler`
- Exporta:
  - `L13: export function invalidateAuthCache() {`
  - `L83: export const backofficeAuth = async (req: any, res: any, next: () => void) => {`
  - `L161: export const systemConfigAuth = async (req: any, res: any, next: () => void) => {`
- Variables entorno vinculadas: `ADMIN_PASS`, `BACKOFFICE_TOKEN`, `RAILWAY_PROJECT_ID`

### `src/backend/backoffice/routes`

#### `src/backend/backoffice/routes/backoffice.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 245973 bytes; lineas: 4763
- Funciones/clases/simbolos:
  - `L75: const profilePicCache = new`
  - `L78: const profilePicNotFound = new`
  - `L89: function triggerMetaSync`
  - `L239: const sendJson =>`
  - `L247: const processBulkTemplate =>`
  - `L306: const mediaCache = new`
  - `L639: const registerBackofficeRoutes =>`
  - `L1065: const timeout = new`
  - `L1233: const existingIds = new`
  - `L1270: const tagMap = new`
  - `L1469: const parsed = new`
  - `L1818: const isAbsent =>`
  - `L1879: const syncMetaProvider =>`
  - `L2156: const msgDate = new`
  - `L2239: const msgDate = new`
  - `L2543: function toggleLogs`
  - `L2548: function saveManual`
  - `L2708: const isAbsent =>`
  - `L3071: const urlObj = new`
  - `L4344: const sendDirectWabaMessage =>`
  - `L4375: const attemptCreateMetaWabaGroup =>`
  - `L4671: const processImportExcel =>`
  - `L4687: const tagsToProcess = new`
  - `L4688: const allUniqueTags = new`
  - `L4720: const tagMap = new`
- Vincula/importa: `path`, `fs`, `child_process`, `url`, `body-parser`, `axios`, `xlsx`, `../middleware/auth`, `../db/historyHandler`, `./static.routes`, `../../apis/openai/openaiHelper`, `../../providers/instances`, `../../middleware/upload`
- Exporta:
  - `L107: export const processSendMessage = async (`
  - `L247: export const processBulkTemplate = async (req: any, res: any) => {`
  - `L639: export const registerBackofficeRoutes = (app: any) => {`
  - `L4671: export const processImportExcel = async (req: any, res: any) => {`
- Rutas HTTP:
  - `L668: app.POST /api/backoffice/log-error`
  - `L678: app.POST /api/backoffice/auth`
  - `L722: app.GET /api/backoffice/me`
  - `L748: app.GET /api/backoffice/users`
  - `L753: app.POST /api/backoffice/users`
  - `L762: app.PUT /api/backoffice/users/:id`
  - `L772: app.DELETE /api/backoffice/users/:id`
  - `L781: app.POST /api/backoffice/chat/assign`
  - `L789: app.GET /api/backoffice/chats`
  - `L804: app.DELETE /api/backoffice/chats/vaciar`
  - `L825: app.GET /api/backoffice/notifications/summary`
  - `L951: app.GET /api/backoffice/chats/import-template`
  - `L970: app.GET /api/backoffice/chats/:id`
  - `L982: app.POST /api/backoffice/chats/import`
  - `L989: app.GET /api/backoffice/quick-messages`
  - `L999: app.POST /api/backoffice/quick-messages`
  - `L1013: app.DELETE /api/backoffice/quick-messages/:id`
  - `L1024: app.GET /api/backoffice/messages/:chatId`
  - `L1032: app.GET /api/backoffice/profile-pic/:chatId`
  - `L1091: app.POST /api/backoffice/whatsapp/sync-contacts`
  - `L1357: app.POST /api/backoffice/send-message`
  - `L1375: app.DELETE /api/backoffice/messages/:chatId/:messageId`
  - `L1441: app.POST /api/backoffice/forward-message`
  - `L1550: app.POST /api/backoffice/baileys/start`
  - `L1607: app.POST /api/backoffice/toggle-bot`
  - `L1625: app.GET /api/backoffice/tags`
  - `L1631: app.GET /api/backoffice/chat/:id/contact`
  - `L1645: app.PUT /api/backoffice/chat/:id/contact`
  - `L1663: app.POST /api/backoffice/chat/manual-lead`
  - `L1675: app.POST /api/backoffice/tags`
  - `L1681: app.PUT /api/backoffice/tags/:id`
  - `L1687: app.DELETE /api/backoffice/tags/:id`
  - `L1692: app.POST /api/backoffice/chats/:chatId/tags`
  - `L1698: app.DELETE /api/backoffice/chats/:chatId/tags/:tagId`
  - `L1705: app.GET /api/backoffice/tickets/pending-count`
  - `L1712: app.GET /api/backoffice/tickets`
  - `L1724: app.POST /api/backoffice/tickets`
  - `L1734: app.PUT /api/backoffice/crm/ticket/:id`
  - `L1744: app.PUT /api/backoffice/tickets/:id`
  - `L1754: app.DELETE /api/backoffice/tickets/:id`
  - `L1767: app.GET /api/backoffice/crm/config`
  - `L1778: app.POST /api/backoffice/crm/config`
  - `L1789: app.GET /api/backoffice/crm/tasks`
  - `L1799: app.GET /api/backoffice/leads`
  - `L1809: app.GET /api/backoffice/whatsapp/config`
  - `L1837: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L1903: app.GET /api/backoffice/whatsapp/templates`
  - `L1920: app.GET /api/backoffice/whatsapp/library-templates`
  - `L1940: app.POST /api/backoffice/whatsapp/templates`
  - `L1975: app.POST /api/backoffice/whatsapp/register-step-1`
  - `L2027: app.POST /api/backoffice/whatsapp/register-step-2`
  - `L2060: app.GET /api/backoffice/whatsapp/template-excel/:templateName`
  - `L2217: app.POST /api/backoffice/whatsapp/send-bulk-template`
  - `L2222: app.POST /api/backoffice/whatsapp/send-quick-template`
  - `L2403: app.GET /api/backoffice/chats/import-template`
  - `L2423: app.GET /api/backoffice/whatsapp/onboard-callback`
  - `L2665: app.POST /api/backoffice/whatsapp/sync-manual`
  - `L2695: app.POST /api/backoffice/whatsapp/sync-ids`
  - `L2748: app.POST /api/backoffice/whatsapp/unlink-meta`
  - `L2819: app.POST /api/backoffice/whatsapp/onboard`
  - `L2849: app.POST /api/backoffice/sync-assistant-prompt`
  - `L2878: app.GET /api/backoffice/get-setting`
  - `L2890: app.POST /api/backoffice/save-setting`
  - `L2911: app.GET /api/backoffice/mercadopago/status`
  - `L2939: app.GET /api/backoffice/mercadopago/accounts`
  - `L2955: app.POST /api/backoffice/mercadopago/accounts/activate`
  - `L2986: app.POST /api/backoffice/mercadopago/accounts/delete`
  - `L3061: app.GET /api/backoffice/mercadopago/auth-url`
  - `L3101: app.GET /api/backoffice/mercadopago/callback`
  - `L3228: app.GET /api/mercadopago/callback`
  - `L3366: app.GET /api/clientes/mercadopago/webhook`
  - `L3371: app.POST /api/clientes/mercadopago/webhook`
  - `L3523: app.POST /api/backoffice/mercadopago/disconnect`
  - `L3545: app.POST /api/backoffice/mercadopago/create-link`
  - `L3565: app.POST /api/backoffice/whatsapp/sync-smb`
  - `L3573: app.GET whatsappProvider`
  - `L3601: app.GET /api/backoffice/whatsapp/groups`
  - `L3643: app.GET /api/backoffice/crm/tasks`
  - `L3653: app.POST /api/backoffice/crm/update-lead`
  - `L3678: app.POST /api/backoffice/chat/assign`
  - `L3710: app.GET /api/backoffice/crm/config`
  - `L3720: app.POST /api/backoffice/crm/config`
  - `L3737: app.GET /api/backoffice/config`
  - `L3781: app.POST /api/backoffice/save-settings-bulk`
  - `L3818: app.GET /api/backoffice/settings`
  - `L3844: app.GET /api/backoffice/get-prompt`
  - `L3863: app.GET /api/backoffice/openai/models`
  - `L3915: app.POST /api/backoffice/update-prompt`
  - `L3966: app.GET /api/backoffice/get-docs`
  - `L4001: app.GET /api/backoffice/blacklist/status`
  - `L4011: app.POST /api/backoffice/blacklist/activate`
  - `L4027: app.POST /api/backoffice/blacklist/deactivate`
  - `L4049: app.GET /api/backoffice/blacklist`
  - `L4080: app.POST /api/backoffice/blacklist`
  - `L4103: app.DELETE /api/backoffice/blacklist/:chatId`
  - `L4119: app.GET /api/backoffice/blacklist/check/:chatId`
  - `L4135: app.POST /api/backoffice/blacklist/toggle/:chatId`
  - `L4174: app.GET /api/backoffice/notifications/status`
  - `L4183: app.POST /api/backoffice/notifications/activate`
  - `L4198: app.POST /api/backoffice/notifications/deactivate`
  - `L4234: app.GET /api/backoffice/reportes/status`
  - `L4244: app.POST /api/backoffice/reportes/activate`
  - `L4259: app.POST /api/backoffice/reportes/deactivate`
  - `L4274: app.GET /api/backoffice/reportes`
  - `L4294: app.GET /api/backoffice/waba-groups/status`
  - `L4305: app.POST /api/backoffice/waba-groups/status`
  - `L4317: app.GET /api/backoffice/waba-groups`
  - `L4328: app.POST /api/backoffice/waba-groups`
  - `L4585: app.DELETE /api/backoffice/waba-groups/:id`
  - `L4641: app.POST /api/backoffice/chat/read/:chatId`
- Eventos/listeners:
  - `L17: setting_changed`
  - `L646: uncaughtException`
  - `L652: unhandledRejection`
- Variables entorno vinculadas: `PROJECT_URL`, `RAILWAY_PUBLIC_DOMAIN`, `ADMIN_USER`, `ADMIN_PASS`, `RAILWAY_SERVICE_NAME`, `PROJECT_NAME`, `STORAGE_MODE`, `RAILWAY_PROJECT_ID`, `META_WABA_ID`, `META_PHONE_ID`, `META_ACCESS_TOKEN`, `META_APP_ID`, `META_APP_SECRET`, `META_CONFIG_ID`, `META_VERIFY_TOKEN`, `MP_APP_ID`, `MP_PASS`, `SUPABASE_URL`, `MP_TOKEN_TEST`, `MP_ACCESS_TOKEN`
- Tablas/RPC vinculadas: `clientes`, `chats`, `tickets`, `messages`, `meta_onboarding`, `routing_table`, `mercadopago_acount_user`, `mercadopago_user_routoing`, `mercadopago_payments_clients`, `settings`, `blacklist`
- URLs externas:
  - `https://graph.facebook.com/v22.0/${phoneId}/smb_app_data`
  - `https://drive.google.com/uc?export=download&id=${driveIdMatch[1]}`
  - `https://${host}`
  - `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  - `http://${host}`
  - `https://${baseUrl}`
  - `https://tu-imagen.com/foto.jpg`
  - `https://graph.facebook.com/v22.0/oauth/access_token`
  - `https://graph.facebook.com/v22.0/${finalPhoneId}/register`
  - `https://graph.facebook.com/v22.0/${finalWabaId}/subscribed_apps`
  - `https://duskcodes.com.ar/dashboard.html?metaStatus=success`
  - `https://duskcodes.com.ar/dashboard.html`
  - `https://graph.facebook.com/v22.0/${phoneId}/deregister`
  - `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`
  - `https://ygyicozjewxbyixtpjlo.supabase.co/functions/v1/whatsapp-router/register`
  - `https://api.mercadopago.com/oauth/token/revoke`
  - `https://${domain}`
  - `https://auth.mercadopago.com.ar/authorization?client_id=${appId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${stateBase64}`
  - `https://api.mercadopago.com/oauth/token`
  - `https://api.mercadopago.com/users/me`
  - `https://${publicDomain}`
  - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
  - `https://api.mercadopago.com/v1/payments/${paymentId}`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/messages`
  - `https://graph.facebook.com/v22.0/${whatsappNumberId}/groups`
  - `https://graph.facebook.com/v22.0/${groupId}/invite_link`
  - `https://graph.facebook.com/v22.0/${groupJid}`
  - `https://graph.facebook.com/v22.0/${groupJid}/invite_link`
  - `https://graph.facebook.com/v22.0/${existingGroup.jid}/invite_link`

#### `src/backend/backoffice/routes/dashboard.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 8937 bytes; lineas: 204
- Funciones/clases/simbolos:
  - `L8: function getOpenAICost`
  - `L10: const startOfMonth = new`
  - `L11: const endOfMonth = new`
  - `L12: const now = new`
  - `L47: const registerDashboardRoutes =>`
  - `L64: const now = new`
  - `L69: const date = new`
  - `L95: const yesterday = new`
  - `L116: const lastWeek = new`
  - `L169: const tAss = new`
  - `L170: const tUser = new`
- Vincula/importa: `../db/historyHandler`, `../middleware/auth`, `axios`
- Exporta:
  - `L47: export const registerDashboardRoutes = (app: any) => {`
- Rutas HTTP:
  - `L55: app.GET /api/dashboard/openai-usage`
  - `L84: app.GET /api/dashboard/stats`
- Tablas/RPC vinculadas: `chats`, `messages`, `tickets`, `auditoria_acciones`
- URLs externas:
  - `https://api.openai.com/v1/organization/costs`

#### `src/backend/backoffice/routes/static.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 13640 bytes; lineas: 253
- Funciones/clases/simbolos:
  - `L12: const invalidateVisibilityCache =>`
  - `L17: const registerStaticRoutes =>`
  - `L19: const serveHtmlPage =>`
  - `L20: const handler =>`
  - `L71: const timeoutPromise = new`
- Vincula/importa: `path`, `fs`, `serve-static`, `../middleware/auth`, `../db/historyHandler`, `../../providers/instances`
- Exporta:
  - `L12: export const invalidateVisibilityCache = () => { _visibilityCache = null; };`
  - `L17: export const registerStaticRoutes = (app: any, { __dirname }: { __dirname: string }) => {`
- Rutas HTTP:
  - `L173: app.GET /favicon.ico`
  - `L189: app.GET /app.js`
  - `L192: app.USE /js`
  - `L193: app.USE /style`
  - `L194: app.USE /assets`
  - `L195: app.USE /assets`
  - `L197: app.USE /vendor/toast`
  - `L198: app.USE /vendor/fontawesome`
  - `L199: app.USE /uploads`
  - `L200: app.USE /temp`
  - `L201: app.USE /app/temp`
  - `L202: app.USE /tmp`
  - `L203: app.USE /app/tmp`
  - `L206: app.GET /qr.png`
  - `L232: app.GET /bot.groups.qr.png`
- Variables entorno vinculadas: `RAILWAY_PROJECT_ID`, `PROJECT_ID`, `RAILWAY_SERVICE_NAME`, `ASSISTANT_NAME`, `BOT_NAME`, `SYSTEM_CONFIG_VISIBLE`, `CRM_VISIBLE`
- Tablas/RPC vinculadas: `proyectos_railway`

### `src/backend/backoffice/webchat`

#### `src/backend/backoffice/webchat/WebChatManager.ts`

- Tipo: texto; extension: `.ts`; tamano: 647 bytes; lineas: 22
- Funciones/clases/simbolos:
  - `L4: class WebChatManager`
  - `L8: method getSession`
  - `L16: method resetSession`
- Vincula/importa: `./WebChatSession`
- Exporta:
  - `L4: export class WebChatManager {`

#### `src/backend/backoffice/webchat/WebChatSession.ts`

- Tipo: texto; extension: `.ts`; tamano: 610 bytes; lineas: 22
- Funciones/clases/simbolos:
  - `L1: class WebChatSession`
  - `L5: method addUserMessage`
  - `L11: method addAssistantMessage`
  - `L17: method clear`
- Exporta:
  - `L1: export class WebChatSession {`

### `src/backend/backoffice/webchat/routes`

#### `src/backend/backoffice/webchat/routes/webchat.routes.ts`

- Tipo: texto; extension: `.ts`; tamano: 10135 bytes; lineas: 212
- Funciones/clases/simbolos:
  - `L11: const webChatManager = new`
  - `L13: const registerWebchatRoutes =>`
  - `L184: const flowDynamic =>`
- Vincula/importa: `path`, `fs`, `../../middleware/auth`, `../WebChatManager`, `../../../../app`, `../../../apis/openai/openaiHelper`, `../../../apis/openai/AssistantResponseProcessor`, `../../../apis/openai/audioTranscriptior`, `../../../utils/retryHelper`
- Exporta:
  - `L13: export const registerWebchatRoutes = (app: any) => {`
- Rutas HTTP:
  - `L15: app.POST /webchat-api`
- Variables entorno vinculadas: `RAILWAY_PROJECT_ID`

### `src/backend/bot`

#### `src/backend/bot/ai.manager.ts`

- Tipo: texto; extension: `.ts`; tamano: 16746 bytes; lineas: 329
- Funciones/clases/simbolos:
  - `L10: class AiManager`
  - `L24: method getAssistantMap`
  - `L43: method getAssignedAssistantId`
  - `L93: method analizarDestinoRecepcionista`
  - `L117: method extraerResumenRecepcionista`
- Vincula/importa: `./presence`, `../db/historyHandler`, `@builderbot/bot`, `../utils/ArgentinaTime`, `../apis/openai/openaiHelper`, `../apis/openai/AssistantResponseProcessor`, `./timeOut`, `../apis/google/updateMain`
- Exporta:
  - `L10: export class AiManager {`
- Tablas/RPC vinculadas: `blacklist`

#### `src/backend/bot/clientModuleLoader.ts`

- Tipo: texto; extension: `.ts`; tamano: 739 bytes; lineas: 22
- Funciones/clases/simbolos:
  - `L4: function loadActiveClientModule`
- Vincula/importa: `./toolRegistry`
- Exporta:
  - `L4: export async function loadActiveClientModule() {`
- Variables entorno vinculadas: `CLIENT_SLUG`

#### `src/backend/bot/derivationFlowCall.ts`

- Tipo: texto; extension: `.ts`; tamano: 872 bytes; lineas: 28
- Funciones/clases/simbolos:
  - `L6: class DerivationFlowCall`
  - `L10: method constructor`
  - `L14: method startCall`
- Vincula/importa: `@vapi-ai/server-sdk`
- Exporta:
  - `L6: export class DerivationFlowCall {`
- URLs externas:
  - `https://docs.vapi.ai/`

#### `src/backend/bot/difusion.ts`

- Tipo: texto; extension: `.ts`; tamano: 1063 bytes; lineas: 31
- Funciones/clases/simbolos:
  - `L5: class Difusion`
  - `L9: method constructor`
  - `L19: method enviar`
- Vincula/importa: `@builderbot/provider-baileys`
- Exporta:
  - `L5: export class Difusion {`

#### `src/backend/bot/errorReporter.ts`

- Tipo: texto; extension: `.ts`; tamano: 1201 bytes; lineas: 29
- Funciones/clases/simbolos:
  - `L4: class ErrorReporter`
  - `L8: method constructor`
  - `L13: method reportError`
- Vincula/importa: `@builderbot/bot`, `@builderbot/provider-baileys`
- Exporta:
  - `L29: export { ErrorReporter };`

#### `src/backend/bot/messageHelper.ts`

- Tipo: texto; extension: `.ts`; tamano: 2596 bytes; lineas: 58
- Exporta:
  - `L6: export const obtenerTextoDelMensaje = (msg: any): string => {`
  - `L41: export const obtenerMensajeUnwrapped = (msg: any): any => {`
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/bot/presence.ts`

- Tipo: texto; extension: `.ts`; tamano: 1713 bytes; lineas: 42
- Exporta:
  - `L41: export { typing, recording }`
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/bot/processUserMessage.ts`

- Tipo: texto; extension: `.ts`; tamano: 329 bytes; lineas: 7
- Funciones/clases/simbolos:
  - `L2: function processUserMessage`
- Exporta:
  - `L2: export async function processUserMessage(msg: string): Promise<string> {`

#### `src/backend/bot/queueManager.ts`

- Tipo: texto; extension: `.ts`; tamano: 1454 bytes; lineas: 46
- Funciones/clases/simbolos:
  - `L1: const userQueues = new`
  - `L2: const userLocks = new`
  - `L10: const registerProcessCallback =>`
  - `L17: const handleQueue =>`
- Exporta:
  - `L1: export const userQueues = new Map();`
  - `L2: export const userLocks = new Map();`
  - `L10: export const registerProcessCallback = (cb: (item: any) => Promise<void>) => {`
  - `L17: export const handleQueue = async (userId: string) => {`

#### `src/backend/bot/timeOut.ts`

- Tipo: texto; extension: `.ts`; tamano: 2089 bytes; lineas: 58
- Funciones/clases/simbolos:
  - `L13: const start =>`
  - `L35: const reset =>`
  - `L47: const stop =>`
- Vincula/importa: `@builderbot/bot/dist/types`, `~/bot/flows/idleFlow`, `dotenv/config`
- Exporta:
  - `L53: export {`

#### `src/backend/bot/toolRegistry.ts`

- Tipo: texto; extension: `.ts`; tamano: 392 bytes; lineas: 13
- Vincula/importa: `../modules/aquavita/index`, `../modules/ganemos-net/index`, `../modules/cas-epc/index`
- Exporta:
  - `L6: export const moduleRegistry = {`

#### `src/backend/bot/toolRouter.ts`

- Tipo: texto; extension: `.ts`; tamano: 4053 bytes; lineas: 100
- Funciones/clases/simbolos:
  - `L15: function getActiveModule`
  - `L22: function invalidateModuleCache`
  - `L29: function executeClientTool`
- Vincula/importa: `./clientModuleLoader`, `../db/historyHandler`
- Exporta:
  - `L15: export async function getActiveModule() {`
  - `L22: export function invalidateModuleCache() {`
  - `L29: export async function executeClientTool(toolName: string, args: any, context: any = {}) {`
- Eventos/listeners:
  - `L8: setting_changed`
- Variables entorno vinculadas: `RAILWAY_PROJECT_ID`

### `src/backend/bot/flows`

#### `src/backend/bot/flows/idleFlow.ts`

- Tipo: texto; extension: `.ts`; tamano: 28574 bytes; lineas: 546
- Funciones/clases/simbolos:
  - `L13: function formatSummary`
  - `L35: function sendTextToGroup`
  - `L48: function sendMediaToGroup`
  - `L116: function cleanUpMediaFiles`
  - `L134: function dispatchVirtualGroupReports`
  - `L258: function reportAndClose`
  - `L307: const idleFlow = addKeyword`
  - `L424: const reconFlow = new`
  - `L487: const reconFlow = new`
- Vincula/importa: `@builderbot/bot`, `../../apis/openai/openaiHelper`, `../../../app`, `~/utils/extractJsonData`, `~/apis/google/googleSheetsResumen`, `fs`, `path`, `./reconectionFlow`, `../../db/historyHandler`, `../../providers/instances`
- Exporta:
  - `L546: export { idleFlow };`
- Variables entorno vinculadas: `RAILWAY_PROJECT_ID`
- URLs externas:
  - `https://wa.me/${phone}`
  - `https://wa.me/${ctx.from.replace(/[^0-9]/g`

#### `src/backend/bot/flows/locationFlow.ts`

- Tipo: texto; extension: `.ts`; tamano: 8424 bytes; lineas: 147
- Funciones/clases/simbolos:
  - `L21: function getAddressFromCoordinates`
  - `L26: const client = new`
  - `L46: const locationFlow = addKeyword`
- Vincula/importa: `@googlemaps/google-maps-services-js`, `fs`, `path`, `url`, `@builderbot/bot`, `~/bot/queueManager`, `./welcomeFlowTxt`, `../timeOut`, `./idleFlow`
- Exporta:
  - `L21: export async function getAddressFromCoordinates(lat: number, lng: number, projectId: string \| null = null) {`
  - `L46: export const locationFlow = addKeyword(EVENTS.LOCATION).addAction(`
- Variables entorno vinculadas: `GOOGLE_MAPS_API_KEY`

#### `src/backend/bot/flows/reconectionFlow.ts`

- Tipo: texto; extension: `.ts`; tamano: 13861 bytes; lineas: 278
- Funciones/clases/simbolos:
  - `L23: class ReconectionFlow`
  - `L36: method constructor`
  - `L59: method start`
  - `L216: method waitForUserResponse`
  - `L220: const onMessage =>`
  - `L263: method getState`
  - `L273: method restoreState`
- Vincula/importa: `../../apis/openai/openaiHelper`, `~/utils/extractJsonData`, `~/apis/google/googleDriveHandler`, `~/db/historyHandler`, `~/apis/openai/AssistantResponseProcessor`, `fs`
- Exporta:
  - `L23: export class ReconectionFlow {`
- Eventos/listeners:
  - `L248: message`
- Variables entorno vinculadas: `ASSISTANT_ID`, `RAILWAY_PROJECT_ID`

#### `src/backend/bot/flows/welcomeFlowButton.ts`

- Tipo: texto; extension: `.ts`; tamano: 1943 bytes; lineas: 52
- Funciones/clases/simbolos:
  - `L9: const welcomeFlowButton = addKeyword`
- Vincula/importa: `@builderbot/bot`, `@builderbot/provider-baileys`, `../timeOut`, `../queueManager`
- Exporta:
  - `L9: export const welcomeFlowButton = addKeyword<BaileysProvider, MemoryDB>(EVENTS.ACTION)`

#### `src/backend/bot/flows/welcomeFlowDoc.ts`

- Tipo: texto; extension: `.ts`; tamano: 5481 bytes; lineas: 117
- Funciones/clases/simbolos:
  - `L16: function extraerPaginasComoPNG`
  - `L27: const welcomeFlowDoc = addKeyword`
- Vincula/importa: `@builderbot/bot`, `@builderbot/provider-baileys`, `~/bot/timeOut`, `~/bot/queueManager`, `../../apis/openai/processImageWithVision`, `fs`, `path`, `child_process`
- Exporta:
  - `L27: export const welcomeFlowDoc = addKeyword<BaileysProvider, MemoryDB>(EVENTS.DOCUMENT)`

#### `src/backend/bot/flows/welcomeFlowImg.ts`

- Tipo: texto; extension: `.ts`; tamano: 7999 bytes; lineas: 198
- Funciones/clases/simbolos:
  - `L30: const welcomeFlowImg = addKeyword`
- Vincula/importa: `@builderbot/bot`, `../errorReporter`, `./welcomeFlowTxt`, `./welcomeFlowVideo`, `openai`, `../timeOut`, `../queueManager`
- Exporta:
  - `L197: export { welcomeFlowImg };`

#### `src/backend/bot/flows/welcomeFlowTxt.ts`

- Tipo: texto; extension: `.ts`; tamano: 2004 bytes; lineas: 55
- Funciones/clases/simbolos:
  - `L8: const welcomeFlowTxt = addKeyword`
- Vincula/importa: `@builderbot/bot`, `@builderbot/provider-baileys`, `~/bot/timeOut`, `~/bot/queueManager`
- Exporta:
  - `L8: export const welcomeFlowTxt = addKeyword<BaileysProvider, MemoryDB>(EVENTS.WELCOME)`

#### `src/backend/bot/flows/welcomeFlowVideo.ts`

- Tipo: texto; extension: `.ts`; tamano: 4133 bytes; lineas: 109
- Funciones/clases/simbolos:
  - `L8: const welcomeFlowVideo = addKeyword`
- Vincula/importa: `@builderbot/bot`, `../timeOut`, `../queueManager`, `fs`
- Exporta:
  - `L108: export { welcomeFlowVideo };`

#### `src/backend/bot/flows/welcomeFlowVoice.ts`

- Tipo: texto; extension: `.ts`; tamano: 7269 bytes; lineas: 165
- Funciones/clases/simbolos:
  - `L12: const welcomeFlowVoice = addKeyword`
- Vincula/importa: `@builderbot/bot`, `@builderbot/provider-baileys`, `~/bot/timeOut`, `~/bot/queueManager`, `~/apis/openai/audioTranscriptior`, `path`, `fs`
- Exporta:
  - `L12: export const welcomeFlowVoice = addKeyword<any, any>(EVENTS.VOICE_NOTE)`
- Variables entorno vinculadas: `STORAGE_MODE`
- Tablas/RPC vinculadas: `messages`

### `src/backend/db`

#### `src/backend/db/dbHandler.ts`

- Tipo: texto; extension: `.ts`; tamano: 3966 bytes; lineas: 86
- Funciones/clases/simbolos:
  - `L14: function executeDbQuery`
- Vincula/importa: `@supabase/supabase-js`, `dotenv`, `../apis/google/updateSheet`, `./vault`
- Exporta:
  - `L14: export async function executeDbQuery(sqlQuery: string): Promise<string> {`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`

#### `src/backend/db/historyHandler.ts`

- Tipo: texto; extension: `.ts`; tamano: 166683 bytes; lineas: 3634
- Funciones/clases/simbolos:
  - `L18: const historyEvents = new`
  - `L22: const recentBotSentMessages = new`
  - `L61: class HistoryHandler`
  - `L993: const thirtySecondsAgo = new`
  - `L1758: const blockedIds = new`
  - `L2481: const fiveDaysLater = new`
  - `L2499: const today = new`
  - `L2502: const fiveDaysLater = new`
  - `L3006: const currentKeys = new`
- Vincula/importa: `@supabase/supabase-js`, `events`, `dotenv`, `crypto`, `./vault`, `./localHistoryStore`
- Exporta:
  - `L15: export { supabase };`
  - `L18: export const historyEvents = new EventEmitter();`
  - `L22: export const recentBotSentMessages = new Set<string>();`
  - `L24: export const normalizeTextForCache = (text: string): string => {`
  - `L35: export interface Chat {`
  - `L51: export interface Message {`
  - `L61: export class HistoryHandler {`
- Eventos/listeners:
  - `L2689: postgres_changes`
  - `L2716: postgres_changes`
  - `L2747: postgres_changes`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`, `RAILWAY_SERVICE_NAME`, `PROJECT_ID`, `STORAGE_MODE`, `SYSTEM_CONFIG_VISIBLE`, `RAILWAY_STATIC_URL`, `RAILWAY_PUBLIC_DOMAIN`, `PROJECT_URL`, `OPENAI_API_KEY`, `OPENAI_ADMIN_API_KEY`, `OPENAI_API_KEY_TOOLS`, `ASSISTANT_NAME`
- Tablas/RPC vinculadas: `rpc:exec_sql`, `chats`, `messages`, `tickets`, `meta_onboarding`, `waba_report_groups`, `mercadopago_acount_user`, `settings`, `proyectos_railway`, `tags`, `chat_tags`, `blacklist`, `users`, `routing_table`, `system_logs`, `quick_messages`
- URLs externas:
  - `https://${publicDomain}`
  - `https://graph.facebook.com/v22.0/${wabaId}/subscribed_apps`

#### `src/backend/db/localHistoryStore.ts`

- Tipo: texto; extension: `.ts`; tamano: 30696 bytes; lineas: 805
- Funciones/clases/simbolos:
  - `L8: function ensureStoreDir`
  - `L15: function readJsonFile`
  - `L30: function writeJsonFile`
  - `L106: class LocalHistoryStore`
  - `L342: const nowStr = new`
- Vincula/importa: `fs`, `path`, `crypto`
- Exporta:
  - `L41: export interface LocalChat {`
  - `L66: export interface LocalMessage {`
  - `L77: export interface LocalTicket {`
  - `L92: export interface LocalTag {`
  - `L100: export interface LocalChatTag {`
  - `L106: export class LocalHistoryStore {`

#### `src/backend/db/supabaseAdapter.ts`

- Tipo: texto; extension: `.ts`; tamano: 5367 bytes; lineas: 141
- Funciones/clases/simbolos:
  - `L17: const init =>`
  - `L47: const saveToDb =>`
  - `L65: const clearSession =>`
  - `L80: const saveToDbDebounced =>`
- Vincula/importa: `@supabase/supabase-js`, `@whiskeysockets/baileys`
- Exporta:
  - `L5: export const useSupabaseAuthState = async (`
- Tablas/RPC vinculadas: `whatsapp_sessions`

#### `src/backend/db/vault.ts`

- Tipo: texto; extension: `.ts`; tamano: 910 bytes; lineas: 18
- Funciones/clases/simbolos:
  - `L8: const decode =>`
- Exporta:
  - `L14: export const vault = {`

### `src/backend/middleware`

#### `src/backend/middleware/global.ts`

- Tipo: texto; extension: `.ts`; tamano: 4777 bytes; lineas: 137
- Funciones/clases/simbolos:
  - `L10: const compatibilityLayer =>`
  - `L93: const rootRedirect =>`
  - `L112: const smartBodyParser =>`
- Vincula/importa: `fs`, `path`, `body-parser`
- Exporta:
  - `L10: export const compatibilityLayer = (req: any, res: any, next: () => void) => {`
  - `L93: export const rootRedirect = (req: any, res: any, next: () => void) => {`
  - `L112: export const smartBodyParser = (req: any, res: any, next: () => void) => {`
- Eventos/listeners:
  - `L67: error`

#### `src/backend/middleware/upload.ts`

- Tipo: texto; extension: `.ts`; tamano: 535 bytes; lineas: 18
- Vincula/importa: `multer`, `path`, `fs`
- Exporta:
  - `L5: export const upload = multer({`

### `src/backend/modules/aquavita`

#### `src/backend/modules/aquavita/index.ts`

- Tipo: texto; extension: `.ts`; tamano: 38486 bytes; lineas: 876
- Funciones/clases/simbolos:
  - `L15: function toDDMMYYYY`
  - `L18: const today = new`
  - `L36: function parseDate`
  - `L42: function validarRangoFechas`
  - `L59: function getFechaCierreEstimado`
  - `L60: const date = new`
  - `L74: function esRespuestaExitosa`
  - `L83: function logApiResponse`
- Vincula/importa: `../../apis/external/Aquavita/ClientesApi`, `../../apis/external/Aquavita/IncidentesApi`, `../../apis/external/Aquavita/FacturacionApi`, `../../apis/external/Aquavita/MovimientosApi`, `../../apis/external/Aquavita/getMapsUbication`, `../../apis/external/Aquavita/SessionApi`, `../../apis/openai/AssistantResponseProcessor`, `../../apis/external/Aquavita/ListaDePreciosApi`, `../../apis/external/Aquavita/RepartosApi`, `moment-timezone`, `util`
- Exporta:
  - `L91: export const aquavitaModule = {`

### `src/backend/modules/cas-epc`

#### `src/backend/modules/cas-epc/index.ts`

- Tipo: texto; extension: `.ts`; tamano: 6207 bytes; lineas: 150
- Vincula/importa: `../../apis/external/Cas-EPC/createUser-Selenium.js`, `../../apis/external/Cas-EPC/rechargeUser-Selenium.js`, `../../apis/external/Cas-EPC/withdrawalUser-Selunium.js`
- Exporta:
  - `L5: export const casEpcModule = {`

### `src/backend/modules/ganemos-net`

#### `src/backend/modules/ganemos-net/index.ts`

- Tipo: texto; extension: `.ts`; tamano: 6239 bytes; lineas: 150
- Vincula/importa: `../../apis/external/Ganemos-net/createUser-Selenium.js`, `../../apis/external/Ganemos-net/rechargeUser-Selenium.js`, `../../apis/external/Ganemos-net/withdrawalUser-Selunium.js`
- Exporta:
  - `L5: export const ganemosModule = {`

### `src/backend/providers`

#### `src/backend/providers/instances.ts`

- Tipo: texto; extension: `.ts`; tamano: 592 bytes; lineas: 27
- Funciones/clases/simbolos:
  - `L7: const setAdapterProvider =>`
  - `L14: const getAdapterProvider =>`
  - `L19: const setGroupProvider =>`
  - `L26: const getGroupProvider =>`
- Exporta:
  - `L7: export const setAdapterProvider = (instance: any) => {`
  - `L14: export const getAdapterProvider = () => adapterProvider;`
  - `L19: export const setGroupProvider = (instance: any) => {`
  - `L26: export const getGroupProvider = () => groupProvider;`

#### `src/backend/providers/MetaCloudProvider.ts`

- Tipo: texto; extension: `.ts`; tamano: 61117 bytes; lineas: 1214
- Funciones/clases/simbolos:
  - `L13: class MetaCloudProvider`
  - `L17: method constructor`
  - `L26: method updateConfig`
  - `L43: method saveFile`
  - `L149: method getExtByMimeOrType`
  - `L171: method initProvider`
  - `L175: method initVendor`
  - `L183: method beforeHttpServerInit`
  - `L185: method afterHttpServerInit`
  - `L202: method getTemplates`
  - `L225: method createTemplate`
  - `L329: method formatNumberForMeta`
  - `L345: method sendTemplate`
  - `L388: method getLibraryTemplates`
  - `L448: method getDemoTemplates`
  - `L474: method transcodeToSupportedFormat`
  - `L536: method uploadMedia`
  - `L558: const form = new`
  - `L643: method sendMessage`
  - `L817: method requestSmbSync`
  - `L842: method sendImage`
  - `L846: method sendSticker`
  - `L850: method sendVideo`
  - `L854: method sendAudio`
  - `L858: method sendFile`
  - `L865: method sendText`
  - `L1091: const timeoutPromise = new`
  - `L1192: method sendMessenger`
- Vincula/importa: `@builderbot/bot`, `axios`, `fs`, `path`, `child_process`, `form-data`, `../utils/logger.js`
- Exporta:
  - `L1212: export { MetaCloudProvider };`
- Eventos/listeners:
  - `L134: finish`
  - `L138: error`
- Variables entorno vinculadas: `META_API_VERSION`
- URLs externas:
  - `https://graph.facebook.com/${apiVersion}/${mediaId}`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates?fields=id,name,status,components,language,category,parameter_format`
  - `https://graph.facebook.com/v22.0/${waba_id}/message_templates`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/message_template_library?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/v22.0/${MASTER_WABA_ID}/message_templates?fields=id,name,components,language,category,status&limit=100`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/media`
  - `https://graph.facebook.com/${apiVersion}/${phone_number_id}/messages`
  - `https://graph.facebook.com/v22.0/${phone_number_id}/smb_app_data`
  - `https://graph.facebook.com/v25.0/me/messages?access_token=${access_token}`

#### `src/backend/providers/provider.manager.ts`

- Tipo: texto; extension: `.ts`; tamano: 26166 bytes; lineas: 506
- Funciones/clases/simbolos:
  - `L8: const IMAGE_EXTS = new`
  - `L11: function compressImageToDisk`
  - `L21: const sentMessageCache = new`
  - `L27: const trackSentMessage =>`
  - `L37: const registerProviderEvents =>`
  - `L41: const handleQR =>`
  - `L358: const hasActiveSession =>`
  - `L360: const getStatus =>`
- Vincula/importa: `path`, `fs`, `qrcode`, `@builderbot/bot`, `./sessionSync`, `../db/historyHandler`
- Exporta:
  - `L27: export const trackSentMessage = (id: string) => {`
  - `L37: export const registerProviderEvents = (provider: any, isGroupProvider: boolean = false) => {`
  - `L358: export const hasActiveSession = async (adapterProvider: any, groupProvider: any = null) => {`
- Eventos/listeners:
  - `L70: qr`
  - `L71: require_action`
  - `L72: auth_require`
  - `L73: message`
  - `L199: message_from_me`
  - `L320: contacts_sync`
  - `L343: ready`
- Tablas/RPC vinculadas: `meta_onboarding`
- URLs externas:
  - `https://graph.facebook.com/v22.0/${phoneId}`
  - `https://graph.facebook.com/v22.0/${metaOnboarding.whatsappBusinessId}`

#### `src/backend/providers/sessionSync.ts`

- Tipo: texto; extension: `.ts`; tamano: 10324 bytes; lineas: 267
- Funciones/clases/simbolos:
  - `L25: function restoreSessionFromDb`
  - `L103: function isSessionInDb`
  - `L131: function deleteSessionFromDb`
  - `L158: function deleteAllProjectSessionsFromDb`
  - `L181: function startSessionSync`
  - `L201: function syncToDb`
- Vincula/importa: `@supabase/supabase-js`, `fs`, `path`, `../db/vault`
- Exporta:
  - `L25: export async function restoreSessionFromDb(sessionId: string = 'default') {`
  - `L103: export async function isSessionInDb(sessionId: string = 'default'): Promise<boolean> {`
  - `L131: export async function deleteSessionFromDb(sessionId: string = 'default') {`
  - `L158: export async function deleteAllProjectSessionsFromDb() {`
  - `L181: export function startSessionSync(sessionId: string = 'default') {`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`, `ASSISTANT_NAME`, `BOT_NAME`
- Tablas/RPC vinculadas: `rpc:get_whatsapp_session`, `whatsapp_sessions`, `rpc:delete_whatsapp_session`, `rpc:save_whatsapp_session`

#### `src/backend/providers/SocksWebSocketTunnel.ts`

- Tipo: texto; extension: `.ts`; tamano: 106 bytes; lineas: 2
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/providers/SupabaseBaileysProvider.ts`

- Tipo: texto; extension: `.ts`; tamano: 31893 bytes; lineas: 638
- Funciones/clases/simbolos:
  - `L16: class SupabaseBaileysProvider`
  - `L26: method constructor`
  - `L501: function migrateLidChatToPhone`
- Vincula/importa: `builderbot-provider-sherpa`, `@builderbot/bot`, `@whiskeysockets/baileys`, `pino`, `path`, `fs`
- Exporta:
  - `L16: export class SupabaseBaileysProvider extends BaileysProvider {`
- Eventos/listeners:
  - `L215: messaging-history.set`
  - `L232: contacts.upsert`
  - `L253: contacts.update`
  - `L270: creds.update`
  - `L274: connection.update`
  - `L342: messages.upsert`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`, `RAILWAY_PROJECT_ID`
- Tablas/RPC vinculadas: `chats`, `messages`, `tickets`, `chat_tags`

### `src/backend/scratch`

#### `src/backend/scratch/searchProject.ts`

- Tipo: texto; extension: `.ts`; tamano: 1969 bytes; lineas: 62
- Funciones/clases/simbolos:
  - `L10: function run`
- Vincula/importa: `dotenv/config`, `@supabase/supabase-js`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `chats`, `messages`

#### `src/backend/scratch/searchUuid.ts`

- Tipo: texto; extension: `.ts`; tamano: 2637 bytes; lineas: 75
- Funciones/clases/simbolos:
  - `L15: function run`
- Vincula/importa: `dotenv/config`, `@supabase/supabase-js`
- Variables entorno vinculadas: `SUPABASE_URL`, `SUPABASE_KEY`
- Tablas/RPC vinculadas: `chats`, `messages`

#### `src/backend/scratch/testAgentLogin.ts`

- Tipo: texto; extension: `.ts`; tamano: 1392 bytes; lineas: 48
- Funciones/clases/simbolos:
  - `L14: function executeAgentLogin`
- Vincula/importa: `axios`
- Exporta:
  - `L14: export async function executeAgentLogin(): Promise<LoginResponse \| null> {`
- URLs externas:
  - `https://agents.ganamosnet.org`

#### `src/backend/scratch/testSeleniumLogin.ts`

- Tipo: texto; extension: `.ts`; tamano: 2562 bytes; lineas: 56
- Funciones/clases/simbolos:
  - `L5: function runLoginTest`
  - `L8: const options = new`
  - `L23: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `../apis/external/Ganemos-net/loginAdmin-Selenium.js`

#### `src/backend/scratch/testSeleniumLoginCasepc.ts`

- Tipo: texto; extension: `.ts`; tamano: 2460 bytes; lineas: 54
- Funciones/clases/simbolos:
  - `L5: function runLoginTestCasepc`
  - `L8: const options = new`
  - `L20: const authenticator = new`
- Vincula/importa: `selenium-webdriver`, `selenium-webdriver/chrome.js`, `../apis/external/Cas-EPC/loginAdmin-Selenium.js`
- Variables entorno vinculadas: `CASEPC_USER`, `CASEPC_PASS`

### `src/backend/sockets`

#### `src/backend/sockets/socket.manager.ts`

- Tipo: texto; extension: `.ts`; tamano: 5164 bytes; lineas: 120
- Funciones/clases/simbolos:
  - `L7: const initSocketIO =>`
  - `L15: const io = new`
  - `L87: const flowDynamic =>`
- Vincula/importa: `socket.io`, `../db/historyHandler`
- Exporta:
  - `L7: export const initSocketIO = (serverInstance: any, { processUserMessage }: any) => {`
- Eventos/listeners:
  - `L21: new_message`
  - `L25: message_deleted`
  - `L29: bot_toggled`
  - `L33: contact_updated`
  - `L37: ticket_updated`
  - `L41: ticket_deleted`
  - `L45: setting_changed`
  - `L49: reporte_created`
  - `L53: message_status_update`
  - `L57: user_updated`
  - `L61: connection`
  - `L63: message`

### `src/backend/types`

#### `src/backend/types/vapi-ai__server-sdk.d.ts`

- Tipo: texto; extension: `.ts`; tamano: 123 bytes; lineas: 5
- Exporta:
  - `L2: export const VapiClient: any;`
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `src/backend/utils`

#### `src/backend/utils/ArgentinaTime.ts`

- Tipo: texto; extension: `.ts`; tamano: 794 bytes; lineas: 17
- Funciones/clases/simbolos:
  - `L5: function getArgentinaDatetimeString`
  - `L6: const nowUtc = new`
  - `L7: const gmt3 = new`
- Exporta:
  - `L5: export function getArgentinaDatetimeString(): string {`

#### `src/backend/utils/extractJsonData.ts`

- Tipo: texto; extension: `.ts`; tamano: 2887 bytes; lineas: 69
- Exporta:
  - `L5: export type GenericResumenData = Record<string, string>;`
  - `L69: export { extraerDatosResumen };`
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/backend/utils/logger.ts`

- Tipo: texto; extension: `.ts`; tamano: 857 bytes; lineas: 14
- Funciones/clases/simbolos:
  - `L3: class SystemLogger`
- Vincula/importa: `../db/historyHandler.js`
- Exporta:
  - `L3: export class SystemLogger {`

#### `src/backend/utils/mercadopago.ts`

- Tipo: texto; extension: `.ts`; tamano: 3553 bytes; lineas: 101
- Funciones/clases/simbolos:
  - `L11: function createMercadoPagoPreference`
  - `L35: const client = new`
  - `L36: const preference = new`
  - `L75: function verifyMercadoPagoPayment`
- Vincula/importa: `mercadopago`, `../db/historyHandler`, `axios`
- Exporta:
  - `L11: export async function createMercadoPagoPreference(`
  - `L75: export async function verifyMercadoPagoPayment(paymentId: string, projectId: string): Promise<any> {`
- Variables entorno vinculadas: `RAILWAY_PUBLIC_DOMAIN`, `PROJECT_URL`
- Tablas/RPC vinculadas: `mercadopago_acount_user`
- URLs externas:
  - `https://${publicDomain}`
  - `https://api.mercadopago.com/v1/payments/${paymentId}`

#### `src/backend/utils/receiptVerifierMP.ts`

- Tipo: texto; extension: `.ts`; tamano: 6759 bytes; lineas: 132
- Funciones/clases/simbolos:
  - `L11: function verifyReceiptFlow`
- Vincula/importa: `../apis/openai/processImageWithVision`, `./mercadopago`, `../db/historyHandler`
- Exporta:
  - `L11: export async function verifyReceiptFlow(`
- Tablas/RPC vinculadas: `mercadopago_payments_clients`

#### `src/backend/utils/retryHelper.ts`

- Tipo: texto; extension: `.ts`; tamano: 1428 bytes; lineas: 41
- Funciones/clases/simbolos:
  - `L4: function withRetry`
- Exporta:
  - `L4: export async function withRetry<T>(`

#### `src/backend/utils/rootRouteHandler.ts`

- Tipo: texto; extension: `.ts`; tamano: 306 bytes; lineas: 10
- Funciones/clases/simbolos:
  - `L5: function handleRootRoute`
- Exporta:
  - `L5: export function handleRootRoute(req: any, res: any) {`

### `src/backend/workers`

#### `src/backend/workers/fileCleanup.worker.ts`

- Tipo: texto; extension: `.ts`; tamano: 1570 bytes; lineas: 41
- Funciones/clases/simbolos:
  - `L4: const startFileCleanupWorker =>`
  - `L7: const cleanDirectory =>`
  - `L33: const runCleanup =>`
- Vincula/importa: `fs`, `path`
- Exporta:
  - `L4: export const startFileCleanupWorker = (daysThreshold = 5) => {`

#### `src/backend/workers/humanInactivity.worker.ts`

- Tipo: texto; extension: `.ts`; tamano: 2922 bytes; lineas: 62
- Funciones/clases/simbolos:
  - `L8: const startHumanInactivityWorker =>`
  - `L14: const now = new`
  - `L15: const threshold = new`
- Vincula/importa: `../db/historyHandler`
- Exporta:
  - `L8: export const startHumanInactivityWorker = (timeoutMinutes = 15) => {`
- Tablas/RPC vinculadas: `chats`, `blacklist`

### `src/frontend`

#### `src/frontend/app.js`

- Tipo: texto; extension: `.js`; tamano: 16625 bytes; lineas: 349
- Funciones/clases/simbolos:
  - `L29: function loadViewScript`
  - `L34: const done =>`
  - `L47: function getViewName`
  - `L53: function highlightActiveNav`
  - `L105: function mountView`
  - `L224: function navigate`
  - `L243: function updateNotificationDots`
  - `L316: const _appSocket = io`
- Eventos/listeners:
  - `L317: setting_changed`
  - `L332: new_message`
  - `L335: contact_updated`
  - `L338: ticket_updated`
  - `L341: reporte_created`

#### `src/frontend/tailwind.config.js`

- Tipo: texto; extension: `.js`; tamano: 3383 bytes; lineas: 107
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `src/frontend/html`

#### `src/frontend/html/login.html`

- Tipo: texto; extension: `.html`; tamano: 3964 bytes; lineas: 91
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/frontend/html/shell.html`

- Tipo: texto; extension: `.html`; tamano: 22476 bytes; lineas: 410
- Funciones/clases/simbolos:
  - `L64: const urlObj = new`
- URLs externas:
  - `https://cdn.socket.io/4.7.2/socket.io.min.js`
  - `https://cdn.jsdelivr.net/npm/sweetalert2@11`
  - `https://clientesneurolinks.com/portal/dashboard`

### `src/frontend/js/auth`

#### `src/frontend/js/auth/auth-check.js`

- Tipo: texto; extension: `.js`; tamano: 1371 bytes; lineas: 29
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/frontend/js/auth/login.js`

- Tipo: texto; extension: `.js`; tamano: 2286 bytes; lineas: 56
- Funciones/clases/simbolos:
  - `L1: function login`
  - `L5: const urlParams = new`

### `src/frontend/js/backoffice`

#### `src/frontend/js/backoffice/backoffice.js`

- Tipo: texto; extension: `.js`; tamano: 163356 bytes; lineas: 3781
- Funciones/clases/simbolos:
  - `L3: function _tagStyle`
  - `L37: function initCRMData`
  - `L80: function scrollToBottom`
  - `L88: function sortChats`
  - `L91: const dateA = new`
  - `L92: const dateB = new`
  - `L123: const socket = io`
  - `L129: const normChatId =>`
  - `L246: function saveChatsToCache`
  - `L255: function loadChatsFromCache`
  - `L269: function fetchChats`
  - `L349: function fetchBotTags`
  - `L364: function renderBulkFilterDropdown`
  - `L381: function handleSearch`
  - `L389: function renderFilterDropdown`
  - `L399: function formatLastMessageTime`
  - `L401: const date = new`
  - `L402: const now = new`
  - `L405: const yesterday = new`
  - `L412: const avatarCache = new`
  - `L413: const avatarFailed = new`
  - `L416: function getInitials`
  - `L423: function getAvatarBg`
  - `L430: function renderChatList`
  - `L536: function switchPlatform`
  - `L548: function checkPlatformVisibility`
  - `L581: function selectChat`
  - `L661: function renderActiveChatTags`
  - `L674: function updateBotStatusText`
  - `L686: function updateInputState`
  - `L727: function fetchMessages`
  - `L740: const myController = new`
  - `L790: method init`
  - `L807: method get`
  - `L846: function loadCachedMedia`
  - `L873: function _waWaveform`
  - `L884: function _waFmtTime`
  - `L889: function _initWaPlayer`
  - `L896: const updateBars =>`
  - `L912: function waTogglePlay`
  - `L940: function waSeek`
  - `L948: function renderMessages`
  - `L957: const date = new`
  - `L976: function generateMessageHtml`
  - `L977: const date = new`
  - `L1079: function toggleBot`
  - `L1098: function handleFileSelect`
  - `L1105: function openFilePreview`
  - `L1148: function closeFilePreview`
  - `L1156: function sendFromPreview`
  - `L1165: function toggleRecording`
  - `L1173: function startRecording`
  - `L1186: const blob = new`
  - `L1187: const file = new`
  - `L1205: function stopRecording`
  - `L1216: function sendAudioFile`
  - `L1223: const formData = new`
  - `L1249: function _clearSendUI`
  - `L1264: function sendMessage`
  - `L1283: const formData = new`
  - `L1343: function closeAllPanels`
  - `L1353: function toggleCRMPanel`
  - `L1366: function toggleTagsPanel`
  - `L1378: function loadCRMJump`
  - `L1435: function jumpToCRM`
  - `L1470: function populateCRMFields`
  - `L1527: function openWhatsAppDirectSide`
  - `L1532: function saveCRMDetails`
  - `L1626: function createTag`
  - `L1643: function deleteTag`
  - `L1657: function addTagToChat`
  - `L1676: function removeTagFromChat`
  - `L1691: function renderTagManager`
  - `L1723: function logout`
  - `L1776: function fetchPendingTicketsCount`
  - `L1794: function setTicketsFilter`
  - `L1804: function fetchTickets`
  - `L1819: const date = new`
  - `L1880: function updateTicketStatus`
  - `L1902: function goToTicketChat`
  - `L1919: function openTicketModal`
  - `L1930: function closeTicketModal`
  - `L1935: function _ticketChatSearch`
  - `L1957: function _ticketAddChat`
  - `L1963: function _ticketRemoveChat`
  - `L1968: function _renderTicketChips`
  - `L1979: function _ticketFilesSelected`
  - `L1992: function _ticketRemoveFile`
  - `L1997: function createTicket`
  - `L2006: const fd = new`
  - `L2032: function fetchLeads`
  - `L2071: function selectLead`
  - `L2076: function realToggleLeads`
  - `L2096: function realToggleTickets`
  - `L2116: function toggleMetaPanel`
  - `L2145: function launchMetaOnboarding`
  - `L2156: const url = new`
  - `L2186: function assignTicketToMe`
  - `L2217: function closeActiveTicket`
  - `L2244: function reopenActiveTicket`
  - `L2263: function deleteActiveTicket`
  - `L2282: function toggleIntervention`
  - `L2291: const urlParams = new`
  - `L2322: function checkMetaStatus`
  - `L2417: function toggleBulkModal`
  - `L2425: function switchMetaTab`
  - `L2449: function useTemplateAsBase`
  - `L2482: const event = new`
  - `L2488: function loadTemplates`
  - `L2502: function loadLibraryTemplates`
  - `L2521: function populateLibraryFilters`
  - `L2536: const seenValues = new`
  - `L2565: function applyLibraryFilters`
  - `L2586: function renderTemplateCards`
  - `L2643: function showTemplateDetail`
  - `L2789: function submitTemplateForReview`
  - `L2852: function cancelTemplateCreation`
  - `L2861: function detectTemplateVariables`
  - `L2896: function startBulkSend`
  - `L2913: const formData = new`
  - `L3000: const urlParams = new`
  - `L3016: function confirmClearContacts`
  - `L3077: function startContactSync`
  - `L3128: function closeSyncModal`
  - `L3134: function toggleImportModal`
  - `L3148: function downloadImportTemplate`
  - `L3152: function startImportExcel`
  - `L3165: const formData = new`
  - `L3233: function toggleEmojiPicker`
  - `L3250: function insertEmoji`
  - `L3265: function openLightbox`
  - `L3277: function closeLightbox`
  - `L3296: function deleteMessage`
  - `L3327: function openForwardModal`
  - `L3340: function closeForwardModal`
  - `L3347: function handleForwardSearch`
  - `L3351: function renderForwardChatsList`
  - `L3386: function executeForward`
  - `L3487: function initBlacklist`
  - `L3499: function _updateBlacklistBtnVisibility`
  - `L3507: function checkBlacklistForChat`
  - `L3525: function _updateBlacklistBtn`
  - `L3538: function toggleBlacklist`
  - `L3573: function loadNotificationsStatus`
  - `L3586: function _updateNotificationsUI`
  - `L3618: function markChatAsRead`
  - `L3632: function executeUnreadFilter`
- Eventos/listeners:
  - `L125: connect`
  - `L131: new_message`
  - `L177: bot_toggled`
  - `L198: message_deleted`
  - `L208: message_status_update`
  - `L227: chat_read`
  - `L236: notifications_deactivated`
  - `L241: notifications_activated`
  - `L1733: ticket_updated`
  - `L1745: contact_updated`
  - `L1765: user_updated`
- URLs externas:
  - `http://www.w3.org/2000/svg`
  - `https://wa.me/${phone.replace(/\D/g`
  - `https://duskcodes.com.ar/meta-auth`
  - `https://business.facebook.com/latest/whatsapp_manager/template_library?asset_id=${config.waba_id}`
  - `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${config.waba_id}`
  - `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${window.metaConfig.waba_id}&edit_template=${template.name}`
  - `https://via.placeholder.com/300x150?text=Imagen+de+Cabecera`

#### `src/frontend/js/backoffice/backoffice.view.js`

- Tipo: texto; extension: `.js`; tamano: 44178 bytes; lineas: 698
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L517: method init`
  - `L682: const urlParams = new`
  - `L693: method destroy`
- URLs externas:
  - `https://connect.facebook.net/es_LA/sdk.js`

### `src/frontend/js/conexion`

#### `src/frontend/js/conexion/conexion.js`

- Tipo: texto; extension: `.js`; tamano: 28430 bytes; lineas: 464
- Funciones/clases/simbolos:
  - `L5: function fetchStatus`
  - `L149: function renderProviderStatus`
  - `L234: function fetchBotStatus`

#### `src/frontend/js/conexion/conexion.view.js`

- Tipo: texto; extension: `.js`; tamano: 13408 bytes; lineas: 184
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L175: method init`
  - `L180: method destroy`
- URLs externas:
  - `http://www.w3.org/2000/svg`

### `src/frontend/js/core`

#### `src/frontend/js/core/neural-bg.js`

- Tipo: texto; extension: `.js`; tamano: 3129 bytes; lineas: 101
- Funciones/clases/simbolos:
  - `L11: function isDark`
  - `L15: function initNeuralBg`
  - `L20: function resize`
  - `L39: function draw`

#### `src/frontend/js/core/toast.js`

- Tipo: texto; extension: `.js`; tamano: 4517 bytes; lineas: 110
- Funciones/clases/simbolos:
  - `L11: const _errorCache = new`
  - `L14: function reportGlobalError`
  - `L70: function getContainer`
  - `L81: function dismiss`
  - `L99: method requestAnimationFrame`
  - `L100: method requestAnimationFrame`
  - `L107: method setTimeout`

### `src/frontend/js/crm`

#### `src/frontend/js/crm/crm.js`

- Tipo: texto; extension: `.js`; tamano: 44297 bytes; lineas: 1067
- Funciones/clases/simbolos:
  - `L34: function _initCRMPage`
  - `L116: function loadCRMState`
  - `L137: function saveCRMState`
  - `L150: function syncCRM`
  - `L201: function renderBoard`
  - `L253: function distributeCards`
  - `L273: function createCardElement`
  - `L300: const isVisible =>`
  - `L361: function initDragAndDrop`
  - `L412: function saveCRMMetadata`
  - `L425: function updateCounters`
  - `L435: function openCardModal`
  - `L486: function fetchTags`
  - `L495: function renderLeadTags`
  - `L586: function updateLeadStatus`
  - `L600: const date = new`
  - `L623: function closeCardModal`
  - `L628: function openNewLeadModal`
  - `L629: function closeNewLeadModal`
  - `L634: function _setupCRMFormHandlers`
  - `L651: const date = new`
  - `L735: function editColumn`
  - `L744: function closeColumnModal`
  - `L749: function saveColumnName`
  - `L760: function addNewColumn`
  - `L772: function deleteCurrentColumn`
  - `L790: function getPriorityColor`
  - `L799: function getAlertClass`
  - `L801: const today = new`
  - `L807: function checkAlertsVisual`
  - `L808: const today = new`
  - `L818: function formatDate`
  - `L820: const d = new`
  - `L912: function loadTeam`
  - `L925: function renderUsersList`
  - `L946: function renderAssigneeSelect`
  - `L969: function loadTasksDashboard`
  - `L982: const todayStr = new`
  - `L1005: function openCardModalFromTask`
  - `L1020: function _initKanbanScrollBehavior`
  - `L1031: function scheduleSocketSyncCRM`
  - `L1036: function onContactUpdated`
  - `L1041: function onTicketUpdated`
  - `L1046: function onNewMessage`
- Eventos/listeners:
  - `L94: contact_updated`
  - `L95: ticket_updated`
  - `L96: new_message`
- URLs externas:
  - `https://wa.me/${cleanPhone}`

#### `src/frontend/js/crm/crm.view.js`

- Tipo: texto; extension: `.js`; tamano: 20521 bytes; lineas: 337
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L45: method init`
  - `L53: method destroy`
  - `L74: function _getCRMModals`
- URLs externas:
  - `https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js`

#### `src/frontend/js/crm/crm-common.js`

- Tipo: texto; extension: `.js`; tamano: 45335 bytes; lineas: 983
- Funciones/clases/simbolos:
  - `L87: function _csdCloseAll`
  - `L99: function _csdToggle`
  - `L125: function h`
  - `L136: function _csdSelect`
  - `L147: function _csdSync`
  - `L158: function _csdRebuild`
  - `L170: function initTheme`
  - `L177: function toggleTheme`
  - `L188: function logout`
  - `L208: function highlightActiveNav`
  - `L234: function _closeAllNavDropdowns`
  - `L382: function _refreshMetaPanelStatus`
  - `L462: function updateMetaNavButton`
  - `L604: function _clearFlyoutStyles`
  - `L610: function _setSidebarCollapsed`
  - `L620: function _initFlyoutHover`
  - `L626: const show =>`
  - `L633: const hide =>`
  - `L717: const observer = new`

#### `src/frontend/js/crm/crm-tareas.js`

- Tipo: texto; extension: `.js`; tamano: 37094 bytes; lineas: 878
- Funciones/clases/simbolos:
  - `L30: function getLocalDateString`
  - `L38: function _initCRMTareasPage`
  - `L109: function loadCRMState`
  - `L128: function syncCRM`
  - `L176: function renderBoard`
  - `L219: function distributeCards`
  - `L222: const today = new`
  - `L225: const tomorrow = new`
  - `L229: const weekLimit = new`
  - `L251: const alertD = new`
  - `L282: function createCardElement`
  - `L309: const isVisible =>`
  - `L371: function saveCRMMetadata`
  - `L384: function updateCounters`
  - `L395: function openCardModal`
  - `L446: function closeCardModal`
  - `L450: function _setupCRMTareasFormHandlers`
  - `L466: const date = new`
  - `L549: function fetchTags`
  - `L558: function renderLeadTags`
  - `L638: const date = new`
  - `L742: function loadTeam`
  - `L755: function renderUsersList`
  - `L776: function renderAssigneeSelect`
  - `L791: function openNewLeadModal`
  - `L792: function closeNewLeadModal`
  - `L797: function getPriorityColor`
  - `L806: function getAlertClass`
  - `L814: function checkAlertsVisual`
  - `L824: function formatDate`
  - `L831: const d = new`
  - `L836: function scheduleSocketSyncCRM`
  - `L841: function onTareasContactUpdated`
  - `L846: function onTareasTicketUpdated`
  - `L867: function _initKanbanScrollBehaviorTareas`
- Eventos/listeners:
  - `L93: contact_updated`
  - `L94: ticket_updated`
- URLs externas:
  - `https://wa.me/${cleanPhone}`

#### `src/frontend/js/crm/crm-tareas.view.js`

- Tipo: texto; extension: `.js`; tamano: 4155 bytes; lineas: 83
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L57: method init`
  - `L65: method destroy`
- URLs externas:
  - `https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js`

### `src/frontend/js/dashboard`

#### `src/frontend/js/dashboard/dashboard.js`

- Tipo: texto; extension: `.js`; tamano: 4951 bytes; lineas: 109
- Funciones/clases/simbolos:
  - `L8: function _loadDashboardData`
  - `L33: function _renderDashStats`
  - `L34: const set =>`
  - `L52: function _createDashChart`
  - `L90: function _onDashThemeChange`

#### `src/frontend/js/dashboard/dashboard.view.js`

- Tipo: texto; extension: `.js`; tamano: 7847 bytes; lineas: 142
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L130: method init`
  - `L138: method destroy`
- URLs externas:
  - `https://cdn.jsdelivr.net/npm/chart.js`

### `src/frontend/js/docs`

#### `src/frontend/js/docs/docs.js`

- Tipo: texto; extension: `.js`; tamano: 1702 bytes; lineas: 43
- Funciones/clases/simbolos:
  - `L6: function _loadDocsContent`

#### `src/frontend/js/docs/docs.view.js`

- Tipo: texto; extension: `.js`; tamano: 2163 bytes; lineas: 50
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L39: method init`
  - `L48: method destroy`
- URLs externas:
  - `https://cdn.jsdelivr.net/npm/marked/marked.min.js`

### `src/frontend/js/lista-negra`

#### `src/frontend/js/lista-negra/lista-negra.view.js`

- Tipo: texto; extension: `.js`; tamano: 26132 bytes; lineas: 480
- Funciones/clases/simbolos:
  - `L9: function getHTML`
  - `L124: function init`
  - `L129: function _loadStatus`
  - `L141: function _render`
  - `L160: function _loadEntries`
  - `L170: function _renderTable`
  - `L248: function _onSinBotChange`
  - `L260: function _onBloqCrmChange`
  - `L272: function _onNotesBlur`
  - `L281: function _upsertEntry`
  - `L298: function _deleteEntry`
  - `L312: function _openAddModal`
  - `L323: function _closeModal`
  - `L328: function _toggleModalMode`
  - `L348: function _saveEntry`
  - `L395: function _onToggle`
  - `L409: function _activar`
  - `L432: function _desactivar`
  - `L451: function _escHtml`
  - `L455: function _escAttr`
  - `L459: function destroy`
- URLs externas:
  - `http://www.w3.org/2000/svg`

### `src/frontend/js/mercado-libre`

#### `src/frontend/js/mercado-libre/mercado-libre.view.js`

- Tipo: texto; extension: `.js`; tamano: 2037 bytes; lineas: 36
- Funciones/clases/simbolos:
  - `L2: function getHTML`

#### `src/frontend/js/mercado-libre/mercado-libre-bot.view.js`

- Tipo: texto; extension: `.js`; tamano: 2155 bytes; lineas: 36
- Funciones/clases/simbolos:
  - `L2: function getHTML`

#### `src/frontend/js/mercado-libre/mercado-libre-productos.view.js`

- Tipo: texto; extension: `.js`; tamano: 2101 bytes; lineas: 36
- Funciones/clases/simbolos:
  - `L2: function getHTML`

#### `src/frontend/js/mercado-libre/mercado-pago.view.js`

- Tipo: texto; extension: `.js`; tamano: 23716 bytes; lineas: 401
- Funciones/clases/simbolos:
  - `L20: function getHTML`
  - `L125: function attachAccountActionListeners`
  - `L181: function checkStatus`
  - `L255: function startOAuthFlow`
  - `L297: function init`
  - `L301: const urlParams = new`

### `src/frontend/js/meta`

#### `src/frontend/js/meta/meta.view.js`

- Tipo: texto; extension: `.js`; tamano: 43459 bytes; lineas: 752
- Funciones/clases/simbolos:
  - `L11: function getHTML`
  - `L189: function init`
  - `L210: function destroy`
  - `L220: function checkMetaConnection`
  - `L225: const validId =>`
  - `L255: function loadTags`
  - `L273: function toggleTagChip`
  - `L285: function loadTemplates`
  - `L307: function renderCards`
  - `L341: function switchMetaTab`
  - `L359: function showTemplateDetail`
  - `L479: function downloadBulkExcel`
  - `L491: function startBulkSend`
  - `L504: const formData = new`
  - `L545: function startQuickBulkSend`
  - `L618: function showTplPreviewModal`
  - `L639: function launchMetaOnboardingView`
  - `L665: const url = new`
  - `L698: function syncAndSaveConnection`
  - `L740: function toggleMetaAccordion`
- URLs externas:
  - `https://business.facebook.com/latest/whatsapp_manager/template_library`
  - `https://business.facebook.com/latest/whatsapp_manager/message_templates`
  - `https://business.facebook.com/latest/whatsapp_manager/template_library?asset_id=${_metaConfig.waba_id}`
  - `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${_metaConfig.waba_id}`
  - `https://business.facebook.com/latest/whatsapp_manager/message_templates?asset_id=${_metaConfig.waba_id}&edit_template=${template.name}`
  - `https://duskcodes.com.ar/meta-auth`

### `src/frontend/js/reportes`

#### `src/frontend/js/reportes/reportes.view.js`

- Tipo: texto; extension: `.js`; tamano: 44702 bytes; lineas: 783
- Funciones/clases/simbolos:
  - `L12: function getHTML`
  - `L210: function init`
  - `L237: function _renderState`
  - `L256: function _onToggle`
  - `L270: function _activar`
  - `L294: function _desactivar`
  - `L318: function _loadWabaStatus`
  - `L332: function _renderWabaState`
  - `L352: function _onWabaToggle`
  - `L379: function _loadWabaGroups`
  - `L400: function _renderWabaGroups`
  - `L450: function _deleteGroup`
  - `L470: function _openGroupModal`
  - `L497: function _closeGroupModal`
  - `L503: function _addContactRowHTML`
  - `L528: function _addGroupContactRow`
  - `L535: function _updateAddContactButtonState`
  - `L550: function _saveGroup`
  - `L629: function _escAttr`
  - `L633: function _load`
  - `L652: function _buildTipoFilters`
  - `L666: function _setTipo`
  - `L671: function _render`
  - `L701: function _renderItem`
  - `L729: function _tipoColor`
  - `L738: function _subscribeRealtime`
  - `L747: function _formatDate`
  - `L754: function _escHtml`
  - `L758: function destroy`
- Eventos/listeners:
  - `L741: reporte_created`
- URLs externas:
  - `http://www.w3.org/2000/svg`

### `src/frontend/js/system-config`

#### `src/frontend/js/system-config/system-config.js`

- Tipo: texto; extension: `.js`; tamano: 22484 bytes; lineas: 486
- Funciones/clases/simbolos:
  - `L3: function _initSystemConfigPage`
  - `L26: const getSafeToken =>`
  - `L29: function loadOpenAIModels`
  - `L62: function loadVariables`
  - `L108: function loadEditorFromHidden`
  - `L134: function updateClientSlugVisibility`
  - `L197: const formData = new`
  - `L323: function syncPromptWithOpenAI`
- Eventos/listeners:
  - `L124: change`

#### `src/frontend/js/system-config/system-config.view.js`

- Tipo: texto; extension: `.js`; tamano: 37397 bytes; lineas: 539
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L484: method init`
  - `L504: method destroy`
- URLs externas:
  - `https://api.sws.com/v1`
  - `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css`
  - `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/dracula.min.css`
  - `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js`
  - `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/markdown/markdown.min.js`

### `src/frontend/js/tickets`

#### `src/frontend/js/tickets/support.widget.js`

- Tipo: texto; extension: `.js`; tamano: 36594 bytes; lineas: 903
- Funciones/clases/simbolos:
  - `L13: function init`
  - `L58: function _fetchUserName`
  - `L72: function _injectHTML`
  - `L545: function toggleOpen`
  - `L563: function switchTab`
  - `L581: function handleHomeAction`
  - `L591: function openModal`
  - `L597: function closeModal`
  - `L601: function submitTicket`
  - `L625: function _loadChats`
  - `L635: function _fetchAll`
  - `L664: const dateStr = new`
  - `L693: function _renderCard`
  - `L694: const date = new`
  - `L716: function _updateBadge`
  - `L729: function openChat`
  - `L740: function closeChat`
  - `L789: function _updateChatUI`
  - `L802: function _renderChatMessages`
  - `L841: function sendMessage`
  - `L884: function _parseJson`
- Eventos/listeners:
  - `L31: ticket_updated`
  - `L48: ticket_deleted`

### `src/frontend/js/usuarios`

#### `src/frontend/js/usuarios/usuarios.view.js`

- Tipo: texto; extension: `.js`; tamano: 7392 bytes; lineas: 112
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L104: method init`
  - `L110: method destroy`

### `src/frontend/js/utils`

#### `src/frontend/js/utils/skeleton.js`

- Tipo: texto; extension: `.js`; tamano: 2361 bytes; lineas: 61
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `src/frontend/js/webchat`

#### `src/frontend/js/webchat/webchat.js`

- Tipo: texto; extension: `.js`; tamano: 7568 bytes; lineas: 184
- Funciones/clases/simbolos:
  - `L5: function setAppVh`
  - `L21: function _computeHeights`
  - `L32: function _autosizeSmart`
  - `L54: function _chat`
  - `L56: function _addMsg`
  - `L80: function _doSend`
  - `L97: function _sendPayload`
  - `L110: function _handleFile`
  - `L114: const img = new`
  - `L127: const reader = new`

#### `src/frontend/js/webchat/webchat.view.js`

- Tipo: texto; extension: `.js`; tamano: 3863 bytes; lineas: 71
- Funciones/clases/simbolos:
  - `L5: method getHTML`
  - `L64: method init`
  - `L69: method destroy`
- URLs externas:
  - `https://img.freepik.com/vector-gratis/robot-vectorial-graident-ai_78370-4114.jpg?semt=ais_hybrid&w=740&q=80`

### `src/frontend/style`

#### `src/frontend/style/tailwind.css`

- Tipo: texto; extension: `.css`; tamano: 149561 bytes; lineas: 3
- URLs externas:
  - `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@400;500;600&display=swap`
  - `https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0`

#### `src/frontend/style/tailwind.input.css`

- Tipo: texto; extension: `.css`; tamano: 153612 bytes; lineas: 6606
- URLs externas:
  - `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@400;500;600&display=swap`

### `src/frontend/style/vendor/fontawesome/css`

#### `src/frontend/style/vendor/fontawesome/css/all.min.css`

- Tipo: texto; extension: `.css`; tamano: 75744 bytes; lineas: 9
- URLs externas:
  - `https://fontawesome.com`
  - `https://fontawesome.com/license/free`

### `src/frontend/style/vendor/fontawesome/webfonts`

#### `src/frontend/style/vendor/fontawesome/webfonts/fa-brands-400.woff2`

- Tipo: binario/asset; extension: `.woff2`; tamano: 110088 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/frontend/style/vendor/fontawesome/webfonts/fa-regular-400.woff2`

- Tipo: binario/asset; extension: `.woff2`; tamano: 18924 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/frontend/style/vendor/fontawesome/webfonts/fa-solid-900.woff2`

- Tipo: binario/asset; extension: `.woff2`; tamano: 114740 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `src/frontend/style/vendor/fontawesome/webfonts/fa-v4compatibility.woff2`

- Tipo: binario/asset; extension: `.woff2`; tamano: 4032 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

### `temp`

#### `temp/Neurolinks_info_BOT.docx`

- Tipo: binario/asset; extension: `.docx`; tamano: 0 bytes
- Nota: Binario/asset: se audita ruta, extension y tamano; no contiene funciones extraibles como texto.
- Funciones/vinculos detectados: ninguno por extraccion estatica.

#### `temp/productos_neurolinks.json`

- Tipo: texto; extension: `.json`; tamano: 931 bytes; lineas: 32
- Funciones/vinculos detectados: ninguno por extraccion estatica.

