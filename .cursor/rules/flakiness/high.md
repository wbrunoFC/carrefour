# Flakiness HIGH

Baixa confiabilidade no resultado. A equipe **não** pode usar o teste como indicador seguro da qualidade do produto.

Decisão: seguir [decision.md](./decision.md). Overrides de HIGH obrigatório prevalecem sobre pontuação.

## Definição

Resultado do teste é inconsistente ou opaco o suficiente para que PASS/FAIL não indiquem, com confiança, se o produto está saudável.

## Indicadores

- Falha frequentemente sem alteração no produto.
- Mesmo código produz resultados diferentes.
- Falha não é reproduzível.
- Necessita frequentemente de retry.
- Falha em diferentes pontos sem padrão aparente.
- Depende fortemente de timing.
- Depende de ambiente instável.
- Depende de estado de outros testes.
- A equipe frequentemente ignora o resultado do teste.
- É necessário executar manualmente várias vezes para saber se há problema real.
- Não é possível identificar claramente a causa da falha.

## Exemplo

```text
PASS
PASS
FAIL
PASS
FAIL
PASS
```

Sem alteração no aplicativo.

```text
Flakiness: HIGH
```

## Implicações

- Prioridade máxima de estabilização (especialmente se Criticality for HIGH — ver matriz em [decision.md](./decision.md)).
- Registrar `FlakinessReason` e `Cause` no `.feature`.
- Não mascarar com retry silencioso; retry só com rastreamento.
- Quarantine / despromoção do gate só com acordo explícito do time.

## O que não é HIGH

- Complexidade alta do Page Object ou muitos passos → irrelevante sozinho.
- Uma falha com causa clara de ambiente (Appium down, device offline) → investigar infra antes de marcar flaky.
- Falha ocasional com causa conhecida e reproduzível → ver [MEDIUM](./medium.md).
