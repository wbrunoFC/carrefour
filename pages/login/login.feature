Feature: Login

  Descrição:
    Permitir que o usuário acesse sua conta utilizando suas credenciais.

  Contexto:
    O usuário está na tela Login na categoria Login.

  Scenario: CT001 - Login com dados válidos de formato
    Given o usuário está na categoria Login
    When informar e-mail em formato válido
    And informar senha com 8 ou mais caracteres
    And confirmar o acesso
    Then deverá ver loading
    And deverá receber o alerta Success / You are logged in!

  Scenario: CT002 - Login com e-mail inválido
    Given o usuário está na categoria Login
    When informar e-mail inválido
    And confirmar o acesso
    Then o acesso não deverá ser concluído
    And deverá ver a mensagem Please enter a valid email address

  Scenario: CT003 - Login com senha curta
    Given o usuário está na categoria Login
    When informar senha com menos de 8 caracteres
    And confirmar o acesso
    Then o acesso não deverá ser concluído
    And deverá ver a mensagem Please enter at least 8 characters
