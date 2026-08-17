---
type: Playbook
title: Debugging
description: maxInstances 1, browser.debug() REPL, DEBUG env, VS Code inspect.
resource: https://webdriver.io/docs/debugging
tags: [webdriverio, debug]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Dezenas de workers = debug infernal. Primeiro: `maxInstances: 1` + um spec + um browser.

# `browser.debug()`

Pausa teste, CLI vira REPL (`browser`, `$`, `$$`). Sair: `^C` ou `.exit`. Subir timeout do framework (senão o `it` morre). Mocha: `mochaOpts.timeout` grande.

# Config dinâmica

```js
const debug = process.env.DEBUG
maxInstances: debug ? 1 : 100,
execArgv: debug ? ['--inspect'] : [],
```

```sh
DEBUG=true npx wdio wdio.conf.js --spec ./tests/e2e/myspec.test.js
```

VS Code: attach no inspect. Autocompletion: tipos TS + snippets (doc Autocompletion). REPL CLI: `wdio repl chrome`.

Watch: `wdio run --watch` / `WatchFiles.md`.

# Citations

[1] [Debugging](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Debugging.md)
[2] [REPL](https://github.com/webdriverio/webdriverio/blob/main/website/docs/repl.md)
[3] [Autocompletion](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Autocompletion.md)
[4] [Watch Files](https://github.com/webdriverio/webdriverio/blob/main/website/docs/WatchFiles.md)
