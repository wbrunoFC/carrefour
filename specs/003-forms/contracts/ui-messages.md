# UI contract: mensagens visíveis (forms)

Contrato com o app demo. Testes e `project/data/forms.json` MUST usar estas strings. Não traduzir.

Fonte: `project/features/forms/forms.md`.

| Scenario ID | Superfície | Texto esperado |
|-------------|------------|----------------|
| FORMS-FORMS-001 | eco (`input-text-result`) | contém `Hello` no 1º case; contém `Hello world` no 2º |
| FORMS-FORMS-003 | alerta nativo | contém `This button is active` |
| FORMS-FORMS-004 | alerta | ausente |

Rótulo da feature: `You have typed`. A assertion afirma o texto digitado **dentro** dessa superfície, não a tradução do rótulo.

Botões do alerta Active (`Ask me later`, `Cancel`, `OK`) não são Scenario IDs deste spec.

Selectors concretos ficam nos JSON de `project/pages/` (`EL00N`), não neste arquivo.
