# Drag

## Visão geral

Puzzle 3×3 em que o usuário arrasta peças até as zonas corretas; ao completar, celebração e opção de Retry.

## Objetivo

Permitir exercitar drag-and-drop e validar conclusão do puzzle.

## Perfil do usuário

- Usuário resolvendo o puzzle
- QA testando drag/drop

## Pré-condições

- Aplicativo aberto
- Destino Drag acessível

---

## Jornada principal

### 1. Abrir Drag

O usuário acessa a tela Drag.

**Resultado esperado:**

Peças e zonas de drop são apresentadas.

---

### 2. Arrastar peça correta

O usuário arrasta uma peça até a zona correspondente e solta.

**Resultado esperado:**

A peça encaixa; contador interno avança.

---

### 3. Completar puzzle

O usuário encaixa as 9 peças.

**Resultado esperado:**

Confetti, mensagem de Congratulations e botão Retry.

---

### 4. Reiniciar

O usuário toca em Retry (ou ícone renew).

**Resultado esperado:**

O puzzle volta ao estado inicial.


---

## Jornadas alternativas

### Reset antes de concluir

O usuário toca renew no meio do jogo.

**Resultado esperado:**

Peças voltam; progresso zera.


---

## Jornadas de exceção

### Soltar em zona errada

O usuário solta a peça fora do alvo correto.

**Resultado esperado:**

Peça retorna (spring) à origem; sem mensagem de erro.


---

## Regras de negócio

- Somente o encaixe na zona correta contabiliza progresso.
- Vitória ocorre ao atingir 9 encaixes.
- Retry/renew restauram o estado do jogo.
- Estado do puzzle é em memória (não persiste).

## Cenários

### DRAG-001 — Encaixar peça válida

**Dado que** o puzzle está incompleto  
**Quando** arrastar uma peça até a zona correta  
**Então** a peça deverá permanecer encaixada.

---

### DRAG-002 — Soltar em local inválido

**Dado que** o usuário arrasta uma peça  
**Quando** soltar fora da zona correta  
**Então** a peça deverá voltar à posição original.

---

### DRAG-003 — Concluir puzzle

**Dado que** 8 peças já estão corretas  
**Quando** encaixar a nona  
**Então** deverá ver congratulações e opção Retry.

---

### DRAG-004 — Retry

**Dado que** o puzzle foi concluído  
**Quando** tocar em Retry  
**Então** o puzzle deverá reiniciar.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Peças corretas encaixam.
- Peças incorretas voltam.
- Conclusão exibe celebração e reinício funcional.

## Fora do escopo

- Multiplayer
- Ranking
- Persistência de progresso

## Dependências funcionais

- Draggable
- Navegação até Drag

## Observações

Hit-test baseado em medidas de layout e coordenadas do gesto.

**Fonte (código):** `src/screens/Drag.tsx`, `src/components/Draggable.tsx`
