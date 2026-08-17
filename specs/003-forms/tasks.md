# Tasks: Forms

**Input**: Design documents from `/specs/003-forms/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-screens.md, contracts/ui-messages.md, quickstart.md

**Tests**: Entregável = `*.test.ts` com Scenario ID. Sem contract/unit de API. Sem TDD de produto. Completar `project/pages/forms/` (módulo existente). Não criar page module novo.

**Organization**: Por user story. npm cwd = `project/`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: paralelo (arquivos diferentes, sem depender de task incompleta)
- **[Story]**: US1–US3 da spec
- Path absoluto de repo em toda task

## Path Conventions

- Features: `project/features/forms/forms.md`
- Pages (completar, não duplicar): `project/pages/forms/`
- Nav (reusar, não editar): `project/pages/side-menu/side-menu.actions.ts` (`goToForms`)
- Data: `project/data/forms.json`
- Tests: `project/tests/e2e/forms/forms/`
- Speckit: `specs/003-forms/`

Proibido neste feature: `openLoginScreen`, `NavigationPage` / `project/pages/navigation/`, `requireTestCase` em FORMS-FORMS-001, `toggleSwitch` / dropdown, FORMS-FORMS-002, maxLength 30, `.github/workflows/`, editar `project/config/`, editar `project/tests/e2e/authentication/**`, `home/**`, `navigation/**`, novo npm dependency.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirmar que o projeto já existe. Não scaffold.

- [x] T001 Confirm npm root and existing modules in `project/package.json`, `project/pages/forms/forms.page.ts`, `project/pages/forms/forms.actions.ts`, `project/pages/forms/forms.assertions.ts`, `project/pages/side-menu/side-menu.actions.ts` (`goToForms`). Confirm no `project/tests/e2e/forms/` and no `project/data/forms.json` yet. Do not create folders, deps, or config. Do not use `project/pages/navigation/`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Completar o page object de forms e o JSON data-driven. Sem `*.test.ts` ainda.

**⚠️ CRITICAL**: US1/US2/US3 só depois de T004. Sem pasta `tests/e2e/forms/` vazia.

- [x] T002 After T001: add `tapInactive` wrapping `FormsPage.clickInactiveButton` in `project/pages/forms/forms.actions.ts`. Do not add `toggleSwitch` callers. Do not create a new page folder.
- [x] T003 Add `activeAlert` EL011 in `project/pages/forms/android.json` (UiAutomator `textContains("This button is active")`, same pattern as `project/pages/login/android.json` `successAlert`) and matching `iosPredicate` CONTAINS in `project/pages/forms/ios.json`. Next id after EL010.
- [x] T004 Add assertions in `project/pages/forms/forms.assertions.ts`: `expectTyped(text)` (`inputResult` contains text, via `FormsPage.getInputResult` or `page('forms')` — no hardcoded selector string), `expectActiveAlert` (EL `activeAlert` displayed), `expectNoActiveAlert` (short timeout, same idea as `SignupAssertions.expectNoSignUpSuccess` in `project/pages/signup/signup.assertions.ts`). Keep existing `expectScreen`.
- [x] T005 Create `project/data/forms.json`: `domain` `FORMS`; two cases both `scenarioId` `FORMS-FORMS-001`; `input.text` / `expected` `Hello` and `Hello world`. No rows for 003/004. Shape = `project/data/authentication.json` (`TestCase` in `project/tests/support/fixtures/loadTestData.ts`).

**Checkpoint**: Pages + JSON prontos. Sem teste ainda. `pages/navigation` fora.

---

## Phase 3: User Story 1 - Ver o texto ecoado no input (Priority: P1) 🎯 MVP

**Goal**: FORMS-FORMS-001 automatizado (data-driven, ≥2 `it()`).

**Independent Test**: `cd project && npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts` — cada texto do JSON ecoa em `input-text-result`. 003/004 ainda não existem neste spec file.

- [x] T006 [US1] Create `project/tests/e2e/forms/forms/forms.scenarios.ts` with `FORMS_FORMS_001` metadata (id `FORMS-FORMS-001`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `forms` `smoke`, platforms android+ios). Shape = `project/tests/e2e/authentication/login/login.scenarios.ts`. Do not add 003/004 constants yet.
- [x] T007 [US1] Create `project/tests/e2e/forms/forms/forms.test.ts`: `describe('FEATURE: forms')`; `beforeEach` MUST call `SideMenuActions.goToForms` then `FormsAssertions.expectScreen`; MUST NOT call `openLoginScreen`. Loop `casesFor('forms', FORMS_FORMS_001.id)` — one `it()` per case; title = `buildScenarioTitle(FORMS_FORMS_001, ['smoke'])` plus `input.text`. Body: `FormsActions.fillText` + `expectTyped`. MUST NOT use `requireTestCase`. No `sleep`. No switch/dropdown.
- [x] T008 [US1] Run `cd project && npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts` and fix wait/selector/echo only if it fails (prefer `FormsPage.waitForScreen`, never `sleep`). Do not add FORMS-FORMS-003/004 in this task.

**Checkpoint**: FORMS-FORMS-001 passa no Android (dois cases). Auth/home/navigation intactos.

---

## Phase 4: User Story 2 - Ver o alerta do botão Active (Priority: P2)

**Goal**: FORMS-FORMS-003 no mesmo arquivo de teste.

**Independent Test**: mesmo `--spec`; 001 continua verde; Active abre alerta com `This button is active`.

- [x] T009 [US2] Add `FORMS_FORMS_003` to `project/tests/e2e/forms/forms/forms.scenarios.ts` (id `FORMS-FORMS-003`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `forms`, platforms android+ios).
- [x] T010 [US2] Add `it(buildScenarioTitle(FORMS_FORMS_003))` in `project/tests/e2e/forms/forms/forms.test.ts`: `FormsActions.tapActive` then `FormsAssertions.expectActiveAlert`. Do not dismiss Ask me later/Cancel/OK. Do not add 004. No `sleep`.
- [x] T011 [US2] Run `cd project && npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts` and fix only Active alert wait/selector if it fails. Do not add FORMS-FORMS-004.

**Checkpoint**: 001 + 003 verdes. Inactive ainda não.

---

## Phase 5: User Story 3 - Botão Inactive não faz nada (Priority: P3)

**Goal**: FORMS-FORMS-004.

**Independent Test**: mesmo `--spec`; nenhum alerta após Inactive; 001 e 003 intactos.

- [x] T012 [US3] Add `FORMS_FORMS_004` to `project/tests/e2e/forms/forms/forms.scenarios.ts` (id `FORMS-FORMS-004`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `forms`, platforms android+ios).
- [x] T013 [US3] Add `it(buildScenarioTitle(FORMS_FORMS_004))` in `project/tests/e2e/forms/forms/forms.test.ts`: `FormsActions.tapInactive` then `FormsAssertions.expectNoActiveAlert`. No `sleep`.
- [x] T014 [US3] Run `cd project && npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts` and fix only Inactive/no-alert if it fails.

**Checkpoint**: 001 (2 cases) + 003 + 004 verdes.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Evidência e bound de escopo. Sem CI.

- [x] T015 Confirm Allure output after T014 under `project/tests/results/` (summary, failure screenshots config already on, logs, `reportedEnvironmentVars` in `project/config/shared/wdio-base.config.ts`). Do not change Allure config unless generate failed.
- [x] T016 Run quickstart from `specs/003-forms/quickstart.md`: `cd project && npm run test:android -- --spec tests/e2e/forms/forms/forms.test.ts`
- [x] T017 Confirm out of scope: no `.github/workflows/`, no `openLoginScreen` / `NavigationPage` / `requireTestCase` on 001, no FORMS-FORMS-002, no dropdown/maxLength tests, no edit to `project/tests/e2e/authentication/**` `home/**` `navigation/**`, no new npm dependency in `project/package.json`, no new page folder.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: imediato
- **Foundational (Phase 2)**: T002→T003→T004→T005; bloqueia US1/US2/US3
- **US1**: depois de T005
- **US2**: depois de T008 (mesmo `forms.test.ts`)
- **US3**: depois de T011 (mesmo arquivo)
- **Polish**: depois de T014

### User Story Dependencies

- **US1 (P1)**: independente de 003/004; precisa JSON + `expectTyped`
- **US2 (P2)**: mesmo arquivo que US1; não reescrever o loop 001
- **US3 (P3)**: mesmo arquivo; não reescrever 001/003

### Within Each User Story

- `*.scenarios.ts` constante antes do `it()`
- `it()` antes de rodar o spec
- Sem contract tests
- 001: `casesFor`, nunca `requireTestCase`

### Parallel Opportunities

- Quase nenhuma: T003 android.json ∥ T003 ios.json na mesma task (um agente, dois arquivos)
- US2/US3 **não** paralelos (mesmo `forms.test.ts` + mesmo emulador)
- T011 e T014 não paralelos no mesmo emulador

---

## Parallel Example: User Story files

Não há segundo arquivo de teste. Um agente: T001→T005, T006→T008, **STOP**, T009→T011, T012→T014, Polish.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. T001–T005
2. US1 (T006–T008)
3. **STOP**: FORMS-FORMS-001 no Android (2 cases)
4. US2 → US3 → Polish

### Incremental Delivery

1. Setup + Foundational (pages + `forms.json`)
2. US1 → demo eco
3. US2 → demo Active
4. US3 → demo Inactive
5. Polish Allure + spec único

### Parallel Team Strategy

Um agente. Não dividir o emulador. Um `forms.test.ts`.

---

## Notes

- [P] quase não aplica (um arquivo de teste)
- Nunca `sleep`; nunca `NavigationPage`; nunca `requireTestCase` no 001
- Commit só se o humano pedir
- Próximo comando: `/speckit-implement` um grupo por vez (Setup+Foundational, depois US1, **STOP**, depois US2, depois US3)
