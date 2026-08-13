Feature: Drag

  Descrição:
    Permitir arrastar peças até as zonas corretas e reiniciar o puzzle.

  Contexto:
    O usuário está na tela Drag.

  Scenario: CT001 - Encaixar peça válida
    Given o puzzle está incompleto
    When arrastar uma peça até a zona correta
    Then a peça deverá permanecer encaixada

  Scenario: CT002 - Soltar em local inválido
    Given o usuário arrasta uma peça
    When soltar fora da zona correta
    Then a peça deverá voltar à posição original

  Scenario: CT003 - Concluir puzzle
    Given 8 peças já estão corretas
    When encaixar a nona
    Then deverá ver congratulações e opção Retry

  Scenario: CT004 - Retry
    Given o puzzle foi concluído
    When tocar em Retry
    Then o puzzle deverá reiniciar
