---
type: Guide
title: Appium com WebdriverIO
description: WDIO testa iOS/Android/Tizen, desktop e TV via Appium; setup com appium-installer.
resource: https://webdriver.io/docs/appium
tags: [webdriverio, appium, mobile]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Além de browser: apps mobile (iOS, Android, Tizen), desktop (macOS/Windows), TV (Roku, tvOS, Android TV, Samsung). Recomendação oficial: **Appium**.

Setup do ambiente é o pedaço difícil. Atalho:

```sh
npx appium-installer
```

Toolkit [AppiumTestDistribution/appium-installer](https://github.com/AppiumTestDistribution/appium-installer).

Service WDIO: `@wdio/appium-service` (Carrefour já usa). Protocolo de fundo = WebDriver; Appium é o proxy mobile. Ver [protocolos](protocols.md).

# Citations

[1] [Appium Setup](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Appium.md)
[2] [Appium intro](https://appium.io/docs/en/latest/intro/)
