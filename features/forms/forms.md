# Forms

## Visão geral

Tela de componentes de formulário para interação: input com eco, switch, dropdown e botões ativo/inativo.

## Objetivo

Permitir exercitar controles de formulário comuns em automação mobile e validar feedback visual/alertas.

## Perfil do usuário

- Usuário explorando controles
- QA/Appium interagindo com formulários

## Pré-condições

- Aplicativo aberto
- Destino Forms acessível

---

## Jornada principal

### 1. Abrir Forms

O usuário acessa a tela Forms.

**Resultado esperado:**

Seção Form components é exibida com input, switch, dropdown e botões.

---

### 2. Digitar no input

O usuário digita até 30 caracteres.

**Resultado esperado:**

O texto é ecoado em You have typed.

---

### 3. Alternar switch

O usuário altera o switch.

**Resultado esperado:**

O texto de orientação reflete ON/OFF.

---

### 4. Selecionar dropdown

O usuário escolhe uma opção (webdriver.io / Appium / This app).

**Resultado esperado:**

O valor selecionado fica associado ao picker.

---

### 5. Acionar botão Active

O usuário toca em Active.

**Resultado esperado:**

Alerta This button is / This button is active com ações Ask me later, Cancel e OK.


---

## Jornadas alternativas

### Tentar botão Inactive

O usuário toca em Inactive.

**Resultado esperado:**

Nenhuma ação/alerta — botão desabilitado.


---

## Jornadas de exceção

### Limite de caracteres

O usuário tenta digitar além de 30 caracteres.

**Resultado esperado:**

Input respeita maxLength=30.


---

## Regras de negócio

- Input ecoa o texto digitado em tempo real.
- Switch apenas altera estado local.
- Dropdown oferece exatamente 3 opções fixas.
- Somente o botão Active dispara alerta.
- Não há envio a servidor.

## Cenários

### FORMS-001 — Eco do input

**Dado que** o usuário está em Forms  
**Quando** digitar um texto no input  
**Então** o mesmo texto deverá aparecer em You have typed.

---

### FORMS-002 — Toggle do switch

**Dado que** o switch está OFF  
**Quando** o usuário ativá-lo  
**Então** o texto deverá indicar a opção de desligar (OFF) e o estado ficar ativo.

---

### FORMS-003 — Botão Active

**Dado que** o usuário está em Forms  
**Quando** tocar em Active  
**Então** deverá ver o alerta informando que o botão está active.

---

### FORMS-004 — Botão Inactive

**Dado que** o usuário está em Forms  
**Quando** tentar acionar Inactive  
**Então** nenhum alerta deverá ser exibido.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Todos os controles principais são interativos conforme estado.
- Active gera alerta; Inactive não.
- Input respeita limite e eco.

## Fora do escopo

- Validação de e-mail/senha
- Persistência das escolhas
- Submit remoto

## Dependências funcionais

- Componente FormComponents
- Navegação até Forms

## Observações

Uma única jornada de tela; controles não foram separados em features distintas por compartilharem o mesmo objetivo de playground.

**Fonte (código):** `src/components/FormComponents.tsx`, `src/screens/Forms.tsx`
