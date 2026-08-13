# O que é Appium e o que automatizar

Appium é um framework open-source para automatizar testes em apps mobile. Permite escrever testes para Android, iOS e mobile web com uma mesma abordagem, em vez de manter suítes separadas por plataforma.

O script de teste envia comandos ao servidor Appium, que os repassa a drivers específicos da plataforma — **UiAutomator2** (Android) e **XCUITest** (iOS).

## Casos de uso principais

Uso principal: testes end-to-end de UI mobile — o teste interage como um usuário real: toques, texto, scroll, troca de contexto e validação de resultados.

## Apps nativos

Apps feitos com SDKs/frameworks da plataforma; instalados via Play Store ou App Store.

Fluxos típicos:

- Login e cadastro
- Busca de produto
- Carrinho e checkout
- Envio de formulários
- Fluxos de push notification
- Diálogos de permissão
- Navegação entre telas
- Upload de arquivo ou câmera (conforme suporte do dispositivo)

Android nativo → em geral **UiAutomator2**. iOS nativo → **XCUITest**.

## Apps híbridos

Casca nativa + conteúdo web em WebView (checkout, ajuda, pagamento, conteúdo pesado).

Appium automatiza trocando de contexto:

- **Native context** — elementos nativos
- **WebView context** — elementos web dentro do app

Exemplo de jornada: login nativo → pagamento em WebView → confirmação nativa.

## Mobile web

Automação de browsers mobile (Chrome no Android, Safari no iOS). Útil para:

- Layouts responsivos
- Interações touch
- Navegação do browser mobile
- Comportamento de formulários
- Problemas cross-browser em mobile

Difere de browser desktop: o teste roda em ambiente mobile real ou simulado.

## Próximo

→ [02-como-funciona.md](./02-como-funciona.md)
