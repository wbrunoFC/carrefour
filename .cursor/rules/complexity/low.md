# Complexidade LOW

Esforço baixo. Implementar, executar, manter e diagnosticar é direto.

Decisão: seguir [decision.md](./decision.md). Só `LOW` se HIGH e MEDIUM (e overrides) forem descartados.

## Definição

Interação nativa simples, seletores estáveis, mesmo fluxo em Android e iOS, sem troca de contexto com SO/hybrid e sem gestos especializados.

## Indicadores

- Tap, type ou assert em `accessibilityId` / label estável.
- Fluxo linear curto (1–3 ações).
- Sem dialog de SO, biometria ou WebView.
- Sem coordenadas nem hierarquia frágil.
- Falha aponta claramente o passo quebrado.
- Manutenção típica = atualizar um seletor/texto.

## Exemplo

```text
Preencher input-email e assertar valor
Criticality: HIGH
Complexity: LOW
```

## Implicações

- Bom candidato a smoke quando Criticality for adequada.
- Evitar over-engineering (helpers desnecessários).
- **Não** marcar `LOW` só porque a feature é simples no produto — avaliar o esforço do **teste**.

## O que não é LOW

- Qualquer override HIGH (gesto, biometria, permissão SO, hybrid) → [HIGH](./high.md).
- Alert async, picker, storage persistido, modal animado → [MEDIUM](./medium.md).
