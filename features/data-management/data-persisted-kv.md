# Data persisted key-value

## Visão geral

Tier de chave-valor persistido (conceitualmente AsyncStorage; implementação via SQLite tabela demo_async_kv).

## Objetivo

Permitir salvar/ler/limpar valor que permanece após restart do app (enquanto dados do app existirem).

## Perfil do usuário

- Usuário testando persistência simples
- QA validando clearApp / reinstall

## Pré-condições

- Tela Data Management acessível
- SQLite inicializado

---

## Jornada principal

### 1. Localizar seção KV

O usuário abre a seção Persisted key-value.

**Resultado esperado:**

Input, Save, Clear e readout ficam disponíveis.

---

### 2. Salvar

O usuário informa valor e salva.

**Resultado esperado:**

Readout mostra valor persistido; sobrevive a restart.

---

### 3. Limpar

O usuário toca Clear.

**Resultado esperado:**

Valor removido do armazenamento persistido.


---

## Jornadas alternativas

### Reload ao focar

Usuário salva, sai e volta à tela.

**Resultado esperado:**

Valor é recarregado do banco.


---

## Jornadas de exceção

### Erro de gravação

Falha ao salvar/limpar.

**Resultado esperado:**

Alerta Persisted KV com a mensagem de erro.


---

## Regras de negócio

- Usa tabela demo_async_kv no DB wdio_data_management.db.
- Nome do tier referencia AsyncStorage, mas a implementação é SQLite.
- Empty state: nothing saved yet.

## Cenários

### KV-001 — Salvar valor persistido

**Dado que** o usuário está no tier Persisted key-value  
**Quando** salvar um valor  
**E** reiniciar o app  
**Então** o valor deverá continuar disponível.

---

### KV-002 — Limpar valor persistido

**Dado que** existe valor persistido  
**Quando** tocar em Clear  
**Então** o readout deverá indicar que nada está salvo.

---

### KV-003 — Erro ao persistir

**Dado que** ocorre falha de banco  
**Quando** tentar salvar  
**Então** deverá ver alerta Persisted KV.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Save persiste entre restarts.
- Clear remove o valor.
- Erros de I/O geram alerta.

## Fora do escopo

- API AsyncStorage real
- Sincronização em nuvem

## Dependências funcionais

- expo-sqlite
- DataManagement screen

## Observações

Importante para QA: validar diferenças de clearData/uninstall por plataforma conforme textos da tela.

**Fonte (código):** `src/screens/DataManagement.tsx` (demo_async_kv)
