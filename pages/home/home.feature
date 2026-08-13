Feature: Home

  Descrição:
    Permitir que o usuário visualize a tela inicial e role o conteúdo.

  Contexto:
    O aplicativo está aberto e a aba Home está acessível.

  Scenario: CT001 - Visualizar tela Home
    Given o aplicativo está aberto
    When o usuário acessar a aba Home
    Then deverá visualizar o conteúdo introdutório do aplicativo

  Scenario: CT002 - Scroll na Home
    Given o usuário está na Home
    When rolar a tela verticalmente
    Then o conteúdo deverá permanecer acessível sem erro
