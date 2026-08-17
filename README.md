# carrefour-qa

Framework de automação de testes para o app mobile **WDIO Native Demo App** (WebdriverIO + Appium) e API **ServeRest**, estruturado para entrevistas e demonstração de boas práticas de QA de software.

> **Nota:** apesar do nome, o app sob teste é a demo oficial do WebdriverIO — não é o app de produção do Carrefour. O nome do repositório reflete o contexto da entrevista técnica.

---

## Índice

1. [Visão geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Padrões de projeto](#padrões-de-projeto)
4. [Princípios de programação](#princípios-de-programação)
5. [Stack tecnológica](#stack-tecnológica)
6. [Estrutura de pastas](#estrutura-de-pastas)
7. [Configuração local](#configuração-local)
8. [Como executar](#como-executar)
9. [CI/CD](#cicd)
10. [Justificativa arquitetural](#justificativa-arquitetural)
11. [Documentação complementar](#documentação-complementar)

---

## Visão geral

O projeto implementa automação em **duas camadas complementares**:

| Camada | Tipo | Ferramenta | App/API alvo |
|--------|------|------------|--------------|
| Mobile E2E | UI (Android/iOS) | WebdriverIO 9 + Appium 2 | WDIO Native Demo App v2.2.0 |
| API | Integração HTTP | WebdriverIO (Chrome headless) | ServeRest (`serverest.dev`) |

**Objetivos principais:**

- Rastreabilidade total: cenário funcional → selector → teste → report
- Um teste multiplataforma quando o comportamento é idêntico (Android + iOS)
- Evidências automáticas (Allure com screenshots)
- CI com BrowserStack para Android e pipeline separado para API

**Constituição do projeto:** [`.specify/memory/constitution.md`](.specify/memory/constitution.md)  
**Norma de organização de testes:** [`.cursor/rules/architecture/folder-tests.md`](.cursor/rules/architecture/folder-tests.md)

---

## Arquitetura

### Mapa de camadas (congelado)

A raiz npm é `project/`. Cada camada tem responsabilidade única:

```text
carrefour-qa/
├── project/                    ← raiz npm: automação + app sob teste
│   ├── features/               ← especificação funcional (fonte da verdade)
│   ├── pages/                  ← Page Objects (selectors + ações + asserts)
│   ├── data/                   ← dados data-driven por Scenario ID
│   ├── tests/                  ← testes executáveis (*.test.ts)
│   ├── config/                 ← infra WDIO / Appium / BrowserStack / Allure
│   └── apps/                   ← binários versionados (APK / iOS zip)
├── specs/                      ← artefatos Speckit por domínio
├── .specify/                   ← constituição + templates Speckit
├── .github/workflows/          ← CI GitHub Actions
└── .cursor/                    ← regras, knowledge base, scripts auxiliares
```

### Fluxo de rastreabilidade

```text
project/features/{domain}/{feature}.md     ← Scenario ID + Given/When/Then
        ↓
project/pages/{feature}/android.json|ios.json   ← Element ID (EL00N) + selectors
        ↓
project/tests/{tipo}/{domain}/{feature}/*.test.ts
        ↓
project/config/ + project/apps/  →  Allure report + screenshots
```

### Tipos de teste

| Pasta | Quando usar |
|-------|-------------|
| `tests/e2e/` | Jornada de usuário completa, mesmo comportamento em Android e iOS |
| `tests/integration/` | Contrato app↔serviço/OS (API, storage, biometria, permissões) |
| `tests/platform/{android\|ios}/` | Comportamento **diverge materialmente** entre plataformas |
| `tests/accessibility/` | Objetivo principal é validar acessibilidade |

### Scenario ID

Formato obrigatório: `<DOMAIN>-<FEATURE>-<NNN>`

Exemplos: `AUTH-LOGIN-001`, `FORMS-FORMS-001`, `PRODUTOS-PRODUTOS-001`

O mesmo ID aparece em:
- `project/features/**/*.md`
- título do `it()` no teste
- report Allure (via tags `@AUTH-LOGIN-001`)

### Page Object em 4 camadas

Cada feature de UI em `project/pages/{feature}/`:

| Arquivo | Responsabilidade |
|---------|------------------|
| `android.json` / `ios.json` | Mapa de elementos (`EL00N` + strategy + selector) |
| `{feature}.page.ts` | Primitivas da tela (click, setValue, isDisplayed) |
| `{feature}.actions.ts` | Jornadas do usuário (`login()`, `goToForms()`) |
| `{feature}.assertions.ts` | Validações (`expectLoginSuccess()`) |

Selectors **nunca** ficam hardcoded nos testes — vêm dos JSONs.

### Configuração WDIO (Strategy Pattern)

```text
npm run test:android
        ↓
config/wdio.conf.ts              ← entry point único
        ↓
build-wdio-config.ts             ← escolhe local vs BrowserStack
        ↓
capabilities/ | browserstack/ | shared/
        ↓
tests/e2e/**/*.test.ts
```

`PLATFORM` (android|ios) e `TARGET` (local|browserstack) definem qual builder de config é usado — sem `if/else` encadeado no entry point.

---

## Padrões de projeto

| Padrão | Onde aparece | Benefício |
|--------|--------------|-----------|
| **Page Object Model (POM)** | `project/pages/` | Isola selectors e interações da lógica de teste |
| **Actions / Assertions split** | `*.actions.ts` + `*.assertions.ts` | Separa "fazer" de "verificar" (SRP) |
| **Factory** | `tests/support/factories/` | Cria payloads de teste com defaults (`ProdutoFactory`) |
| **Fixture** | `tests/support/fixtures/` | Estados reutilizáveis (sessão admin, abrir tela login) |
| **Strategy** | `build-wdio-config.ts` | Troca config local/BrowserStack sem alterar testes |
| **Registry / Type-safe page loader** | `page-element.ts` + `page-maps.ts` | Selectors tipados por página e plataforma |
| **Data-driven testing** | `project/data/*.json` | Dados desacoplados do código (`forms.json`, `authentication.json`) |
| **Metadata como propriedade** | `*.scenarios.ts` | Criticality/complexity/flakiness são tags, não pastas |

**Anti-padrões explicitamente proibidos:**

- Pastas `tests/smoke/`, `tests/flaky/`, `tests/regression/` (suítes = tags)
- Arquivos genéricos `utils.ts`, `helpers.ts`, `common.ts`
- Gherkin em `project/pages/` (fonte única: `project/features/`)
- Duplicar teste só porque existe Android e iOS

---

## Princípios de programação

| Princípio | Aplicação no projeto |
|-----------|---------------------|
| **SRP** (Single Responsibility) | Cada pasta de config tem um motivo para mudar; page/actions/assertions separados |
| **DRY** | Selectors centralizados em JSON; config base em `shared/wdio-base.config.ts` |
| **KISS** | Entry point WDIO fino; complexidade nos módulos coesos |
| **YAGNI** | Sem dependências extras; stack fixa (constituição §V) |
| **Baixo acoplamento** | Testes dependem de Actions/Assertions, não de `$()` direto |
| **Alta coesão** | Domínio funcional define pastas (`authentication/login/`, não `helpers/`) |
| **Testabilidade** | Waits condicionais (`waitForDisplayed`), sem `sleep` fixo |
| **TypeScript strict** | Tipos em metadata, page maps e contratos API |

---

## Stack tecnológica

| Componente | Versão | Papel |
|------------|--------|-------|
| Node.js | 22 (CI) | Runtime |
| TypeScript | 5.8 | Linguagem dos testes |
| WebdriverIO | 9.30 | Framework de automação |
| Appium | 2.19 | Servidor mobile (UiAutomator2 / XCUITest) |
| Mocha | (via WDIO) | Runner de specs |
| expect-webdriverio | 5.6 | Assertions |
| Allure | 2.43 | Relatórios + evidências |
| BrowserStack | (service WDIO) | Execução cloud Android no CI |
| Java | 17 | Geração de report Allure |

---

## Estrutura de pastas

```text
project/
├── apps/v2.2.0/
│   ├── android/android.wdio.native.app.v2.2.0.apk   ← não versionado (limite GitHub)
│   └── ios/ios.simulator.wdio.native.app.v2.2.0.zip
├── config/
│   ├── wdio.conf.ts              ← E2E mobile entry point
│   ├── wdio.api.conf.ts          ← API entry point
│   ├── build-wdio-config.ts
│   ├── capabilities/             ← Appium local
│   ├── browserstack/             ← Cloud
│   ├── environment/              ← .env, PLATFORM, TARGET
│   ├── shared/                   ← base config + Allure lifecycle
│   └── constants/                ← paths, timeouts
├── data/
│   ├── authentication.json
│   └── forms.json
├── features/                     ← 17 arquivos .md de jornadas
├── pages/                        ← ~15 page objects
├── tests/
│   ├── e2e/                      ← 5 specs mobile (slice Speckit)
│   ├── integration/produtos/     ← 1 spec API ServeRest
│   └── support/                  ← fixtures, factories, metadata
└── package.json
```

**Cenários automatizados no slice atual (CI):**

- `AUTH-LOGIN-001` a `003`, `AUTH-SIGNUP-001` a `002`
- `HOME-HOME-001`, `NAV-SIDE-MENU-002`
- `FORMS-FORMS-001`, `003`, `004`
- `PRODUTOS-PRODUTOS-001` a `006` (API)

---

## Configuração local

### Pré-requisitos

| Item | Android local | iOS local | API |
|------|---------------|-----------|-----|
| Node.js 20+ ou 22+ | ✅ | ✅ | ✅ |
| npm 10+ | ✅ | ✅ | ✅ |
| Java 17+ (Allure) | ✅ | ✅ | ✅ |
| Android Studio + SDK | ✅ | — | — |
| Emulador Android ou device | ✅ | — | — |
| macOS + Xcode | — | ✅ | — |
| BrowserStack creds | opcional | opcional | — |

Knowledge base detalhada: [`.cursor/knowledge/project-setup/`](.cursor/knowledge/project-setup/)

### Passo a passo

```bash
# 1. Clonar e entrar na raiz npm
cd project

# 2. Instalar dependências
npm ci

# 3. Copiar variáveis de ambiente (opcional)
cp .env.example .env
# Editar BROWSERSTACK_* se for rodar na nuvem

# 4. Baixar APK demo (obrigatório para Android local)
mkdir -p apps/v2.2.0/android
curl -fsSL -o apps/v2.2.0/android/android.wdio.native.app.v2.2.0.apk \
  https://github.com/webdriverio/native-demo-app/releases/download/v2.2.0/android.wdio.native.app.v2.2.0.apk

# 5. (iOS) Baixar zip do simulador para apps/v2.2.0/ios/
# Release: https://github.com/webdriverio/native-demo-app/releases/tag/v2.2.0

# 6. Subir emulador Android (exemplo)
emulator -avd Pixel_6_API_33 &
adb devices   # confirmar device listado
```

> **Appium local:** o WDIO inicia o Appium automaticamente via `@wdio/appium-service` ao rodar `npm run test:android`. Não é necessário subir Appium manualmente, salvo debug.

### Variáveis de ambiente

| Variável | Descrição | Default |
|----------|-----------|---------|
| `PLATFORM` | `android` ou `ios` | definido pelos scripts npm |
| `TARGET` | `local` ou `browserstack` | `local` |
| `BROWSERSTACK_USERNAME` | Usuário BrowserStack | — |
| `BROWSERSTACK_ACCESS_KEY` | Chave BrowserStack | — |
| `BROWSERSTACK_APP_ID` | `bs://...` após upload do APK | CI injeta |
| `API_BASE_URL` | Base URL ServeRest | `https://serverest.dev` |
| `ALLURE_OPEN` | Abrir report ao fim (`false` no CI) | `true` no macOS local |
| `ANDROID_DEVICE_NAME` | Nome do device/emulador | `Android Emulator` |

---

## Como executar

Todos os comandos abaixo rodam com **cwd = `project/`**.

### Testes E2E mobile

```bash
# Android local (emulador ou device conectado)
npm run test:android

# iOS local (macOS + simulador)
npm run test:ios

# Android na nuvem (BrowserStack)
npm run test:android:bs

# iOS na nuvem
npm run test:ios:bs

# Spec única
npm run test:android -- --spec tests/e2e/authentication/login/login.test.ts

# Múltiplas specs (como no CI)
npm run test:android:bs -- \
  --spec tests/e2e/authentication/login/login.test.ts \
  --spec tests/e2e/forms/forms/forms.test.ts
```

### Testes de API (ServeRest)

```bash
npm run test:api

# Spec única
npm run test:api -- --spec tests/integration/produtos/produtos/produtos.test.ts
```

### Relatório Allure

Após execução local, o report é gerado em:

```text
project/tests/results/{YYYY-MM-DD}/allure-report/index.html
```

```bash
# Abrir report do dia (macOS)
npm run report
```

No CI, o report é publicado como artefato GitHub Actions (`allure-e2e-android`, `allure-api-tests`).

---

## CI/CD

Dois workflows independentes em `.github/workflows/`:

### `e2e-android.yml`

- **Trigger:** PR e push em `main`
- **Ambiente:** Ubuntu + Node 22 + Java 17
- **Execução:** BrowserStack (Android)
- **Fluxo:** checkout → npm ci → download APK → upload BrowserStack → roda slice de 5 specs E2E → upload Allure
- **Secrets:** `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`

### `api-tests.yml`

- **Trigger:** PR e push em `main`
- **Execução:** Chrome headless via WDIO
- **Specs:** `tests/integration/**/*.test.ts`
- **Artefato:** Allure API

> iOS no CI está **fora do escopo** atual (constituição §Automation Constraints).

---

## Justificativa arquitetural

### Por que separar `features/`, `pages/` e `tests/`?

Evita que especificação funcional, selectors e código de teste vivam no mesmo arquivo. QAs manuais leem `features/`; automação consome sem reescrever cenários. Mudança de selector não altera o contrato comportamental.

### Por que Page Object com JSON por plataforma?

Android usa `accessibilityId` / UiAutomator; iOS usa `testID` / XCUITest. O **comportamento** do teste é idêntico; só o mapa de elementos muda. Um `login.test.ts` roda nas duas plataformas.

### Por que Scenario ID global?

Permite join entre documentação, código, Allure e defect tracking. `@AUTH-LOGIN-001` no título do teste vira filtro de suíte, tag de smoke e referência em bug report.

### Por que metadata em vez de pastas smoke/flaky?

Pastas por suíte não escalam (combinação explosiva). Tags + criticality permitem seleção flexível no CI: `--mochaOpts.grep @smoke` ou filtro Allure por `@criticality:high`.

### Por que WebdriverIO para API também?

Unifica reporter (Allure), lifecycle hooks e toolchain TypeScript. ServeRest é contrato HTTP — não precisa de REST Assured separado mantendo dois stacks de report.

### Por que BrowserStack no CI e local para dev?

CI precisa de device real estável sem manter farm própria. Local permite debug rápido com emulador e Appium Inspector. Híbrido reduz custo cloud e acelera feedback loop do desenvolvedor.

### Por que constituição + folder-tests?

Multi-QA e agentes de IA precisam de **uma convenção só**. Regras explícitas evitam drift (`tests/login/` vs `tests/authentication/login/`). Speckit consome o catálogo existente em `features/` — não inventa cenários paralelos.

---

## Documentação complementar

| Documento | Conteúdo |
|-----------|----------|
| [`project/config/README.md`](project/config/README.md) | Infra WDIO em detalhe |
| [`project/pages/README.md`](project/pages/README.md) | Convenção Page Object |
| [`project/features/README.md`](project/features/README.md) | Catálogo de jornadas |
| [`.specify/memory/constitution.md`](.specify/memory/constitution.md) | Princípios invioláveis |
| [`.cursor/rules/architecture/folder-tests.md`](.cursor/rules/architecture/folder-tests.md) | Norma enterprise de testes |
| [`../texto/carrefour-qa-documentacao-completa.md`](../texto/carrefour-qa-documentacao-completa.md) | Guia arquivo a arquivo |
| [`../texto/carrefour-qa-entrevista-25-perguntas.md`](../texto/carrefour-qa-entrevista-25-perguntas.md) | 25 perguntas para entrevista técnica QA |

---

## Licença

ISC (conforme `project/package.json`).
