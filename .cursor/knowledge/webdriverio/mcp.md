---
type: Reference
title: WebdriverIO MCP
description: Servidor MCP pra sessão browser/mobile, tools, resources, transport stdio/HTTP.
resource: https://webdriver.io/docs/mcp
tags: [webdriverio, mcp]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

MCP (Model Context Protocol) = protocolo pra ferramenta/agente falar com o WDIO sem escrever spec. Docs em `MCP.md` + pasta `mcp/`.

# O que faz

Sobe sessão, age na UI, devolve estado. Cloud providers: BrowserStack, Sauce, TestMu, TestingBot (`mcp/cloud-providers.md`). Mobile precisa Appium; browser local não.

# Config / transport

`mcp/configuration.md`: `platform`, `provider`, browser/os, headless. Default transport **stdio**; HTTP streamable pra UIs tipo llama.cpp. Segurança: não expor HTTP aberto.

# Tools / resources

`mcp/tools.md`: `start_session`, `close_session`, ações. Resources: `wdio://sessions`, steps, code, elements, a11y. Seletores MCP = subset; mobile = `~id`, UiSelector, predicate — ver [seletores](selectors.md).

FAQ: `mcp/faq.md`.

# Citations

[1] [MCP](https://github.com/webdriverio/webdriverio/blob/main/website/docs/MCP.md)
[2] [mcp/](https://github.com/webdriverio/webdriverio/tree/main/website/docs/mcp)
