# MCP mobile — WebdriverIO

Servidor: `wdio-mcp` via `project/scripts/wdio-mcp.sh`. Appium **externo** (MCP não sobe Appium sozinho).

## Pré-requisito

Terminal 1 — Appium na mesma porta do WDIO (`4723`):

```bash
cd project && npm run appium:start
```

Emulador Android ou simulador iOS **ligado** antes de `start_app_session`.

## Defaults de sessão

Fonte canônica: `project/config/mcp/mobile-session.defaults.json` (espelha `config/capabilities/*`).

| Plataforma | appPath (relativo à raiz do repo) |
|------------|-----------------------------------|
| Android | `project/apps/v2.2.0/android/android.wdio.native.app.v2.2.0.apk` |
| iOS | `project/apps/v2.2.0/ios/ios.simulator.wdio.native.app.v2.2.0.zip` |

Converter para **caminho absoluto** ao chamar `start_app_session`.

## Parâmetros típicos

**Android:** `platform: Android`, `deviceName: Android Emulator`, `automationName: UiAutomator2`, `appPath`, `autoGrantPermissions: true`, `newCommandTimeout: 240`.

**iOS:** `platform: iOS`, `deviceName: iPhone 15`, `platformVersion: 17.0`, `automationName: XCUITest`, `appPath`, `newCommandTimeout: 240`.

Overrides via `.env` em `project/`: `ANDROID_DEVICE_NAME`, `ANDROID_APP_PATH`, `IOS_DEVICE_NAME`, `IOS_PLATFORM_VERSION`, `IOS_APP_PATH`.

## Appium

| Variável | Valor |
|----------|-------|
| `APPIUM_URL` | `127.0.0.1` |
| `APPIUM_URL_PORT` | `4723` |
| `APPIUM_PATH` | `/` |

## Seletores (mobile)

Preferir `~accessibilityId`. Evitar XPath salvo último recurso.

## Sessão única

Uma sessão browser **ou** app por vez. `close_session` com `detach: true` preserva app aberto (`noReset`).
