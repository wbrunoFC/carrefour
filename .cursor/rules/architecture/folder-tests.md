# Test Organization

Norma de estrutura de testes para projetos mobile de **alta complexidade** (WebdriverIO + Appium + TypeScript, Android/iOS, multi-ambiente, paralelo, CI/CD, múltiplos QAs, agentes de IA).

Este repositório pode ser simples; a regra permanece a norma enterprise. Exemplos usam o catálogo local (`authentication`, `data-management`, …) e, quando necessário, um exemplo ilustrativo de escala (checkout/payments).

Documentação relacionada:

- Criticality → [../criticality/decision.md](../criticality/decision.md)
- Complexity → [../complexity/decision.md](../complexity/decision.md)
- Flakiness → [../flakiness/decision.md](../flakiness/decision.md)

---

# Parte A — Constitution (canônica)

## A.1 Objetivo

A pasta `tests/` contém **somente** a implementação dos testes automatizados.

Qualquer QA ou agente deve conseguir:

1. localizar um teste;
2. entender o que valida;
3. identificar domínio, funcionalidade, criticidade, complexidade e flakiness;
4. executar, alterar e manter o cenário;
5. rastrear até a especificação funcional.

---

## A.2 Mapa de camadas (obrigatório)

| Camada | Papel | Conteúdo | Exemplo |
|--------|--------|----------|---------|
| `features/` | Conhecimento / especificação + cenários | Markdown de jornada | `features/authentication/login.md` |
| `pages/` | Page Object (elementos) | `android.json`, `ios.json` | `pages/login/android.json` |
| `tests/` | Automação executável | `*.test.ts` + `support/` | `tests/e2e/authentication/login/` |
| `config/` | Infra de execução | capabilities, devices, envs | `config/capabilities/android.ts` |

Fluxo de rastreabilidade:

```text
features/{domain}/{feature}.md          ← cenários + Scenario ID
        ↓
pages/{feature}/android.json|ios.json   ← Element ID (EL00N) + selectors
        ↓
tests/{type}/{domain}/{feature}/{feature}.test.ts
        ↓
execução (config/) → report / evidência / defect
```

Regras de elo:

1. O **mesmo Scenario ID** aparece em `features/**/*.md`, no `it()` do teste e no report.
2. Selectors vêm de `pages/{feature}/{platform}.json` — não hardcoded no teste.
3. Em `pages/*.json`, `id` do elemento usa prefixo **`EL`** (`EL001`, …). Nunca `CT`.
4. **Proibido** `pages/**/*.feature` — Gherkin/cenários não vivem em `pages/` (fonte única: `features/`).
5. `config/` **nunca** fica dentro de `tests/`.

---

## A.3 Estrutura oficial

```text
tests/
├── e2e/
│   └── <domain>/
│       └── <feature>/
│           └── <feature>.test.ts
├── integration/
│   └── <domain>/
│       └── <feature>/
│           └── <feature>.test.ts
├── platform/
│   ├── android/
│   │   └── <domain>/
│   │       └── <feature>/
│   │           └── <feature>.test.ts
│   └── ios/
│       └── <domain>/
│           └── <feature>/
│               └── <feature>.test.ts
├── accessibility/
│   └── <domain>/
│       └── <feature>/
│           └── <feature>.test.ts
└── support/
    ├── fixtures/
    ├── builders/
    ├── factories/
    ├── hooks/
    └── metadata/
```

Hierarquia física:

```text
Tipo de teste → Domínio → Funcionalidade → Teste
```

Nomenclatura de diretórios = linguagem de negócio (`authentication/`, `login/`).  
Proibido organizar por tecnologia (`appium/`, `webdriverio/`, `helpers/`, `utils/`).

---

## A.4 Princípios

1. Organizar por domínio funcional; feature dentro do domínio.
2. Separar tipo de teste da funcionalidade.
3. Não duplicar teste só porque existe Android e iOS.
4. Classificar cenários com metadata; compor suítes com tags.
5. Todo cenário automatizado tem Scenario ID único **no repositório**.
6. Separar implementação de dados e infraestrutura.
7. Preferir testes independentes de plataforma.
8. Estrutura física = domínio, nunca característica temporária (smoke, flaky, high).
9. Evitar arquivos/diretórios genéricos.
10. Uma estrutura única para todos os QAs e agentes.
11. Pasta de feature em `tests/` nasce com o **primeiro teste real** — não por antecipação vazia.
12. Um comportamento automatizado existe **uma única vez**.

---

## A.5 Scenario ID (formato congelado)

Formato obrigatório:

```text
<DOMAIN>-<FEATURE>-<NNN>
```

