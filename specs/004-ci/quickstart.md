# Quickstart: CI Android

Validação desta orquestração. Código do workflow em `/speckit-implement`.

## Pré-requisitos

- Slice verde local (11 `it()`).
- Humano criou no GitHub: `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`.
- APK demo em `project/apps/` (já no repo).
- **Não** editar `.env` para “fazer o CI passar”.

## O que precisa existir depois do implement

1. `.github/workflows/e2e-android.yml`
2. Gatilhos: PR → `main` e push → `main`
3. Job: `ubuntu-latest`, Node 22, `npm ci` em `project/`
4. `BROWSERSTACK_LOCAL=false`
5. `npm run test:android:bs -- --spec` com os 5 arquivos do slice
6. Upload de `project/tests/results/` sempre

## Conferir sem gastar sessão nuvem

1. Abrir o YAML: `on.pull_request` e `on.push.branches: [main]` presentes; sem `on.push` amplo.
2. Lista `--spec` = 5 arquivos do [ci-triggers.md](./contracts/ci-triggers.md).
3. Secrets referenciados pelos nomes que `credentials.ts` lê.
4. `upload-artifact` com `if: always()`.

## Conferir de verdade (humano)

1. Abrir PR contra `main` → check `e2e-android` corre.
2. Merge → mesma corrida no histórico de `main`.
3. Push numa feature sem PR → check **não** sobe.
4. Artefato Allure baixável no run.

iOS: não validar neste feature.
