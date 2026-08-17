# Research: Navigation

## Decision: Reusar `pages/home` + `pages/side-menu`; ignorar `pages/navigation`

- **Decision**: HOME-HOME-001 usa `HomeActions.goToHomeTab` / `HomePage.waitForScreen` / `HomeAssertions.expectScreen`. NAV-SIDE-MENU-002 usa `SideMenuActions.goToLogin` + `LoginAssertions.expectLoginScreen`. Não chamar `NavigationPage`.
- **Rationale**: Constituição manda reusar page object existente. `home` e `side-menu` batem com a demo (`Home-screen`, `Menu`, `side-menu-item-login`). `pages/navigation` tem Settings/Logout e “Login como proxy de settings” — outro app. Usar isso falha ou afirma a tela errada.
- **Alternatives considered**: (1) Consertar `pages/navigation` neste slice — refactor fora do gap; `side-menu` já faz o trabalho. (2) Duplicar selectors de Menu em `home` para o teste de menu — `home.json` já tem `menuButton`, mas `SideMenuActions.open` espera o painel; dono do menu é `side-menu`.

## Decision: Sem `data/navigation.json`

- **Decision**: Destino Login fica no action `goToLogin()`. Sem case JSON.
- **Rationale**: Spec congelou um destino. Não há conjunto de dados. Constituição manda JSON quando o input varia (`FORMS-FORMS-001`). Arquivo com um `destination: login` é cerimônia.
- **Alternatives considered**: JSON de destinos (Webview, Forms, …) — infla o slice e vira data-driven fora do domínio forms.

## Decision: Dois testes, pastas do Apêndice C

- **Decision**: `tests/e2e/home/home/` e `tests/e2e/navigation/side-menu/`. Speckit continua um domínio (`002-navigation`).
- **Rationale**: folder-tests.md C.1 e IDs `HOME-HOME-*` / `NAV-SIDE-MENU-*`. Juntar os dois em `tests/e2e/navigation/` quebra o mapeamento domínio/feature.
- **Alternatives considered**: um `navigation.test.ts` só — um arquivo a menos, ID HOME fora do path.

## Decision: HOME não usa `openLoginScreen`

- **Decision**: HOME-HOME-001 não chama `openLoginScreen()`. Parte do app aberto (Home da demo) e toca a aba Home. NAV-SIDE-MENU-002 parte da Home (não de Login) e aí `goToLogin()`.
- **Rationale**: `openLoginScreen` já navega Menu → Login. Usar no beforeEach do menu torna 002 tautológico (já está em Login). Usar no Home prova a tela errada.
- **Alternatives considered**: Fixture `openHomeScreen` — wrapper de `goToHomeTab` + wait. Só criar se o beforeEach repetir em mais de um arquivo; neste slice Home tem um teste.

## Decision: `Home-screen` basta como “conteúdo introdutório”

- **Decision**: Assertion = tela Home visível (`EL001` / `Home-screen`). Não acrescentar logo/título nos JSON.
- **Rationale**: Feature descreve logo e textos; o container da tela é o contrato estável. Selectors de copy quebram se o demo mudar texto. YAGNI.
- **Alternatives considered**: Assertar cada ícone Apple/Android/Support — mais ELs, mesmo cenário.

## Decision: Login intacto; CI/Allure config fora

- **Decision**: Não editar `login.test.ts`. Não criar `.github/workflows`. Não alterar `project/config/` Allure.
- **Rationale**: Auth já fechado. Allure já cobre qualquer `*.test.ts` novo. CI é plan posterior do slice.
- **Alternatives considered**: Entregar CI agora — viola um domínio por vez.

## Decision: NAV-SIDE-MENU-001/003 e HOME-HOME-002 fora

- **Decision**: Não automatizar abrir-menu isolado, fechar backdrop, nem scroll.
- **Rationale**: Constituição congelou 2 IDs neste domínio. Abrir menu é passo interno de 002 (`goToLogin` já chama `open()`).
- **Alternatives considered**: “Já que o menu abre…” — infla o slice.

## NEEDS CLARIFICATION

Nenhum. Destino Login veio da spec. Stack e IDs vêm da constituição + features + page objects no disco.
