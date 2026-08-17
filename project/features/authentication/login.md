# Login

## Visão geral

Permitir que o usuário tente acessar a área autenticada informando e-mail e senha no formulário Login da demo (validação local, sem backend real).

## Objetivo

Validar credenciais no cliente e, quando o formato estiver correto, simular autenticação bem-sucedida com alerta de sucesso.

## Perfil do usuário

- Usuário que deseja autenticar-se com e-mail e senha
- QA automatizando fluxo de login

## Pré-condições

- Aplicativo aberto
- Aba ou destino Login acessível
- Categoria Login selecionada no formulário

---

## Jornada principal

### 1. Acessar Login

O usuário abre a tela Login / Sign up e seleciona a opção Login.

**Resultado esperado:**

Campos de e-mail e senha são apresentados, com botão LOGIN.

---

### 2. Informar e-mail

O usuário preenche o campo Email.

**Resultado esperado:**

O valor digitado permanece no campo.

---

### 3. Informar senha

O usuário preenche o campo Password.

**Resultado esperado:**

A senha é mascarada e permanece no campo.

---

### 4. Confirmar acesso

O usuário toca em LOGIN (ou confirma no teclado a partir da senha).

**Resultado esperado:**

Se e-mail e senha forem válidos pelo formato local, há loading (~1,5s) e alerta Success / You are logged in!.


---

## Jornadas alternativas

### Alternar para Sign up

O usuário toca em Sign up.

**Resultado esperado:**

O formulário passa a exibir confirmação de senha e botão SIGN UP.

---

### Usar biometria (quando disponível)

O usuário opta pelo botão biométrico (jornada própria).

**Resultado esperado:**

Fluxo biométrico é iniciado sem exigir e-mail/senha neste caminho.


---

## Jornadas de exceção

### E-mail inválido

O usuário informa e-mail fora do padrão e confirma.

**Resultado esperado:**

Mensagem Please enter a valid email address; campo pode tremer; login não conclui.

---

### Senha curta

O usuário informa senha com menos de 8 caracteres e confirma.

**Resultado esperado:**

Mensagem Please enter at least 8 characters; login não conclui.

---

### Campos vazios/invalidos combinados

O usuário confirma sem atender e-mail e senha válidos.

**Resultado esperado:**

Erros de validação aparecem; alerta de sucesso não é exibido.


---

## Regras de negócio

- E-mail deve passar na validação de formato (regex local).
- Senha deve ter no mínimo 8 caracteres.
- Não há verificação de conta real ou senha cadastrada — sucesso é simulado após validação de formato.
- Durante o loading de 1,5s, o botão fica desabilitado.
- Alerta de sucesso não é cancelável fora do botão OK.

## Cenários

### AUTH-LOGIN-001 — Login com dados válidos de formato

**Dado que** o usuário está na categoria Login  
**Quando** informar e-mail em formato válido  
**E** informar senha com 8 ou mais caracteres  
**E** confirmar o acesso  
**Então** deverá ver loading  
**E** deverá receber o alerta Success / You are logged in!.

---

### AUTH-LOGIN-002 — Login com e-mail inválido

**Dado que** o usuário está na categoria Login  
**Quando** informar e-mail inválido  
**E** confirmar o acesso  
**Então** o acesso não deverá ser concluído  
**E** deverá ver a mensagem Please enter a valid email address.

---

### AUTH-LOGIN-003 — Login com senha curta

**Dado que** o usuário está na categoria Login  
**Quando** informar senha com menos de 8 caracteres  
**E** confirmar o acesso  
**Então** o acesso não deverá ser concluído  
**E** deverá ver a mensagem Please enter at least 8 characters.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Credenciais com formato válido disparam sucesso simulado.
- Formato inválido bloqueia o sucesso e exibe feedback.
- Loading impede múltiplos submits simultâneos.

## Fora do escopo

- Cadastro real de usuário
- Recuperação de senha
- Sessão persistida / logout
- Backend de autenticação

## Dependências funcionais

- Tela Login acessível
- Componente LoginForm

## Observações

App demo: não existe conta ativa de verdade. 'Credenciais válidas' = formato aceito pelo cliente. Logout e forgot-password não existem neste repositório.

**Fonte (código):** `src/components/LoginForm.tsx` (validateForm, Alert Success), `src/screens/Login.tsx`
