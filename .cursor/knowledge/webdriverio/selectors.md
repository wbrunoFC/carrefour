---
type: Playbook
title: Seletores WebdriverIO
description: Estratégias web e mobile — o que usar, o que evitar, chain, ~ accessibility id.
resource: https://webdriver.io/docs/selectors
tags: [webdriverio, selectors, mobile, appium]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

`$` / `$$` **não** são jQuery. Default web = CSS. Não dá pra misturar estratégias num seletor só (`$('header h1*=Welcome')` quebra) — encadeia: `$('header').$('h1*=Welcome')`.

# Ranking web (docs oficiais)

| Seletor | Veredito |
|---------|----------|
| `$('button')` / `$('.btn')` | Nunca — genérico / acoplado a CSS |
| `$('#id')` | Pouco |
| `$('[data-testid=…]')` | Bom |
| `$('aria/Submit')` | Bom (pode ser lento em página grande) |
| `$('button=Submit')` | Melhor — texto visível ao usuário |

Outros: `*=` texto parcial, `.=` / `.*=` case-insensitive, `<tag>`, xpath `//…`, `aria/…`, `[role=button]`. ID no WebDriver = CSS `#id` ou xpath. `id=` só em drivers tipo Appium.

v9: Shadow DOM é atravessado **automaticamente**. `>>>` (deep selector) é legado — remover.

JS function selector só em contexto web.

# Mobile nativo (prioridade)

1. **Accessibility ID** — `$('~meu_id')`. iOS = accessibility identifier. Android = `content-description`. Melhor cross-platform.
2. Android UiAutomator: `` $(`android=${'new UiSelector().text("Cancel").className("android.widget.Button")'}`) ``
3. iOS XCUITest: `$('-ios predicate string:type == \'XCUIElementTypeSwitch\' && name CONTAINS \'Allow\'')` e class chain `$('-ios class chain:**/XCUIElementTypeButton')`
4. Class name: `$('android.widget.EditText')` / `$('UIATextField')` — frágil
5. Image (`-image`): screenshot match; retina/DPR quebra se não ajustar settings Appium

Híbrido: contexto nativo pra gesto; **webview** pra DOM. Sem troca de contexto, seletores web não acham nada.

Espresso only: DataMatcher/ViewMatcher, `-android viewtag:`.

# Chain

`$('.row .entry:nth-child(2)').$('button*=Add').click()` — estreita passo a passo.

Custom strategy: `addLocatorStrategy` + `custom$` — só web (`execute`).

React: `browser.react$` / `react$$` (web).

# Citations

[1] [Selectors](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Selectors.md)
[2] [MCP selectors (mobile cheat sheet)](https://github.com/webdriverio/webdriverio/blob/main/website/docs/mcp/selectors.md)
