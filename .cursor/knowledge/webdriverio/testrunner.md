---
type: Reference
title: Testrunner e CLI
description: Pacote @wdio/cli — config, run, install, repl e flags de execução.
resource: https://webdriver.io/docs/testrunner
tags: [webdriverio, cli, testrunner]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Testrunner vive em `@wdio/cli`. Sessão Selenium/Appium nasce e morre pelo runner; teste usa global `browser`/`driver`.

```sh
npx wdio --help
npx wdio config
npx wdio run wdio.conf.js
npx wdio wdio.conf.js   # run implícito
```

# Comandos

| Comando | Função |
|---------|--------|
| `wdio config` | Wizard → `wdio.conf.js` |
| `wdio run <config>` | Default: sobe testes |
| `wdio install <type> <name>` | Adiciona reporter/service/framework |
| `wdio repl <browser>` | Sessão interativa (ex. `wdio repl chrome`) |

# Flags úteis de `run`

`--spec`, `--exclude`, `--suite`, `--repeat`, `--watch`, `--logLevel`, `--bail`, `--baseUrl`, `--waitforTimeout`, `--hostname`/`--port`, `--user`/`--key` (cloud), `--mochaOpts` / `--jasmineOpts` / `--cucumberOpts`, `--tsConfigPath`.

# `wdio install`

Services oficiais no CLI: `sauce`, `browserstack`, `appium`, `lambdatest`, `docker`, … Reporters: `spec`, `junit`, `allure`, … Frameworks: `mocha`, `jasmine`, `cucumber`.

Carrefour já tem `@wdio/appium-service` e `@wdio/browserstack-service` — não precisa `wdio install` de novo.

# Citations

[1] [Testrunner](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Testrunner.md)
