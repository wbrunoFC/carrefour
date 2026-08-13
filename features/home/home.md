# Home

## Visão geral

Tela introdutória do aplicativo demo WebdriverIO/Appium, com logo, textos de boas-vindas e ícones informativos.

## Objetivo

Apresentar o propósito do aplicativo e servir como ponto de entrada visual estável para navegação e automação.

## Perfil do usuário

- Qualquer usuário que abre o aplicativo
- Analista/QA explorando a demo

## Pré-condições

- Aplicativo instalado e iniciado
- Navegação por abas (Expo Router) disponível

---

## Jornada principal

### 1. Abrir o aplicativo

O usuário inicia o aplicativo.

**Resultado esperado:**

A aba Home é acessível e a tela inicial carrega.

---

### 2. Visualizar conteúdo

O usuário observa logo, título e textos de suporte (Apple/Android/Support).

**Resultado esperado:**

Conteúdo introdutório permanece visível e legível.

---

### 3. Rolar a tela

O usuário realiza scroll vertical, se necessário.

**Resultado esperado:**

O conteúdo permanece acessível sem ações destrutivas.


---

## Jornadas alternativas

### Acesso via Menu lateral

O usuário abre o Menu e escolhe Home.

**Resultado esperado:**

A tela Home é exibida novamente.


---

## Jornadas de exceção

_Nenhuma identificada no código._


---

## Regras de negócio

- Home não exige autenticação.
- Home não altera dados persistidos.
- Home permanece sempre disponível na barra inferior (fixa).

## Cenários

### HOME-001 — Visualizar tela Home

**Dado que** o aplicativo está aberto  
**Quando** o usuário acessar a aba Home  
**Então** deverá visualizar o conteúdo introdutório do aplicativo.

---

### HOME-002 — Scroll na Home

**Dado que** o usuário está na Home  
**Quando** rolar a tela verticalmente  
**Então** o conteúdo deverá permanecer acessível sem erro.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- A tela Home abre sem erro.
- Elementos introdutórios estão visíveis.
- Nenhuma ação crítica é exigida do usuário.

## Fora do escopo

- Login
- Cadastro
- Configurações de conta

## Dependências funcionais

- Navegação por abas ou Menu
- Assets de imagem/logo disponíveis

## Observações

Documenta comportamento observado da tela Home. Não há regras de negócio de produto além da apresentação da demo.

**Fonte (código):** `src/screens/Home.tsx`, `app/(tabs)/index.tsx`
