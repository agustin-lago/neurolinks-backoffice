import { google } from "googleapis";
import { DefaultTransporter } from "google-auth-library";
import type { GaxiosOptions, GaxiosPromise } from "gaxios";
import "dotenv/config";
import {
    getRuntimeConfigValue
} from "../../config/runtimeConfig";

const getGoogleProxyUrl = (): string | null => {
    const envGoogleProxy =
        getRuntimeConfigValue(
            "GOOGLE_PROXY_URL"
        );

    if (envGoogleProxy === 'direct') {
        return null;
    }

    return (
        envGoogleProxy ||
        "https://google-proxy.clientesneurolinks.com"
    );
};

const getProxyAuthToken = (): string | undefined => {
    return (
        getRuntimeConfigValue(
            "NEUROLINKS_PROXY_AUTH_TOKEN"
        ) ||
        undefined
    );
};

const originalRequest = DefaultTransporter.prototype.request;
DefaultTransporter.prototype.request = function <T>(opts: GaxiosOptions): GaxiosPromise<T> {
    const mutableOpts = opts as GaxiosOptions & { url?: string; headers?: Record<string, string> };
    const googleProxyUrl = getGoogleProxyUrl();

    if (mutableOpts.url && googleProxyUrl) {
        const originalUrlStr = String(mutableOpts.url);
        let targetHost = "www.googleapis.com";

        try {
            const parsed = new URL(originalUrlStr);
            targetHost = parsed.host;
        } catch {
            // fallback
        }

        // Reemplazar subdominios conocidos de Google por el proxy
        mutableOpts.url = originalUrlStr.replace("https://www.googleapis.com", googleProxyUrl);
        mutableOpts.url = mutableOpts.url.replace("https://oauth2.googleapis.com", googleProxyUrl);
        mutableOpts.url = mutableOpts.url.replace("https://sheets.googleapis.com", googleProxyUrl);
        mutableOpts.url = mutableOpts.url.replace("https://calendar.googleapis.com", googleProxyUrl);
        mutableOpts.url = mutableOpts.url.replace("https://drive.googleapis.com", googleProxyUrl);
        mutableOpts.url = mutableOpts.url.replace("https://docs.googleapis.com", googleProxyUrl);

        if (mutableOpts.url !== originalUrlStr) {
            mutableOpts.headers = mutableOpts.headers || {};
            mutableOpts.headers["x-target-host"] = targetHost;

            const proxyAuthToken = getProxyAuthToken();

            if (proxyAuthToken) {
                mutableOpts.headers["x-proxy-token"] = proxyAuthToken;
            }
            console.log(`[Google Proxy] Interceptado: ${originalUrlStr} -> ${mutableOpts.url} (Destino: ${targetHost})`);
        }
    }
    return originalRequest.call(this, mutableOpts) as GaxiosPromise<T>;
};

/**
 * Obtiene la clave privada de Google limpia de las variables de entorno.
 * Maneja comillas circundantes y saltos de línea escapados.
 */
export const getGooglePrivateKey = (): string => {
    let rawKey =
        getRuntimeConfigValue(
            "GOOGLE_PRIVATE_KEY"
        ) || "";
    
    // 1. Quitar comillas si el string viene envuelto en ellas (común en Railway/Docker/.env)
    if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
        rawKey = rawKey.slice(1, -1);
    }
    
    // 2. Reemplazar los saltos de línea literales '\n' por caracteres de salto de línea reales
    // y asegurar que no haya espacios extras al inicio/final de cada línea
    return rawKey.replace(/\\n/g, '\n').trim();
};

/**
 * Retorna las credenciales de Google configuradas.
 */
export const getGoogleCredentials = () => {
    return {
        client_email:
            getRuntimeConfigValue(
                "GOOGLE_CLIENT_EMAIL"
            ),
        private_key: getGooglePrivateKey(),
    };
};

/**
 * Crea una instancia de autenticación de Google con los scopes necesarios.
 * @param scopes Lista de scopes de Google API
 */
export const createGoogleAuth = (scopes: string[]) => {
    const creds = getGoogleCredentials();
    
    if (!creds.private_key) {
        console.warn("⚠️ [GoogleAuth] La clave privada de Google está vacía.");
    }

    return new google.auth.GoogleAuth({
        credentials: {
            client_email: creds.client_email,
            private_key: creds.private_key,
        },
        scopes: scopes,
    });
};
