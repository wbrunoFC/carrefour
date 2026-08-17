# Quickstart: Forms

Validação ponta a ponta deste domínio. Código completo fica em `/speckit-implement`.

## Pré-requisitos

- App demo instalável em `project/apps/`
- cwd = `project/`
- Android local: emulador + Appium (`npm run appium:start` se precisar). Shell precisa `ANDROID_HOME` (SDK).
- iOS local: simulador (opcional neste check; constituição pede os dois, CI iOS fora do slice)

## O que precisa existir depois do implement

1. `tests/e2e/forms/forms/forms.test.ts` (+ `forms.scenarios.ts`) — 001 (N `it()`), 003, 004
2. `data/forms.json` — ≥2 cases `FORMS-FORMS-001`
3. `pages/forms` completo (eco, Inactive, alerta) — sem módulo novo
4. Navegação: `SideMenuActions.goToForms` **já no disco**

## Rodar

```bash
cd project
npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts
```

iOS: `npm run test:ios` com o mesmo `--spec`. WDIO não expande `**/*.test.ts` de forma confiável — listar o arquivo.

## Resultado esperado

- FORMS-FORMS-001: cada texto do JSON ecoa em You have typed (`input-text-result`)
- FORMS-FORMS-003: alerta com `This button is active`
- FORMS-FORMS-004: nenhum alerta após Inactive
- Allure em `project/tests/results/{YYYY-MM-DD}/`. Abrir: `npm run report`

Falha típica: `beforeEach` chama `openLoginScreen` (fica em Login). Outra: `requireTestCase` no 001 (só o primeiro texto corre). Outra: `NavigationPage` em vez de `goToForms`.
