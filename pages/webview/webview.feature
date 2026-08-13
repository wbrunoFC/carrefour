Feature: WebView

  Descrição:
    Permitir que o usuário visualize conteúdo web embutido no aplicativo.

  Contexto:
    O aplicativo está aberto e a tela WebView está acessível.

  Scenario: CT001 - Abrir WebView
    Given o aplicativo está aberto
    When o usuário acessar WebView
    Then a WebView deverá iniciar o carregamento do site WebdriverIO

  Scenario: CT002 - Conteúdo carregado
    Given há conectividade
    When o carregamento concluir
    Then o conteúdo web deverá estar interativo
