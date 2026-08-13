Feature: Tab bar customization

  Descrição:
    Permitir pin/unpin de telas na tab bar pelo menu lateral.

  Contexto:
    O Menu lateral está acessível e o usuário pode alternar estrelas de pin.

  Scenario: CT001 - Pin de tela com vaga
    Given há menos de 5 pins
    When o usuário ativar a estrela de Permissions
    Then Permissions deverá aparecer na tab bar

  Scenario: CT002 - Unpin de tela
    Given Forms está pinada
    When o usuário desativar a estrela de Forms
    Then Forms não deverá aparecer na tab bar
    And ainda deverá ser acessível pelo Menu

  Scenario: CT003 - Limite da tab bar
    Given já existem 5 pins
    When tentar pinar outra tela
    Then deverá ver alerta Tab bar full
    And o novo pin não deverá ser aplicado
