---
type: Reference
title: API Browser e Element
description: Sessão global browser/driver, flags isAndroid/isIOS, chain de elementos, eventos.
resource: https://webdriver.io/docs/api/browser
tags: [webdriverio, api, browser, element]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

**Browser object** = sessão. Testrunner: global `browser` ou `driver` (alias mobile). Standalone: retorno de `remote()`. Runner abre e fecha a sessão.

# Globals

Se `injectGlobals` não for `false`: `browser`, `driver`, `$`, `$$`, `expect`. Multiremote: `multiRemoteBrowser`. Framework (Mocha) injeta os próprios globals à parte.

Env por worker: `NODE_ENV=test` (se vazio), `WDIO_LOG_LEVEL` (ganha de `logLevel`), `WDIO_WORKER_ID` formato `{capIndex}-{specIndex}`.

# Propriedades úteis (browser)

`sessionId`, `capabilities` vs `requestedCapabilities`, `isW3C`, `isBidi`, `isMobile`, `isIOS`, `isAndroid`, `isNativeContext`, `mobileContext` (evita round-trip `getContext()`).

```js
if (driver.isAndroid) { /* spec só Android */ }
```

`addCommand` / `overwriteCommand` / `addLocatorStrategy` no browser. Eventos: `command`, `result`, `bidiCommand`, `bidiResult`, `request.start|end|retry|performance`.

# Element

Vem de `$`, `custom$`, `react$`, `shadow$`. Props: `elementId`, `selector`, `parent`. Chain: `$('#header').$('#headline').getText()`. `$$('div').map(...)` precisa `await` no map — iterators async.

# Citations

[1] [Browser](https://github.com/webdriverio/webdriverio/blob/main/website/docs/api/Browser.md)
[2] [Element](https://github.com/webdriverio/webdriverio/blob/main/website/docs/api/Element.md)
[3] [Globals](https://github.com/webdriverio/webdriverio/blob/main/website/docs/api/Globals.md)
[4] [Environment](https://github.com/webdriverio/webdriverio/blob/main/website/docs/api/Environment.md)
