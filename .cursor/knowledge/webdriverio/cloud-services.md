---
type: Guide
title: Cloud services
description: user + key na config; BrowserStack Local e @wdio/browserstack-service.
resource: https://webdriver.io/docs/cloudservices
tags: [webdriverio, browserstack, sauce, cloud]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Sauce, BrowserStack, TestingBot, TestMu (LambdaTest), Perfecto: setar `user` e `key`. Caps vendor-specific (ex. `build`) opcionais. Em CI, ramificar config com `process.env.CI`.

Cloud remoto: subir timeouts (idle Sauce: `idle-timeout`).

# BrowserStack (Carrefour)

`user` + `key` = Automate username / access key. Caps extras: ver docs BS. `browserstack.debug: true` grava screencast.

**Local Testing** (app/server não público): WDIO **não** sobe o binário sozinho. Ou sobe na mão, ou usa [`@wdio/browserstack-service`](https://github.com/browserstack/wdio-browserstack-service). Cap: `browserstack.local: true`.

Travis exemplo (legado no doc): wget `BrowserStackLocal-linux-x64.zip`, `./BrowserStackLocal -v -onlyAutomate -forcelocal $BROWSERSTACK_ACCESS_KEY &`.

Caps exemplo do doc: `project`, `build`, `browserstack.local`, `browserstack.debug`. Caps modernas preferem `bstack:options` — ver [capabilities](capabilities.md).

# Outros

Sauce: `@wdio/sauce-service` + Sauce Connect. TestingBot: `@wdio/testingbot-service`. TestMu/Perfecto: mesmo padrão user/key.

# Citations

[1] [Cloud Services](https://github.com/webdriverio/webdriverio/blob/main/website/docs/CloudServices.md)