- `FEATURE`: nome do diretório/arquivo da feature em `UPPER-KEBAB` (ex.: `biometrics-login` → `BIOMETRICS-LOGIN`).
- `NNN`: inteiro com 3+ dígitos, sequencial **por feature**, único quando concatenado ao prefixo.
- Unicidade: **global no repositório** (o ID completo não se repete).
- `DOMAIN`: token congelado do diretório em `features/` (não inventar abreviação):

| Pasta `features/` | `DOMAIN` |
|-------------------|----------|
| `authentication/` | `AUTH` |
| `data-management/` | `DATA` |
| `navigation/` | `NAV` |
| `home/` | `HOME` |
| `forms/` | `FORMS` |
| `webview/` | `WEBVIEW` |
| `swipe/` | `SWIPE` |
| `drag/` | `DRAG` |
| `permissions/` | `PERMISSIONS` |

Novo domínio no repo ⇒ adicionar linha nesta tabela **antes** de criar Scenario ID.

Exemplos válidos:

```text
AUTH-LOGIN-001
AUTH-SIGNUP-001
AUTH-BIOMETRICS-LOGIN-001
DATA-DATA-SECURE-001
NAV-SIDE-MENU-001
HOME-HOME-001
PERMISSIONS-PERMISSIONS-001
```

Exemplos inválidos:

```text
CT001                 # sem domínio/feature
LOGIN-001             # sem DOMAIN
BIO-001               # abreviação de feature não canônica
PAYMENT-001           # sem feature / domínio inexistente
login-1               # minúsculo / curto
AUTH_LOGIN_001        # underscore
```

Em `features/{domain}/{feature}.md`:

```markdown
### AUTH-LOGIN-001 — Login com dados válidos de formato
```

No teste:

```ts
it('@AUTH-LOGIN-001', async () => { /* ... */ });
```

Element ID (page object), separado do Scenario ID:

```json
"id": "EL001"
```

**Não alterar** o Scenario ID após criação (exceto correção de colisão documentada).

Legado: `CT00x` em elemento → migrar para `EL00x`. `CT00x` / IDs curtos em cenário → migrar para `<DOMAIN>-<FEATURE>-<NNN>` em `features/` + teste.

---

## A.6 Decisão de tipo de teste

Perguntar nesta ordem. Parar no primeiro “sim”.

| # | Pergunta | Destino |
|---|----------|---------|
| 1 | O **objetivo principal** do cenário é acessibilidade (label, foco, reader, ordem de navegação)? | `accessibility/` |
| 2 | O comportamento **só existe** ou **diverge de forma material** em Android **ou** iOS (não apenas selector)? | `platform/{android\|ios}/` |
| 3 | O foco é contrato/integração app ↔ serviço/OS/storage/webview/bridge (não a jornada UI completa)? | `integration/` |
| 4 | Caso contrário (jornada de usuário / fluxo funcional) | `e2e/` |

### A.6.1 `e2e/` — vai aqui se

- valida jornada relevante para o usuário;
- atravessa uma ou mais telas com resultado de negócio observável;
- comportamento funcional é o mesmo em Android e iOS.

**Não vai aqui se:** o assert central é só a11y; ou só API/storage sem UI; ou só quirk de OS.

### A.6.2 `integration/` — vai aqui se (mobile)

Integração real com:

- autenticação biométrica do OS (`LocalAuthentication`);
- storage (`SecureStore`, SQLite, KV persistido, memória);
- permissões de runtime / services do OS;
- WebView / bridge;
- deep link; push; API/backend real.

**Não vai aqui se:** validação é só formato de campo + alerta local sem dependência externa/OS.

### A.6.3 `platform/` — vai aqui se

- Face ID vs fingerprint com fluxos distintos;
- diálogos/permission prompts com semântica diferente por OS;
- API nativa exclusiva de uma plataforma.

**Não vai aqui se:** só muda `accessibilityId` / classe nativa do elemento — isso é `pages/*/android.json` vs `ios.json`, e o teste fica em `e2e/` ou `integration/`.

Formato **congelado** (nunca flat):

```text
tests/platform/android/<domain>/<feature>/
tests/platform/ios/<domain>/<feature>/
```

### A.6.4 `accessibility/` — vai aqui se

- o cenário **existe para** validar acessibilidade.

**Não vai aqui se:** o e2e só confere um `testID` de passagem — isso é assert auxiliar no teste funcional, não pasta `accessibility/`.

---

## A.7 Metadata obrigatória

Cada cenário automatizado declara:

```yaml
id: AUTH-LOGIN-001
criticality: HIGH          # HIGH | MEDIUM | LOW
complexity: LOW            # HIGH | MEDIUM | LOW
flakiness: UNKNOWN         # UNKNOWN | HIGH | MEDIUM | LOW
tags:
  - authentication
  - login
  - smoke
platforms:
  - android
  - ios
```

Schema canônico e validação: `tests/support/metadata/` (ver Apêndice B).

