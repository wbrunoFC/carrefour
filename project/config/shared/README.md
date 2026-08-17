# Shared — configuração base compartilhada

Elementos WDIO usados **tanto na execução local quanto na nuvem**: paths do projeto, config base, reporters e ciclo de vida Allure.

## Por que uma pasta `shared/`?

Estes módulos representam o que é **comum a qualquer execução E2E** independente de plataforma ou alvo. Extrair evita duplicar em `android-config`, `ios-config` e configs locais.

---

## `project-paths.ts`

| Export | Descrição |
|--------|-----------|
| `projectRoot` | Raiz npm do projeto (`project/`) |
| `getLocalRunDate()` | Data local no formato `YYYY-MM-DD` (locale `en-CA`) |
| `buildReportPaths(runDate)` | Deriva paths de `tests/results/{data}/allure-*` |

**Justificativa:**
- um único `projectRoot` evita `path.resolve(__dirname, '..')` repetido
- data local agrupa reports por dia de execução, facilitando histórico local

---

## `wdio-base.config.ts`

### `wdioBaseConfig`

Objeto base exportado com configurações WDIO comuns:

| Campo | Valor / origem |
|-------|----------------|
| `runner` | `local` |
| `specs` | `tests/e2e/**/*.test.ts` |
| `framework` | `mocha` (BDD) |
| `reporters` | `spec` + `allure` |
| timeouts | `constants/timeouts.ts` |
| hooks | `allure-lifecycle.ts` |

**Justificativa:**
- **fonte única de verdade** para o que define "uma execução E2E padrão"
- configs de plataforma/alvo só **estendem** (`...wdioBaseConfig`) em vez de redefinir
- alterar reporter, specs ou timeout global = um arquivo

---

## `allure-lifecycle.ts`

### `createAllureLifecycleHooks(allureResultsDir, allureReportDir)`

Retorna hooks WDIO:

| Hook | Comportamento |
|------|---------------|
| `afterTest` | Screenshot automático em todo teste (passou ou falhou) |
| `onComplete` | Gera report Allure e abre no browser (quando permitido) |

**Funções internas:**

| Função | Descrição |
|--------|-----------|
| `generateAllureReport` | Executa `allure generate --clean --single-file` |
| `shouldOpenAllureReport` | Não abre em CI, BrowserStack ou se `ALLURE_OPEN=false` |
| `openAllureReportWhenAllowed` | Abre `index.html` no macOS |

**Justificativa:**
- ciclo de evidência (screenshot + report) é **infra**, não regra de teste
- separar de `wdio-base.config.ts` mantém cada arquivo abaixo de ~70 linhas e com coesão clara
- `shouldOpenAllureReport()` extrai condição complexa para função semântica (legibilidade)

## Composição

```text
wdioBaseConfig
  ├── project-paths.ts     (paths de report)
  ├── constants/timeouts.ts
  └── allure-lifecycle.ts (hooks)
```

Qualquer config final (local ou BS) herda este núcleo.
