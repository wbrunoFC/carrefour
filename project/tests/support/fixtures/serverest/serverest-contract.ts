export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
} as const;

export const SERVEREST_PATH = {
  login: '/login',
  usuarios: '/usuarios',
  produtos: '/produtos',
} as const;

export function produtoPorIdPath(produtoId: string): string {
  return `${SERVEREST_PATH.produtos}/${produtoId}`;
}

export const SERVEREST_MESSAGE = {
  CADASTRO_SUCESSO: 'Cadastro realizado com sucesso',
  ALTERACAO_SUCESSO: 'Registro alterado com sucesso',
  EXCLUSAO_SUCESSO: 'Registro excluído com sucesso',
  TOKEN_INVALIDO:
    'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais',
} as const;

export const PRODUTO_ID_PATTERN = /^[a-zA-Z0-9]{16}$/;

export const DEFAULT_SERVEREST_BASE_URL = 'https://serverest.dev';

export const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const;
