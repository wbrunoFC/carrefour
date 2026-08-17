---
type: Guide
title: Migrações
description: v5→v6, v6→v7, sync→async, Protractor; projeto Carrefour já é v9 async.
resource: https://webdriver.io/docs/v7-migration
tags: [webdriverio, migration]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Carrefour está em v9 + async. Estes docs só importam se herdar suíte antiga.

# v5 → v6 / v6 → v7

Upgrade deps, transformar conf, atualizar step defs (Cucumber). Codemods citados nos markdowns `v6Migration.md` / `v7Migration.md`.

# Sync → async

Sync mode morreu. Tudo `async/await`. Armadilha: `forEach` + async (não espera). Preferir `for…of`.

# Protractor

Substituir `browser.get` etc. por WDIO; conf e specs em etapas (`ProtractorMigration.md`).

# Citations

[1] [v6 migration](https://github.com/webdriverio/webdriverio/blob/main/website/docs/v6Migration.md)
[2] [v7 migration](https://github.com/webdriverio/webdriverio/blob/main/website/docs/v7Migration.md)
[3] [Sync to Async](https://github.com/webdriverio/webdriverio/blob/main/website/docs/SyncAsyncMigration.md)
[4] [Protractor](https://github.com/webdriverio/webdriverio/blob/main/website/docs/ProtractorMigration.md)
