# Tab bar customization

## Visão geral

Permitir pin/unpin de telas na barra inferior (até 5 entre Home e Menu) via estrelas no Menu.

## Objetivo

Customizar quais destinos aparecem na bottom tab bar sem remover Home e Menu fixos.

## Perfil do usuário

- Usuário organizando atalhos
- QA validando limite da tab bar

## Pré-condições

- Menu lateral aberto
- Telas elegíveis listadas com estrela

---

## Jornada principal

### 1. Abrir Menu

O usuário abre o Menu.

**Resultado esperado:**

Itens com estrela indicam pin atual.

---

### 2. Pinativar tela

O usuário toca estrela outline de uma tela off (com vaga).

**Resultado esperado:**

A tela passa a aparecer na barra entre Home e Menu.

---

### 3. Despinar tela

O usuário toca estrela filled de uma tela on.

**Resultado esperado:**

A tela some da barra (continua acessível pelo Menu).


---

## Jornadas alternativas

### Defaults

Usuário inicia app sem alterar pins.

**Resultado esperado:**

Web, Login, Forms, Swipe e Drag pinados; Permissions e Data Management off por padrão.


---

## Jornadas de exceção

### Limite de 5 atingido

Usuário tenta pinar sexta tela no meio.

**Resultado esperado:**

Alerta Tab bar full; pin não é aplicado.


---

## Regras de negócio

- Home e Menu são sempre fixos nas extremidades.
- Máximo de 5 telas pinadas no meio (MAX_PINNED_TABS).
- Pins não persistem após reinício do app (estado em memória).
- Telas não pinadas continuam acessíveis pelo Menu.

## Cenários

### TABS-001 — Pin de tela com vaga

**Dado que** há menos de 5 pins  
**Quando** o usuário ativar a estrela de Permissions  
**Então** Permissions deverá aparecer na tab bar.

---

### TABS-002 — Unpin de tela

**Dado que** Forms está pinada  
**Quando** o usuário desativar a estrela de Forms  
**Então** Forms não deverá aparecer na tab bar  
**E** ainda deverá ser acessível pelo Menu.

---

### TABS-003 — Limite da tab bar

**Dado que** já existem 5 pins  
**Quando** tentar pinar outra tela  
**Então** deverá ver alerta Tab bar full  
**E** o novo pin não deverá ser aplicado.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Pins alteram a composição da barra.
- Limite de 5 é respeitado com feedback.
- Home/Menu permanecem fixos.

## Fora do escopo

- Persistência de preferência
- Reordenação drag das tabs

## Dependências funcionais

- TabBarMenuContext
- TabSideMenu
- CustomBottomTabBar

## Observações

Estado inicial definido em TabBarMenuContext (defaults).

**Fonte (código):** `src/context/TabBarMenuContext.tsx`, `src/components/TabSideMenu.tsx`
