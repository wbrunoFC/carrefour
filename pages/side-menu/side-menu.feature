Feature: Side menu

  Descrição:
    Permitir abrir o menu lateral e navegar para destinos do aplicativo.

  Contexto:
    O aplicativo está aberto e o botão Menu está visível.

  Scenario: CT001 - Abrir menu lateral
    Given o app está aberto
    When tocar em Menu
    Then o painel lateral deverá abrir

  Scenario: CT002 - Navegar por destino
    Given o Menu está aberto
    When selecionar um destino
    Then o usuário deverá ser levado à tela correspondente

  Scenario: CT003 - Fechar pelo backdrop
    Given o Menu está aberto
    When tocar fora do painel
    Then o Menu deverá fechar
