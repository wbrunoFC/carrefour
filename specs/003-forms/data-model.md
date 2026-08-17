# Data Model: Forms

Não há persistência. Modelo = tela Forms em memória + `TestCase` JSON só para o eco. Sem submit remoto.

## TestCase (`project/data/forms.json`)

| Campo | Tipo | Regra |
|-------|------|--------|
| `domain` | string | Sempre `FORMS` |
| `cases[].scenarioId` | string | Neste arquivo: só `FORMS-FORMS-001` (repetido) |
| `cases[].input.text` | string | 1–30 caracteres |
| `cases[].expected` | string | Mesmo valor de `input.text` (eco) |

Validação: `casesFor('forms', 'FORMS-FORMS-001')` MUST devolver **≥2** cases. Não usar `requireTestCase` neste ID.

### Cases deste spec

| scenarioId | input.text | expected |
|------------|------------|----------|
| FORMS-FORMS-001 | `Hello` | `Hello` |
| FORMS-FORMS-001 | `Hello world` | `Hello world` |

FORMS-FORMS-003 e FORMS-FORMS-004 não têm row. Sem inventar texto no `it()` de 001.

## Tela Forms

- Identidade visível: container `Forms-screen`.
- Acesso: destino Forms no Menu (`goToForms`). Sem autenticação.
- Controles neste spec: input + eco (`text-input` / `input-text-result`), Active, Inactive.
- Fora do modelo: switch, dropdown.

## Texto digitado

- Atributo: `text` ≤ 30.
- Relação: cada case de FORMS-FORMS-001; eco visível em You have typed / `input-text-result`.

## Alerta de Active

Estados:

```text
Forms visível
  → toque Active
      → alerta visível (corpo contém "This button is active")
  → toque Inactive
      → alerta ausente
```

Ações Ask me later / Cancel / OK existem no alerta; fechar não é entidade deste spec.

## ScenarioMeta

Já definido em `project/tests/support/metadata/scenario.ts`. Forms copia o shape: `id`, `criticality`, `complexity`, `flakiness`, `tags`, `platforms`. Título via `buildScenarioTitle`. Cases de 001 distinguem no título o `input.text` (Allure não colide). Sem schema novo.