Valores de `criticality` / `complexity` / `flakiness` seguem as decision rules linkadas no topo.

### A.7.1 Flakiness: design vs observação

| Momento | Valor permitido | Significado |
|---------|-----------------|-------------|
| Criação do teste | `UNKNOWN` ou `LOW` | Hipótese inicial (`LOW` só se interação puramente determinística) |
| Após evidência de execução | `HIGH` \| `MEDIUM` \| `LOW` | Atualizar conforme [flakiness/decision.md](../flakiness/decision.md) |

Quando `HIGH` ou `MEDIUM`, registrar:

```yaml
flakiness_reason:
  - Timeout durante carregamento da tela
  - Dependência de diálogo do OS
```

Flakiness **não** cria pasta (`tests/flaky/` proibido).

Criticality e complexity também **não** viram pasta.

---

## A.8 Suítes = tags, não pastas

Proibido:

```text
tests/smoke/
tests/regression/
tests/critical/
tests/nightly/
tests/high/
tests/flaky/
```

Seleção de execução = tags + metadata (`@smoke`, `criticality=HIGH`, `platforms=android`, …).

---

## A.9 Android e iOS

Por padrão: um teste multiplataforma em `e2e/` ou `integration/`.

Plataforma de execução vem de `config/` (capabilities/devices), não da árvore de pastas.

Duplicar sob `platform/` **somente** com diferença comportamental real (A.6.3).

---

## A.10 Relação teste ↔ page object ↔ features

1. Domínio/feature do teste = domínio em `features/` e pasta em `pages/` (nome da feature).
2. Cenários em `features/**/*.md` definem o contrato comportamental do Scenario ID.
3. O `*.test.ts` implementa esse contrato; não redefine outro comportamento sob o mesmo ID.
4. Elementos: ler de `pages/{feature}/android.json` ou `ios.json` conforme a sessão (`id` = `EL00N`).

---

## A.11 Dados e abstrações

- Dados de cenário não ficam hardcoded em massa dentro do `it()`.
- Usar `support/factories`, `support/builders`, `support/fixtures` conforme Apêndice B.
- Proibido: `utils.ts`, `helpers.ts`, `common.ts`, `misc.ts`.

---

## A.12 Checklist — criar teste

```text
[ ] Scenario ID no formato <DOMAIN>-<FEATURE>-<NNN>
[ ] ID ainda não existe no repo
[ ] Domínio e feature corretos
[ ] Tipo decidido via A.6
[ ] Comportamento Android/iOS é o mesmo? (se sim, não usar platform/)
[ ] features/*.md existe / cenários alinhados ao Scenario ID
[ ] Page objects em pages/ reutilizáveis (`EL00N`, sem `.feature`)
[ ] criticality + complexity definidos pelas decision rules
[ ] flakiness inicial UNKNOWN ou LOW
[ ] tags definidas
[ ] dados via factory/builder/fixture quando couber
[ ] não duplica cenário existente
```

## A.13 Checklist — manter teste

1. Não mudar Scenario ID.
2. Não duplicar cenário.
3. Não mover pasta sem mudança real de domínio/tipo.
4. Atualizar metadata com justificativa.
5. Reutilizar pages/support existentes.
6. Manter determinismo; sem dependência entre cenários.
7. Não meter lógica de plataforma em teste multiplataforma.

## A.14 Regras para agentes de IA

1. Seguir Parte A integralmente; Apêndices detalham, não contradizem.
2. Identificar Scenario ID antes de editar.
3. Verificar duplicata por ID / domínio / feature.
4. Não criar `platform/` sem diferença comportamental comprovada no código.
5. Não criar pastas de suíte nem arquivos genéricos.
6. Selectors só via `pages/`.
7. Não alterar esta arquitetura sem pedido explícito do humano.

---

## A.15 Regra de ouro

```text
Onde o comportamento pertence?     → pastas (tipo + domínio + feature)
Como classificar / selecionar?     → metadata + tags
```

---

# Parte B — Apêndices

## Apêndice B — `support/`

Não contém cenários funcionais.

```text
tests/support/
├── fixtures/     # estados reutilizáveis (ex.: authenticated-user.ts)
├── builders/     # objetos/estados complexos com muitas combinações
├── factories/    # criação rápida de dados (UserFactory.create())
├── hooks/        # app-launch, cleanup, screenshots, …
└── metadata/     # tipos + validação do schema do cenário
```

### Quando usar o quê

| Recurso | Usar quando | Evitar quando |
|---------|-------------|----------------|
| **Factory** | dado simples/default, 1 chamada | objeto com 10 variantes de montagem |
| **Builder** | muitas propriedades / combinações | um único objeto literal basta |
| **Fixture** | estado pronto de pré-condição (usuário logado, feature flag) | só um payload JSON sem estado |
| **Hook** | ciclo de vida da suíte/sessão | lógica de negócio do cenário |
| **Metadata** | schema/validação compartilhada | valores espalhados sem tipo |

