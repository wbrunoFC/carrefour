# Criticidade HIGH

Nível máximo. Falha neste nível **bloqueia release** ou exige correção imediata / suite smoke obrigatória.

Decisão: seguir [decision.md](./decision.md). Se qualquer critério HIGH se aplicar → `HIGH`.

## Definição

Cenário cuja falha impede uso do produto, gera dano financeiro, fraude, exposição de dados ou violação regulatória — ou afeta grande parte dos usuários em jornada crítica.

## Critérios (qualquer um basta)

- Impede acesso ao produto.
- Impede conclusão de jornada crítica.
- Pode causar perda financeira significativa.
- Pode causar fraude.
- Pode expor dados sensíveis.
- Pode causar violação de segurança.
- Pode causar impacto regulatório / compliance.
- Afeta grande parte dos usuários em uma jornada importante.

## Implicações para automação

- Prioridade 1 na suíte (smoke / regressão crítica).
- Cobrir Android e iOS quando o risco for cross-platform.
- Falha = investigar antes de seguir outros testes do mesmo fluxo.
- Waits e asserts estáveis; flaky em HIGH é inaceitável sem quarantine documentada.

## O que não é HIGH

- Bug visual sem bloquear jornada → ver [LOW](./low.md).
- Feature importante com workaround ruim → ver [MEDIUM](./medium.md).
