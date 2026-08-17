---
type: Reference
title: Assertions (expect-webdriverio)
description: Matchers E2E com retry interno; soft assertions; não usar expect(await isDisplayed()).
resource: https://webdriver.io/docs/assertion
tags: [webdriverio, expect, assertions]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Testrunner traz `expect-webdriverio` (Jest matchers + matchers E2E). Global `expect` se `injectGlobals` true.

```js
await expect($('button')).toBeDisplayed()
await expect($$('form select>option')).toHaveChildren({ gte: 1 })
```

Lista completa: [expect API](https://webdriver.io/docs/api/expect-webdriverio).

# Soft

Desde expect-webdriverio 5.2.0: `expect.soft(...)` não throw imediato; falhas juntas no fim do teste. `expect` normal ainda aborta.

# Anti-padrão

```js
expect(await button.isDisplayed()).toBe(true) // sem retry → flaky
await expect(button).toBeDisplayed()          // retry até timeout
```

Chai pode coexistir com import alias. Migração: preferir `toHaveUrl`, `toBeDisplayed`, etc.

# Citations

[1] [Assertion](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Assertion.md)
