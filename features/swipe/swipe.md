# Swipe

## Visão geral

Tela com carrossel horizontal de cards e área de scroll vertical longa até um logo oculto (You found me!!!).

## Objetivo

Permitir testar gestos de swipe horizontal e scroll/swipe vertical.

## Perfil do usuário

- Usuário explorando gestos
- QA validando carousel e scroll

## Pré-condições

- Aplicativo aberto
- Destino Swipe acessível

---

## Jornada principal

### 1. Abrir Swipe

O usuário acessa a tela Swipe.

**Resultado esperado:**

Carousel e área rolável são apresentados.

---

### 2. Swipe horizontal

O usuário desliza os cards do carrossel.

**Resultado esperado:**

Cards alternam (conteúdo WebdriverIO).

---

### 3. Scroll vertical

O usuário rola até o final da área.

**Resultado esperado:**

Encontra o logo com texto You found me!!!.


---

## Jornadas alternativas

### Parar no meio do carrossel

O usuário para em um card intermediário.

**Resultado esperado:**

O card correspondente permanece em foco/visível.


---

## Jornadas de exceção

_Nenhuma identificada no código._


---

## Regras de negócio

- Carousel possui conjunto fixo de 6 entradas.
- Logo oculto só aparece após scroll vertical suficiente.
- Não há persistência de posição.

## Cenários

### SWIPE-001 — Navegar carrossel

**Dado que** o usuário está em Swipe  
**Quando** deslizar horizontalmente no carousel  
**Então** deverá ver outros cards.

---

### SWIPE-002 — Encontrar logo oculto

**Dado que** o usuário está em Swipe  
**Quando** rolar verticalmente até o fim  
**Então** deverá visualizar o logo You found me!!!.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Swipe horizontal altera cards.
- Scroll vertical revela o logo.
- Gestos não quebram a tela.

## Fora do escopo

- Drag and drop
- Persistência do índice do card

## Dependências funcionais

- Carousel
- SliderEntry
- Navegação até Swipe

## Observações

Dois eixos de gesto na mesma feature por compartilharem a tela Swipe.

**Fonte (código):** `src/screens/Swipe.tsx`, `src/components/SliderEntry.tsx`
