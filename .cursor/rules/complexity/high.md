# Complexidade HIGH

Esforço alto para implementar, executar, manter ou diagnosticar.

Decisão: seguir [decision.md](./decision.md). Overrides de HIGH obrigatório prevalecem sobre pontuação.

## Definição

Cenário que exige conhecimento especializado, troca de contexto com o SO/hybrid, gestos não triviais, ou implementação substancialmente diferente entre Android e iOS.

## Indicadores

- Gestos (drag-and-drop, swipe coordenado, PanResponder).
- Biometria (`LocalAuthentication` / FaceID / Fingerprint).
- Diálogos e fluxos de permissão do SO.
- WebView / contexto híbrido (com ou sem `testID`).
- Seletores frágeis (class name, coordenadas, hierarquia profunda).
- Setup de device capabilities (enrolled biometrics, keystore, rede específica).
- Diagnóstico típico exige logs de driver/SO além da UI.

## Exemplo

```text
Automatizar login biométrico + assert do prompt nativo
Complexity: HIGH
```

## Implicações

- Planejar tempo extra de implementação e estabilização.
- Preferir helpers/abstrações reutilizáveis (gestos, permissions, biometrics).
- Documentar pré-condições de device no teste.
- Com Criticality HIGH → priorizar investimento; não confundir esforço com flakiness.

## O que não é HIGH

- Muitos passos de tap/type lineares com seletores estáveis → ver [MEDIUM](./medium.md) ou [LOW](./low.md).
- Teste flaky porém de interação simples → flakiness alta ≠ complexity alta.
