import { createUsuarioAdminPayload } from '../../factories/usuario.factory';
import { HTTP_STATUS, SERVEREST_PATH } from './serverest-contract';
import { sendServerestJson } from './send-serverest-json';

type UsuarioCriado = {
  message: string;
  _id: string;
};

type LoginAdmin = {
  message: string;
  authorization: string;
};

export type SessaoAdmin = {
  authorizationToken: string;
  usuarioId: string;
};

export async function criarSessaoAdmin(): Promise<SessaoAdmin> {
  const usuarioAdmin = createUsuarioAdminPayload();
  const cadastroUsuario = await sendServerestJson<UsuarioCriado>('POST', SERVEREST_PATH.usuarios, {
    body: usuarioAdmin,
  });

  if (cadastroUsuario.statusCode !== HTTP_STATUS.CREATED) {
    throw new Error(`Cadastro de usuario admin falhou com HTTP ${cadastroUsuario.statusCode}`);
  }

  const loginAdmin = await sendServerestJson<LoginAdmin>('POST', SERVEREST_PATH.login, {
    body: {
      email: usuarioAdmin.email,
      password: usuarioAdmin.password,
    },
  });

  if (loginAdmin.statusCode !== HTTP_STATUS.OK || !loginAdmin.body.authorization) {
    throw new Error(`Login admin falhou com HTTP ${loginAdmin.statusCode}`);
  }

  return {
    authorizationToken: loginAdmin.body.authorization,
    usuarioId: cadastroUsuario.body._id,
  };
}
