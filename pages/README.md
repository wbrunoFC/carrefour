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
