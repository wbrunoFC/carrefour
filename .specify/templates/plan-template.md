# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: [e.g., Python 3.11, Swift 5.9, Rust 1.75 or NEEDS CLARIFICATION]

**Primary Dependencies**: [e.g., FastAPI, UIKit, LLVM or NEEDS CLARIFICATION]

**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]

**Testing**: [e.g., pytest, XCTest, cargo test or NEEDS CLARIFICATION]

**Target Platform**: [e.g., Linux server, iOS 15+, WASM or NEEDS CLARIFICATION]

**Project Type**: [e.g., library/cli/web-service/mobile-app/compiler/desktop-app or NEEDS CLARIFICATION]

**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]

**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]

**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
*Source: `.specify/memory/constitution.md` v1.0.0*

- [ ] Features-First: spec consumes Scenario IDs from `project/features/`; no parallel catalog
- [ ] One Speckit feature per domain (`authentication` | `navigation` | `forms` in this slice)
- [ ] Layer map intact: code only under `project/{features,pages,data,tests,config,apps}`
- [ ] Speckit artifacts only at repo root (`.specify/`, `specs/`)
- [ ] Scenario ID format `<DOMAIN>-<FEATURE>-<NNN>` in feature md, test title, and Allure
- [ ] No Android/iOS test duplication unless folder-tests.md §A.6.3 behavioral split
- [ ] Selectors only via `project/pages/{feature}/{platform}.json` (`EL00N`)
- [ ] Data-driven inputs in `project/data/`, not hardcoded mass in `it()`
- [ ] No fixed `sleep`; wait on a condition
- [ ] Allure reused (already in `project/config/`); not replaced
- [ ] CI in this slice (if in plan): `pull_request` + merge to `main`, BrowserStack Android only
- [ ] No empty feature folders; no new npm dependency if current stack covers the need

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

This repository is a mobile E2E automation project. Do not use `src/`,
web app, or mobile+API option trees. Delivered `plan.md` MUST use this layout:

```text
carrefour-qa/
├── specs/[###-feature]/     # this Speckit feature (one domain)
├── .specify/                # constitution + templates
└── project/                 # npm root
    ├── features/{domain}/   # source of truth (already exists)
    ├── pages/{feature}/     # page objects (reuse)
    ├── data/                # data-driven JSON
    ├── tests/e2e/{domain}/{feature}/{feature}.test.ts
    ├── tests/support/
    ├── config/              # WDIO + Allure + BrowserStack
    └── apps/                # apk / app under test
```

**Structure Decision**: [Confirm this layout; list the exact files this
feature will add or change. Do not invent parallel trees.]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
