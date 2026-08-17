# Boas práticas — Android e iOS

Fluxo base é o mesmo; detalhes de plataforma diferem. Suite estável deixa essas diferenças explícitas — não force as duas plataformas num setup único compartilhado demais.

## Diferenças por plataforma

| Área | Android | iOS |
|------|---------|-----|
| Driver principal | UiAutomator2 | XCUITest |
| Ferramentas locais | Android SDK, adb, emulator | macOS, Xcode, simctl |
| Device real | USB debugging + autorização | Signing, provisioning, device trust |
| Arquivo do app | `.apk` | `.app` (simulador), `.ipa` (real) |
| App já instalado | `appPackage` + `appActivity` | `bundleId` |
| Setup que mais falha | Device invisível no adb | WebDriverAgent / signing |

## Checks rápidos

Android — device/emulador visível:

```bash
adb devices
```

iOS — simuladores disponíveis:

```bash
xcrun simctl list devices
```

## Configuração separada

Mesmo com a mesma jornada de usuário, drivers, arquivos, nomes de device e capabilities de launch diferem.

Exemplo de estrutura:

```text
config/
  android.properties
  ios.properties
```

ou:

```text
config/
  android.json
  ios.json
```

O teste descreve o fluxo do usuário. A config descreve **onde** e **como** ele roda.

## Práticas que estabilizam as duas plataformas

- Preferir Accessibility IDs em elementos críticos (menos amarrados ao layout).
- Evitar XPath salvo quando não houver identificadores melhores.
- Esperas explícitas baseadas em estado visível — sem sleeps fixos.
- Resetar estado do app de forma deliberada entre testes (não depender de “resto” da sessão anterior).
- Preparar dados de teste fora da UI quando possível.
- Em falha de CI: logs Appium, logs do device, screenshots e vídeos.
- Smoke em emulador/simulador; fluxos críticos de release em device real.
- Deixar visíveis no CI: versões de Appium, driver, client, OS e device.
- Um teste = um fluxo claro. Evite empilhar muitas jornadas no mesmo método.

## Próximo

→ [11-quando-nao-usar.md](./11-quando-nao-usar.md)
