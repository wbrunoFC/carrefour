# Features — jornadas do usuário (native-demo-app)

Documentação funcional gerada a partir do código em `.cursor/repo/native-demo-app`.

Cada arquivo segue: visão geral, objetivo, perfil, pré-condições, jornada principal, alternativas, exceções, regras, cenários (Given/When/Then), critérios de sucesso, fora do escopo, dependências, observações.

## Árvore

```text
project/features/
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

## Scenario ID

Formato: `<DOMAIN>-<FEATURE>-<NNN>` (ver [folder-tests.md](../../.cursor/rules/architecture/folder-tests.md) §A.5).

Exemplos: `AUTH-LOGIN-001`, `NAV-SIDE-MENU-001`, `DATA-DATA-SECURE-001`.

Fonte canônica dos cenários = estes `.md`. Page objects em `project/pages/` usam Element ID `EL00N`, não Scenario ID.

Workflow Speckit (um domínio por vez): `/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`. Constituição: [`.specify/memory/constitution.md`](../../.specify/memory/constitution.md).

## Nota crítica

App é **demo de automação**, não produto Carrefour. Regras refletem comportamento observado no cliente (ex.: login simulado por formato de e-mail/senha), não backend real.
