Feature: Forms

  Descrição:
    Permitir interação com componentes de formulário (input, switch, dropdown e botões).

  Contexto:
    O usuário está na tela Forms.

  Scenario: CT001 - Eco do input
    Given o usuário está em Forms
    When digitar um texto no input
    Then o mesmo texto deverá aparecer em You have typed

  Scenario: CT002 - Toggle do switch
    Given o switch está OFF
    When o usuário ativá-lo
    Then o texto deverá indicar a opção de desligar (OFF) e o estado ficar ativo

  Scenario: CT003 - Botão Active
    Given o usuário está em Forms
    When tocar em Active
    Then deverá ver o alerta informando que o botão está active

  Scenario: CT004 - Botão Inactive
    Given o usuário está em Forms
    When tentar acionar Inactive
    Then nenhum alerta deverá ser exibido
