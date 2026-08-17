# Constants — valores fixos da execução

Valores que **não mudam durante a execução** e que seriam "números ou strings mágicos" se espalhados pelo código.

## Por que uma pasta `constants/`?

Centralizar constantes evita:
- duplicação de paths e timeouts em vários arquivos
- inconsistência quando um valor precisa ser atualizado
- nomes genéricos (`240`, `'com.wdiodemoapp'`) sem contexto

Segue a regra de engenharia: **valores de negócio/técnicos com nome semântico claro**.

---

## `app-artifacts.ts`

Define paths e identificadores dos binários do app sob teste.

| Export | Descrição |
|--------|-----------|
| `ANDROID_APP_PATH` | Caminho absoluto do APK (`apps/v2.2.0/android/…`) |
| `IOS_SIMULATOR_APP_PATH` | Caminho absoluto do zip de simulador iOS |
| `ANDROID_APP_PACKAGE` | Package name Android (`com.wdiodemoapp`) |
| `IOS_BUNDLE_ID` | Bundle ID iOS (`org.wdiodemoapp`) |
| `BROWSERSTACK_PROJECT_NAME` | Nome do projeto no painel BrowserStack |

**Funções:** nenhuma — apenas constantes exportadas.

**Justificativa:**
- O app é versionado em `project/apps/`; o path deve ter **uma fonte de verdade**
- `APP_VERSION` fica interno ao arquivo — ao atualizar a versão do app, muda-se um único lugar
- `process.env.ANDROID_APP_PATH` / `IOS_APP_PATH` continuam podendo sobrescrever em CI ou dev

---

## `timeouts.ts`

Define limites de tempo usados pelo WDIO, Mocha e Appium.

| Export | Valor | Uso |
|--------|-------|-----|
| `APPIUM_PORT` | `4723` | Porta do servidor Appium local |
| `DEFAULT_WAIT_FOR_TIMEOUT_MS` | `15_000` | Espera padrão de elementos |
| `CONNECTION_RETRY_TIMEOUT_MS` | `120_000` | Timeout de conexão com Appium |
| `CONNECTION_RETRY_COUNT` | `2` | Tentativas de reconexão |
| `E2E_MOCHA_TIMEOUT_MS` | `120_000` | Timeout por teste Mocha |
| `E2E_COMMAND_TIMEOUT_SEC` | `240` | Timeout de comando Appium |

**Justificativa:**
- Timeouts são decisões operacionais — nomear evita ajustes "no escuro"
- Separar de `capabilities/` porque timeouts são **transversais** (base config + capabilities)
- Notação `15_000` (numeric separator) melhora legibilidade sem alterar o valor
