# Implementation Plan: Forms

**Branch**: `003-forms` (git atual: `main`) | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-forms/spec.md`

## Summary

Cobrir o domínio forms do slice: FORMS-FORMS-001 (eco do input, data-driven), FORMS-FORMS-003 (Active → alerta), FORMS-FORMS-004 (Inactive → sem alerta). Abordagem: Menu → Forms (`SideMenuActions.goToForms`), reusar `pages/forms` (completar actions/assertions e EL de alerta; sem módulo novo). JSON `project/data/forms.json` só para 001. Sem `openLoginScreen`, sem `NavigationPage`, sem dependência nova, sem CI neste plan.

## Technical Context

**Language/Version**: TypeScript 5.8 (npm root `project/`)

**Primary Dependencies**: WebdriverIO 9, Appium 2, `@wdio/mocha-framework`, `@wdio/allure-reporter`, `@wdio/browserstack-service` — stack fixa da constituição. Nenhuma lib nova.

**Storage**: `project/data/forms.json` (domínio `FORMS`). Só FORMS-FORMS-001 tem cases (mesmo `scenarioId`, ≥2 textos). 003/004 sem JSON.

**Testing**: Mocha via WDIO. Entregável = `*.test.ts` em `project/tests/e2e/forms/forms/`.

**Target Platform**: Android e iOS (mesmo teste). Execução local via emulador/simulador; BrowserStack Android só no plan de CI (fora deste domínio).

**Project Type**: automação E2E mobile (não app de produto).

**Performance Goals**: cada cenário conclui no timeout Mocha já configurado (`E2E_MOCHA_TIMEOUT_MS`). Sem meta de throughput.

**Constraints**: selectors só em JSON `EL00N`; sem `sleep` fixo; Allure já em `project/config/`; secrets fora do git. Inputs variáveis só em `project/data/`.

**Scale/Scope**: 3 Scenario IDs, todos novos. Um domínio Speckit. Um arquivo de teste (`forms/forms` conforme folder-tests.md Apêndice C). 001 gera mais de um `it()` (mesmo ID, textos distintos).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
*Source: `.specify/memory/constitution.md` v1.0.0*

**Pré-design**

- [x] Features-First: spec consome FORMS-FORMS-001/003/004 de `project/features/forms/forms.md`
- [x] One Speckit feature per domain (`forms`)
- [x] Layer map intact: código só sob `project/{features,pages,data,tests,config,apps}`
- [x] Speckit artifacts only at repo root (`.specify/`, `specs/`)
- [x] Scenario ID format `<DOMAIN>-<FEATURE>-<NNN>` in feature md, test title, and Allure
- [x] No Android/iOS test duplication unless folder-tests.md §A.6.3 behavioral split
- [x] Selectors only via `project/pages/{feature}/{platform}.json` (`EL00N`)
- [x] Data-driven inputs in `project/data/`, not hardcoded mass in `it()` — FORMS-FORMS-001 via `forms.json`
- [x] No fixed `sleep`; wait on a condition
- [x] Allure reused (already in `project/config/`); not replaced
- [x] CI in this slice (if in plan): **não está neste plan** (spec Out of Scope; plan posterior do slice)
- [x] No empty feature folders; no new npm dependency if current stack covers the need

**Pós-design (Phase 1)**: gates iguais. Design não abre pasta vazia sem teste, não cria page module novo, não mexe em Allure/`package.json`, não adiciona workflow GitHub. Completar `pages/forms` (métodos + EL de alerta) é reuso do módulo existente, não pasta paralela. Violação zero. Complexity Tracking vazio.

## Project Structure

### Documentation (this feature)

```text
specs/003-forms/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── ui-screens.md
│   └── ui-messages.md
└── checklists/requirements.md
```

`tasks.md` não é deste comando.

### Source Code (repository root)

```text
carrefour-qa/
├── specs/003-forms/
├── .specify/
└── project/
    ├── features/forms/                # intacto (fonte dos 3 IDs)
    ├── pages/forms/                   # reusar + completar (echo, inactive, alerta)
    ├── pages/side-menu/               # reusar goToForms (não editar)
    ├── data/forms.json                # novo (só 001)
    ├── tests/e2e/forms/forms/         # novo
    ├── tests/support/                 # reusar loadTestData + metadata (não openLoginScreen)
    ├── config/                        # intacto
    └── apps/
```

**Structure Decision**: layout canônico confirmado. Arquivos deste domínio:

| Ação | Path |
|------|------|
| criar | `project/data/forms.json` |
| criar | `project/tests/e2e/forms/forms/forms.scenarios.ts` |
| criar | `project/tests/e2e/forms/forms/forms.test.ts` |
| completar | `project/pages/forms/forms.actions.ts` (`tapInactive`) |
| completar | `project/pages/forms/forms.assertions.ts` (eco, alerta, ausência de alerta) |
| completar | `project/pages/forms/android.json` e `ios.json` (EL do alerta Active, se ainda não existir) |
| não tocar | `project/pages/side-menu/**`, `project/pages/navigation/**`, `project/pages/login/**`, `project/config/**`, `package.json`, `project/tests/e2e/authentication/**`, `project/tests/e2e/home/**`, `project/tests/e2e/navigation/**` |

Não inventar `pages/forms-alert`. Não chamar `toggleSwitch` / dropdown neste slice. Não criar IDs `FORMS-FORMS-001-A`. `requireTestCase` devolve só o primeiro case — 001 usa `casesFor`.

## Complexity Tracking

Nenhuma violação. Tabela vazia de propósito.
