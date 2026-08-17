import type { HttpJsonResponse } from '../../tests/support/fixtures/serverest/http-json-response';
import { produtoPorIdPath, SERVEREST_PATH } from '../../tests/support/fixtures/serverest/serverest-contract';
import { sendServerestJson } from '../../tests/support/fixtures/serverest/send-serverest-json';
import type { ProdutoDetalhe, ProdutoListagem, ProdutoMensagem, ProdutoPayload } from './produtos.types';

export class ProdutosActions {
  constructor(private readonly authorizationToken: string) {}

  listar(): Promise<HttpJsonResponse<ProdutoListagem>> {
    return sendServerestJson<ProdutoListagem>('GET', SERVEREST_PATH.produtos, {
      authorizationToken: this.authorizationToken,
    });
  }

  buscarPorId(produtoId: string): Promise<HttpJsonResponse<ProdutoDetalhe>> {
    return sendServerestJson<ProdutoDetalhe>('GET', produtoPorIdPath(produtoId));
  }

  cadastrar(produto: ProdutoPayload): Promise<HttpJsonResponse<ProdutoMensagem>> {
    return sendServerestJson<ProdutoMensagem>('POST', SERVEREST_PATH.produtos, {
      authorizationToken: this.authorizationToken,
      body: produto,
    });
  }

  cadastrarSemToken(produto: ProdutoPayload): Promise<HttpJsonResponse<ProdutoMensagem>> {
    return sendServerestJson<ProdutoMensagem>('POST', SERVEREST_PATH.produtos, {
      body: produto,
    });
  }

  alterar(produtoId: string, produto: ProdutoPayload): Promise<HttpJsonResponse<ProdutoMensagem>> {
    return sendServerestJson<ProdutoMensagem>('PUT', produtoPorIdPath(produtoId), {
      authorizationToken: this.authorizationToken,
      body: produto,
    });
  }

  excluir(produtoId: string): Promise<HttpJsonResponse<ProdutoMensagem>> {
    return sendServerestJson<ProdutoMensagem>('DELETE', produtoPorIdPath(produtoId), {
      authorizationToken: this.authorizationToken,
    });
  }
}
