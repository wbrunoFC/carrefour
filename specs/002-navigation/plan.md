# Implementation Plan: Navigation

**Branch**: `002-navigation` (git atual: `main`) | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-navigation/spec.md`

## Summary

Cobrir o domínio navigation do slice: HOME-HOME-001 (aba Home visível) e NAV-SIDE-MENU-002 (Menu → Login). Abordagem: reusar `pages/home`, `pages/side-menu` e `pages/login` (assertions). Não usar `pages/navigation` neste slice (selectors de Settings/Logout, app errado). Sem JSON de dados (destino Login é constante da spec). Sem página nova, sem dependência nova, sem CI neste plan.

## Technical Context

**Language/Version**: TypeScript 5.8 (npm root `project/`)

**Primary Dependencies**: WebdriverIO 9, Appium 2, `@wdio/mocha-framework`, `@wdio/allure-reporter`, `@wdio/browserstack-service` — stack fixa da constituição. Nenhuma lib nova.

**Storage**: N/A. Nenhum input variável. Sem `project/data/navigation.json`.

**Testing**: Mocha via WDIO. Entregável = `*.test.ts` em `project/tests/e2e/home/home/` e `project/tests/e2e/navigation/side-menu/`.

**Target Platform**: Android e iOS (mesmo teste). Execução local via emulador/simulador; BrowserStack Android só no plan de CI (fora deste domínio).

**Project Type**: automação E2E mobile (não app de produto).

**Performance Goals**: cada cenário conclui no timeout Mocha já configurado (`E2E_MOCHA_TIMEOUT_MS`). Sem meta de throughput.

**Constraints**: selectors só em JSON `EL00N`; sem `sleep` fixo; Allure já em `project/config/`; secrets fora do git.

**Scale/Scope**: 2 Scenario IDs, ambos novos. Um domínio Speckit. Dois arquivos de teste (pastas `home/home` e `navigation/side-menu` conforme folder-tests.md Apêndice C).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
*Source: `.specify/memory/constitution.md` v1.0.0*

**Pré-design**

- [x] Features-First: spec consome HOME-HOME-001 e NAV-SIDE-MENU-002 de `project/features/`
- [x] One Speckit feature per domain (`navigation`)
- [x] Layer map intact: código só sob `project/{features,pages,data,tests,config,apps}`
- [x] Speckit artifacts only at repo root (`.specify/`, `specs/`)
- [x] Scenario ID format `<DOMAIN>-<FEATURE>-<NNN>` in feature md, test title, and Allure
- [x] No Android/iOS test duplication unless folder-tests.md §A.6.3 behavioral split
- [x] Selectors only via `project/pages/{feature}/{platform}.json` (`EL00N`)
- [x] Data-driven inputs in `project/data/`, not hardcoded mass in `it()` — **N/A**: destino Login é constante da spec, não conjunto de dados
- [x] No fixed `sleep`; wait on a condition
- [x] Allure reused (already in `project/config/`); not replaced
- [x] CI in this slice (if in plan): **não está neste plan** (spec Out of Scope; plan posterior do slice)
- [x] No empty feature folders; no new npm dependency if current stack covers the need

**Pós-design (Phase 1)**: gates iguais. Design não abre pasta vazia sem teste, não cria page module, não mexe em Allure/`package.json`, não adiciona workflow GitHub. Não usa `pages/navigation`. Violação zero. Complexity Tracking vazio.

## Project Structure

### Documentation (this feature)

```text
specs/002-navigation/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-screens.md
└── checklists/requirements.md
```

`tasks.md` não é deste comando.

### Source Code (repository root)

```text
carrefour-qa/
├── specs/002-navigation/
├── .specify/
└── project/
    ├── features/home/                 # intacto (fonte HOME-HOME-001)
    ├── features/navigation/           # intacto (fonte NAV-SIDE-MENU-002)
    ├── pages/home/                    # reusar (tab + screen)
    ├── pages/side-menu/               # reusar (open + goToLogin)
    ├── pages/login/                   # reusar assertions da tela destino
    ├── pages/navigation/              # NÃO USAR neste slice
    ├── tests/e2e/home/home/           # novo
    ├── tests/e2e/navigation/side-menu/# novo
    ├── tests/support/                 # reusar metadata (não openLoginScreen no Home)
    ├── config/                        # intacto
    └── apps/
```

**Structure Decision**: layout canônico confirmado. Arquivos deste domínio:

| Ação | Path |
|------|------|
| criar | `project/tests/e2e/home/home/home.test.ts` |
| criar | `project/tests/e2e/home/home/home.scenarios.ts` |
| criar | `project/tests/e2e/navigation/side-menu/side-menu.test.ts` |
| criar | `project/tests/e2e/navigation/side-menu/side-menu.scenarios.ts` |
| não tocar | `project/pages/**` (já cobrem), `project/data/**`, `project/config/**`, `package.json`, `project/tests/e2e/authentication/**` |

Não inventar `pages/navigation` extra. Não criar `data/navigation.json`. Não criar `openHomeScreen` se `HomeActions.goToHomeTab` + `waitForScreen` bastam.

## Complexity Tracking

Nenhuma violação. Tabela vazia de propósito.
