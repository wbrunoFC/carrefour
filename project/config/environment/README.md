# Environment — variáveis e contexto de execução

Responsável por **carregar configuração externa** (`.env`) e **interpretar o contexto** em que os testes rodam: plataforma mobile e alvo de execução (local vs nuvem).

## Por que uma pasta `environment/`?

Variáveis de ambiente são a **fronteira** entre código e configuração externa. Isolá-las:
- impede leitura de `.env` espalhada pelo projeto
- centraliza validação (`PLATFORM` obrigatório, credenciais BS)
- facilita testes unitários futuros (mock de `process.env`)

---

## `load-environment.ts`

### `loadEnvironment(): void`

Carrega variáveis dos arquivos `.env` e `.env.example` (nesta ordem).

**Regras:**
- não sobrescreve variáveis já definidas no shell/CI
- ignora linhas vazias e comentários (`#`)
- remove aspas simples/duplas dos valores

**Justificativa:**
- `.env.example` como fallback permite rodar localmente sem `.env` commitado
- respeitar env já definida prioriza CI e overrides manuais (`PLATFORM=android npm run …`)

---

## `execution-platform.ts`

### `resolveExecutionPlatform(): ExecutionPlatform`

Lê `process.env.PLATFORM` e retorna `'android'` ou `'ios'`.

**Erro explícito** se `PLATFORM` estiver ausente ou inválido.

**Justificativa:**
- fail-fast evita executar com capabilities erradas silenciosamente
- tipo `ExecutionPlatform` impede valores inválidos em compile-time nos builders

---

## `execution-target.ts`

### `isBrowserStackTarget(): boolean`

Retorna `true` quando `TARGET=browserstack` ou `TARGET=bs`. Default: execução local.

### `useBrowserStackLocalTunnel(): boolean`

Controla se o túnel BrowserStack Local fica ativo. Default: `true` em cloud. Opt-out: `BROWSERSTACK_LOCAL=false`.

**Justificativa:**
- separar **plataforma** (`PLATFORM`) de **alvo** (`TARGET`) permite combinações independentes:
  - Android local
  - iOS local
  - Android BrowserStack
  - iOS BrowserStack
- funções booleanas com nomes de pergunta (`is…`, `use…`) seguem convenção de legibilidade

## Variáveis relacionadas

| Variável | Arquivo que consome | Efeito |
|----------|---------------------|--------|
| `PLATFORM` | `execution-platform.ts` | Seleciona Android ou iOS |
| `TARGET` | `execution-target.ts` | Seleciona local ou BrowserStack |
| `BROWSERSTACK_LOCAL` | `execution-target.ts` | Liga/desliga túnel local |
| Demais (`BROWSERSTACK_*`, `ANDROID_*`, `IOS_*`) | módulos de capabilities/browserstack | Sobrescrevem defaults |
