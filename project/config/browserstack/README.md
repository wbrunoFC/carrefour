# BrowserStack — execução na nuvem

Módulos específicos para rodar testes no **BrowserStack App Automate**, incluindo credenciais, upload de app, túnel local e configs WDIO completas por plataforma.

## Por que uma pasta separada?

BrowserStack introduz responsabilidades que **não existem** na execução local:
- autenticação (`user` / `key`)
- hostname remoto (`hub.browserstack.com`)
- upload ou referência de app (`bs://…`)
- túnel Local para redes privadas
- opções `bstack:options` (device, OS, build, logs)

Isolar essa lógica mantém configs locais simples e evita condicionais de cloud espalhados.

---

## `credentials.ts`

### `requireBrowserStackCredentials(): { user, key }`

Valida presença de `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY`.

**Lança erro** com mensagem orientativa se faltar credencial.

**Justificativa:** fail-fast na fronteira — melhor falhar antes de abrir sessão remota do que receber erro genérico do hub.

---

## `app-option.ts`

| Função | Descrição |
|--------|-----------|
| `resolveBrowserStackAppOption(localAppPath, customId)` | Retorna `BROWSERSTACK_APP_ID` se existir; senão `{ path, custom_id }` para upload automático |
| `requireIosBrowserStackApp()` | Valida que iOS cloud usa IPA/`bs://`, não zip de simulador |
| `resolveBrowserStackServiceApp(appPath, customId)` | Trata apps já uploadados (`bs://`) vs path local |

**Justificativa:** Android aceita APK local uploadado pelo serviço WDIO; iOS exige IPA — regras distintas merecem funções nomeadas, não `if` inline nos configs.

---

## `service.ts`

### `createBrowserStackService(app)`

Retorna a tupla `['browserstack', options]` esperada pelo WDIO, configurando:
- app a ser usada/uploadada
- `browserstackLocal` (túnel)
- `opts` do túnel (`onlyAutomate`, `force`, `forceLocal`)

**Justificativa:** encapsula detalhes do plugin `@wdio/browserstack-service` em um único lugar.

---

## `android-config.ts`

### `buildAndroidBrowserStackConfig()`

Monta config WDIO completa para Android na nuvem:
- credenciais + hostname BS
- serviço BrowserStack com app Android
- capabilities BS (via `capabilities/android-capabilities.ts`)
- herda runners, reporters e hooks de `wdioBaseConfig`

---

## `ios-config.ts`

### `buildIosBrowserStackConfig()`

Equivalente para iOS, com validação de IPA e resolução de app para o serviço.

**Justificativa:** configs finais finos que **compõem** módulos menores — cada arquivo tem uma razão para mudar (credencial, app, serviço, plataforma).

## Quando é usado

Ativado quando `TARGET=browserstack` (scripts `test:android:bs` / `test:ios:bs`).

```text
build-wdio-config.ts
  └── browserStackConfigBuilders[platform]()
        └── android-config.ts | ios-config.ts
```

## Segurança

- Credenciais **nunca** hardcoded — apenas `process.env`
- `.env` não deve ser commitado (ver `project/.env.example`)
