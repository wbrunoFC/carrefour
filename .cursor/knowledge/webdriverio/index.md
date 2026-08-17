---
okf_version: "0.1"
---

# WebdriverIO (v9+)

Bundle destilado de `website/docs` do repo [webdriverio/webdriverio](https://github.com/webdriverio/webdriverio). Docs oficiais: [webdriver.io](https://webdriver.io). Fonte lida em 2026-08-13 (clone `main`, sparse `website/docs`, 141 markdowns).

Não é dump 1:1. Conceitos cobrem todos os guias; API comando-a-comando fica nas citações oficiais.

Relevante ao projeto Carrefour: mobile nativo (Appium + UiAutomator2/XCUITest), Mocha, TypeScript, BrowserStack, page objects.

# Núcleo

* [O que é e por que usar](getting-started.md) - framework, escopo, Node >= 18.20, bootstrap
* [Modos de setup](setup-types.md) - protocol bindings vs standalone vs testrunner
* [Testrunner e CLI](testrunner.md) - `@wdio/cli`, `run`/`config`/`install`/`repl`
* [Runners](runners.md) - local (default E2E) vs browser (component)
* [Arquivo de configuração](configuration.md) - `wdio.conf`, specs, workers, hooks
* [Capabilities](capabilities.md) - W3C, Appium, BrowserStack, `wdio:*`

# Autoria de testes

* [Seletores](selectors.md) - CSS, texto, ARIA, mobile (`~`, UiSelector, predicate)
* [Page objects](page-objects.md) - getters lazy, export de instância
* [Timeouts e auto-wait](timeouts-autowait.md) - implicit vs waitFor vs mochaOpts
* [Assertions](assertions.md) - expect-webdriverio, soft assertions
* [TypeScript](typescript.md) - `tsx`, `tsconfig.json` types
* [Frameworks](frameworks.md) - Mocha (projeto usa), Jasmine, Cucumber
* [Boas práticas](best-practices.md) - seletores, `$` lazy, expect com retry

# Mobile e API

* [Appium](appium.md) - setup via `npx appium-installer`
* [API browser / element](api-browser-element.md) - globals, flags mobile, chain
* [Comandos mobile](mobile-commands.md) - longPress, scrollIntoView, hybrid webview
* [Protocolos](protocols.md) - WebDriver Bidi, WebDriver clássico, drivers

# Infra e extensão

* [Cloud](cloud-services.md) - `user`/`key`, BrowserStack Local, `@wdio/browserstack-service`
* [CI/CD](ci-cd.md) - GitHub Actions, Jenkins, Bamboo, Docker, sharding
* [Debug](debugging.md) - `browser.debug()`, `maxInstances: 1`, inspect
* [Organizar suíte](organizing-suites.md) - parallel, suites, retry, params
* [Extensões](custom-extensions.md) - commands, matchers, services, reporters
* [Segurança, proxy, grid](ops.md) - mask, proxy, Selenium Grid, binaries

# Superfícies extras (resumo)

* [Component, visual, a11y, desktop, OCR](extras.md)
* [MCP](mcp.md) - servidor MCP do WebdriverIO
* [Migrações](migrations.md) - v5→v6, v6→v7, sync→async, Protractor
