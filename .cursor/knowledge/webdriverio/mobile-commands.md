---
type: Reference
title: Comandos mobile aprimorados
description: longPress, scrollIntoView unificado, getContexts/switchContext com metadata pra híbrido.
resource: https://webdriver.io/docs/api/mobile
tags: [webdriverio, mobile, hybrid, webview]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Appium nativo é verboso (gesture chain). WDIO empacota comandos cross-platform.

```ts
await $('~Contacts').longPress()
await $('~element').scrollIntoView()
```

equivale a action pointer touch + pause, sem if Android/iOS.

# Híbrido (webview)

Android webview = Chrome/System WebView (várias “abas”); ChromeDriver versionado pelo UiAutomator2. iOS = Safari/WebKit, ids `WEBVIEW_{id}`.

Comandos chave:

- `getContext` — contexto atual; `returnDetailedContext` pra metadata
- `getContexts({ returnDetailedContexts: true })` — lista com title/url/package
- `switchContext({ title: '…' })` ou `{ url: /regex/ }` — não precisa filtrar na mão

Android: retry `androidWebviewConnectionRetryTime` / `androidWebviewConnectTimeout`. iOS caps se webview some: `appium:includeSafariInWebviews`, `appium:webviewConnectRetries`, `appium:webviewConnectTimeout`.

# Citations

[1] [Mobile Commands](https://github.com/webdriverio/webdriverio/blob/main/website/docs/api/Mobile.md)
