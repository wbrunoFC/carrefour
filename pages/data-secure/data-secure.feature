Feature: Data secure storage

  Descrição:
    Permitir salvar e limpar valor em SecureStore.

  Contexto:
    O usuário está na tela Data Management no tier Secure storage.

  Scenario: CT001 - Salvar no SecureStore
    Given o usuário está no tier Secure storage
    When salvar um valor
    And reiniciar o app
    Then o valor deverá permanecer disponível

  Scenario: CT002 - Limpar SecureStore
    Given há valor seguro
    When tocar em Clear
    Then o readout deverá indicar vazio

  Scenario: CT003 - Erro SecureStore
    Given ocorre falha de SecureStore
    When salvar
    Then deverá ver alerta SecureStore
