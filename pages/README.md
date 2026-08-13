# Pages — Page Objects (native-demo-app)

Cada pasta = uma página/feature de UI.

```
pages/
└── {page}/
    ├── android.json
    └── ios.json
```

- Cenários / jornadas: só em `features/**/*.md` (não duplicar Gherkin aqui)
- `android.json` / `ios.json`: mapa de elementos com `accessibilityId`
- `id` do elemento: `EL00N` (Element) — nunca `CT` (reservado historicamente a cenário; Scenario ID agora é `<DOMAIN>-<FEATURE>-<NNN>` em `features/` + `tests/`)
- Valores de seletor vêm do código (`testProperties` / `button-{id|text}`)
- iOS: `testID`; Android: `accessibilityLabel` — mesma string no app

Fonte: `.cursor/repo/native-demo-app`

## Classificação de elementos

Cada elemento tem valor **único** (`high` | `medium` | `low`):

| Campo | Pergunta | Regra |
|-------|----------|-------|
| `criticality` | Quanto dói se quebrar? | [criticality/decision.md](../.cursor/rules/criticality/decision.md) |
| `flaky` | Quanto confiar no PASS/FAIL? | [flakiness/decision.md](../.cursor/rules/flakiness/decision.md) |
| `complexity` | Quanto esforço p/ implementar/executar/manter/diagnosticar? | [complexity/decision.md](../.cursor/rules/complexity/decision.md) |

Dimensões independentes. Ex.: Login `email` → criticality `high`, flaky `low`, complexity `low`.
