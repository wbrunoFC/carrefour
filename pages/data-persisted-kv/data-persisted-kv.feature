Feature: Data persisted key-value

  Descrição:
    Permitir salvar e limpar valor em storage key-value persistido.

  Contexto:
    O usuário está na tela Data Management no tier Persisted key-value.

  Scenario: CT001 - Salvar valor persistido
    Given o usuário está no tier Persisted key-value
    When salvar um valor
    And reiniciar o app
    Then o valor deverá continuar disponível

  Scenario: CT002 - Limpar valor persistido
    Given existe valor persistido
    When tocar em Clear
    Then o readout deverá indicar que nada está salvo

  Scenario: CT003 - Erro ao persistir
    Given ocorre falha de banco
    When tentar salvar
    Then deverá ver alerta Persisted KV
