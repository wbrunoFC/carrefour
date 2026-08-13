# Flakiness LOW

Comportamento determinístico. Resultado do teste é **confiável** como sinal de qualidade.

Decisão: seguir [decision.md](./decision.md). Só `LOW` se HIGH e MEDIUM (e overrides) forem descartados.

## Definição

Mesmo código, mesmas condições → mesmo resultado. PASS indica produto saudável no escopo do teste; FAIL indica defeito (ou regressão) investigável.

## Indicadores

- Sem histórico relevante de falhas intermitentes.
- Resultado consistente entre execuções.
- Não depende de sleeps ou delays arbitrários.
- Usa sincronização baseada em condições.
- Não depende da execução de outros testes.
- Dados controlados.
- Não depende de infraestrutura instável.
- Falhas normalmente com causa identificável.
- Não necessita de retry para obter PASS.

## Exemplo

```text
PASS
PASS
PASS
PASS
PASS
PASS
PASS
```

```text
Flakiness: LOW
```

## Implicações

- Adequado para smoke/gate quando Criticality também for adequada.
- Manter independência de testes e waits explícitos.
- **Não** marcar `LOW` só porque “passou nas últimas N runs” sem avaliar dimensões.

## O que não é LOW

- Qualquer override HIGH (retry frequente, equipe não confia, causa indeterminável) → [HIGH](./high.md).
- Falha ocasional com causa/ambiente conhecidos → [MEDIUM](./medium.md).
