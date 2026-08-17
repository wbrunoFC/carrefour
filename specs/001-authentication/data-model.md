# Data Model: Authentication

Não há persistência de usuário no app demo. Modelo = dados de teste + entidades visíveis.

## TestCase (`project/data/authentication.json`)

| Campo | Tipo | Regra |
|-------|------|--------|
| `domain` | string | Sempre `AUTH` |
| `cases[].scenarioId` | string | `<DOMAIN>-<FEATURE>-<NNN>` existente na spec |
| `cases[].input.email` | string | Obrigatório nos 5 IDs |
| `cases[].input.password` | string | Obrigatório nos 5 IDs |
| `cases[].input.confirmPassword` | string | Só signup; ausente nos cases de login |
| `cases[].expected` | string | Texto visível esperado (contrato em `contracts/ui-messages.md`) |

Validação do arquivo: `requireTestCase('authentication', id)` falha se o ID não existir. Um case por Scenario ID deste spec.

### Cases deste spec

| scenarioId | email (formato) | password | confirmPassword | expected |
|------------|-----------------|----------|-----------------|----------|
| AUTH-LOGIN-001 | válido | ≥ 8 | — | `You are logged in!` |
| AUTH-LOGIN-002 | inválido | ≥ 8 | — | `Please enter a valid email address` |
| AUTH-LOGIN-003 | válido | < 8 | — | `Please enter at least 8 characters` |
| AUTH-SIGNUP-001 | válido | ≥ 8 | igual a password | `You successfully signed up!` |
| AUTH-SIGNUP-002 | válido | ≥ 8 | diferente de password | `Please enter the same password` |

Login: já no JSON. Signup: acrescentar. Não inventar valores no `it()`.

## Credencial de login

- Atributos: e-mail, senha.
- Válida: formato de e-mail aceito pelo cliente + senha comprimento ≥ 8.
- Relação: 1:1 com AUTH-LOGIN-001 quando válida; AUTH-LOGIN-002/003 quando um campo quebra a regra.

## Credencial de cadastro

- Atributos: e-mail, senha, confirmação.
- Válida: regras de login + confirmação igual à senha e comprimento ≥ 8.
- Relação: AUTH-SIGNUP-001 válida; AUTH-SIGNUP-002 confirmação ≠ senha.

## Alerta de resultado

Estados:

```text
form visível
  → submetido
      → loading (botão desabilitado, ~1,5s; esperar condição, não sleep)
          → sucesso (alerta modal) → OK fecha
          → erro de validação (texto no form; alerta de sucesso ausente)
```

Tipos de sucesso: login (`You are logged in!`) vs signup (`You successfully signed up!`). Selectors distintos. Não reusar `successAlert` de login no signup.

## ScenarioMeta

Já definido em `project/tests/support/metadata/scenario.ts`. Signup copia o shape de login: `id`, `criticality`, `complexity`, `flakiness`, `tags`, `platforms`. Título via `buildScenarioTitle`. Sem schema novo.
