---
type: Concept
title: Protocolos de automação
description: Default local = WebDriver Bidi; clássico WebDriver + Appium no mobile; drivers por browser.
resource: https://webdriver.io/docs/automationprotocols
tags: [webdriverio, webdriver, bidi, appium]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Default local: tentar sessão **WebDriver Bidi** (bidirecional, sucessor do WebDriver). Ainda em evolução; vendors comprometidos.

**WebDriver clássico:** controle out-of-process, perspectiva de usuário. Padrão W3C. Mobile usa o mesmo fio via Appium.

Proxy = browser driver (ChromeDriver, Geckodriver, Edge, Safari) ou Appium (mobile/desktop). Cloud = o serviço é o proxy.

Forçar clássico: `wdio:enforceWebDriverClassic` na capability. DevTools/Puppeteer = caminho paralelo de introspecção, não substitui Appium.

# Citations

[1] [Automation Protocols](https://github.com/webdriverio/webdriverio/blob/main/website/docs/AutomationProtocols.md)
[2] [DevTools](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Devtools.md)
[3] [Driver Binaries](https://github.com/webdriverio/webdriverio/blob/main/website/docs/DriverBinaries.md)
