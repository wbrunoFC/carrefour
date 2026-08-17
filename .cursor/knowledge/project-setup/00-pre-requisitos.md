# Pré-requisitos — Appium 3

Antes de instalar o Appium, a máquina precisa estar pronta para automação mobile. O Appium em si é leve; Android e iOS dependem de SDKs, drivers, acesso a dispositivos e bibliotecas cliente.

## Requisitos básicos do servidor

- macOS, Windows ou Linux
- Node.js **^20.19.0**, **^22.12.0** ou **>=24.0.0**
- npm **10** ou superior
- Appium instalado via npm
- Pelo menos um driver Appium instalado (ex.: UiAutomator2 ou XCUITest)

A documentação atual do Appium 3 usa Node **20.19.0+** e npm **10+** como baseline.

## Componentes comuns (Android e iOS)

| Componente | Função |
|------------|--------|
| **Servidor Appium** | Recebe comandos do script e encaminha ao driver correto |
| **Biblioteca cliente** | Permite escrever testes em Java, JavaScript, Python, C#, Ruby etc. |
| **Driver Appium** | Conecta o Appium à plataforma-alvo. Sem driver, não há automação |
| **Appium Inspector** | Inspeciona elementos e identifica localizadores |
| **Ambiente de dispositivo** | Dispositivo real, emulador ou simulador |

## Requisitos Android

- Android Studio
- Android SDK
- Android Platform Tools
- Emulador Android ou dispositivo real
- Depuração USB habilitada (dispositivo real)
- Driver **UiAutomator2** instalado no Appium
- JDK, se o framework de testes for Java

Para a maioria dos testes de UI Android com Appium, **UiAutomator2** é o driver padrão. **Espresso** só quando for preciso sincronização mais próxima com o interno do app.

## Requisitos iOS

- macOS
- Xcode
- Ferramentas de linha de comando do Xcode
- Simulador iOS ou dispositivo real
- Driver **XCUITest** instalado no Appium
- Conta Apple Developer (dispositivo real)
- Assinatura de código e provisioning configurados (iPhone/iPad físicos)

iOS depende fortemente das ferramentas da Apple. Simuladores são o caminho mais simples para começar; dispositivo real exige signing, provisioning e confiança no dispositivo.

## Checklist antes do primeiro teste

- [ ] Versões de Node e npm batem com Appium 3
- [ ] Driver necessário está instalado
- [ ] Emulador, simulador ou dispositivo real está visível na máquina
- [ ] Build do app disponível (`.apk`, `.app`, `.ipa` ou app já instalado)
- [ ] Framework de testes com a biblioteca cliente Appium correta
- [ ] Appium Inspector consegue detectar elementos da UI

## Próximo

→ [01-o-que-e-appium.md](./01-o-que-e-appium.md)
