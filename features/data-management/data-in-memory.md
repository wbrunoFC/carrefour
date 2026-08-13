# Data in-memory

## Visão geral

Primeiro tier de Data Management: gravar/ler/limpar um valor apenas em memória (React state).

## Objetivo

Demonstrar dado volátil que sobrevive à troca de aba, mas some quando o processo do app morre.

## Perfil do usuário

- Usuário testando armazenamento volátil
- QA validando lifecycle de memória

## Pré-condições

- Tela Data Management acessível

---

## Jornada principal

### 1. Abrir Data Management

O usuário acessa Data Management e localiza a seção In-memory.

**Resultado esperado:**

Campo, botões Save/Clear e readout estão visíveis.

---

### 2. Salvar valor

O usuário digita um texto e toca Save.

**Resultado esperado:**

O readout mostra o valor atual em memória.

---

### 3. Limpar valor

O usuário toca Clear.

**Resultado esperado:**

O readout indica vazio.


---

## Jornadas alternativas

### Trocar de aba e voltar

Salvar valor, ir a outra aba e retornar.

**Resultado esperado:**

Valor ainda presente (processo vivo).


---

## Jornadas de exceção

### Kill do processo

Usuário/força encerra o app após Save.

**Resultado esperado:**

Valor não está mais disponível ao reabrir.


---

## Regras de negócio

- Armazenamento exclusivamente em useState.
- Não usa SQLite nem SecureStore neste tier.
- Empty state apresentado quando não há valor.

## Cenários

### MEM-001 — Salvar em memória

**Dado que** o usuário está no tier In-memory  
**Quando** informar um valor e salvar  
**Então** o readout deverá exibir esse valor.

---

### MEM-002 — Limpar memória

**Dado que** há valor em memória  
**Quando** tocar em Clear  
**Então** o readout deverá indicar vazio.

---

### MEM-003 — Perda após kill

**Dado que** um valor foi salvo em memória  
**Quando** o processo do app for encerrado e o app reaberto  
**Então** o valor não deverá estar disponível.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Save atualiza readout.
- Clear esvazia.
- Dado não sobrevive à morte do processo.

## Fora do escopo

- Persistência em disco
- Criptografia

## Dependências funcionais

- Tela DataManagement
- Estado React

## Observações

Seção 1 do Data Management.

**Fonte (código):** `src/screens/DataManagement.tsx` (seção In-memory)
