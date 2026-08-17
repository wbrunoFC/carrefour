---
type: Guide
title: TypeScript no WDIO
description: tsx compila; tsc checa tipos; types no tsconfig incluindo framework e services.
resource: https://webdriver.io/docs/typescript
tags: [webdriverio, typescript]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Instalar `tsx` em devDependencies. WDIO detecta e compila config + testes. `tsconfig.json` no **mesmo diretório** do conf, ou `TSCONFIG_PATH` / `tsConfigPath`.

`tsx` **não** type-check. Tipos: `npx tsc` à parte.

Não importar `webdriverio` / `@wdio/sync` explícito. Types vêm de `compilerOptions.types`.

# tsconfig mínimo (Mocha, caso Carrefour)

```json
{
  "compilerOptions": {
    "types": ["node", "@wdio/globals/types", "@wdio/mocha-framework"]
  }
}
```

Service que adiciona comando no `browser` entra em `types` também (`@wdio/browserstack-service`, lighthouse, …). Fortalece o tipo de `WebdriverIO.Config`.

Tipos avulsos: `import type { Options } from '@wdio/types'`.

# Citations

[1] [TypeScript](https://github.com/webdriverio/webdriverio/blob/main/website/docs/TypeScript.md)
