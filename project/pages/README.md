# Pages — Page Objects (native-demo-app)

Cada pasta = uma página/feature de UI.

```
project/pages/
└── {page}/
    ├── android.json
    ├── ios.json
    ├── {page}.page.ts
    ├── {page}.actions.ts
    └── {page}.assertions.ts
```

- `android.json` / `ios.json`: mapa de elementos (`id` EL00N + selector). Sem criticidade/flaky/complexity — isso vive no teste, não no seletor.
- `{page}.page.ts`: primitivas da tela (set/click/isDisplayed). Sem jornada composta, sem expect.
- `{page}.actions.ts`: jornadas do usuário nessa tela (`login()`, `save()`).
- `{page}.assertions.ts`: expects da tela (`expectLoginScreen()`). Erros de formulário ficam em `error-validation/`, não no LoginPage.
- Cenários: só em `project/features/**/*.md`
- `id` do elemento: `EL00N`. Nunca `CT`.
- iOS: `testID`; Android: `accessibilityLabel` — mesma string no app

Fonte: `.cursor/repo/native-demo-app`
