export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HttpJsonResponse<T> = {
  statusCode: number;
  body: T;
};

export type SendJsonOptions = {
  authorizationToken?: string;
  body?: unknown;
};
