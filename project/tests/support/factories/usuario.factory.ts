const FLAG_ADMINISTRADOR = 'true' as const;
const SENHA_USUARIO_TESTE = 'teste';

export type UsuarioAdminPayload = {
  nome: string;
  email: string;
  password: string;
  administrador: typeof FLAG_ADMINISTRADOR;
};

export function createUsuarioAdminPayload(): UsuarioAdminPayload {
  const sufixoUnico = `${Date.now()}${Math.floor(Math.random() * 10_000)}`;

  return {
    nome: `QA ${sufixoUnico}`,
    email: `qa.${sufixoUnico}@email.com`,
    password: SENHA_USUARIO_TESTE,
    administrador: FLAG_ADMINISTRADOR,
  };
}
