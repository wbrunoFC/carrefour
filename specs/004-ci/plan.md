# Implementation Plan: CI Android

**Branch**: `004-ci` (git atual: `main`) | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-ci/spec.md`

## Summary

Orquestrar o slice (10 Scenario IDs / 11 `it()`) em Android na nuvem quando houver pedido de revisão contra `main` e quando houver merge em `main`. Sem corrida em push isolado de feature. Sem iOS. Reusar `npm run test:android:bs` + Allure já gerado; publicar pasta de relatório como artefato. Um workflow em `.github/workflows/`. Sem page object, sem teste novo, sem npm dependency, sem editar `.env`.

## Technical Context

**Language/Version**: YAML GitHub Actions + Node 22 (npm root `project/`)

**Primary Dependencies**: stack já no `project/package.json` — WebdriverIO 9, `@wdio/browserstack-service`, `@wdio/allure-reporter`, `allure-commandline`. Nenhuma lib nova.

**Storage**: artefato da corrida = `project/tests/results/` (Allure results + report). Sem banco.

**Testing**: a pipeline **roda** os `*.test.ts` do slice; não cria `*.test.ts`. Validação local do YAML = revisão de gatilhos + dry list de `--spec`. Corrida real BrowserStack só com segredos no remoto (humano).

**Target Platform**: Android nuvem (BrowserStack App Automate). Host do job: `ubuntu-latest`. iOS fora.

**Project Type**: automação E2E + orquestração CI (não app de produto).

**Performance Goals**: uma corrida serial (`maxInstances: 1` já no WDIO). Sem shard. Timeout do job acima do Mocha agregado dos 11 `it()`.

**Constraints**: `pull_request` + `push` só `main`. Segredos `BROWSERSTACK_USERNAME` / `BROWSERSTACK_ACCESS_KEY` só no GitHub Secrets. `--spec` lista arquivos (WDIO não expande `**/*.test.ts`). `BROWSERSTACK_LOCAL=false` no job (APK sobe; túnel default é ruído no CI). Não commitar `.env`. Não editar `project/config/` salvo se o generate Allure falhar no CI (preferir só upload).

**Scale/Scope**: 5 arquivos de spec, 11 `it()`, 1 workflow, 0 Scenario ID novo.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
*Source: `.specify/memory/constitution.md` v1.0.0*

**Pré-design**

- [x] Features-First: spec só consome IDs já em `001`–`003` / `project/features/`
- [x] One Speckit feature per domain — **exceção justificada** (ver Complexity): `004-ci` é orquestração do slice, não 4º domínio de tela
- [x] Layer map: testes/config intactos sob `project/`. Workflow **precisa** viver em `.github/workflows/` (GitHub não lê YAML dentro de `project/`)
- [x] Speckit artifacts only at repo root (`specs/004-ci/`, `.specify/`)
- [x] Scenario ID format: nenhum ID novo
- [x] No Android/iOS test duplication
- [x] Selectors: CI não toca JSON de página
- [x] Data-driven: FORMS-FORMS-001 continua via `forms.json` / `casesFor`
- [x] No fixed `sleep`
- [x] Allure reused; not replaced
- [x] CI: `pull_request` + merge `main`, BrowserStack Android only
- [x] No empty feature folders; no new npm dependency

**Pós-design (Phase 1)**: gates iguais. Design não cria pasta `tests/e2e` nova, não mexe em Allure config, não edita `.env`. Violação única: YAML fora de `project/` — justificada abaixo.

## Project Structure

### Documentation (this feature)

```text
specs/004-ci/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── ci-triggers.md
│   └── evidence.md
└── checklists/requirements.md
```

`tasks.md` não é deste comando.

### Source Code (repository root)

```text
carrefour-qa/
├── .github/workflows/e2e-android.yml   # ÚNICO arquivo novo de código
├── specs/004-ci/
├── .specify/
└── project/                            # intacto (scripts + BS + Allure + testes)
    ├── tests/e2e/authentication/login/login.test.ts
    ├── tests/e2e/authentication/signup/signup.test.ts
    ├── tests/e2e/home/home/home.test.ts
    ├── tests/e2e/navigation/side-menu/side-menu.test.ts
    ├── tests/e2e/forms/forms/forms.test.ts
    ├── config/browserstack/
    └── apps/
```

**Structure Decision**: um YAML. Sem alterar `project/config/` na primeira entrega. Sem `project/pages/**`. Sem teste novo.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| 4º diretório Speckit (`004-ci`) | Constituição manda plan/tasks de CI depois dos 3 domínios | Enfiar workflow no plan de forms mistura tela com orquestração |
| Código em `.github/workflows/` (fora de `project/`) | GitHub Actions só descobre workflow nessa pasta | YAML dentro de `project/` nunca dispara |
