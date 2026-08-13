# Capabilities no Appium

Capabilities dizem ao Appium que sessão criar: plataforma, driver, dispositivo, app e outras configs de sessão. Depois que a sessão inicia, esses valores não mudam.

Modelo: **W3C WebDriver**. Capabilities específicas do Appium usam o prefixo **`appium:`**.

Exemplos antigos usam `deviceName` ou `app` sem prefixo. No Appium moderno: `appium:deviceName` e `appium:app`.

## Capabilities comuns

| Capability | Uso | Exemplo |
|------------|-----|---------|
| `platformName` | Plataforma-alvo | `Android`, `iOS` |
| `appium:automationName` | Driver | `UiAutomator2`, `XCUITest` |
| `appium:deviceName` | Nome do device/simulador | `Android Emulator`, `iPhone 15` |
| `appium:platformVersion` | Versão do SO (quando preciso) | `17.0`, `14` |
| `appium:app` | Caminho do arquivo do app | `/path/to/app.apk` |
| `appium:appPackage` | Package Android (app já instalado) | `com.example.app` |
| `appium:appActivity` | Activity de launch Android | `.MainActivity` |
| `appium:bundleId` | Bundle iOS (app já instalado) | `com.example.iosapp` |

## Android — instalar e abrir APK

```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android Emulator",
  "appium:app": "/path/to/app.apk"
}
```

## Android — app já instalado

```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android Emulator",
  "appium:appPackage": "com.example.app",
  "appium:appActivity": ".MainActivity"
}
```

## iOS — arquivo no simulador

```json
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone 15",
  "appium:platformVersion": "17.0",
  "appium:app": "/path/to/app.app"
}
```

## iOS — app já instalado

```json
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone 15",
  "appium:platformVersion": "17.0",
  "appium:bundleId": "com.example.iosapp"
}
```

## `app` vs package/activity vs `bundleId`

| Situação | Capability |
|----------|------------|
| Precisa instalar build novo (`.apk`, `.app`, `.ipa`) | `appium:app` |
| Android já instalado — só lançar | `appium:appPackage` + `appium:appActivity` |
| iOS já instalado — só lançar | `appium:bundleId` |

Regra segura: `appium:app` para validar build fresco; package/activity/bundleId quando o app já faz parte do setup do device.

Mantenha arquivos de capability **separados** para Android, simulador iOS e iOS real — um ambiente não deve quebrar o outro.

## Próximo

→ [06-primeiro-teste.md](./06-primeiro-teste.md)
