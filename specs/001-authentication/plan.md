# Implementation Plan: Authentication

**Branch**: `001-authentication` (git atual: `main`) | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-authentication/spec.md`

## Summary

Cobrir o domínio authentication do slice: 3 logins já automatizados permanecem; 2 signups (AUTH-SIGNUP-001, AUTH-SIGNUP-002) entram como testes E2E no mesmo padrão. Abordagem: reusar `pages/login`, `pages/signup` e `pages/error-validation`; estender `data/authentication.json`; completar selectors que faltam (alerta Signed Up! e mensagem de confirmação divergente). Sem página nova, sem dependência nova, sem CI neste plan.

## Technical Context

**Language/Version**: TypeScript 5.8 (npm root `project/`)

**Primary Dependencies**: WebdriverIO 9, Appium 2, `@wdio/mocha-framework`, `@wdio/allure-reporter`, `@wdio/browserstack-service` — stack fixa da constituição. Nenhuma lib nova.

**Storage**: JSON em `project/data/authentication.json` (inputs por Scenario ID). Sem banco.

**Testing**: Mocha via WDIO. Entregável = `*.test.ts` em `project/tests/e2e/authentication/`. Login já existe; signup é o gap.

**Target Platform**: Android e iOS (mesmo teste). Execução local via emulador/simulador; BrowserStack Android só no plan de CI (fora deste domínio).

**Project Type**: automação E2E mobile (não app de produto).

**Performance Goals**: cada cenário conclui no timeout Mocha já configurado (`E2E_MOCHA_TIMEOUT_MS`). Sem meta de throughput.

**Constraints**: selectors só em JSON `EL00N`; dados em `project/data/`; sem `sleep` fixo; Allure já em `project/config/`; secrets fora do git.

**Scale/Scope**: 5 Scenario IDs (3 existentes + 2 novos). Um domínio. Dois arquivos de teste (`login.test.ts` intacto, `signup.test.ts` novo).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
*Source: `.specify/memory/constitution.md` v1.0.0*

**Pré-design**

- [x] Features-First: spec consome AUTH-LOGIN-001..003 e AUTH-SIGNUP-001..002 de `project/features/`
- [x] One Speckit feature per domain (`authentication`)
- [x] Layer map intact: código só sob `project/{features,pages,data,tests,config,apps}`
- [x] Speckit artifacts only at repo root (`.specify/`, `specs/`)
- [x] Scenario ID format `<DOMAIN>-<FEATURE>-<NNN>` in feature md, test title, and Allure
- [x] No Android/iOS test duplication unless folder-tests.md §A.6.3 behavioral split
- [x] Selectors only via `project/pages/{feature}/{platform}.json` (`EL00N`)
- [x] Data-driven inputs in `project/data/`, not hardcoded mass in `it()`
- [x] No fixed `sleep`; wait on a condition
- [x] Allure reused (already in `project/config/`); not replaced
- [x] CI in this slice (if in plan): **não está neste plan** (spec Out of Scope; plan posterior do slice)
- [x] No empty feature folders; no new npm dependency if current stack covers the need

**Pós-design (Phase 1)**: gates iguais. Design não abre pasta vazia, não cria `pages/signup` (já existe), não mexe em `project/config/` Allure, não adiciona workflow GitHub. Violação zero. Complexity Tracking vazio.

## Project Structure

### Documentation (this feature)

```text
specs/001-authentication/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-messages.md
└── checklists/requirements.md
```

`tasks.md` não é deste comando.

### Source Code (repository root)

```text
carrefour-qa/
├── specs/001-authentication/
├── .specify/
└── project/
    ├── features/authentication/     # intacto (fonte)
    ├── pages/login/                 # intacto
    ├── pages/signup/                # completar alerta de sucesso
    ├── pages/error-validation/      # + mensagem confirmação divergente
    ├── data/authentication.json     # + 2 cases signup
    ├── tests/e2e/authentication/login/     # intacto
    ├── tests/e2e/authentication/signup/    # novo teste
    ├── tests/support/               # reusar fixtures/metadata
    ├── config/                      # intacto (Allure já liga)
    └── apps/
```

**Structure Decision**: layout canônico confirmado. Arquivos deste domínio:

| Ação | Path |
|------|------|
| criar | `project/tests/e2e/authentication/signup/signup.test.ts` |
| criar | `project/tests/e2e/authentication/signup/signup.scenarios.ts` |
| alterar | `project/data/authentication.json` |
| alterar | `project/pages/signup/android.json`, `ios.json` |
| alterar | `project/pages/signup/signup.page.ts`, `signup.actions.ts`, `signup.assertions.ts` |
| alterar | `project/pages/error-validation/android.json`, `ios.json` |
| alterar | `project/pages/error-validation/error-validation.assertions.ts` (e page se getter) |
| não tocar | `project/tests/e2e/authentication/login/**`, `project/config/**`, `package.json` |

Não inventar `pages/authentication/`. Não criar `data/signup.json`.

## Complexity Tracking

Nenhuma violação. Tabela vazia de propósito.
