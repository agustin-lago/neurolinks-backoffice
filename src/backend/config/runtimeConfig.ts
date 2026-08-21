import "dotenv/config";

export const GLOBAL_RUNTIME_KEYS = [
    // Supabase / infraestructura base
    "SUPABASE_URL",
    "SUPABASE_KEY",

    // Railway / identidad del runtime
    "RAILWAY_TOKEN",
    "RAILWAY_PROJECT_ID",
    "RAILWAY_ENVIRONMENT_ID",
    "RAILWAY_SERVICE_ID",
    "RAILWAY_SERVICE_NAME",
    "RAILWAY_PUBLIC_DOMAIN",
    "RAILWAY_STATIC_URL",
    "PROJECT_URL",
    "PUBLIC_BACKOFFICE_URL",

    // Autenticación global Neurolinks
    "BACKOFFICE_TOKEN",
    "SUPERADMIN_PASSWORD",
    "MASTER_ADMIN_PASSWORD",

    // OpenAI global de Neurolinks
    "OPENAI_API_KEY",
    "OPENAI_API_KEY_IMG",
    "OPENAI_ADMIN_API_KEY",
    "OPENAI_API_KEY_TOOLS",
    "NEUROLINKS_OPENAI_BASE_URL",
    "NEUROLINKS_PROXY_AUTH_TOKEN",

    // Google global de Neurolinks
    "GOOGLE_PRIVATE_KEY",
    "GOOGLE_CLIENT_EMAIL",
    "GOOGLE_MAPS_API_KEY",
    "GOOGLE_PROXY_URL",

    // Meta App global de Neurolinks
    "META_APP_ID",
    "META_APP_SECRET",
    "META_CONFIG_ID",
    "META_AUTH_URL",
    "META_AUTH_SHARED_SECRET",
    "META_VERIFY_TOKEN",
    "META_API_VERSION"
] as const;

export type GlobalRuntimeKey =
    typeof GLOBAL_RUNTIME_KEYS[number];

const GLOBAL_RUNTIME_KEY_SET =
    new Set<string>(GLOBAL_RUNTIME_KEYS);

const cleanRuntimeValue = (
    value: string | undefined | null
): string => {
    if (value === undefined || value === null) {
        return "";
    }

    let normalized =
        String(value).trim();

    if (
        (
            normalized.startsWith('"') &&
            normalized.endsWith('"')
        ) ||
        (
            normalized.startsWith("'") &&
            normalized.endsWith("'")
        )
    ) {
        normalized =
            normalized
                .slice(1, -1)
                .trim();
    }

    return normalized;
};

export const isGlobalRuntimeKey = (
    key: string
): key is GlobalRuntimeKey => {
    return GLOBAL_RUNTIME_KEY_SET.has(key);
};

export const getRuntimeConfigValue = (
    key: GlobalRuntimeKey
): string | null => {
    const value =
        cleanRuntimeValue(
            process.env[key]
        );

    return value || null;
};

export const requireRuntimeConfigValue = (
    key: GlobalRuntimeKey
): string => {
    const value =
        getRuntimeConfigValue(key);

    if (!value) {
        throw new Error(
            `[RuntimeConfig] Falta la variable global ${key}. Debe configurarse en Railway ENV/.env y no en Supabase settings.`
        );
    }

    return value;
};