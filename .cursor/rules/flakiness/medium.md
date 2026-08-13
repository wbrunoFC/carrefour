# Flakiness MEDIUM

Há alguma instabilidade, mas o resultado **ainda** ajuda a identificar problemas reais.

Decisão: seguir [decision.md](./decision.md). Chega a `MEDIUM` se não houver override/critério [HIGH](./high.md).

## Definição

Sinais de inconsistência controlados ou parcialmente explicados: falha ocasional, causa conhecida (ou parcialmente), reprodução possível em condições específicas.

## Indicadores

- Falhas ocasionais.
- Falha com causa parcialmente conhecida.
- Problema reproduzível em determinadas condições.
- Dependência de ambiente conhecida.
- Pequena dependência temporal.
- Ocorre somente em determinado device ou versão.
- Retry necessário ocasionalmente.
- Falha ainda investigável com confiança razoável.

## Exemplo

```text
PASS
PASS
PASS
FAIL
PASS
PASS
```

Falha ocasional no carregamento de uma tela em ambiente específico.

```text
Flakiness: MEDIUM
```

## Implicações

- Monitorar; registrar `FlakinessReason` e `Cause`.
- Preferir waits condicionais a sleeps; reduzir dependência de estado/ambiente.
- Com Criticality HIGH → atenção na matriz de risco ([decision.md](./decision.md)).

## O que não é MEDIUM

- Falhas frequentes / retry frequente / resultado ignorado pelo time → [HIGH](./high.md).
- Comportamento determinístico, sem retry, causa clara quando falha → [LOW](./low.md).
