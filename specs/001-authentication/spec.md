# Feature Specification: Authentication

**Feature Branch**: `001-authentication`

**Created**: 2026-08-16

**Status**: Draft

**Input**: Domínio authentication do slice aprovado na constituição (login + signup; 5 Scenario IDs).

## Source of Truth *(mandatory)*

Cenários selecionados de `project/features/`. Given/When/Then abaixo são os já documentados — esta spec não cria catálogo paralelo nem reescreve o comportamento.

| Scenario ID | Fonte | Papel neste slice |
|-------------|-------|-------------------|
| AUTH-LOGIN-001 | [login.md](../../project/features/authentication/login.md) | Login com formato válido |
| AUTH-LOGIN-002 | [login.md](../../project/features/authentication/login.md) | E-mail inválido |
| AUTH-LOGIN-003 | [login.md](../../project/features/authentication/login.md) | Senha curta |
| AUTH-SIGNUP-001 | [signup.md](../../project/features/authentication/signup.md) | Cadastro com formato válido |
| AUTH-SIGNUP-002 | [signup.md](../../project/features/authentication/signup.md) | Confirmação de senha divergente |

Domínio: **authentication**. Um diretório Speckit. Constituição: `.specify/memory/constitution.md`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Login com formato válido (Priority: P1)

Pessoa abre a tela Login / Sign up, escolhe Login, informa e-mail em formato aceito e senha com 8 ou mais caracteres, e confirma. O aplicativo simula autenticação bem-sucedida (não consulta conta real) e mostra confirmação de sucesso.

**Why this priority**: É o caminho feliz de acesso. Sem ele, erros de validação e cadastro não têm âncora de “o que sucesso parece”.

**Independent Test**: Na categoria Login, preencher e-mail válido e senha ≥ 8, confirmar, e verificar o alerta de sucesso. Não depende de Sign up.

**Acceptance Scenarios**:

1. **AUTH-LOGIN-001 — Login com dados válidos de formato**
   **Dado que** o usuário está na categoria Login
   **Quando** informar e-mail em formato válido
   **E** informar senha com 8 ou mais caracteres
   **E** confirmar o acesso
   **Então** deverá ver loading
   **E** deverá receber o alerta Success / You are logged in!.

---

### User Story 2 - Login bloqueado por validação (Priority: P2)

Pessoa tenta entrar com e-mail fora do padrão ou senha curta. O aplicativo recusa o acesso e mostra a mensagem correspondente. Sucesso simulado não aparece.

**Why this priority**: Feedback de erro é requisito explícito do slice. Os dois casos são independentes entre si e do cadastro.

**Independent Test**: Na categoria Login, um caso com e-mail inválido e outro com senha < 8. Em cada um, confirmar e verificar a mensagem documentada. Sem alerta de sucesso.

**Acceptance Scenarios**:

1. **AUTH-LOGIN-002 — Login com e-mail inválido**
   **Dado que** o usuário está na categoria Login
   **Quando** informar e-mail inválido
   **E** confirmar o acesso
   **Então** o acesso não deverá ser concluído
   **E** deverá ver a mensagem Please enter a valid email address.

2. **AUTH-LOGIN-003 — Login com senha curta**
   **Dado que** o usuário está na categoria Login
   **Quando** informar senha com menos de 8 caracteres
   **E** confirmar o acesso
   **Então** o acesso não deverá ser concluído
   **E** deverá ver a mensagem Please enter at least 8 characters.

---

### User Story 3 - Cadastro com formato válido (Priority: P3)

Pessoa escolhe Sign up, preenche e-mail válido, senha ≥ 8 e confirmação igual, e confirma. O aplicativo simula cadastro bem-sucedido e mostra confirmação. Nenhuma conta é persistida.

**Why this priority**: Cobre Login/Cadastro pedido no slice. Vem depois do login porque a tela começa em Login e Sign up é o segundo formulário.

**Independent Test**: Selecionar Sign up, preencher os três campos com dados válidos, confirmar, verificar o alerta Signed Up!. Não depende dos casos de erro de login.

**Acceptance Scenarios**:

1. **AUTH-SIGNUP-001 — Cadastro com dados válidos de formato**
   **Dado que** o usuário está em Sign up
   **Quando** informar e-mail válido, senha ≥ 8 e confirmação igual
   **E** confirmar
   **Então** deverá receber o alerta Signed Up!.

---

### User Story 4 - Cadastro bloqueado por confirmação divergente (Priority: P4)

Pessoa está em Sign up e informa confirmação diferente da senha. O aplicativo recusa o cadastro e mostra a mensagem de senhas diferentes.

**Why this priority**: Único erro de signup no slice. Distinto do e-mail inválido de login: aqui o campo extra é a confirmação.

**Independent Test**: Em Sign up, senha e confirmação diferentes, confirmar, verificar Please enter the same password e ausência de sucesso.

**Acceptance Scenarios**:

1. **AUTH-SIGNUP-002 — Confirmação de senha divergente**
   **Dado que** o usuário está em Sign up
   **Quando** informar confirmação diferente da senha
   **E** confirmar
   **Então** deverá ver Please enter the same password
   **E** não deverá ver sucesso.

---

