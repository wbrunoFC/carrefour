import {
  DEFAULT_SERVEREST_BASE_URL,
  JSON_HEADERS,
} from './serverest-contract';
import type { HttpJsonResponse, HttpMethod, SendJsonOptions } from './http-json-response';

export function resolveServerestBaseUrl(): string {
  return (process.env.API_BASE_URL ?? DEFAULT_SERVEREST_BASE_URL).replace(/\/$/, '');
}

export async function sendServerestJson<T>(
  method: HttpMethod,
  path: string,
  options: SendJsonOptions = {},
): Promise<HttpJsonResponse<T>> {
  const headers: Record<string, string> = { ...JSON_HEADERS };

  if (options.authorizationToken) {
    headers.Authorization = options.authorizationToken;
  }

  const httpResponse = await fetch(`${resolveServerestBaseUrl()}${path}`, {
    method,
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  const parsedBody: unknown = await httpResponse.json();

  return {
    statusCode: httpResponse.status,
    // ServeRest não envia schema em runtime; o genérico T é o contrato do caller.
    body: parsedBody as T,
  };
}
