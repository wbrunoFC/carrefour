# Data SQLite

## Visão geral

Tier SQLite explícito com tabela demo_single, separado do KV para demonstrar persistência on-disk nomeada.

## Objetivo

Permitir gravar/ler/limpar valor em tabela SQLite dedicada com as mesmas expectativas de ciclo de vida de arquivos do app.

## Perfil do usuário

- Usuário comparando tiers de storage
- QA validando SQLite explícito

## Pré-condições

- Tela Data Management acessível
- DB inicializado

---

## Jornada principal

### 1. Abrir seção SQLite

O usuário localiza SQLite (explicit).

**Resultado esperado:**

Controles Save/Clear/readout disponíveis.

---

### 2. Salvar

O usuário salva um valor.

**Resultado esperado:**

Readout reflete o valor da tabela demo_single.

---

### 3. Limpar

O usuário limpa o valor.

**Resultado esperado:**

Readout volta ao estado vazio.


---

## Jornadas alternativas

### Independência do KV

Salvar no SQLite sem alterar KV.

**Resultado esperado:**

Cada tier mantém seu próprio valor.


---

## Jornadas de exceção

### Erro SQLite

Falha de save/clear.

**Resultado esperado:**

Alerta com título SQLite.


---

## Regras de negócio

- Tabela demo_single distinta de demo_async_kv.
- Mesmo arquivo de banco wdio_data_management.db.
- Erros usam Alert title SQLite.

## Cenários

### SQL-001 — Salvar no SQLite explícito

**Dado que** o usuário está no tier SQLite  
**Quando** salvar um valor  
**Então** o readout deverá exibir esse valor  
**E** o valor do tier KV não deverá ser sobrescrito por esse save.

---

### SQL-002 — Limpar SQLite

**Dado que** há valor no SQLite  
**Quando** limpar  
**Então** o readout SQLite deverá ficar vazio.

---

### SQL-003 — Erro SQLite

**Dado que** ocorre falha de banco  
**Quando** salvar  
**Então** deverá ver alerta SQLite.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Save/Clear afetam só o tier SQLite.
- Persistência on-disk funciona entre restarts.
- Erros são sinalizados ao usuário.

## Fora do escopo

- Queries complexas
- Múltiplas rows de domínio

## Dependências funcionais

- expo-sqlite
- DataManagement

## Observações

Seção 2b da tela.

**Fonte (código):** `src/screens/DataManagement.tsx` (demo_single)
