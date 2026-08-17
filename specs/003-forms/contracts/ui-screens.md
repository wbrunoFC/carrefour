# UI contract: telas visíveis (forms)

Contrato com o app demo. Testes MUST afirmar estas superfícies. Não traduzir accessibility ids na assertion — eles vivem nos JSON de `project/pages/`.

Fonte: `project/features/forms/forms.md`.

| Scenario ID | Superfície | Como o usuário percebe |
|-------------|------------|------------------------|
| FORMS-FORMS-001 | tela Forms + eco | Após digitar, o texto aparece em You have typed |
| FORMS-FORMS-003 | alerta Active | Após tocar Active, alerta de botão active visível |
| FORMS-FORMS-004 | tela Forms sem alerta | Após tentar Inactive, nenhum alerta |

Pré-condição dos três: tela Forms visível (Menu → Forms). Não é Scenario ID deste spec; o teste navega como passo.

Selectors concretos (`Forms-screen`, `text-input`, `input-text-result`, `button-Active`, `button-Inactive`) ficam nos JSON `EL00N`, não neste arquivo.
