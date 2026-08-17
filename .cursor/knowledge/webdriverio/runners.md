---
type: Concept
title: Local Runner vs Browser Runner
description: E2E roda no Node (local). Component/unit no browser real (Vite).
resource: https://webdriver.io/docs/runner
tags: [webdriverio, runner, local-runner]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Runner decide **onde** o framework (Mocha/…) executa.

# Local Runner (default)

Pacote `@wdio/local-runner`. Cada spec file = worker process isolado = uma sessão. Máxima concorrência. **Não dá** pra compartilhar estado entre arquivos.

Workarounds: `@wdio/shared-store-service` ou agrupar specs no mesmo worker (array aninhado em `specs`). Ver [organizar suíte](organizing-suites.md).

Carrefour: `runner` local implícito.

# Browser Runner

Pacote `@wdio/browser-runner`. Framework roda **no browser** (Vite), não em JSDOM. Presets: React, Vue, Svelte, Solid, Stencil, Preact.

Limitação: `alert`/`confirm` nativos bloqueiam a página — WDIO mocka por default. Coverage via istanbul.

Irrelevante pro E2E mobile nativo.

# Citations

[1] [Runner](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Runner.md)
