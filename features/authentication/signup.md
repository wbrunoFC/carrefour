# Sign up

## Visão geral

Permitir que o usuário preencha e-mail, senha e confirmação de senha para simular cadastro na demo.

## Objetivo

Validar dados de cadastro no cliente e, quando válidos, exibir confirmação de sign up bem-sucedido.

## Perfil do usuário

- Usuário que deseja criar acesso na demo
- QA validando formulário de cadastro

## Pré-condições

- Aplicativo aberto
- Tela Login / Sign up acessível
- Categoria Sign up selecionada

---

## Jornada principal

### 1. Abrir Sign up

O usuário seleciona Sign up.

**Resultado esperado:**

Campos Email, Password e Confirm password aparecem; botão SIGN UP.

---

### 2. Informar dados

O usuário preenche e-mail, senha e confirmação.

**Resultado esperado:**

Valores permanecem nos campos; senhas mascaradas.

---

### 3. Confirmar cadastro

O usuário toca em SIGN UP.

**Resultado esperado:**

Se validações passarem, loading (~1,5s) e alerta Signed Up! / You successfully signed up!.


---

## Jornadas alternativas

### Voltar para Login

O usuário toca em Login.

**Resultado esperado:**

Campo de confirmação some; botão volta a LOGIN.


---

## Jornadas de exceção

### E-mail inválido

Cadastro com e-mail inválido.

**Resultado esperado:**

Mensagem Please enter a valid email address; sem alerta de sucesso.

---

### Senha curta

Senha com menos de 8 caracteres.

**Resultado esperado:**

Mensagem Please enter at least 8 characters.

---

### Confirmação diferente

Confirm password diferente da senha (ou curta).

**Resultado esperado:**

Mensagem Please enter the same password; sem sucesso.


---

## Regras de negócio

- Mesmas regras de e-mail e senha do Login.
- Confirmação deve ser igual à senha e ter comprimento ≥ 8.
- Biometria não é oferecida no Sign up.
- Não há persistência de conta criada.

## Cenários

### SIGNUP-001 — Cadastro com dados válidos de formato

**Dado que** o usuário está em Sign up  
**Quando** informar e-mail válido, senha ≥ 8 e confirmação igual  
**E** confirmar  
**Então** deverá receber o alerta Signed Up!.

---

### SIGNUP-002 — Confirmação de senha divergente

**Dado que** o usuário está em Sign up  
**Quando** informar confirmação diferente da senha  
**E** confirmar  
**Então** deverá ver Please enter the same password  
**E** não deverá ver sucesso.

---

### SIGNUP-003 — E-mail inválido no cadastro

**Dado que** o usuário está em Sign up  
**Quando** informar e-mail inválido  
**E** confirmar  
**Então** deverá ver Please enter a valid email address.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Dados válidos geram alerta de signed up.
- Inconsistências de senha/e-mail bloqueiam sucesso.
- Biometria permanece ausente neste fluxo.

## Fora do escopo

- Verificação de e-mail
- Persistência de usuário
- Termos de uso
- Login biométrico no Sign up

## Dependências funcionais

- Tela Login / Sign up
- Validação local do LoginForm

## Observações

Observação de implementação: o shake do campo de confirmação dispara quando a confirmação é válida (possível bug invertido em LoginForm.tsx).

**Fonte (código):** `src/components/LoginForm.tsx` (isSignUpPage, validateForm)
