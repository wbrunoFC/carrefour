# Research: CI Android

## Decision: Um workflow, dois gatilhos

- **Decision**: `.github/workflows/e2e-android.yml` com `on.pull_request` (qualquer PR contra `main`) e `on.push.branches: [main]`. Sem `on.push` em `**`. Sem `workflow_dispatch` neste slice (YAGNI).
- **Rationale**: Constituição: PR + merge `main`; não a cada push de feature.
- **Alternatives considered**: (1) `push` em todas as branches — viola FR-003. (2) Dois YAML (pr.yml + main.yml) — duplica job. (3) Só PR — linha principal fica sem evidência pós-merge.

## Decision: Reusar `test:android:bs` + `--spec` explícito

- **Decision**: cwd `project/`. Comando: `npm run test:android:bs -- --spec` com os 5 arquivos do slice. Sem glob `**/*.test.ts`.
- **Rationale**: Script já seta `PLATFORM=android TARGET=browserstack`. WDIO no repo não expande glob de forma confiável (lição dos 3 domínios).
- **Alternatives considered**: (1) `npx wdio` direto — perde o TARGET. (2) Confiar no `specs` do `wdio-base.config.ts` — risco de 0 testes ou extras futuros. (3) Shard — 11 `it()`, `maxInstances: 1`; shard é complexidade sem ganho.

## Decision: Túnel Local desligado no CI

- **Decision**: `BROWSERSTACK_LOCAL=false` no job. APK sobe via serviço existente (`resolveBrowserStackAppOption`).
- **Rationale**: Default do código liga túnel (`useBrowserStackLocalTunnel`). Demo não precisa de rede privada. Túnel no GHA falha mais que ajuda.
- **Alternatives considered**: deixar default `true` — binário Local + permissões no Ubuntu. `BROWSERSTACK_FORCE_LOCAL` — pior.

## Decision: Allure já gerado; só upload

- **Decision**: Não mudar `wdio-base.config.ts` / `allure-lifecycle.ts`. Job faz `actions/upload-artifact` de `project/tests/results/` com `if: always()`.
- **Rationale**: Constituição: reusar Allure; publicar artefato. Runner local já gera report no `onComplete`.
- **Alternatives considered**: (1) `allure generate` extra no YAML — duplica o hook. (2) Trocar por JUnit — segundo reporter, veto. (3) Upload só no failure — SC-004 pede pacote também no verde.

## Decision: Segredos só no remoto; sem `.env`

- **Decision**: `env` do step mapeia `secrets.BROWSERSTACK_USERNAME` e `secrets.BROWSERSTACK_ACCESS_KEY`. Humano cria os secrets. Agente não escreve `.env`, não commita key.
- **Rationale**: `requireBrowserStackCredentials()` já lê esses nomes. Constituição proíbe amend de `.env` sem permissão.
- **Alternatives considered**: commitar `.env.ci` — vazamento. Nomes novos de secret — obriga patch em `credentials.ts` sem ganho.

## Decision: Sem emulador no job; sem iOS

- **Decision**: `ubuntu-latest` + Node 22 + `npm ci`. Sem Android SDK, sem Appium local, sem macOS, sem `test:ios:bs`.
- **Rationale**: Nuvem executa o app. iOS fora do slice. SDK no runner é o caminho lento.
- **Alternatives considered**: `macos-latest` + simulador — caro, iOS fora. Emulador no Ubuntu — horas de setup para o que o BS já faz.
