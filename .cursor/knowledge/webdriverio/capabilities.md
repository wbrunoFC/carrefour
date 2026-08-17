---
type: Reference
title: Capabilities
description: Definição W3C do ambiente remoto — browser, Appium, extensões de cloud e wdio:*.
resource: https://webdriver.io/docs/capabilities
tags: [webdriverio, capabilities, appium, browserstack]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Capability = contrato do ambiente remoto. Testrunner **falha cedo** se o objeto não segue a spec WebDriver.

Localmente pouco importa (um ambiente). Em CI/CD vira o mapa de matriz.

# Extensões comuns

- Browser: `goog:chromeOptions`, `moz:firefoxOptions`, `ms:edgeOptions`
- Cloud: `sauce:options`, `bstack:options`, `tb:options`, `LT:Options`
- Engine: `appium:*` (mobile), `selenoid:*`

# Flags WDIO no cap

| Chave | Efeito |
|-------|--------|
| `wdio:chromedriverOptions` (e gecko/edge/safari) | Args do driver local |
| `wdio:maxInstances` | Override de paralelismo **desta** cap |
| `wdio:specs` / `wdio:exclude` | Specs só desta cap |
| `wdio:enforceWebDriverClassic` | Desliga tentativa de sessão Bidi |

Mobile nativo: `platformName`, `app`/`appium:app`, `appium:deviceName`, `appium:automationName` (`UiAutomator2` / `XCUITest`), `appium:udid`. Ver docs Appium caps.

# Citations

[1] [Capabilities](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Capabilities.md)
[2] [Appium capabilities](https://appium.io/docs/en/latest/guides/caps/)
