---
type: Reference
title: Frameworks de teste
description: Mocha, Jasmine, Cucumber via adapter NPM; Mocha não aceita callback done.
resource: https://webdriver.io/docs/frameworks
tags: [webdriverio, mocha, jasmine, cucumber]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Adapter no **mesmo local** que o WDIO (`@wdio/mocha-framework` etc.). Runner instancia e fecha a sessão. Global `browser` no spec.

# Mocha (Carrefour)

```sh
npm i -D @wdio/mocha-framework
```

Interfaces: BDD (default), TDD (`mochaOpts.ui: 'tdd'`), QUnit. `mochaOpts` no conf; **não** usar `parallel` do Mocha — paralelismo é do WDIO.

**Proibido** `it('…', (done) => done())` — throw `done is not a function`. Só async/await.

CLI: `wdio run wdio.conf.ts --mochaOpts.grep "my test" --mochaOpts.bail`.

# Outros

Jasmine: `@wdio/jasmine-framework`. Cucumber: `@wdio/cucumber-framework` (timeout por step). Serenity/JS: integração de terceiros documentada no mesmo guia.

# Citations

[1] [Frameworks](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Frameworks.md)
