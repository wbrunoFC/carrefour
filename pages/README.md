# Pages — Page Objects + Gherkin (native-demo-app)

Cada pasta = uma página/feature de UI.

```
pages/
└── {page}/
    ├── {page}.feature
    ├── android.json
    └── ios.json
```

- `.feature`: cenários CT00N derivados de `features/**/*.md`
- `android.json` / `ios.json`: mapa de elementos com `accessibilityId`
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
