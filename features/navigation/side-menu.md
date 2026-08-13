# Side menu

## Visão geral

Painel lateral (Menu) aberto pela aba Menu, listando todos os destinos principais do app para navegação rápida.

## Objetivo

Permitir que o usuário acesse qualquer tela principal mesmo que ela não esteja pinada na barra inferior.

## Perfil do usuário

- Usuário navegando entre telas
- QA exercitando navegação

## Pré-condições

- App no fluxo Expo Router (tabs)
- Aba Menu disponível

---

## Jornada principal

### 1. Abrir Menu

O usuário toca na aba Menu (direita).

**Resultado esperado:**

Painel lateral abre listando destinos.

---

### 2. Escolher destino

O usuário seleciona uma tela (ex.: Forms, Permissions).

**Resultado esperado:**

O app navega para o destino e o menu pode fechar.

---

### 3. Fechar Menu

O usuário toca no backdrop ou usa back (Android).

**Resultado esperado:**

O painel fecha sem navegar, se apenas fechou.


---

## Jornadas alternativas

### Abrir Menu já estando em um destino

Usuário em Forms abre Menu e escolhe Forms novamente.

**Resultado esperado:**

Permanece/reativa Forms; menu fecha.


---

## Jornadas de exceção

_Nenhuma identificada no código._


---

## Regras de negócio

- Menu lista os destinos principais definidos no app.
- Home e demais telas são alcançáveis pelo Menu.
- Abertura do menu é estado em memória (não persiste).

## Cenários

### MENU-001 — Abrir menu lateral

**Dado que** o app está aberto  
**Quando** tocar em Menu  
**Então** o painel lateral deverá abrir.

---

### MENU-002 — Navegar por destino

**Dado que** o Menu está aberto  
**Quando** selecionar um destino  
**Então** o usuário deverá ser levado à tela correspondente.

---

### MENU-003 — Fechar pelo backdrop

**Dado que** o Menu está aberto  
**Quando** tocar fora do painel  
**Então** o Menu deverá fechar.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Menu abre e fecha corretamente.
- Destinos navegam para as telas esperadas.
- Não exige autenticação.

## Fora do escopo

- Customização da tab bar (estrelas)
- Deep links

## Dependências funcionais

- CustomBottomTabBar
- TabSideMenu
- TabBarMenuContext

## Observações

Separado de tab-bar-customization: aqui o foco é abrir/navegar; lá o foco é pin/unpin.

**Fonte (código):** `src/components/TabSideMenu.tsx`, `src/components/CustomBottomTabBar.tsx`
