Feature: Data SQLite

  Descrição:
    Permitir salvar e limpar valor via SQLite explícito.

  Contexto:
    O usuário está na tela Data Management no tier SQLite.

  Scenario: CT001 - Salvar no SQLite explícito
    Given o usuário está no tier SQLite
    When salvar um valor
    Then o readout deverá exibir esse valor
    And o valor do tier KV não deverá ser sobrescrito por esse save

  Scenario: CT002 - Limpar SQLite
    Given há valor no SQLite
    When limpar
    Then o readout SQLite deverá ficar vazio

  Scenario: CT003 - Erro SQLite
    Given ocorre falha de banco
    When salvar
    Then deverá ver alerta SQLite
