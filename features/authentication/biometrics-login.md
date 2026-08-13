# Biometrics login

## Visão geral

Permitir autenticação alternativa via biometria do dispositivo (TouchID/FaceID/Fingerprint/Iris) quando houver biometria matriculada.

## Objetivo

Oferecer caminho de login sem digitar e-mail/senha, usando o prompt nativo do sistema operacional.

## Perfil do usuário

- Usuário com biometria cadastrada no dispositivo
- QA testando LocalAuthentication

## Pré-condições

- Dispositivo com biometria enrolled
- Categoria Login ativa
- Botão biométrico visível

---

## Jornada principal

### 1. Acessar Login

O usuário abre a categoria Login.

**Resultado esperado:**

Se biometria estiver disponível, o botão biométrico aparece.

---

### 2. Iniciar biometria

O usuário toca no botão biométrico.

**Resultado esperado:**

O SO exibe o prompt (ex.: Login with FaceID/TouchID/Fingerprint).

---

### 3. Autenticar

O usuário completa a biometria com sucesso.

**Resultado esperado:**

Alerta Success informa login através do sensor correspondente.


---

## Jornadas alternativas

### Cancelar prompt

O usuário cancela o prompt do SO.

**Resultado esperado:**

Não há alerta de sucesso; permanece na tela Login (falha tratada silenciosamente no app).


---

## Jornadas de exceção

### Biometria não matriculada

Dispositivo sem biometria enrolled.

**Resultado esperado:**

Botão biométrico não é exibido.

---

### Falha na autenticação

Biometria falha/é rejeitada.

**Resultado esperado:**

Sem alerta de sucesso; usuário permanece no formulário.


---

## Regras de negócio

- Botão só aparece com isEnrolledAsync verdadeiro e na página Login.
- disableDeviceFallback=true — sem fallback para senha do dispositivo no prompt.
- Sucesso depende do retorno success do authenticateAsync.
- Não exige preenchimento de e-mail/senha neste caminho.

## Cenários

### AUTH-BIOMETRICS-LOGIN-001 — Login biométrico com sucesso

**Dado que** o dispositivo tem biometria matriculada  
**E** o usuário está em Login  
**Quando** tocar no botão biométrico  
**E** autenticar com sucesso  
**Então** deverá ver alerta Success informando login pelo sensor.

---

### AUTH-BIOMETRICS-LOGIN-002 — Cancelar biometria

**Dado que** o prompt biométrico está aberto  
**Quando** o usuário cancelar  
**Então** não deverá ver alerta de sucesso  
**E** deverá permanecer na tela Login.

---

### AUTH-BIOMETRICS-LOGIN-003 — Sem biometria no dispositivo

**Dado que** não há biometria enrolled  
**Quando** abrir Login  
**Então** o botão biométrico não deverá ser exibido.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Prompt nativo abre quando elegível.
- Sucesso gera alerta específico do sensor.
- Cancelamento/falha não autenticam o usuário.

## Fora do escopo

- Cadastro biométrico dentro do app
- Fallback para PIN do app
- Persistência de sessão

## Dependências funcionais

- expo-local-authentication
- Permissões/biometria do SO
- Tela Login

## Observações

Textos de sensor variam por plataforma (TouchID/FaceID vs Fingerprint/Iris/Biometrics).

**Fonte (código):** `src/components/LoginForm.tsx` (handleBiometryLogin, isBiometricAvailable)
