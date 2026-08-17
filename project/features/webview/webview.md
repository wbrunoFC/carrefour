# WebView

## Visão geral

Exibir o site WebdriverIO embutido em WebView nativa para interação e troca de contexto em testes.

## Objetivo

Permitir que o usuário (e a automação) carreguem e interajam com conteúdo web dentro do app.

## Perfil do usuário

- Usuário navegando conteúdo web embutido
- QA testando contexto Native/WebView

## Pré-condições

- Aplicativo aberto
- Destino WebView acessível
- Conectividade para carregar https://webdriver.io/

---

## Jornada principal

### 1. Abrir WebView

O usuário acessa a aba/destino WebView.

**Resultado esperado:**

Estado de Loading… pode aparecer enquanto a página inicia.

---

### 2. Carregar site

A WebView solicita https://webdriver.io/.

**Resultado esperado:**

O conteúdo do site fica disponível para interação.

---

### 3. Interagir com conteúdo web

O usuário navega/clica dentro da WebView.

**Resultado esperado:**

A interação ocorre no contexto web embutido.


---

## Jornadas alternativas

_Nenhuma identificada no código._


---

## Jornadas de exceção

### Falha de rede

Sem conectividade adequada.

**Resultado esperado:**

Página pode não carregar; app não define alerta próprio de erro de rede nesta tela.


---

## Regras de negócio

- URL alvo fixa: https://webdriver.io/.
- originWhitelist permite origens amplas (*).
- Há indicador de loading enquanto startInLoadingState está ativo.

## Cenários

### WEBVIEW-WEBVIEW-001 — Abrir WebView

**Dado que** o aplicativo está aberto  
**Quando** o usuário acessar WebView  
**Então** a WebView deverá iniciar o carregamento do site WebdriverIO.

---

### WEBVIEW-WEBVIEW-002 — Conteúdo carregado

**Dado que** há conectividade  
**Quando** o carregamento concluir  
**Então** o conteúdo web deverá estar interativo.


---

## Critérios de sucesso

A funcionalidade é considerada bem-sucedida quando:

- WebView abre sem crash.
- Site alvo é solicitado corretamente.
- Loading é apresentado durante inicialização.

## Fora do escopo

- Múltiplas URLs configuráveis
- Botão explícito de reload na UI
- Autenticação web

## Dependências funcionais

- react-native-webview
- Rede
- Navegação até WebView

## Observações

README menciona carregamento do site para testes de contexto; não há botão de reload dedicado na tela.

**Fonte (código):** `src/screens/WebView.tsx`
