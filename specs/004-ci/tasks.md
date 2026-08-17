# Tasks: CI Android

**Input**: Design documents from `/specs/004-ci/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ci-triggers.md, contracts/evidence.md, quickstart.md

**Tests**: Entregável = workflow que **roda** os `*.test.ts` do slice. Sem Scenario ID novo. Sem `*.test.ts` novo. Sem page module.

**Organization**: Por user story. npm cwd = `project/`. YAML na raiz do repo.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: paralelo (quase não aplica — um YAML)
- **[Story]**: US1–US3 da spec
- Path absoluto de repo em toda task

## Path Conventions

- Workflow: `.github/workflows/e2e-android.yml`
- Specs do slice (só listar, não editar):
  - `project/tests/e2e/authentication/login/login.test.ts`
  - `project/tests/e2e/authentication/signup/signup.test.ts`
  - `project/tests/e2e/home/home/home.test.ts`
  - `project/tests/e2e/navigation/side-menu/side-menu.test.ts`
  - `project/tests/e2e/forms/forms/forms.test.ts`
- BS / Allure: `project/config/` (não editar salvo generate falhar)
- Speckit: `specs/004-ci/`

Proibido: iOS no job, `on.push` amplo, glob `**/*.test.ts` como único spec, novo npm dependency, editar `.env`, commitar secrets, novo Scenario ID, editar `project/tests/e2e/**`, `project/pages/**`, AUTH-SIGNUP-003, FORMS-FORMS-002.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirmar stack. Não scaffold Node.

- [x] T001 Confirm `project/package.json` scripts `test:android:bs`, lockfile `project/package-lock.json`, APK sob `project/apps/`, `requireBrowserStackCredentials` names in `project/config/browserstack/credentials.ts`. Confirm no `.github/workflows/` yet. Do not create YAML. Do not edit `.env`. Do not run BrowserStack.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Pasta de workflow. Sem job ainda se T002 criar só o arquivo vazio — preferir T002 já com o YAML mínimo de US1 (um arquivo).

**⚠️ CRITICAL**: US2/US3 editam o mesmo YAML. Sem segundo workflow.

- [x] T002 Create `.github/workflows/e2e-android.yml`: `on.pull_request` targeting `main`; job `ubuntu-latest`; checkout; Node 22; `npm ci` with `working-directory: project`; env `BROWSERSTACK_USERNAME` / `BROWSERSTACK_ACCESS_KEY` from secrets; `BROWSERSTACK_LOCAL=false`; `TARGET` via script. Do not add `push` yet. Do not add artifact yet. Do not add iOS.

---

## Phase 3: User Story 1 - Check no pedido de revisão (Priority: P1) 🎯 MVP

**Goal**: PR contra `main` corre os 11 `it()` no Android nuvem.

**Independent Test**: YAML tem `pull_request` + `--spec` dos 5 arquivos. Sem merge.

- [x] T003 [US1] In `.github/workflows/e2e-android.yml` add the test step: `npm run test:android:bs -- --spec` listing exactly the five slice files (login, signup, home, side-menu, forms). Fail the job on any failed `it()`. No glob-only spec. No `test:ios`.
- [x] T004 [US1] Review the YAML against `specs/004-ci/contracts/ci-triggers.md` (PR trigger + file list). Do not open a real PR. Do not call BrowserStack from this agent.

**Checkpoint**: US1 no YAML. Push `main` e artefato ainda não.

---

## Phase 4: User Story 2 - Check no merge em main (Priority: P2)

**Goal**: `push` em `main` dispara o mesmo job.

**Independent Test**: `on.push.branches` contém só `main`.

- [x] T005 [US2] Add `on.push.branches: [main]` to `.github/workflows/e2e-android.yml`. Do not add `**` or feature-branch push. Same job as US1 — do not duplicate the job.
- [x] T006 [US2] Confirm no `on.push` without branch filter. Confirm iOS still absent.

**Checkpoint**: PR + `main`. Sem artefato ainda.

---

## Phase 5: User Story 3 - Pacote de evidência (Priority: P3)

**Goal**: Upload Allure sempre.

**Independent Test**: step `upload-artifact` aponta `project/tests/results/` e `if: always()`.

- [x] T007 [US3] Add `actions/upload-artifact` after the test step in `.github/workflows/e2e-android.yml`: path `project/tests/results/`; `if: always()`. Do not change Allure config in `project/config/` unless the existing generate hook is proven broken.
- [x] T008 [US3] Confirm artifact contract in `specs/004-ci/contracts/evidence.md`. No second reporter. No JUnit job.

**Checkpoint**: YAML completo (PR + main + artefato).

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Bound de escopo. Corrida BrowserStack real = humano (secrets).

- [x] T009 Confirm `.env` untouched; no secrets in YAML values; only `secrets.*` refs.
- [x] T010 Confirm out of scope: no iOS job, no feature-branch push trigger, no new npm dependency, no edit to `project/tests/e2e/**` or `project/pages/**`, no new Scenario ID.
- [x] T011 Point human to `specs/004-ci/quickstart.md` for creating GitHub secrets and opening the first PR. Do not create secrets. Do not `git commit` unless asked.

---

## Dependencies & Execution Order

- **Setup**: T001
- **Foundational**: T002 (YAML + PR)
- **US1**: T003–T004 (mesmo YAML)
- **US2**: depois de T004
- **US3**: depois de T006
- **Polish**: depois de T008

US2/US3 **não** paralelos (mesmo arquivo).

---

## Implementation Strategy

1. T001
2. T002 + US1 (T003–T004) — **STOP** (MVP: PR check)
3. US2 → US3 → Polish

Commit só se o humano pedir.

Próximo comando: `/speckit-implement` um grupo por vez.
