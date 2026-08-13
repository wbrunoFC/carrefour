Feature: Swipe

  Descrição:
    Permitir navegação horizontal no carrossel e scroll vertical até o logo.

  Contexto:
    O usuário está na tela Swipe.

  Scenario: CT001 - Navegar carrossel
    Given o usuário está em Swipe
    When deslizar horizontalmente no carousel
    Then deverá ver outros cards

  Scenario: CT002 - Encontrar logo oculto
    Given o usuário está em Swipe
    When rolar verticalmente até o fim
    Then deverá visualizar o logo You found me!!!
