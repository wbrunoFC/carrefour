Feature: Biometrics login

  Descrição:
    Permitir login via biometria quando o dispositivo possui biometria matriculada.

  Contexto:
    O dispositivo possui biometria disponível e o usuário está na categoria Login.

  Scenario: CT001 - Login biométrico com sucesso
    Given o dispositivo tem biometria matriculada
    And o usuário está em Login
    When tocar no botão biométrico
    And autenticar com sucesso
    Then deverá ver alerta Success informando login pelo sensor

  Scenario: CT002 - Cancelar biometria
    Given o prompt biométrico está aberto
    When o usuário cancelar
    Then não deverá ver alerta de sucesso
    And deverá permanecer na tela Login

  Scenario: CT003 - Sem biometria no dispositivo
    Given não há biometria enrolled
    When abrir Login
    Then o botão biométrico não deverá ser exibido
