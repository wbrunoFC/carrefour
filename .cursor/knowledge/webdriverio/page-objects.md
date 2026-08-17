---
type: Pattern
title: Page Object Pattern
description: Getters lazy, export de instância, testes sem seletor.
resource: https://webdriver.io/docs/pageobjects
tags: [webdriverio, page-object]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

v5+ trata elemento como first-class. Sem pacote extra: classes ES, herança, encapsulamento.

Meta: teste não conhece seletor. Redesign da tela = muda page object, spec fica.

# Regras

- Classe base `Page` com métodos comuns.
- **Exporta instância** (`export default new LoginPage()`), nunca `new` no spec. Page é stateless; sessão/estado fica no teste.
- Seletores em **getters** — avaliam na hora do acesso, não na construção (sempre elemento fresco).
- Spec importa e usa: `await LoginPage.username.setValue('foo')`.

```js
class LoginPage extends Page {
    get username () { return $('#username') }
    get submitBtn () { return $('form button[type="submit"]') }
    async submit () { await this.submitBtn.click() }
}
export default new LoginPage()
```

Chain: `await LoginPage.username.setValue('x')` ≡ `await $('#username').setValue('x')`.

Convenção: `*.page.js` / `*.page.ts`, pasta separada dos specs.

Flags mobile no getter: `driver.isAndroid ? androidSel : iosSel`. Ver [API](api-browser-element.md).

# Citations

[1] [Page Objects](https://github.com/webdriverio/webdriverio/blob/main/website/docs/PageObjects.md)
[2] [examples/pageobject](https://github.com/webdriverio/webdriverio/tree/main/examples/pageobject)
