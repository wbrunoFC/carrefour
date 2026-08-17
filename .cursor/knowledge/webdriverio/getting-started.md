---
type: Guide
title: O que é WebdriverIO e como começar
description: Framework de automação web/mobile Node.js (v9+), bootstrap via create-wdio, requisitos de Node.
resource: https://webdriver.io/docs/gettingstarted
tags: [webdriverio, getting-started, v9]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

WebdriverIO (WDIO) é framework progressivo de automação para web moderna, apps mobile híbridos/nativos, desktop (Electron) e testes de componente no browser. Docs lidas são da linha **>= 9.x**.

Projeto Carrefour usa `webdriverio` ^9.30.1 — alinhado a esta fonte.

# Por que existe

- **Extendable:** helpers e comandos compostos são o caminho normal.
- **Compatible:** [WebDriver](https://w3c.github.io/webdriver/) (cross-browser real) e Chrome DevTools/Puppeteer quando precisa introspecção.
- **Feature rich:** plugins oficiais + comunidade.

Governança: OpenJS Foundation, não vendor lock.

# Bootstrap

Na raiz do projeto:

```sh
npm init wdio@latest .
```

Projeto novo: `npm init wdio@latest ./path`. Wizard gera config. `--yes` = Mocha + Chrome + page object.

CLI manual:

```sh
npm i --save-dev @wdio/cli
npx wdio config
npx wdio run ./wdio.conf.js
```

Filtros: `--spec example.e2e.js`, `--suite nomeDaSuite`.

Modo script (sem testrunner): instalar `webdriverio` e usar standalone. Todo comando é **async** — `async/await` obrigatório.

# Requisitos

Node **>= 18.20.0** (LTS ativo). Só releases LTS oficiais.

# Citations

[1] [Getting Started](https://github.com/webdriverio/webdriverio/blob/main/website/docs/GettingStarted.md)
[2] [Why WebdriverIO](https://github.com/webdriverio/webdriverio/blob/main/website/docs/WhyWebdriverIO.md)
