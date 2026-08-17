# Depurando falhas comuns no Appium

Falhas costumam cair em três áreas: **setup**, **localizadores** ou **timing**.

| Área | Quando |
|------|--------|
| Setup | Antes do app abrir |
| Localizador | Appium não acha o elemento esperado |
| Timing | App ok, teste age cedo demais |

Comece pelo ponto da falha. Sessão não sobe → não olhe lógica do teste ainda; cheque driver, device, path do app e capabilities. App abre e falha no meio → localizadores, waits, estado do app e transições de tela.

## Tabela de erros

| Erro | Causa comum | Como corrigir |
|------|-------------|----------------|
| `SessionNotCreatedException` | Capabilities erradas, driver faltando, device indisponível, path do app incorreto | Drivers instalados, conexão do device, path do app, versão da plataforma |
| `NoSuchElementException` | Localizador errado, elemento invisível, tela não carregou | Conferir no Appium Inspector + espera explícita |
| `StaleElementReferenceException` | Tela atualizou; referência antiga inválida | Localizar de novo após navegação/update |
| `InvalidElementStateException` | Elemento existe mas não aceita a ação | Enabled? Coberto? Teclado bloqueando? |
| Erro WebDriverAgent | Signing, provisioning, Xcode, trust do device | Setup Xcode, team, profile, logs do WDA |
| `adb device offline` | Conexão Android instável | Restart adb, reconectar, autorizar USB debugging |
| App abre e teste falha na hora | Estado errado ou diálogo de permissão | Reset de estado ou tratar permissões antes das ações |
| Passa local, falha no CI | Device/OS/timing/dados diferentes | Logs, screenshots e detalhes do device no CI |

## Ordem de investigação

1. **Logs do servidor Appium** — driver, validação de capability, launch, device, WebDriverAgent.
2. **Elementos** — mesma tela no Appium Inspector; localizador bate com a árvore atual?
3. **Intermitente** — screenshot + page source na falha; comparar o que o usuário viu com o que o Appium detectou.

## Próximo

→ [10-boas-praticas.md](./10-boas-praticas.md)
