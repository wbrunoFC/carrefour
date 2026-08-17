# Research: Authentication

## Decision: Reusar `pages/signup`; não fundir com `pages/login`

- **Decision**: Completar o módulo `project/pages/signup/` que já existe. Não criar página nova. Não mover campos de signup para `pages/login/` neste slice.
- **Rationale**: Constituição manda reusar page object existente. Signup já tem tab, e-mail, senha, confirmação e botão SIGN UP. Gap real = alerta de sucesso + mensagem de senha divergente.
- **Alternatives considered**: (1) Fundir signup em login — DRY de selectors duplicados (`Login-screen`, e-mail, senha), mas é refactor fora do gap e mistura dois fluxos no mesmo módulo. (2) Página `pages/authentication/` nova — viola “não adicionar módulo que já existe”.

Duplicação login/signup fica cheiro conhecido. Refatorar só se um terceiro fluxo na mesma tela aparecer.

## Decision: Estender `authentication.json`; não criar `signup.json`

- **Decision**: Dois cases novos no JSON de domínio AUTH já usado pelo login.
- **Rationale**: `requireTestCase('authentication', scenarioId)` já existe. Mesmo arquivo, mesma chave `scenarioId`. YAGNI de segundo arquivo.
- **Alternatives considered**: `data/signup.json` — simetria com a pasta de teste, custo de mais loader path sem ganho.

## Decision: Erro de confirmação em `error-validation`; sucesso em `signup`

- **Decision**: `Please enter the same password` vira elemento novo em `pages/error-validation/` (próximo `EL026`). Alerta `Signed Up!` / `You successfully signed up!` e OK vira `EL008`/`EL009` em `pages/signup/` (espelha login `successAlert` / `successAlertOk`).
- **Rationale**: Login já separa validação (error-validation) de alerta de sucesso (login). Copiar o padrão. Não hardcode string no `it()`.
- **Alternatives considered**: Colocar o erro no JSON de signup — quebra o dono atual das mensagens `Please enter…`. Assertion inline no teste — viola selectors-only-from-JSON.

## Decision: Login intacto

- **Decision**: Não editar `login.test.ts`, `login.scenarios.ts`, selectors de login.
- **Rationale**: AUTH-LOGIN-001..003 já cumprem a spec. Diff de login = risco sem requisito.
- **Alternatives considered**: Reescrever login para “alinhar” com signup — churn.

## Decision: Fixture existente + `SignupActions.signUp`

- **Decision**: `openLoginScreen()` (já clica Login) e em seguida `SignupActions.signUp()`, que já clica Sign up. Sem `openSignUpScreen`.
- **Rationale**: Ação de signup já troca a categoria. Fixture extra = wrapper vazio.
- **Alternatives considered**: Fixture nova — uma linha a mais, zero comportamento.

## Decision: `hideKeyboard` no signup, igual login

- **Decision**: Copiar o `try/catch` de `LoginActions.login` para `SignupActions.signUp` depois de preencher campos.
- **Rationale**: Teclado cobre o botão SIGN UP no Android. Login já resolveu. Sem isso AUTH-SIGNUP-* fica flaky. Não é `sleep`.
- **Alternatives considered**: Scroll genérico, wait fixo — pior que hideKeyboard pontual.

## Decision: CI e Allure config fora deste plan

- **Decision**: Não criar `.github/workflows`. Não alterar `project/config/` Allure.
- **Rationale**: Spec marca CI/evidências como plano posterior do slice. Allure já gera resumo, screenshot de falha, logs e env (`reportedEnvironmentVars`) para qualquer `*.test.ts` novo.
- **Alternatives considered**: Entregar CI agora — viola “um domínio por vez” e o Out of Scope da spec.

## Decision: AUTH-SIGNUP-003 continua fora

- **Decision**: Não automatizar e-mail inválido no cadastro neste domínio.
- **Rationale**: Constituição congelou 10 IDs. 003 existe no catálogo; não está no slice. Login já cobre a mesma mensagem (AUTH-LOGIN-002).
- **Alternatives considered**: “Já que estamos no form…” — infla o slice.

## NEEDS CLARIFICATION

Nenhum. Stack, IDs e mensagens vêm da constituição + `project/features/` + page objects no disco.
