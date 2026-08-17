# Quickstart: Navigation

Validação ponta a ponta deste domínio. Código completo fica em `/speckit-implement`.

## Pré-requisitos

- App demo instalável em `project/apps/`
- cwd = `project/`
- Android local: emulador + Appium (`npm run appium:start` se precisar)
- iOS local: simulador (opcional neste check; constituição pede os dois, CI iOS fora do slice)

## O que precisa existir depois do implement

1. `tests/e2e/home/home/home.test.ts` (+ `home.scenarios.ts`) — HOME-HOME-001
2. `tests/e2e/navigation/side-menu/side-menu.test.ts` (+ `side-menu.scenarios.ts`) — NAV-SIDE-MENU-002
3. Page objects `home`, `side-menu`, `login` **já no disco** — sem JSON novo

## Rodar

Home:

```bash
cd project
npm run test:android -- --spec tests/e2e/home/home/home.test.ts
```

Side menu:

```bash
cd project
npm run test:android -- --spec tests/e2e/navigation/side-menu/side-menu.test.ts
```

Domínio (os dois specs):

```bash
cd project
npm run test:android -- --spec tests/e2e/home/home/home.test.ts --spec tests/e2e/navigation/side-menu/side-menu.test.ts
```

iOS: `npm run test:ios` com o mesmo `--spec`. WDIO não expande `**/*.test.ts` de forma confiável — listar arquivos.

## Resultado esperado

- HOME-HOME-001: tela Home visível (`Home-screen`)
- NAV-SIDE-MENU-002: após Menu → Login, tela Login visível (e-mail, senha, LOGIN)
- Allure em `project/tests/results/{YYYY-MM-DD}/`. Abrir: `npm run report`

Falha típica: beforeEach chama `openLoginScreen` e HOME afirma Login. Outra: usar `NavigationPage` (Settings/Logout) em vez de `SideMenuActions`.
