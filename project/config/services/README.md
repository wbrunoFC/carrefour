# Services — serviços WDIO

Define plugins/serviços que o WebdriverIO sobe ou conecta durante a execução.

## Por que uma pasta `services/`?

No WDIO, **services** são extensões do runner (Appium, BrowserStack, Selenium Grid, etc.). Separá-los:
- deixa explícito o que é "infra de execução" vs "config de teste"
- evita repetir a mesma tupla de serviço em Android e iOS
- facilita trocar ou adicionar serviços (ex.: visual regression) sem tocar em capabilities

---

## `appium-local.service.ts`

### `appiumLocalService`

Constante exportada — tupla de configuração do `@wdio/appium-service`:

```ts
['appium', { args: { relaxedSecurity: true } }]
```

**O que faz:**
- inicia (ou conecta ao) servidor Appium na porta definida em `constants/timeouts.ts`
- `relaxedSecurity: true` permite comandos necessários em automação mobile local

**Usado por:** `capabilities/android-local-config.ts` e `capabilities/ios-local-config.ts`.

**Justificativa:**
- **DRY:** mesma definição de serviço para ambas plataformas locais
- **SRP:** detalhe do plugin Appium fica isolado; configs locais só referenciam `appiumLocalService`
- BrowserStack **não** usa este serviço — o hub remoto já provê Appium; daí ficar fora dos módulos `browserstack/`

## Relação com BrowserStack

| Modo | Serviço WDIO |
|------|--------------|
| Local | `appiumLocalService` |
| BrowserStack | `createBrowserStackService()` em `browserstack/service.ts` |

Dois serviços, dois contextos — não misturados no mesmo arquivo.
