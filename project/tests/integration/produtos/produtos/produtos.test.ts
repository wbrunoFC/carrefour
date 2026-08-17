import { createProdutoPayload } from '../../../support/factories/produto.factory';
import { criarSessaoAdmin } from '../../../support/fixtures/serverest/criar-sessao-admin';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { ProdutosActions } from '../../../../pages/produtos/produtos.actions';
import { ProdutosAssertions } from '../../../../pages/produtos/produtos.assertions';
import {
  PRODUTOS_PRODUTOS_001,
  PRODUTOS_PRODUTOS_002,
  PRODUTOS_PRODUTOS_003,
  PRODUTOS_PRODUTOS_004,
  PRODUTOS_PRODUTOS_005,
  PRODUTOS_PRODUTOS_006,
} from './produtos.scenarios';

describe('FEATURE: produtos', () => {
  const produtosAssertions = new ProdutosAssertions();
  let produtosActions: ProdutosActions;

  before(async () => {
    const sessaoAdmin = await criarSessaoAdmin();
    produtosActions = new ProdutosActions(sessaoAdmin.authorizationToken);
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_001, ['smoke']), async () => {
    const listagem = await produtosActions.listar();
    produtosAssertions.expectListagemOk(listagem);
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_005), async () => {
    const produto = createProdutoPayload();
    const cadastro = await produtosActions.cadastrar(produto);
    produtosAssertions.expectCadastroOk(cadastro);

    const detalhe = await produtosActions.buscarPorId(cadastro.body._id);
    produtosAssertions.expectProdutoEncontrado(detalhe, {
      _id: cadastro.body._id,
      nome: produto.nome,
    });
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_002), async () => {
    const cadastro = await produtosActions.cadastrar(createProdutoPayload());
    produtosAssertions.expectCadastroOk(cadastro);
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_006), async () => {
    const cadastroSemToken = await produtosActions.cadastrarSemToken(createProdutoPayload());
    produtosAssertions.expectCadastroSemToken(cadastroSemToken);
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_003), async () => {
    const cadastro = await produtosActions.cadastrar(createProdutoPayload());
    produtosAssertions.expectCadastroOk(cadastro);

    const produtoAlterado = createProdutoPayload({ descricao: 'Produto alterado via PUT' });
    const alteracao = await produtosActions.alterar(cadastro.body._id, produtoAlterado);
    produtosAssertions.expectAlteracaoOk(alteracao);
  });

  it(buildScenarioTitle(PRODUTOS_PRODUTOS_004), async () => {
    const cadastro = await produtosActions.cadastrar(createProdutoPayload());
    produtosAssertions.expectCadastroOk(cadastro);

    const exclusao = await produtosActions.excluir(cadastro.body._id);
    produtosAssertions.expectExclusaoOk(exclusao);
  });
});
