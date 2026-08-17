# Graph Report - project  (2026-08-16)

## Corpus Check
- 159 files · ~19,199 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1002 nodes · 1252 edges · 67 communities (37 shown, 30 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `657873fa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- wdio-base.config.ts
- devDependencies
- android
- Login
- Forms
- Sign up
- Drag
- page-element.ts
- Biometrics login
- Permissions
- Data in-memory
- Data persisted key-value
- Data secure storage
- Data SQLite
- Tab bar customization
- Side menu
- Home
- Swipe
- WebView
- scripts
- compilerOptions
- LoginPage
- TabBarCustomizationPage
- signup.test.ts
- NavigationPage
- SideMenuPage
- PermissionsPage
- BrowserStack — execução na nuvem
- FormsPage
- DataInMemoryPage
- DataPersistedKvPage
- DataSecurePage
- DataSqlitePage
- index.ts
- SignupPage
- page
- BiometricsLoginPage
- Capabilities — configuração Appium por plataforma
- Environment — variáveis e contexto de execução
- home.test.ts
- SideMenuActions
- page-maps.ts
- WebviewPage
- side-menu.test.ts
- SwipePage
- Config — infraestrutura de execução WDIO
- Shared — configuração base compartilhada
- DragPage
- ErrorValidationPage
- forms.test.ts
- loadTestData.ts
- login.test.ts
- Services — serviços WDIO
- FormsActions
- LoginActions
- SignupAssertions
- Constants — valores fixos da execução
- Features — jornadas do usuário (native-demo-app)
- biometrics-login.assertions.ts
- data-in-memory.assertions.ts
- dismissSoftwareKeyboard
- data-secure.assertions.ts
- data-sqlite.assertions.ts
- navigation.assertions.ts
- tab-bar-customization.assertions.ts
- permissions.assertions.ts
- pages/README.md

## God Nodes (most connected - your core abstractions)
1. `page` - 52 edges
2. `LoginPage` - 16 edges
3. `SideMenuPage` - 15 edges
4. `ElementKey` - 14 edges
5. `Biometrics login` - 14 edges
6. `Login` - 14 edges
7. `Sign up` - 14 edges
8. `Data in-memory` - 14 edges
9. `Data persisted key-value` - 14 edges
10. `Data secure storage` - 14 edges

## Surprising Connections (you probably didn't know these)
- `performLogin()` --calls--> `requireTestCase()`  [EXTRACTED]
  tests/e2e/authentication/login/login.test.ts → tests/support/fixtures/loadTestData.ts
- `openLoginScreen()` --calls--> `page`  [EXTRACTED]
  tests/support/fixtures/openLoginScreen.ts → tests/support/fixtures/page/page-element.ts
- `page` --references--> `PageMap`  [EXTRACTED]
  tests/support/fixtures/page/page-element.ts → tests/support/fixtures/page/types/page-name.ts
- `buildAndroidBrowserStackConfig()` --calls--> `resolveBrowserStackAppOption()`  [EXTRACTED]
  config/browserstack/android-config.ts → config/browserstack/app-option.ts
- `buildAndroidBrowserStackConfig()` --calls--> `requireBrowserStackCredentials()`  [EXTRACTED]
  config/browserstack/android-config.ts → config/browserstack/credentials.ts

## Import Cycles
- None detected.

## Communities (67 total, 30 thin omitted)

### Community 0 - "wdio-base.config.ts"
Cohesion: 0.06
Nodes (53): buildAndroidBrowserStackConfig(), BrowserStackAppUpload, requireIosBrowserStackApp(), resolveBrowserStackAppOption(), resolveBrowserStackServiceApp(), requireBrowserStackCredentials(), buildIosBrowserStackConfig(), BrowserStackAppUpload (+45 more)

### Community 1 - "devDependencies"
Cohesion: 0.06
Nodes (35): allure-commandline, appium, appium-uiautomator2-driver, appium-xcuitest-driver, expect-webdriverio, devDependencies, allure-commandline, appium (+27 more)

### Community 2 - "android"
Cohesion: 0.06
Nodes (32): android, appPackage, appPath, autoGrantPermissions, automationName, deviceName, fullReset, newCommandTimeout (+24 more)

### Community 3 - "Login"
Cohesion: 0.07
Nodes (26): 1. Acessar Login, 2. Informar e-mail, 3. Informar senha, 4. Confirmar acesso, Alternar para Sign up, AUTH-LOGIN-001 — Login com dados válidos de formato, AUTH-LOGIN-002 — Login com e-mail inválido, AUTH-LOGIN-003 — Login com senha curta (+18 more)

### Community 4 - "Forms"
Cohesion: 0.08
Nodes (25): 1. Abrir Forms, 2. Digitar no input, 3. Alternar switch, 4. Selecionar dropdown, 5. Acionar botão Active, Cenários, Critérios de sucesso, Dependências funcionais (+17 more)

### Community 5 - "Sign up"
Cohesion: 0.08
Nodes (24): 1. Abrir Sign up, 2. Informar dados, 3. Confirmar cadastro, AUTH-SIGNUP-001 — Cadastro com dados válidos de formato, AUTH-SIGNUP-002 — Confirmação de senha divergente, AUTH-SIGNUP-003 — E-mail inválido no cadastro, Cenários, Confirmação diferente (+16 more)

### Community 6 - "Drag"
Cohesion: 0.08
Nodes (24): 1. Abrir Drag, 2. Arrastar peça correta, 3. Completar puzzle, 4. Reiniciar, Cenários, Critérios de sucesso, Dependências funcionais, Drag (+16 more)

### Community 7 - "page-element.ts"
Cohesion: 0.24
Nodes (9): DEFAULT_ELEMENT_DISPLAY_TIMEOUT_MS, DEFAULT_ELEMENT_VISIBILITY_CHECK_TIMEOUT_MS, DEFAULT_ELEMENT_WAIT_TIMEOUT_MS, PAGE_MAPS, SELECTOR_BUILDERS, SelectorBuilder, toSelector(), PageMap (+1 more)

### Community 8 - "Biometrics login"
Cohesion: 0.08
Nodes (23): 1. Acessar Login, 2. Iniciar biometria, 3. Autenticar, AUTH-BIOMETRICS-LOGIN-001 — Login biométrico com sucesso, AUTH-BIOMETRICS-LOGIN-002 — Cancelar biometria, AUTH-BIOMETRICS-LOGIN-003 — Sem biometria no dispositivo, Biometria não matriculada, Biometrics login (+15 more)

### Community 9 - "Permissions"
Cohesion: 0.08
Nodes (23): 1. Abrir Permissions, 2. Ativar permissão, 3. Conceder no SO, Cenários, Critérios de sucesso, Dependências funcionais, Fora do escopo, Jornada principal (+15 more)

### Community 10 - "Data in-memory"
Cohesion: 0.09
Nodes (22): 1. Abrir Data Management, 2. Salvar valor, 3. Limpar valor, Cenários, Critérios de sucesso, DATA-DATA-IN-MEMORY-001 — Salvar em memória, DATA-DATA-IN-MEMORY-002 — Limpar memória, DATA-DATA-IN-MEMORY-003 — Perda após kill (+14 more)

### Community 11 - "Data persisted key-value"
Cohesion: 0.09
Nodes (22): 1. Localizar seção KV, 2. Salvar, 3. Limpar, Cenários, Critérios de sucesso, DATA-DATA-PERSISTED-KV-001 — Salvar valor persistido, DATA-DATA-PERSISTED-KV-002 — Limpar valor persistido, DATA-DATA-PERSISTED-KV-003 — Erro ao persistir (+14 more)

### Community 12 - "Data secure storage"
Cohesion: 0.09
Nodes (22): 1. Abrir Secure storage, 2. Salvar segredo, 3. Limpar (hook de teste), Cenários, Critérios de sucesso, DATA-DATA-SECURE-001 — Salvar no SecureStore, DATA-DATA-SECURE-002 — Limpar SecureStore, DATA-DATA-SECURE-003 — Erro SecureStore (+14 more)

### Community 13 - "Data SQLite"
Cohesion: 0.09
Nodes (22): 1. Abrir seção SQLite, 2. Salvar, 3. Limpar, Cenários, Critérios de sucesso, DATA-DATA-SQLITE-001 — Salvar no SQLite explícito, DATA-DATA-SQLITE-002 — Limpar SQLite, DATA-DATA-SQLITE-003 — Erro SQLite (+14 more)

### Community 14 - "Tab bar customization"
Cohesion: 0.09
Nodes (22): 1. Abrir Menu, 2. Pinativar tela, 3. Despinar tela, Cenários, Critérios de sucesso, Defaults, Dependências funcionais, Fora do escopo (+14 more)

### Community 15 - "Side menu"
Cohesion: 0.09
Nodes (21): 1. Abrir Menu, 2. Escolher destino, 3. Fechar Menu, Abrir Menu já estando em um destino, Cenários, Critérios de sucesso, Dependências funcionais, Fora do escopo (+13 more)

### Community 16 - "Home"
Cohesion: 0.10
Nodes (20): 1. Abrir o aplicativo, 2. Visualizar conteúdo, 3. Rolar a tela, Acesso via Menu lateral, Cenários, Critérios de sucesso, Dependências funcionais, Fora do escopo (+12 more)

### Community 17 - "Swipe"
Cohesion: 0.10
Nodes (20): 1. Abrir Swipe, 2. Swipe horizontal, 3. Scroll vertical, Cenários, Critérios de sucesso, Dependências funcionais, Fora do escopo, Jornada principal (+12 more)

### Community 18 - "WebView"
Cohesion: 0.10
Nodes (20): 1. Abrir WebView, 2. Carregar site, 3. Interagir com conteúdo web, Cenários, Critérios de sucesso, Dependências funcionais, Falha de rede, Fora do escopo (+12 more)

### Community 19 - "scripts"
Cohesion: 0.10
Nodes (19): author, description, keywords, license, main, name, scripts, appium:start (+11 more)

### Community 20 - "compilerOptions"
Cohesion: 0.11
Nodes (18): config/**/*.ts, expect-webdriverio, node, pages/**/*.json, pages/**/*.ts, tests/**/*.ts, @wdio/globals/types, @wdio/mocha-framework (+10 more)

### Community 23 - "signup.test.ts"
Cohesion: 0.29
Nodes (7): AUTH_SIGNUP_001, AUTH_SIGNUP_002, Complexity, Criticality, Flakiness, ScenarioMeta, buildScenarioTitle()

### Community 27 - "BrowserStack — execução na nuvem"
Cohesion: 0.14
Nodes (13): `android-config.ts`, `app-option.ts`, BrowserStack — execução na nuvem, `buildAndroidBrowserStackConfig()`, `buildIosBrowserStackConfig()`, `createBrowserStackService(app)`, `credentials.ts`, `ios-config.ts` (+5 more)

### Community 33 - "index.ts"
Cohesion: 0.12
Nodes (5): DataPersistedKvAssertions, DragAssertions, SideMenuAssertions, SwipeAssertions, WebviewAssertions

### Community 37 - "Capabilities — configuração Appium por plataforma"
Cohesion: 0.18
Nodes (10): `android-capabilities.ts`, `android-local-config.ts`, `buildAndroidLocalConfig()`, `buildIosLocalConfig()`, Capabilities — configuração Appium por plataforma, Fluxo de composição, `ios-capabilities.ts`, `ios-local-config.ts` (+2 more)

### Community 38 - "Environment — variáveis e contexto de execução"
Cohesion: 0.18
Nodes (10): Environment — variáveis e contexto de execução, `execution-platform.ts`, `execution-target.ts`, `isBrowserStackTarget(): boolean`, `load-environment.ts`, `loadEnvironment(): void`, Por que uma pasta `environment/`?, `resolveExecutionPlatform(): ExecutionPlatform` (+2 more)

### Community 39 - "home.test.ts"
Cohesion: 0.15
Nodes (4): HomeActions, HomeAssertions, HomePage, HOME_HOME_001

### Community 41 - "page-maps.ts"
Cohesion: 0.24
Nodes (6): resolvePlatform(), ElementSelector, PageElement, PageJson, ExecutionPlatform, PlatformPageMaps

### Community 45 - "Config — infraestrutura de execução WDIO"
Cohesion: 0.22
Nodes (8): Arquivos na raiz, `build-wdio-config.ts`, Como executar, Config — infraestrutura de execução WDIO, Estrutura de pastas, Papel na arquitetura, Princípios aplicados, `wdio.conf.ts`

### Community 46 - "Shared — configuração base compartilhada"
Cohesion: 0.22
Nodes (8): `allure-lifecycle.ts`, Composição, `createAllureLifecycleHooks(allureResultsDir, allureReportDir)`, Por que uma pasta `shared/`?, `project-paths.ts`, Shared — configuração base compartilhada, `wdio-base.config.ts`, `wdioBaseConfig`

### Community 49 - "forms.test.ts"
Cohesion: 0.25
Nodes (4): FormsAssertions, FORMS_FORMS_001, FORMS_FORMS_003, FORMS_FORMS_004

### Community 50 - "loadTestData.ts"
Cohesion: 0.22
Nodes (7): SignupActions, performSignUp(), casesFor(), loadTestData(), requireTestCase(), TestCase, TestDataFile

### Community 51 - "login.test.ts"
Cohesion: 0.20
Nodes (5): ErrorValidationAssertions, AUTH_LOGIN_001, AUTH_LOGIN_002, AUTH_LOGIN_003, openLoginScreen()

### Community 52 - "Services — serviços WDIO"
Cohesion: 0.33
Nodes (5): `appium-local.service.ts`, `appiumLocalService`, Por que uma pasta `services/`?, Relação com BrowserStack, Services — serviços WDIO

### Community 56 - "Constants — valores fixos da execução"
Cohesion: 0.40
Nodes (4): `app-artifacts.ts`, Constants — valores fixos da execução, Por que uma pasta `constants/`?, `timeouts.ts`

### Community 57 - "Features — jornadas do usuário (native-demo-app)"
Cohesion: 0.40
Nodes (4): Features — jornadas do usuário (native-demo-app), Nota crítica, Scenario ID, Árvore

### Community 60 - "dismissSoftwareKeyboard"
Cohesion: 0.48
Nodes (3): dismissSoftwareKeyboard(), hideIosKeyboard(), isSoftwareKeyboardShown()

## Knowledge Gaps
- **406 isolated node(s):** `BrowserStackAppUpload`, `BrowserStackAppUpload`, `localConfigBuilders`, `browserStackConfigBuilders`, `AndroidCapabilityOptions` (+401 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `page` connect `page` to `page-element.ts`, `TabBarCustomizationPage`, `NavigationPage`, `SideMenuPage`, `PermissionsPage`, `FormsPage`, `DataInMemoryPage`, `DataPersistedKvPage`, `DataSecurePage`, `DataSqlitePage`, `index.ts`, `SignupPage`, `BiometricsLoginPage`, `home.test.ts`, `page-maps.ts`, `WebviewPage`, `side-menu.test.ts`, `SwipePage`, `DragPage`, `ErrorValidationPage`, `forms.test.ts`, `login.test.ts`, `SignupAssertions`, `biometrics-login.assertions.ts`, `data-in-memory.assertions.ts`, `dismissSoftwareKeyboard`, `data-secure.assertions.ts`, `data-sqlite.assertions.ts`, `navigation.assertions.ts`, `tab-bar-customization.assertions.ts`, `permissions.assertions.ts`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **What connects `BrowserStackAppUpload`, `BrowserStackAppUpload`, `localConfigBuilders` to the rest of the system?**
  _406 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `wdio-base.config.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0625694187338023 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `android` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Login` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Forms` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._