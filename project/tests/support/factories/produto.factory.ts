const DEFAULT_PRECO_PRODUTO = 100;
const DEFAULT_QUANTIDADE_PRODUTO = 10;

export type ProdutoPayload = {
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
};

export function createProdutoPayload(overrides: Partial<ProdutoPayload> = {}): ProdutoPayload {
  const sufixoUnico = `${Date.now()}${Math.floor(Math.random() * 10_000)}`;

  return {
    nome: `Produto QA ${sufixoUnico}`,
    preco: DEFAULT_PRECO_PRODUTO,
    descricao: 'Produto de teste API',
    quantidade: DEFAULT_QUANTIDADE_PRODUTO,
    ...overrides,
  };
}
