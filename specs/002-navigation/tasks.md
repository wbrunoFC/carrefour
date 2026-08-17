# Tasks: Navigation

**Input**: Design documents from `/specs/002-navigation/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-screens.md, quickstart.md

**Tests**: Entregável = `*.test.ts` com Scenario ID. Sem contract/unit de API. Sem TDD de produto. Page objects já existem — não editar `project/pages/**`.

**Organization**: Por user story. npm cwd = `project/`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: paralelo (arquivos diferentes, sem depender de task incompleta)
- **[Story]**: US1–US2 da spec
- Path absoluto de repo em toda task

## Path Conventions

- Features: `project/features/home/home.md`, `project/features/navigation/side-menu.md`
- Pages (reusar, não criar): `project/pages/home/`, `project/pages/side-menu/`, `project/pages/login/`
- Tests: `project/tests/e2e/home/home/`, `project/tests/e2e/navigation/side-menu/`
- Speckit: `specs/002-navigation/`

Proibido neste feature: `project/data/navigation.json`, usar `project/pages/navigation/`, `openLoginScreen` em HOME, `.github/workflows/`, editar `project/config/`, editar `project/pages/**`, editar `project/tests/e2e/authentication/**`, HOME-HOME-002, NAV-SIDE-MENU-001, NAV-SIDE-MENU-003.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirmar que o projeto já existe. Não scaffold.

- [x] T001 Confirm npm root and existing page objects in `project/package.json`, `project/pages/home/home.actions.ts`, `project/pages/home/home.assertions.ts`, `project/pages/side-menu/side-menu.actions.ts`, `project/pages/login/login.assertions.ts`. Confirm no `project/tests/e2e/home/` and no `project/tests/e2e/navigation/` yet. Do not create folders, deps, or config. Do not use `project/pages/navigation/`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Nada a construir. Selectors e actions já no disco.

**⚠️ CRITICAL**: US1/US2 só depois de T001. Sem JSON de dados. Sem page diff.

- [x] T002 After T001: record that HOME uses `HomeActions.goToHomeTab` + `HomeAssertions.expectScreen` and NAV uses `SideMenuActions.goToLogin` + `LoginAssertions.expectLoginScreen`. No file writes. If any of those methods is missing, stop and do not invent a new page module.

**Checkpoint**: Reuso confirmado. `pages/navigation` fora.

---

## Phase 3: User Story 1 - Ver a tela Home (Priority: P1) 🎯 MVP

**Goal**: HOME-HOME-001 automatizado.

**Independent Test**: `cd project && npm run test:android -- --spec tests/e2e/home/home/home.test.ts` — `Home-screen` visível.

- [x] T003 [US1] Create `project/tests/e2e/home/home/home.scenarios.ts` with `HOME_HOME_001` metadata (id `HOME-HOME-001`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `home` `navigation` `smoke`, platforms android+ios). Shape = `project/tests/e2e/authentication/login/login.scenarios.ts`
- [x] T004 [US1] Create `project/tests/e2e/home/home/home.test.ts`: `describe('FEATURE: home')`; beforeEach MUST NOT call `openLoginScreen`; call `HomeActions.goToHomeTab` then `HomeAssertions.expectScreen` in the `it()` titled via `buildScenarioTitle(HOME_HOME_001, ['smoke'])`. No credentials. No `sleep`. No `requireTestCase`.
- [x] T005 [US1] Run `cd project && npm run test:android -- --spec tests/e2e/home/home/home.test.ts` and fix wait/selector only if it fails (prefer existing `HomePage.waitForScreen`, never `sleep`). Do not add NAV-SIDE-MENU-002 in this task.

**Checkpoint**: HOME-HOME-001 passa no Android. Auth e `pages/**` intactos.

---

## Phase 4: User Story 2 - Ir a outra tela pelo menu (Priority: P2)

**Goal**: NAV-SIDE-MENU-002 automatizado (destino Login).

**Independent Test**: `cd project && npm run test:android -- --spec tests/e2e/navigation/side-menu/side-menu.test.ts` — tela Login visível após o Menu.

- [x] T006 [P] [US2] Create `project/tests/e2e/navigation/side-menu/side-menu.scenarios.ts` with `NAV_SIDE_MENU_002` metadata (id `NAV-SIDE-MENU-002`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `navigation` `side-menu`, platforms android+ios). Same metadata shape as T003.
- [x] T007 [US2] Create `project/tests/e2e/navigation/side-menu/side-menu.test.ts`: `describe('FEATURE: side-menu')`; beforeEach: `HomeActions.goToHomeTab` (start NOT on Login); `it()` calls `SideMenuActions.goToLogin()` then `LoginAssertions.expectLoginScreen()`. Title via `buildScenarioTitle(NAV_SIDE_MENU_002)`. Do not import `NavigationPage`. Do not call `openLoginScreen`. No `sleep`. No data JSON.
- [x] T008 [US2] Run `cd project && npm run test:android -- --spec tests/e2e/navigation/side-menu/side-menu.test.ts` and fix only side-menu/login waits if it fails. Do not add NAV-SIDE-MENU-001/003.

**Checkpoint**: HOME-HOME-001 e NAV-SIDE-MENU-002 verdes. `pages/navigation` não importado.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Evidência e bound de escopo. Sem CI.

- [x] T009 Confirm Allure output after T008 under `project/tests/results/` (summary, failure screenshots config already on, logs, `reportedEnvironmentVars` in `project/config/shared/wdio-base.config.ts`). Do not change Allure config unless generate failed.
- [x] T010 Run quickstart domain commands from `specs/002-navigation/quickstart.md`: `cd project && npm run test:android -- --spec tests/e2e/home/home/home.test.ts --spec tests/e2e/navigation/side-menu/side-menu.test.ts`
- [x] T011 Confirm out of scope: no `.github/workflows/`, no `project/data/navigation.json`, no import of `project/pages/navigation/`, no edit to `project/pages/**`, no edit to `project/tests/e2e/authentication/**`, no HOME-HOME-002 / NAV-SIDE-MENU-001 / NAV-SIDE-MENU-003, no new npm dependency in `project/package.json`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: imediato
- **Foundational (Phase 2)**: depois de T001; bloqueia US1/US2 só como confirmação
- **US1**: depois de T002
- **US2**: depois de T002; arquivos diferentes de US1 — pode paralelo depois de T002
- **Polish**: depois de T008 (se US2 em série) ou depois de T005+T008

### User Story Dependencies

- **US1 (P1)**: independente; não usa Menu
- **US2 (P2)**: independente de US1 no código; reusa `HomeActions` só para partir da Home

### Within Each User Story

- `*.scenarios.ts` antes de `*.test.ts`
- `it()` antes de rodar o spec
- Sem contract tests
- Sem JSON de dados

### Parallel Opportunities

- T003 ∥ T006 (dois `*.scenarios.ts`)
- Depois: T004 ∥ T007 (dois `*.test.ts`) — só se dois agentes; um agente faz US1 inteiro depois US2
- T005 e T008 não paralelos no mesmo emulador

---

## Parallel Example: User Story files

```bash
Task: "Create project/tests/e2e/home/home/home.scenarios.ts"
Task: "Create project/tests/e2e/navigation/side-menu/side-menu.scenarios.ts"
```

Um agente: T003→T004→T005, depois T006→T007→T008.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. T001–T002
2. US1 (T003–T005)
3. **STOP**: HOME-HOME-001 no Android
4. US2 + Polish

### Incremental Delivery

1. Setup + Foundational (verify)
2. US1 → demo Home
3. US2 → demo Menu → Login
4. Polish Allure + os dois specs

### Parallel Team Strategy

Um agente. Não dividir o emulador. Arquivos de US1 e US2 não colidem.

---

## Notes

- [P] = arquivos diferentes
- Destino Login é constante (`goToLogin`)
- Nunca `sleep`; nunca `NavigationPage`
- Commit só se o humano pedir
- Próximo comando: `/speckit-implement` um grupo por vez (Setup+Foundational, depois US1, depois US2)
