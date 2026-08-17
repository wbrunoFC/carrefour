export type { ProdutoPayload } from '../../tests/support/factories/produto.factory';

export type ProdutoListagem = {
  quantidade: number;
  produtos: Array<{ _id: string; nome: string }>;
};

export type ProdutoDetalhe = {
  _id: string;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
};

export type ProdutoMensagem = {
  message: string;
  _id?: string;
};

export type ProdutoCriado = {
  message: string;
  _id: string;
};
