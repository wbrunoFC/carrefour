# Quickstart: Authentication

Validação ponta a ponta deste domínio. Código completo fica em `/speckit-implement`.

## Pré-requisitos

- App demo instalável em `project/apps/`
- cwd = `project/`
- Android local: emulador + Appium (`npm run appium:start` se precisar)
- iOS local: simulador (opcional neste check; constituição pede os dois, CI iOS fora do slice)

## O que precisa existir depois do implement

1. Cases AUTH-SIGNUP-001 e AUTH-SIGNUP-002 em `data/authentication.json`
2. `tests/e2e/authentication/signup/signup.test.ts` (+ `signup.scenarios.ts`)
3. Alerta Signed Up! em `pages/signup/{android,ios}.json`
4. `Please enter the same password` em `pages/error-validation/{android,ios}.json`

Login (001–003) já roda hoje. Não deve regressar.

## Rodar

Signup só:

```bash
cd project
npm run test:android -- --spec tests/e2e/authentication/signup/signup.test.ts
```

Domínio inteiro (login + signup):

```bash
cd project
npm run test:android -- --spec tests/e2e/authentication/**/*.test.ts
```

iOS: `npm run test:ios` com o mesmo `--spec`.

## Resultado esperado

- AUTH-SIGNUP-001: alerta com `You successfully signed up!`
- AUTH-SIGNUP-002: texto `Please enter the same password`; sem alerta de sucesso
- AUTH-LOGIN-001..003: comportamento atual inalterado
- Allure gerado em `project/tests/results/{YYYY-MM-DD}/` (config já existente). Abrir: `npm run report`

Falha típica: teclado cobrindo SIGN UP (aí `hideKeyboard` no action, não `sleep`).
