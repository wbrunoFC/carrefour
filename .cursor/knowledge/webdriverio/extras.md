---
type: Overview
title: Superfícies extras — component, visual, a11y, desktop, OCR
description: Resumo dos docs fora do núcleo E2E mobile; citações para aprofundar.
resource: https://webdriver.io/docs/componenttesting
tags: [webdriverio, visual, accessibility, ocr, electron]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Fora do caminho Carrefour (E2E nativo). Existiam no `website/docs`; destilado, não copiado.

# Component testing

Browser runner + Vite. Presets React/Vue/Svelte/Solid/Stencil/Lit/Preact. Coverage, mocking de módulos, limitação de `alert`. Pasta `component-testing/`.

# Visual

`@wdio/visual-service`: saveScreen/saveElement, compare options, reporter. Percy (web + App Percy mobile), Argos, SmartUI. Considerações: consistência de plataforma, % mismatch, simulação de tela mobile, headless distorce.

# Acessibilidade

Axe Core; BrowserStack Accessibility; LambdaTest/TestMu a11y.

# Desktop / extensão

Electron, macOS, Windows, Tauri. VS Code extension testing, Web Extension (Chrome/Firefox load).

# OCR

`wdio-ocr-service`: Tesseract no screenshot. Comandos `ocrClickOnText`, `ocrGetText`, `ocrSetValue`, `ocrWaitForTextDisplayed`, `ocrGetElementPositionByText`. Lento; crop (`haystack`) ajuda. Não substitui seletores nativos.

# Devtools dashboard / Allure / flowcharts

Pasta `devtools/` = tracing, screencast, TestLens. Flowcharts: high-level, worker, execução, comandos. Boilerplates v9 em `BoilerplateProjects.md`. API intro: `API.md`. Clock/Dialog: `api/Clock.md`, `api/Dialog.md`. Modules: `api/Modules.md`, `api/Protocols.md`.

Sponsor/Enterprise: Tidelift — fora de escopo técnico.

# Citations

[1] [Component Testing](https://github.com/webdriverio/webdriverio/blob/main/website/docs/ComponentTesting.md)
[2] [Visual Testing](https://github.com/webdriverio/webdriverio/blob/main/website/docs/VisualTesting.md)
[3] [OCR getting started](https://github.com/webdriverio/webdriverio/blob/main/website/docs/ocr-testing/getting-started.md)
[4] [desktop-testing/](https://github.com/webdriverio/webdriverio/tree/main/website/docs/desktop-testing)
[5] [accessibility-testing/](https://github.com/webdriverio/webdriverio/tree/main/website/docs/accessibility-testing)
