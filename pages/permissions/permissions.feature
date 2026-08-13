Feature: Permissions

  Descrição:
    Permitir solicitar permissões do sistema e orientar revogação via Settings.

  Contexto:
    O usuário está na tela Permissions.

  Scenario: CT001 - Solicitar câmera
    Given câmera ainda não foi concedida
    When ativar o switch Camera
    Then o diálogo nativo de câmera deverá aparecer

  Scenario: CT002 - Conceder microfone
    Given o prompt de microfone está visível
    When o usuário permitir
    Then o app deverá refletir microfone concedido

  Scenario: CT003 - Revogar via Settings
    Given uma permissão está concedida
    When o usuário tentar desligar o switch
    Then deverá ver alerta Change in Settings
    And poder abrir os Ajustes
