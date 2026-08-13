Feature: Sign up

  Descrição:
    Permitir que o usuário simule um cadastro informando e-mail, senha e confirmação.

  Contexto:
    O usuário está na tela Login na categoria Sign up.

  Scenario: CT001 - Cadastro com dados válidos de formato
    Given o usuário está em Sign up
    When informar e-mail válido, senha ≥ 8 e confirmação igual
    And confirmar
    Then deverá receber o alerta Signed Up!

  Scenario: CT002 - Confirmação de senha divergente
    Given o usuário está em Sign up
    When informar confirmação diferente da senha
    And confirmar
    Then deverá ver Please enter the same password
    And não deverá ver sucesso

  Scenario: CT003 - E-mail inválido no cadastro
    Given o usuário está em Sign up
    When informar e-mail inválido
    And confirmar
    Then deverá ver Please enter a valid email address
