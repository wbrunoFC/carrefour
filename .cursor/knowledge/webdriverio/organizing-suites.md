---
type: Playbook
title: Organizar suíte, retry e parâmetros
description: maxInstances, suites, herança de conf, mocha retries, env vars.
resource: https://webdriver.io/docs/organizingsuites
tags: [webdriverio, suites, retry, parallel]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Um spec ≈ uma feature. Parallel = `maxInstances`. 3 caps × 10 specs × `maxInstances: 10` = até 30 processos.

`maxInstances` também por capability (grid com menos slots Chrome).

# Vários envs

Conf base + `deepmerge` por ambiente (dev vs CI). Não duplicar o arquivo inteiro.

# Suites

```js
suites: { login: ['./test/specs/login/*.js'] }
```

`npx wdio run wdio.conf.js --suite login`

# Retry

Não usar retry pra esconder flake. Mocha: `this.retries(4)` no `describe` com `function () {}` (não arrow). Global: `mochaOpts.retries`. WDIO: último arg de `it(..., 3)` = reruns. `this.wdioRetries` = tentativa atual.

# Params

Env vars no processo (`process.env`). Doc `ParameterizeTests.md`. Multiremote: duas sessões no mesmo teste (`Multiremote.md`) — chat, 2 users.

# Citations

[1] [Organizing Test Suites](https://github.com/webdriverio/webdriverio/blob/main/website/docs/OrganizingTestSuites.md)
[2] [Retry](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Retry.md)
[3] [Parameterize Tests](https://github.com/webdriverio/webdriverio/blob/main/website/docs/ParameterizeTests.md)
[4] [Multiremote](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Multiremote.md)
