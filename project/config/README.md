# Config — infraestrutura de execução WDIO

Esta pasta concentra **toda a configuração de execução** dos testes E2E mobile (WebdriverIO + Appium). Ela não contém testes, page objects nem regras de negócio — apenas define **onde**, **como** e **em qual ambiente** a suíte roda.

## Papel na arquitetura

```text
npm run test:android / test:ios
        ↓
  config/wdio.conf.ts          ← entry point WDIO
        ↓
  build-wdio-config.ts         ← compõe config final
        ↓
  environment/ + capabilities/ + browserstack/ + shared/
        ↓
  tests/e2e/**/*.test.ts       ← specs executadas
```

A separação segue o princípio de **Single Responsibility**: cada subpasta cuida de um aspecto distinto da execução (env, plataforma, capabilities, cloud, relatórios).

## Estrutura de pastas

| Pasta | Responsabilidade |
|-------|------------------|
| `constants/` | Valores fixos (paths de app, timeouts, identificadores) |
| `environment/` | Leitura de `.env` e resolução de plataforma/alvo |
| `capabilities/` | Capabilities Appium por plataforma (local) |
| `browserstack/` | Configuração específica de execução na nuvem |
| `services/` | Serviços WDIO (Appium local) |
| `shared/` | Config base WDIO, paths do projeto e ciclo Allure |

## Arquivos na raiz

### `wdio.conf.ts`

**Função:** único entry point que o WebdriverIO carrega via `wdio run config/wdio.conf.ts`.

**Fluxo:**
1. Carrega variáveis de ambiente (`loadEnvironment`)
2. Resolve a plataforma (`PLATFORM=android|ios`)
3. Monta e exporta o objeto `config`

**Justificativa:** um único arquivo de entrada evita duplicação entre Android e iOS. A diferença de plataforma fica nos módulos internos; o WDIO só precisa de um ponto de partida.

### `build-wdio-config.ts`

**Função:** `buildWdioConfig(platform)` — seleciona e monta a config correta com base em:
- plataforma (`android` | `ios`)
- alvo (`local` vs `browserstack`, via `TARGET`)

**Justificativa:** usa **object lookup** em vez de `if/else` encadeados, tornando explícito o mapeamento plataforma × ambiente e facilitando a adição de novos alvos no futuro (ex.: outro cloud provider).

## Como executar

```bash
# Local
npm run test:android
npm run test:ios

# BrowserStack
npm run test:android:bs
npm run test:ios:bs
```

Variáveis-chave:

| Variável | Valores | Definida por |
|----------|---------|--------------|
| `PLATFORM` | `android`, `ios` | scripts npm |
| `TARGET` | `local` (default), `browserstack` | script `:bs` ou `.env` |

## Princípios aplicados

- **SRP:** cada pasta tem um motivo claro para existir e mudar
- **DRY:** lógica compartilhada em `shared/` e `constants/`
- **KISS:** entry point fino; complexidade nos módulos coesos
- **Segurança:** credenciais nunca no código — apenas via `.env`
