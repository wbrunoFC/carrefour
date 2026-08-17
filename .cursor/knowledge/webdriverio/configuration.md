---
type: Reference
title: Arquivo de configuração
description: wdio.conf exporta config — runner, cloud, specs, workers, hooks, services.
resource: https://webdriver.io/docs/configurationfile
tags: [webdriverio, configuration]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Config é módulo Node que exporta `config`. Wizard gera o arquivo. Cloud (Sauce/BrowserStack/…) **não** exige `hostname`/`port` se `user` + `key` estão setados — WDIO infere o endpoint.

# Blocos que importam

| Área | Chaves |
|------|--------|
| Onde roda | `runner` (`local` default) |
| Servidor | `hostname`, `port`, `path`, `protocol` |
| Cloud | `user`, `key`, `region` (Sauce: `us`/`eu`) |
| Specs | `specs` (globs), `exclude`. Spec em worker separado. Array aninhado = mesmo worker |
| Capacidade | `maxInstances`, `maxInstancesPerCapability`, `capabilities` |
| Globals | `injectGlobals` (default `true`). Se `false`: `import { browser, $, $$, expect } from '@wdio/globals'` |
| Espera | `waitforTimeout` (global dos `waitFor*`, f minúsculo) |
| TS | `tsConfigPath` |

# Specs e workers

Cada item de `specs` vira processo. `maxInstances: 10` + 3 browsers + 10 specs ≈ até 30 processos. Limite real: CPU / grid.

# Citations

[1] [Configuration File](https://github.com/webdriverio/webdriverio/blob/main/website/docs/ConfigurationFile.md)
[2] [Configuration options](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Configuration.md)
