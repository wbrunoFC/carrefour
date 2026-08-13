# Features — jornadas do usuário (native-demo-app)

Documentação funcional gerada a partir do código em `.cursor/repo/native-demo-app`.

Cada arquivo segue: visão geral, objetivo, perfil, pré-condições, jornada principal, alternativas, exceções, regras, cenários (Given/When/Then), critérios de sucesso, fora do escopo, dependências, observações.

## Árvore

```text
features/
├── home/home.md
├── authentication/
│   ├── login.md
│   ├── signup.md
│   └── biometrics-login.md
├── forms/forms.md
├── webview/webview.md
├── swipe/swipe.md
├── drag/drag.md
├── navigation/
│   ├── side-menu.md
│   └── tab-bar-customization.md
├── permissions/permissions.md
└── data-management/
    ├── data-in-memory.md
    ├── data-persisted-kv.md
    ├── data-sqlite.md
    └── data-secure.md
```

## Nota crítica

App é **demo de automação**, não produto Carrefour. Regras refletem comportamento observado no cliente (ex.: login simulado por formato de e-mail/senha), não backend real.
