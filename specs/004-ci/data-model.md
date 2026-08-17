# Data Model: CI Android

Sem persistência de produto. Entidades da corrida:

## SliceRun

| Campo | Significado |
|-------|-------------|
| trigger | `pull_request` ou `push` em `main` |
| specs | 5 arquivos listados (ver contracts) |
| scenarioCount | 10 IDs; 11 `it()` (FORMS-FORMS-001 × 2) |
| platform | Android nuvem |
| outcome | passed / failed |

## EvidencePack

| Campo | Origem |
|-------|--------|
| summary | Allure report (`index.html`) |
| failureScreenshots | Allure results (já ligados no reporter) |
| logs | Allure + log WDIO |
| environment | `reportedEnvironmentVars` (`NODE_VERSION`, `TARGET`) |

## Secrets (não persistidos no git)

| Nome | Uso |
|------|-----|
| `BROWSERSTACK_USERNAME` | `requireBrowserStackCredentials()` |
| `BROWSERSTACK_ACCESS_KEY` | idem |

Validação: ausência → fail-fast antes da sessão remota.
