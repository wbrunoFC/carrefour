---
type: Concept
title: Modos de setup
description: Três camadas — protocol bindings, standalone webdriverio, WDIO testrunner.
resource: https://webdriver.io/docs/setuptypes
tags: [webdriverio, setup, testrunner]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

WDIO serve vários propósitos. Três setups, do mais cru ao mais completo.

# Protocol bindings

Pacote `webdriver`: bindings do protocolo. Comandos devolvem resposta crua do driver. **Sem** auto-wait. Se a sessão inicial é mobile, o prototype ganha comandos Appium/Mobile JSON Wire.

Pacote `devtools`: mesma interface, motor Puppeteer.

# Standalone (`webdriverio`)

Camada acima: seletores inteligentes, auto-wait, comandos como `dragAndDrop`. Ainda dá acesso a comandos de protocolo. Serve pra embutir automação em lib própria (Oxygen, CodeceptJS) ou scripts Node.

Sem opções extras, tenta baixar o browser driver que casa com `browserName`. Chrome/Firefox: pode instalar o browser se não achar na máquina.

# WDIO Testrunner (caso E2E)

Objetivo principal: E2E em escala. Organiza specs, concorrência, sessão, debug. Abstrai Mocha/Jasmine/Cucumber.

Projeto Carrefour = este modo (`@wdio/cli` + `@wdio/local-runner`).

# Citations

[1] [Setup Types](https://github.com/webdriverio/webdriverio/blob/main/website/docs/SetupTypes.md)
