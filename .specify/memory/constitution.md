<!--
Sync Impact Report
- Version change: template placeholders → 1.0.0 (initial ratification)
- Modified principles: [PRINCIPLE_1..5] → Features-First, Layer Map,
  Scenario Traceability, Cross-Platform E2E, Evidence and Simplicity
- Added sections: Automation Constraints, Speckit Workflow
- Removed sections: none (placeholders replaced)
- Templates:
  - .specify/templates/plan-template.md ✅
  - .specify/templates/spec-template.md ✅
  - .specify/templates/tasks-template.md ✅
  - .specify/templates/checklist-template.md ✅ (no constitution-driven change)
- Follow-up TODOs: none
-->

# Carrefour QA Constitution

## Core Principles

### I. Features-First (NON-NEGOTIABLE)

`project/features/` is the behavioral source of truth. Every automated
scenario MUST map to an existing Scenario ID in those markdown files.
Speckit specs MUST consume that catalog. Speckit MUST NOT invent a
parallel scenario list or rewrite Given/When/Then already documented.

One Speckit feature directory per functional domain. Current slice:
`authentication`, `navigation`, `forms`. Do not open a Speckit feature
for a domain outside that slice unless the human explicitly expands scope.

Rationale: feature docs already exist. Duplicating them inside `specs/`
creates two catalogs and breaks traceability.

### II. Layer Map

The layer map is frozen. npm root is `project/`. Speckit lives only at
repository root (`.specify/`, `specs/`).

| Layer | MUST contain | MUST NOT contain |
|-------|----------------|------------------|
| `project/features/` | Journeys + Scenario IDs | Selectors, test code |
| `project/pages/` | Page objects + `EL00N` selectors | `.feature` / Gherkin, Scenario IDs as element ids |
| `project/data/` | Data-driven JSON keyed by Scenario ID | Secrets |
| `project/tests/` | Executable `*.test.ts` + `support/` | Config, binaries, suite folders (`smoke/`, `flaky/`) |
| `project/config/` | WDIO, capabilities, Allure, BrowserStack | Tests |
| `project/apps/` | Versioned apk / app | Tests |
| `.specify/` + `specs/` | Constitution, templates, Speckit feature artifacts | Application or test source |

npm commands MUST run with cwd = `project/`. Do not recreate `.specify/`
inside `project/` or `project/apps/`.

Rationale: one place to find a test, one place to find a spec, one place
to find a selector.

### III. Scenario Traceability (NON-NEGOTIABLE)

Format MUST be `<DOMAIN>-<FEATURE>-<NNN>` (see
`.cursor/rules/architecture/folder-tests.md` §A.5). The same ID MUST
appear in `project/features/**/*.md`, in the test title, and in Allure.

Each automated scenario MUST declare metadata: `id`, `criticality`,
`complexity`, `flakiness`, `tags`, `platforms`. Suites are tags, never
folders. Do not change a Scenario ID after creation except to fix a
documented collision.

A behavior exists once. Do not duplicate a scenario because Android and
iOS both run it.

Rationale: without a stable ID, reports and feature docs cannot be joined.

### IV. Cross-Platform E2E

Default: one test in `project/tests/e2e/{domain}/{feature}/`, executed on
Android and iOS via `project/config/`. Split under
`project/tests/platform/{android|ios}/` ONLY when behavior diverges
(folder-tests.md §A.6.3). Selector differences are NOT a split: they
belong in `project/pages/{feature}/android.json` and `ios.json`.

Selectors MUST come from those JSON files (`id` prefix `EL`). Hardcoded
selectors in tests are forbidden. Inputs that vary by case MUST live in
`project/data/`. Fixed `sleep` is forbidden; wait on a condition.

Reuse existing page objects. Do not add a page module that already exists.
Do not create an empty feature folder in `tests/` before the first real test.

Rationale: the app behavior is the same on both platforms; the driver is not.

### V. Evidence and Simplicity

Allure is already configured in `project/config/`. Plans and tasks MUST
reuse it. They MUST NOT replace it with another reporter. A complete run
MUST produce: execution summary, failure screenshots, execution logs,
and test environment info.

CI, when in scope, MUST trigger on pull request and on merge to `main`.
CI MUST run BrowserStack Android. CI MUST NOT run on every push to
feature branches. iOS in CI is out of this slice.

YAGNI applies: no new dependency if the current stack covers the need
(WebdriverIO, Appium, Allure, BrowserStack service). No speculative
page objects, factories, or domains.

Rationale: evidence is a product requirement; a second report stack is
not.

## Automation Constraints

Stack is fixed: TypeScript, WebdriverIO 9, Appium 2, Mocha,
`@wdio/allure-reporter`, BrowserStack service. Local Android/iOS remain
valid for development; CI uses BrowserStack Android.

Secrets (BrowserStack user/key) MUST live in environment / GitHub
secrets. They MUST NOT be committed. `.env` MUST NOT be amended without
explicit human permission.

App under test is the WDIO native demo app, not a Carrefour production
app. Login/signup validation is client-side format, not a real backend.

Detailed test organization (types, metadata schema, checklists) lives in
`.cursor/rules/architecture/folder-tests.md`. That file MUST NOT
contradict this constitution. On conflict, this file wins and
folder-tests.md MUST be updated in the same change.

## Speckit Workflow

Speckit cycle per domain, in this order:

1. `/speckit-specify` — one domain, scenarios selected from
   `project/features/`
2. `/speckit-clarify` — only if the spec still has material gaps
3. `/speckit-plan`
4. `/speckit-tasks`
5. `/speckit-implement` — one task group at a time

Approved slice (10 scenarios total; 3 already automated):

| Domain | Scenario IDs | Notes |
|--------|----------------|-------|
| authentication | AUTH-LOGIN-001, AUTH-LOGIN-002, AUTH-LOGIN-003, AUTH-SIGNUP-001, AUTH-SIGNUP-002 | 001–003 already implemented |
| navigation | HOME-HOME-001, NAV-SIDE-MENU-002 | |
| forms | FORMS-FORMS-001, FORMS-FORMS-003, FORMS-FORMS-004 | 001 MUST be data-driven |

Do not start the next domain until the current domain's spec is
specified (and preferably implemented), unless the human explicitly
asks to specify all three first.

CI GitHub Actions belongs to a later plan/tasks of this slice, not to
constitution. Allure generation in CI MUST publish the report as an
artifact.

## Governance

This constitution supersedes conflicting agent or ad-hoc practice.

Amendments MUST be a pull request that: (1) updates this file, (2) bumps
the version below, (3) syncs `.specify/templates/` Constitution Check
and path conventions, (4) updates folder-tests.md if layers or IDs
change. Versioning: MAJOR = remove/redefine a principle; MINOR = add a
principle or material section; PATCH = wording only.

Reviews and `/speckit-plan` Constitution Check MUST verify compliance
before implementation. Complexity beyond this slice (extra domains,
iOS CI, new reporters) MUST be justified in the plan Complexity
Tracking table or rejected.

Guidance: `.cursor/rules/architecture/folder-tests.md`,
`.cursor/rules/architecture/coding.md`.

**Version**: 1.0.0 | **Ratified**: 2026-08-16 | **Last Amended**: 2026-08-16
