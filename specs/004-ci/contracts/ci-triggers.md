# Contract: gatilhos da corrida

O workflow MUST disparar **somente** quando:

1. `pull_request` cujo base é `main`
2. `push` cuja branch é `main`

MUST NOT disparar em push de feature branch sem PR.

Job MUST falhar se qualquer `it()` do slice falhar.

Specs obrigatórias (cwd `project/`):

```text
tests/e2e/authentication/login/login.test.ts
tests/e2e/authentication/signup/signup.test.ts
tests/e2e/home/home/home.test.ts
tests/e2e/navigation/side-menu/side-menu.test.ts
tests/e2e/forms/forms/forms.test.ts
```

MUST NOT incluir `test:ios`, `test:ios:bs`, nem specs fora desta lista.
