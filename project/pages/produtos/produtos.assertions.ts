import { expect } from '@wdio/globals';

import type { HttpJsonResponse } from '../../tests/support/fixtures/serverest/http-json-response';
import {
  HTTP_STATUS,
  PRODUTO_ID_PATTERN,
  SERVEREST_MESSAGE,
} from '../../tests/support/fixtures/serverest/serverest-contract';
import type { ProdutoCriado, ProdutoDetalhe, ProdutoListagem, ProdutoMensagem } from './produtos.types';

export class ProdutosAssertions {
  expectListagemOk(listagem: HttpJsonResponse<ProdutoListagem>): void {
    expect(listagem.statusCode).toBe(HTTP_STATUS.OK);
    expect(Array.isArray(listagem.body.produtos)).toBe(true);
    expect(listagem.body.quantidade).toBe(listagem.body.produtos.length);
  }

  expectProdutoEncontrado(
    detalhe: HttpJsonResponse<ProdutoDetalhe>,
    produtoEsperado: { _id: string; nome: string },
  ): void {
    expect(detalhe.statusCode).toBe(HTTP_STATUS.OK);
    expect(detalhe.body._id).toBe(produtoEsperado._id);
    expect(detalhe.body.nome).toBe(produtoEsperado.nome);
  }

  expectCadastroOk(
    cadastro: HttpJsonResponse<ProdutoMensagem>,
  ): asserts cadastro is HttpJsonResponse<ProdutoCriado> {
    expect(cadastro.statusCode).toBe(HTTP_STATUS.CREATED);
    expect(cadastro.body.message).toBe(SERVEREST_MESSAGE.CADASTRO_SUCESSO);
    expect(cadastro.body._id).toMatch(PRODUTO_ID_PATTERN);
  }

  expectCadastroSemToken(cadastro: HttpJsonResponse<ProdutoMensagem>): void {
    expect(cadastro.statusCode).toBe(HTTP_STATUS.UNAUTHORIZED);
    expect(cadastro.body.message).toBe(SERVEREST_MESSAGE.TOKEN_INVALIDO);
  }

  expectAlteracaoOk(alteracao: HttpJsonResponse<ProdutoMensagem>): void {
    expect(alteracao.statusCode).toBe(HTTP_STATUS.OK);
    expect(alteracao.body.message).toBe(SERVEREST_MESSAGE.ALTERACAO_SUCESSO);
  }

  expectExclusaoOk(exclusao: HttpJsonResponse<ProdutoMensagem>): void {
    expect(exclusao.statusCode).toBe(HTTP_STATUS.OK);
    expect(exclusao.body.message).toBe(SERVEREST_MESSAGE.EXCLUSAO_SUCESSO);
  }
}
