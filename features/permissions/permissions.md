# Permissions

## Visão geral

Quatro switches para solicitar permissões de câmera, microfone, localização e galeria de fotos ao sistema operacional.

## Objetivo

Exercitar diálogos nativos de permissão e orientar revogação via Ajustes do dispositivo.

## Perfil do usuário

- Usuário concedendo/recusando permissões
- QA validando dialogs do SO

## Pré-condições

- Destino Permissions acessível (Menu ou tab se pinada)
- SO capaz de exibir prompts de permissão

---

## Jornada principal

### 1. Abrir Permissions

O usuário acessa a tela Permissions.

**Resultado esperado:**

Switches de Camera, Microphone, Location e Photo library são exibidos.

---

### 2. Ativar permissão

O usuário liga um switch ainda não concedido.

**Resultado esperado:**

O SO apresenta o diálogo nativo correspondente.

---

### 3. Conceder no SO

O usuário permite no diálogo do sistema.

**Resultado esperado:**

O switch permanece/reflete o estado concedido ao retornar ao app.


---

## Jornadas alternativas

### Recusar no SO

O usuário nega a permissão no diálogo.

**Resultado esperado:**

Acesso não é concedido; switch reflete estado não concedido após refresh de status.

---

### Tentar desligar permissão já concedida

O usuário desliga switch de permissão já granted.

**Resultado esperado:**

Alerta Change in Settings com opção Open Settings; revogação só via ajustes do SO.


---

## Jornadas de exceção

### Permissão bloqueada pelo SO

SO impede novo prompt.

**Resultado esperado:**

Usuário precisa usar Ajustes; app aponta Open Settings no fluxo de revoke.


---

## Regras de negócio

- Ligar switch dispara request*PermissionsAsync da API correspondente.
- Revogar pelo app não é suportado — apenas orientação para Settings.
- Status é reconsultado ao focar o app.
- Permissions fica off na tab bar por padrão.

## Cenários

### PERM-001 — Solicitar câmera

**Dado que** câmera ainda não foi concedida  
**Quando** ativar o switch Camera  
**Então** o diálogo nativo de câmera deverá aparecer.

---

### PERM-002 — Conceder microfone

**Dado que** o prompt de microfone está visível  
**Quando** o usuário permitir  
**Então** o app deverá refletir microfone concedido.

---

### PERM-003 — Revogar via Settings

**Dado que** uma permissão está concedida  
**Quando** o usuário tentar desligar o switch  
**Então** deverá ver alerta Change in Settings  
**E** poder abrir os Ajustes.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- ON dispara prompt adequado.
- OFF com grant orienta Settings.
- Estados sincronizam ao voltar ao app.

## Fora do escopo

- Uso real da câmera/mic após grant
- Background location
- Biometria

## Dependências funcionais

- expo-camera
- expo-location
- expo-media-library
- PermissionSwitches

## Observações

Quatro permissões na mesma feature por compartilharem o mesmo padrão de jornada na tela.

**Fonte (código):** `src/components/PermissionSwitches.tsx`, `src/screens/Permissions.tsx`
