# Tasks: Authentication

**Input**: Design documents from `/specs/001-authentication/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-messages.md, quickstart.md

**Tests**: Entregável = `*.test.ts` com Scenario ID. Sem contract/unit de API. Sem TDD de produto (não há app a implementar). Login já existe — US1/US2 = verificar, não reescrever.

**Organization**: Por user story. npm cwd = `project/`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: paralelo (arquivos diferentes, sem depender de task incompleta)
- **[Story]**: US1–US4 da spec
- Path absoluto de repo em toda task

## Path Conventions

- Features: `project/features/authentication/`
- Pages: `project/pages/login/`, `project/pages/signup/`, `project/pages/error-validation/`
- Data: `project/data/authentication.json`
- Tests: `project/tests/e2e/authentication/{login,signup}/`
- Speckit: `specs/001-authentication/`

Proibido neste feature: `data/signup.json`, `pages/authentication/`, `.github/workflows/`, editar `project/config/`, editar `login.test.ts`, AUTH-SIGNUP-003.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirmar que o projeto já existe. Não scaffold.

- [x] T001 Confirm npm root and existing login coverage in `project/package.json`, `project/pages/signup/`, `project/tests/e2e/authentication/login/login.test.ts` (AUTH-LOGIN-001..003 already present). Do not create folders, deps, or config.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Completar page objects e dados que US3 e US4 compartilham. US1/US2 não esperam esta phase.

**⚠️ CRITICAL**: US3 e US4 não começam antes disto. US1/US2 já estão no disco.

- [x] T002 [P] Add `signedUpAlert` (EL008, textContains `You successfully signed up!`) and `signedUpAlertOk` (EL009, button `OK`) to `project/pages/signup/android.json`
- [x] T003 [P] Add the same EL008/EL009 keys to `project/pages/signup/ios.json` (iosPredicate, same strings as login success pattern)
- [x] T004 [P] Append AUTH-SIGNUP-001 and AUTH-SIGNUP-002 cases to `project/data/authentication.json` per `specs/001-authentication/data-model.md` (confirmPassword present; expected strings from `specs/001-authentication/contracts/ui-messages.md`)
- [x] T005 After T002/T003: add `isSuccessDisplayed` + `clickSuccessOk` in `project/pages/signup/signup.page.ts`; `expectSignUpSuccess` in `project/pages/signup/signup.assertions.ts`; `hideKeyboard` try/catch + `dismissSuccess` in `project/pages/signup/signup.actions.ts` (copy pattern from `project/pages/login/login.actions.ts`)

**Checkpoint**: Signup page can show/dismiss success; JSON tem os dois cases. Login files intactos.

---

## Phase 3: User Story 1 - Login com formato válido (Priority: P1) 🎯 already shipped

**Goal**: AUTH-LOGIN-001 permanece verde. Sem diff.

**Independent Test**: `login.test.ts` AUTH-LOGIN-001 — alerta `You are logged in!`

- [x] T006 [US1] Verify AUTH-LOGIN-001 in `project/tests/e2e/authentication/login/login.test.ts` and `project/data/authentication.json`. No code change unless the ID is missing (it is not).

**Checkpoint**: US1 done without touching files.

---

## Phase 4: User Story 2 - Login bloqueado por validação (Priority: P2) already shipped

**Goal**: AUTH-LOGIN-002 e AUTH-LOGIN-003 permanecem verdes. Sem diff.

**Independent Test**: mesmos `it()` em `login.test.ts` — mensagens `Please enter a valid email address` e `Please enter at least 8 characters`

- [x] T007 [US2] Verify AUTH-LOGIN-002 and AUTH-LOGIN-003 in `project/tests/e2e/authentication/login/login.test.ts` plus `project/pages/error-validation/error-validation.assertions.ts`. No code change unless an ID is missing.

**Checkpoint**: US1 e US2 intactos.

---

## Phase 5: User Story 3 - Cadastro com formato válido (Priority: P3) 🎯 MVP restante

**Goal**: AUTH-SIGNUP-001 automatizado.

**Independent Test**: `cd project && npm run test:android -- --spec tests/e2e/authentication/signup/signup.test.ts` — alerta `You successfully signed up!`

- [x] T008 [US3] Create `project/tests/e2e/authentication/signup/signup.scenarios.ts` with `AUTH_SIGNUP_001` metadata (id `AUTH-SIGNUP-001`, criticality HIGH, complexity LOW, flakiness UNKNOWN, tags `authentication` `signup` `smoke`, platforms android+ios). Shape = `project/tests/e2e/authentication/login/login.scenarios.ts`
- [x] T009 [US3] Create `project/tests/e2e/authentication/signup/signup.test.ts`: `openLoginScreen`, `SignupAssertions.expectSignUpScreen` after `SignupActions.signUp` is wrong order — beforeEach open login; in the it() call `signUp(email, password, confirmPassword)` from `requireTestCase('authentication', AUTH_SIGNUP_001.id)`, then `expectSignUpSuccess`, then `dismissSuccess`. Title via `buildScenarioTitle`. No hardcoded credentials. No `sleep`.
- [x] T010 [US3] Run `cd project && npm run test:android -- --spec tests/e2e/authentication/signup/signup.test.ts` and fix selector/keyboard only if it fails. Do not add AUTH-SIGNUP-002 in this task.

**Checkpoint**: AUTH-SIGNUP-001 passa no Android. Login não foi editado.

---

## Phase 6: User Story 4 - Cadastro bloqueado por confirmação divergente (Priority: P4)

**Goal**: AUTH-SIGNUP-002 automatizado.

**Independent Test**: mesmo spec file — vê `Please enter the same password`; alerta de sucesso ausente.

- [x] T011 [P] [US4] Add `confirmPasswordErrorMessage` EL026 (`Please enter the same password`) to `project/pages/error-validation/android.json`
- [x] T012 [P] [US4] Add the same EL026 key to `project/pages/error-validation/ios.json`
- [x] T013 [US4] Add `expectMismatchedPassword` in `project/pages/error-validation/error-validation.assertions.ts` (toBeDisplayed on EL026). Skip new getter in `error-validation.page.ts` unless assertions need text.
- [x] T014 [US4] Add `AUTH_SIGNUP_002` to `project/tests/e2e/authentication/signup/signup.scenarios.ts` and a second `it()` in `project/tests/e2e/authentication/signup/signup.test.ts`: signUp from JSON, `expectMismatchedPassword`, assert success alert not displayed (`isSuccessDisplayed` / timeout curto, sem sleep).
- [x] T015 [US4] Re-run `cd project && npm run test:android -- --spec tests/e2e/authentication/signup/signup.test.ts` (001 e 002).

**Checkpoint**: Dois signups verdes. Login intacto. AUTH-SIGNUP-003 não existe neste teste.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Evidência e bound de escopo. Sem CI.

- [x] T016 Confirm Allure output after T015 under `project/tests/results/` (summary, failure screenshots config already on, logs, `reportedEnvironmentVars` in `project/config/shared/wdio-base.config.ts`). Do not change Allure config unless generate failed.
- [x] T017 Run quickstart domain command `cd project && npm run test:android -- --spec tests/e2e/authentication/**/*.test.ts` (login + signup).
- [x] T018 Confirm out of scope: no `.github/workflows/`, no edit to `project/tests/e2e/authentication/login/**`, no AUTH-SIGNUP-003, no new npm dependency in `project/package.json`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: imediato
- **Foundational (Phase 2)**: depois de T001; bloqueia US3/US4
- **US1 / US2**: já no disco; T006/T007 em paralelo com Phase 2 se quiser
- **US3**: depois de T005 + T004
- **US4**: depois de US3 (mesmo `signup.test.ts` / `signup.scenarios.ts`)
- **Polish**: depois de T015

### User Story Dependencies

- **US1 (P1)**: independente; já implementado
- **US2 (P2)**: independente; já implementado
- **US3 (P3)**: depende de Phase 2; não depende de US4
- **US4 (P4)**: depende de Phase 2 + arquivos criados em US3

### Within Each User Story

- Selectors JSON antes de page/assertions
- Dados JSON antes do `it()`
- `it()` antes de rodar o spec
- Sem contract tests paralelos

### Parallel Opportunities

- T002 ∥ T003 ∥ T004
- T006 ∥ T007 ∥ Phase 2
- T011 ∥ T012
- US1/US2 não paralelizam código (não há código)

---

## Parallel Example: Phase 2

```bash
Task: "Add EL008/EL009 in project/pages/signup/android.json"
Task: "Add EL008/EL009 in project/pages/signup/ios.json"
Task: "Append AUTH-SIGNUP-001/002 in project/data/authentication.json"
```

Depois, em série: T005 (page + actions + assertions).

---

## Implementation Strategy

### MVP First

US1 já é o MVP de login. Trabalho novo:

1. T001
2. Phase 2 (T002–T005)
3. T006/T007 verify
4. US3 (T008–T010)
5. **STOP**: AUTH-SIGNUP-001 no Android
6. US4 + Polish

### Incremental Delivery

1. Setup + Foundational
2. US3 → demo signup feliz
3. US4 → demo erro de confirmação
4. Polish Allure + domínio inteiro

### Parallel Team Strategy

Um agente. Não dividir `signup.test.ts` entre duas pessoas.

---

## Notes

- [P] = arquivos diferentes
- Strings exatas: `contracts/ui-messages.md`
- `hideKeyboard`, nunca `sleep`
- Commit só se o humano pedir
- Próximo comando: `/speckit-implement` um grupo por vez (Phase 2, depois US3, depois US4)
