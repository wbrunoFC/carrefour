# Capabilities — configuração Appium por plataforma

Define **como o Appium enxerga o device** — driver, app, device name, timeouts de comando — separado por plataforma (Android/iOS) e modo (local).

## Por que uma pasta `capabilities/`?

Capabilities são o contrato entre WDIO e Appium. Android e iOS têm:
- drivers diferentes (UiAutomator2 vs XCUITest)
- artefatos diferentes (APK vs zip/IPA)
- opções de device diferentes

Manter capabilities isoladas evita misturar detalhes de plataforma com config base ou BrowserStack.

---

## `android-capabilities.ts`

| Função | Descrição |
|--------|-----------|
| `resolveAndroidAppPath()` | Retorna `ANDROID_APP_PATH` ou override via `process.env.ANDROID_APP_PATH` |
| `buildAndroidLocalCapabilities(options)` | Capabilities para emulador/device local |
| `buildAndroidBrowserStackCapabilities(options)` | Capabilities para App Automate (inclui `bstack:options`) |

**Campos principais (local):** `UiAutomator2`, device name, APK, app package, `noReset: false`.

**Justificativa:** local e cloud compartilham a mesma plataforma mas divergem em opções (ex.: `autoGrantPermissions` só na nuvem).

---

## `ios-capabilities.ts`

| Função | Descrição |
|--------|-----------|
| `resolveIosAppPath()` | Retorna path do simulador ou override via `IOS_APP_PATH` |
| `buildIosLocalCapabilities(options)` | Capabilities para simulador local |
| `buildIosBrowserStackCapabilities(iosApp, options)` | Capabilities para device real na nuvem |

**Campos principais (local):** `XCUITest`, device name, platform version, zip do simulador, bundle ID.

**Justificativa:** iOS na nuvem exige IPA — validação fica em `browserstack/app-option.ts`, não aqui.

---

## `android-local-config.ts`

### `buildAndroidLocalConfig()`

Monta o `WebdriverIO.Config` completo para **Android local**:
- estende `wdioBaseConfig`
- adiciona porta Appium, serviço local e capabilities Android

**Justificativa:** separar "capabilities puras" de "config WDIO montada" permite reutilizar capabilities no BrowserStack sem duplicar a config base.

---

## `ios-local-config.ts`

### `buildIosLocalConfig()`

Equivalente ao Android, para **iOS local**.

**Justificativa:** mesmo padrão simétrico — facilita leitura e manutenção por QAs que alternam entre plataformas.

## Fluxo de composição

```text
buildAndroidLocalConfig()
  ├── wdioBaseConfig        (shared/)
  ├── appiumLocalService    (services/)
  └── buildAndroidLocalCapabilities()  (este módulo)
```

## Variáveis de ambiente usadas

| Variável | Plataforma | Default |
|----------|------------|---------|
| `ANDROID_DEVICE_NAME` | Android | `Android Emulator` |
| `ANDROID_APP_PATH` | Android | path em `constants/app-artifacts.ts` |
| `IOS_DEVICE_NAME` | iOS | `iPhone 15` |
| `IOS_PLATFORM_VERSION` | iOS | `17.0` |
| `IOS_APP_PATH` | iOS | zip do simulador |
| `BROWSERSTACK_*` | Cloud | ver `browserstack/README.md` |
