---
type: Guide
title: Timeouts e auto-wait
description: WDIO espera elemento clicável sozinho; implicit timeout = 0 e não recomendado.
resource: https://webdriver.io/docs/autowait
tags: [webdriverio, timeouts, auto-wait]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Comando que **interage** (click, setValue, …) espera o elemento visível e interactable (`isClickable`). Wait manual só em caso raro: `waitForDisplayed`.

# Camadas

| Camada | Default | Uso |
|--------|---------|-----|
| Implicit WebDriver | `0` | Driver espera achar elemento. **Não recomendado** subir — mascara flakiness |
| `waitforTimeout` (config) | setar no conf | Global dos `waitFor*` |
| Script timeout | 30s | `executeAsync` |
| Page load | 300s | `setTimeout({ pageLoad })` |
| Framework (Mocha) | 10s por `it` | `mochaOpts.timeout` — E2E mobile quase sempre precisa mais |

```js
await browser.setTimeout({ implicit: 5000 }) // docs: evitar
waitforTimeout: 5000 // wdio.conf
mochaOpts: { timeout: 20000 }
```

Cucumber: timeout é por step. Jasmine: `jasmineOpts.defaultTimeoutInterval`.

# Citations

[1] [Auto-waiting](https://github.com/webdriverio/webdriverio/blob/main/website/docs/AutoWait.md)
[2] [Timeouts](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Timeouts.md)
