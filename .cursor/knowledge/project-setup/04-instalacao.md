# Como instalar o Appium (2026)

Com Node.js, npm e ferramentas de plataforma prontos, instale o Appium via npm. Suporta macOS, Windows e Linux. Requisitos: Node `^20.19.0 || ^22.12.0 || >=24.0.0` e npm `>=10`. Docs: https://appium.io/docs/en/latest/

## Passo 1 — Instalar Appium

```bash
npm install -g appium
```

Instala o servidor Appium para uso na linha de comando.

## Passo 2 — Conferir a versão

```bash
appium -v
```

Confirma que a CLI está no PATH.

## Passo 3 — Driver Android

```bash
appium driver install uiautomator2
```

UiAutomator2 é o driver padrão para UI Android. Appium **não** vem com drivers embutidos.

## Passo 4 — Driver iOS

```bash
appium driver install xcuitest
```

Usa o framework XCUITest da Apple. Exige macOS e Xcode.

## Passo 5 — Listar drivers instalados

```bash
appium driver list --installed
```

Android ok → `uiautomator2`. iOS ok → `xcuitest`.

## Passo 6 — Validar setup Android

```bash
appium driver doctor uiautomator2
```

Verifica dependências Android. Drivers oficiais incluem suporte ao Appium Doctor.

## Passo 7 — Subir o servidor

```bash
appium
```

O servidor carrega os drivers e espera sessões. URL local típica:

```text
http://127.0.0.1:4723
```

Mantenha o servidor rodando durante testes locais. Em falha de sessão, o log do servidor costuma mostrar erro de driver, capability ou dispositivo.

## Próximo

→ [05-capabilities.md](./05-capabilities.md)
