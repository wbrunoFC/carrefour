---
type: Guide
title: Segurança, proxy, grid e binaries
description: Mask de secrets, proxy undici, Selenium Grid, download automático de drivers.
resource: https://webdriver.io/docs/security
tags: [webdriverio, security, proxy, selenium-grid]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

# Segurança

Não logar senha. Mask no valor de comando e nos logs WDIO (`Security.md`). Secrets só em env, nunca no conf commitado.

# Proxy

Entre teste e driver: env vars (recomendado) ou `undici` `setGlobalDispatcher`. Entre browser e internet: cap de proxy do browser. Sauce Connect é túnel, não o mesmo que HTTP_PROXY.

# Selenium Grid

`hostname`/`port`/`path` do hub. Auth básica, timeouts em grid dinâmico, upload/download de arquivo remoto (`SeleniumGrid.md`).

# Driver binaries

WDIO baixa drivers localmente. Customizar automação em `DriverBinaries.md`. Emobile: Appium, não ChromeDriver (salvo webview Android).

# Emulation / mocks / snapshot / record

Geolocation, UA, clock (`Emulation.md`). Network mock/spy (`MocksAndSpies.md`, `api/Mock.md`). Snapshot de DOM (`Snapshot.md`). Gravar teste via Chrome DevTools Recorder (`Record.md`).

# Citations

[1] [Security](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Security.md)
[2] [Proxy](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Proxy.md)
[3] [Selenium Grid](https://github.com/webdriverio/webdriverio/blob/main/website/docs/SeleniumGrid.md)
[4] [Driver Binaries](https://github.com/webdriverio/webdriverio/blob/main/website/docs/DriverBinaries.md)
