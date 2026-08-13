# Data secure storage

## Visão geral

Tier de armazenamento seguro via Keychain (iOS) / Keystore (Android) usando expo-secure-store.

## Objetivo

Permitir salvar/ler/limpar segredo de demonstração e observar diferenças de sobrevivência após uninstall/clearData.

## Perfil do usuário

- Usuário testando storage seguro
- QA validando Keychain/Keystore

## Pré-condições

- Tela Data Management acessível
- SecureStore disponível no dispositivo

---

## Jornada principal

### 1. Abrir Secure storage

O usuário abre a seção Secure storage.

**Resultado esperado:**

Input, Save, Clear e readout disponíveis.

---

### 2. Salvar segredo

O usuário salva um valor.

**Resultado esperado:**

Valor fica no SecureStore (chave wdio_demo_secure_value) e aparece no readout.

---

### 3. Limpar (hook de teste)

O usuário toca Clear.

**Resultado esperado:**

Valor é removido do SecureStore para o teste.


---

## Jornadas alternativas

### Restart do app

Salvar e reiniciar app.

**Resultado esperado:**

Valor seguro continua legível.


---

## Jornadas de exceção

### Erro SecureStore

Falha ao salvar/limpar.

**Resultado esperado:**

Alerta SecureStore com erro.


---

## Regras de negócio

- Chave fixa wdio_demo_secure_value.
- iOS usa WHEN_UNLOCKED.
- Comportamento pós-uninstall/clearData varia por plataforma (textos explicativos na própria tela).
- Clear existe como gancho de teste, não como modelo de produto.

## Cenários

### SEC-001 — Salvar no SecureStore

**Dado que** o usuário está no tier Secure storage  
**Quando** salvar um valor  
**E** reiniciar o app  
**Então** o valor deverá permanecer disponível.

---

### SEC-002 — Limpar SecureStore

**Dado que** há valor seguro  
**Quando** tocar em Clear  
**Então** o readout deverá indicar vazio.

---

### SEC-003 — Erro SecureStore

**Dado que** ocorre falha de SecureStore  
**Quando** salvar  
**Então** deverá ver alerta SecureStore.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- Save grava no storage seguro.
- Clear remove para testes.
- Restart preserva o valor enquanto o item existir no Keychain/Keystore.

## Fora do escopo

- Criptografia application-level adicional
- Biometria para ler o segredo

## Dependências funcionais

- expo-secure-store
- DataManagement

## Observações

Seção informativa sobre uninstall é documental na UI, sem ação de usuário além da leitura.

**Fonte (código):** `src/screens/DataManagement.tsx` (SecureStore)
