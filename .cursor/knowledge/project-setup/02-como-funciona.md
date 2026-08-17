# Como o Appium funciona (2026)

O Appium é uma ponte entre o script de teste e o dispositivo. O script **não** fala direto com o app Android/iOS: envia comandos ao servidor Appium, que encaminha ao driver da plataforma.

## Fluxo

1. O script envia um comando (tap, type, scroll, find element).
2. O servidor Appium recebe via protocolo WebDriver.
3. O Appium identifica qual driver a sessão usa.
4. O driver envia o comando ao framework de automação da plataforma.
5. O dispositivo executa a ação no app.
6. O resultado volta para o script.

## Drivers

| Plataforma | Driver usual |
|------------|--------------|
| Android | **UiAutomator2** |
| iOS | **XCUITest** |

O Appium não automatiza o dispositivo sozinho. Depende dos drivers para entender como Android e iOS expõem UI e ações.

**Exemplo Android:** clique no botão de login → script → servidor Appium → UiAutomator2 → framework Android → tap no botão.

**Exemplo iOS:** mesmo fluxo, com XCUITest e o framework de testes da Apple no simulador ou dispositivo real.

## Modelo modular (importante)

Tutoriais antigos tratam Appium como um pacote único com tudo incluso. Em versões atuais:

1. Instala o Appium
2. Instala só os drivers das plataformas que vai testar

Para a maioria dos times:

- **UiAutomator2** — testes Android
- **XCUITest** — testes iOS
- **Espresso** — só quando precisar sincronização mais próxima com o interno do app Android
- Manter Appium, drivers e client libraries alinhados (evita incompatibilidade)

Setup importa: driver errado, capabilities desatualizadas ou ambiente incompleto → falha antes do app abrir.

## Próximo

→ [03-versoes-appium.md](./03-versoes-appium.md)
