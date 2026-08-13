Feature: Data in-memory

  Descrição:
    Permitir salvar e limpar valor apenas em memória de sessão.

  Contexto:
    O usuário está na tela Data Management no tier In-memory.

  Scenario: CT001 - Salvar em memória
    Given o usuário está no tier In-memory
    When informar um valor e salvar
    Then o readout deverá exibir esse valor

  Scenario: CT002 - Limpar memória
    Given há valor em memória
    When tocar em Clear
    Then o readout deverá indicar vazio

  Scenario: CT003 - Perda após kill
    Given um valor foi salvo em memória
    When o processo do app for encerrado e o app reaberto
    Then o valor não deverá estar disponível
