---
type: Playbook
title: Boas práticas WDIO
description: Seletor resiliente, menos queries, expect com retry, lazy $ sem await extra.
resource: https://webdriver.io/docs/bestpractices
tags: [webdriverio, best-practices]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Guia oficial de testes performáticos e estáveis.

# Seletores

Evitar classe CSS. Preferir `aria/…`, `test-id`, id estável. Ver ranking em [seletores](selectors.md).

# Menos queries

Cada `$`/`$$` (e chain) = round-trip. Preferir um CSS composto `await $('table tr td')` em vez de `$('table').$('tr').$('td')`. Chain só pra **misturar estratégias**.

Preferir `$('table tr:nth-child(15)')` a `$$('table tr')[15]`.

# Expect built-in

`await expect(button).toBeDisplayed()` já espera. Não empilhar `waitForExist` + `toBeDisplayed` + `toHaveText`. Click/assert de texto já implica existência, salvo elemento `opacity: 0` / disabled.

# Lazy `$`

**Não** `await` em `$`/`$$`. Await na ação:

```js
const button = $('div').$('button')
await button.click()
```

Page object: getter devolve ChainablePromiseElement, não `await $(…)`.

# Citations

[1] [Best Practices](https://github.com/webdriverio/webdriverio/blob/main/website/docs/BestPractices.md)
[2] [Browser logs / file downloads](https://github.com/webdriverio/webdriverio/tree/main/website/docs/best-practices)