Exemplo de factory:

```ts
const user = UserFactory.create();
```

Exemplo de builder:

```ts
const checkout = new CheckoutBuilder()
  .withProduct(product)
  .withAddress(address)
  .withPayment(payment)
  .build();
```

---

## Apêndice C — Exemplos por tipo

### C.1 Catálogo local (canônico neste repo)

```text
tests/e2e/
├── authentication/
│   ├── login/
│   ├── signup/
│   └── biometrics-login/
├── home/home/
├── forms/forms/
├── webview/webview/
├── swipe/swipe/
├── drag/drag/
├── navigation/
│   ├── side-menu/
│   └── tab-bar-customization/
├── permissions/permissions/
└── data-management/
    ├── data-in-memory/
    ├── data-persisted-kv/
    ├── data-sqlite/
    └── data-secure/

tests/integration/
├── authentication/biometrics-login/
├── webview/webview/
├── permissions/permissions/
└── data-management/...

tests/platform/
├── android/
│   ├── authentication/biometrics-login/
│   └── permissions/permissions/
└── ios/
    ├── authentication/biometrics-login/
    └── permissions/permissions/

tests/accessibility/
└── (mesmo domínio/feature quando o objetivo for a11y)
```

### C.2 Exemplo de escala (ilustrativo — outro produto)

Em um app de varejo grande, a mesma norma produz:

```text
tests/e2e/
├── authentication/
├── onboarding/
├── navigation/
├── products/
├── checkout/
└── payments/
```

Não copiar esses domínios para o sandbox local sem o produto correspondente.

### C.3 Exemplo completo (local)

Estrutura:

```text
tests/e2e/authentication/login/login.test.ts
pages/login/android.json
pages/login/ios.json
features/authentication/login.md
```

Teste (esqueleto):

```ts
describe('FEATURE: login', () => {
  it('@AUTH-LOGIN-001', async () => {
    // selectors: pages/login/{platform}.json (Element ID EL00N)
    // cenário: features/authentication/login.md
    // dados: support/factories ou builders
  });
});
```

Metadata:

```yaml
id: AUTH-LOGIN-001
criticality: HIGH
complexity: LOW
flakiness: LOW
tags: [authentication, login, smoke, regression]
platforms: [android, ios]
```

---

## Apêndice D — Descoberta

Localizar teste por qualquer um:

- Scenario ID (`AUTH-LOGIN-001`)
- domínio (`authentication`)
- feature (`login`)
- nome do cenário
- tag (`@smoke`)

---

## Apêndice E — Multi-QA

Uma convenção só. Proibido coexistir:

```text
tests/login/
tests/authentication/
tests/auth/
```

Correto:

```text
tests/e2e/authentication/login/
```

---

## Apêndice F — Escalabilidade

A estrutura permanece estável de dezenas a milhares de testes. Crescimento = profundidade em domínio/feature, não novas raízes ad hoc.

Seleção em CI:

```text
Scenario ID | Tags | Criticality | Complexity | Flakiness | Platform | Environment | Device
```

---

## Apêndice G — Resumo

| Tema | Decisão |
|------|---------|
| Organização | Domínio → Feature |
| Tipo | Raiz: e2e / integration / platform / accessibility |
| Platform path | `platform/{os}/<domain>/<feature>/` |
| Scenario ID | `<DOMAIN>-<FEATURE>-<NNN>` global |
| Android + iOS iguais | Um teste; config escolhe device |
| Suítes | Tags/metadata |
| Criticality / Complexity / Flakiness | Metadata (decision rules) |
| Flakiness na criação | `UNKNOWN` ou `LOW` |
| Dados | factories / builders / fixtures |
| Arquivos genéricos | Proibidos |
| Pastas vazias preventivas | Proibidas (nascem com o 1º teste) |
| Camadas | features → pages → tests → config |
| Scenario ID | em `features/` + `tests/` (`<DOMAIN>-<FEATURE>-<NNN>`) |
| Element ID | em `pages/*.json` (`EL00N`) |
| `pages/**/*.feature` | Proibido |
| Tecnologia | Não define pasta funcional |

---

## Apêndice H — Princípios finais

> Um teste existe uma única vez.  
> Pertence a um domínio e uma feature claros.  
> Android/iOS iguais ⇒ sem duplicar.  
> Suítes são propriedades, não diretórios.  
> Criticality, Complexity e Flakiness são metadata.  
> Dados reutilizáveis; abstrações com responsabilidade clara.  
> Todo cenário tem Scenario ID.  
> `tests/` cresce em profundidade funcional, não em complexidade estrutural.
)