### Edge Cases

- Campos vazios ou inválidos combinados no Login: erros de validação aparecem e o alerta de sucesso não aparece. Jornada descrita em `login.md`; **não há Scenario ID** — não entra neste slice.
- Durante o loading (~1,5 s) após submit válido, o botão de confirmação fica desabilitado; um segundo toque não dispara outro sucesso.
- Alerta de sucesso só fecha pelo botão OK (não é cancelável por toque fora).
- Sign up não oferece biometria.
- Confirmação de senha no Sign up também exige comprimento ≥ 8, além de ser igual à senha.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O aplicativo MUST apresentar campos de e-mail e senha e o botão LOGIN quando a categoria Login estiver selecionada.
- **FR-002**: O aplicativo MUST simular login bem-sucedido (alerta Success / You are logged in!) quando e-mail passar na validação de formato e a senha tiver 8 ou mais caracteres (AUTH-LOGIN-001).
- **FR-003**: O aplicativo MUST recusar o login e exibir `Please enter a valid email address` quando o e-mail estiver fora do formato aceito (AUTH-LOGIN-002).
- **FR-004**: O aplicativo MUST recusar o login e exibir `Please enter at least 8 characters` quando a senha tiver menos de 8 caracteres (AUTH-LOGIN-003).
- **FR-005**: O aplicativo MUST apresentar campo de confirmação de senha e o botão SIGN UP quando a categoria Sign up estiver selecionada.
- **FR-006**: O aplicativo MUST simular cadastro bem-sucedido (alerta Signed Up! / You successfully signed up!) quando e-mail for válido, senha ≥ 8 e confirmação igual à senha (AUTH-SIGNUP-001).
- **FR-007**: O aplicativo MUST recusar o cadastro e exibir `Please enter the same password` quando a confirmação for diferente da senha (AUTH-SIGNUP-002).
- **FR-008**: Sucesso de login e de cadastro MUST ocorrer só após validação local de formato. MUST NOT exigir conta real, senha cadastrada ou persistência de usuário.
- **FR-009**: Os cinco Scenario IDs deste spec MUST ser verificáveis no Android e no iOS como o mesmo comportamento (um cenário, duas plataformas). Divergência de comportamento entre plataformas está fora deste domínio.

### Key Entities

- **Credencial de login**: e-mail + senha. “Válida” = formato de e-mail aceito e senha com no mínimo 8 caracteres.
- **Credencial de cadastro**: e-mail + senha + confirmação. “Válida” = regras de login + confirmação igual à senha e com comprimento ≥ 8.
- **Alerta de resultado**: diálogo modal de sucesso (login ou signed up) ou mensagem de validação no formulário. Não é sessão autenticada persistida.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em 100% das tentativas com e-mail em formato aceito e senha de 8+ caracteres, a pessoa vê a confirmação de login (Success / You are logged in!) após o loading.
- **SC-002**: Em 100% das tentativas com e-mail inválido, o acesso não conclui e a pessoa vê exatamente `Please enter a valid email address`.
- **SC-003**: Em 100% das tentativas com senha menor que 8 caracteres, o acesso não conclui e a pessoa vê exatamente `Please enter at least 8 characters`.
- **SC-004**: Em 100% das tentativas de cadastro com e-mail válido, senha ≥ 8 e confirmação igual, a pessoa vê a confirmação Signed Up!.
- **SC-005**: Em 100% das tentativas com confirmação diferente da senha, a pessoa vê exatamente `Please enter the same password` e não vê sucesso.
- **SC-006**: Os 5 Scenario IDs deste spec são demonstráveis de ponta a ponta no Android e no iOS, sem cenário duplicado por plataforma.

## Assumptions

- App sob teste é o demo nativo, não um app de produção Carrefour. “Credenciais válidas” = formato aceito no cliente.
- AUTH-LOGIN-001, AUTH-LOGIN-002 e AUTH-LOGIN-003 já possuem cobertura automatizada; permanecem neste spec porque o domínio authentication inclui o catálogo completo do slice, não só o gap.
- AUTH-SIGNUP-001 e AUTH-SIGNUP-002 são o gap de automação deste domínio.
- Data-driven obrigatório do slice está em forms (`FORMS-FORMS-001`), não neste domínio. Login já parametriza input por Scenario ID; este spec não exige conjuntos extras.
- Mensagens de erro e sucesso são as strings documentadas em `project/features/` (inglês da demo). Não traduzir na verificação.
- Tela Login / Sign up está acessível a partir do app aberto (pré-condição das features). Como chegar lá (aba, menu) não é cenário deste domínio.

## Out of Scope

Catálogo existente **não** selecionado neste spec:

- AUTH-SIGNUP-003 (e-mail inválido no cadastro) — existe em `signup.md`; fora do slice de 10.
- AUTH-BIOMETRICS-LOGIN-001, AUTH-BIOMETRICS-LOGIN-002, AUTH-BIOMETRICS-LOGIN-003
- Recuperação de senha, sessão persistida, logout, verificação de e-mail, termos de uso, backend real
- Domínios navigation e forms (specs Speckit seguintes)
- Pipeline CI e evidências de relatório (plano posterior do slice, não desta spec)
