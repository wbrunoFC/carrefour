---
type: Guide
title: Extensões — commands, matchers, services, reporters
description: addCommand no browser/element; custom matcher TS; services e reporters próprios.
resource: https://webdriver.io/docs/customcommands
tags: [webdriverio, custom-commands, services]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

WDIO espera extensão. Quatro ganchos oficiais.

# Custom commands

`browser.addCommand(name, fn, attachToElement?)`. `overwriteCommand` — usar com cuidado. Option disable implicitWait no custom. Tipos: augment interface `ChainablePromiseElement` / `Browser`.

# Custom matchers

`expect-webdriverio` aceita matcher de browser e de element. Registrar + declarar tipos TS (`CustomMatchers.md`).

# Custom services / reporters

Service = hooks do ciclo de vida (before/after session, …). Reporter = escuta eventos do runner. Docs: `CustomServices.md`, `CustomReporter.md`.

# Citations

[1] [Custom Commands](https://github.com/webdriverio/webdriverio/blob/main/website/docs/CustomCommands.md)
[2] [Custom Matchers](https://github.com/webdriverio/webdriverio/blob/main/website/docs/CustomMatchers.md)
[3] [Custom Services](https://github.com/webdriverio/webdriverio/blob/main/website/docs/CustomServices.md)
[4] [Custom Reporter](https://github.com/webdriverio/webdriverio/blob/main/website/docs/CustomReporter.md)
