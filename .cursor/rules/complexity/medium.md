# Complexidade MEDIUM

Esforço moderado. Exige cuidados além do tap/type básico, mas ainda cabe em padrão de Page Object convencional.

Decisão: seguir [decision.md](./decision.md). Chega a `MEDIUM` se não houver override/critério [HIGH](./high.md).

## Definição

Cenário com waits condicionais, Alert/modal, picker nativo, storage async/secure, ou divergência pontual de plataforma — sem chegar a gesto/SO/hybrid pesado.

## Indicadores

- `Alert` após delay ou ação assíncrona.
- Modal animado / side menu.
- Picker nativo (Android vs iOS).
- Assert de valor persistido (KV, SQLite, SecureStore).
- Scroll não trivial até elemento.
- Ajustes pontuais de plataforma no mesmo fluxo.
- Orquestração média (vários passos + waits).

## Exemplo

```text
Salvar valor no SecureStore e assertar readout
Complexity: MEDIUM
```

## Implicações

- Usar waits explícitos baseados em estado.
- Isolar diferenças Android/iOS em helpers pequenos.
- Documentar motivo se o esforço subir com o tempo.

## O que não é MEDIUM

- Gesto, biometria, permissão SO, WebView híbrido → [HIGH](./high.md).
- Tap/type/assert linear em `accessibilityId` estável → [LOW](./low.md).
