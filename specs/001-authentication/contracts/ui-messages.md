# UI contract: mensagens visíveis (authentication)

Contrato com o app demo. Testes e `project/data/authentication.json` MUST usar estas strings. Não traduzir.

Fonte: `project/features/authentication/login.md`, `signup.md`.

| Scenario ID | Superfície | Texto esperado |
|-------------|------------|----------------|
| AUTH-LOGIN-001 | alerta de sucesso | `You are logged in!` |
| AUTH-LOGIN-002 | erro no form | `Please enter a valid email address` |
| AUTH-LOGIN-003 | erro no form | `Please enter at least 8 characters` |
| AUTH-SIGNUP-001 | alerta de sucesso | `You successfully signed up!` |
| AUTH-SIGNUP-002 | erro no form | `Please enter the same password` |

Título do alerta de signup na feature: `Signed Up!`. Corpo usado no selector (espelha login, que localiza pelo corpo): `You successfully signed up!`.

Botão que fecha alerta de sucesso: `OK`.

Selectors concretos ficam nos JSON de `project/pages/` (`EL00N`), não neste arquivo.
