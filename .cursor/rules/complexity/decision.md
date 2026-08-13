# Decisão de complexidade de testes

Fonte canônica para classificar o **esforço** de um cenário de teste neste repositório.  
Níveis: [HIGH](./high.md) · [MEDIUM](./medium.md) · [LOW](./low.md).

> **Criticality** responde: "Quanto dói se a funcionalidade estiver quebrada?" — ver [criticality/decision.md](../criticality/decision.md).  
> **Flakiness** responde: "Quanto podemos confiar no resultado deste teste?" — ver [flakiness/decision.md](../flakiness/decision.md).  
> **Complexity** responde: "Quanto esforço e conhecimento técnico são necessários para testar esta funcionalidade?"

## 1. Objetivo

Definir metodologia objetiva para classificar complexidade em `HIGH` | `MEDIUM` | `LOW`.

A complexidade representa o **esforço necessário para implementar, executar, manter e diagnosticar** o cenário de teste.

## 2. Princípio fundamental

Complexidade **não** representa importância.

Um cenário pode ser:

```text
Criticality: HIGH
Complexity: LOW
```

```text
Criticality: LOW
Complexity: HIGH
```

```text
Criticality: HIGH  | Flakiness: LOW  | Complexity: HIGH
Criticality: HIGH  | Flakiness: HIGH | Complexity: LOW
```

As três dimensões são **independentes**. Não copiar o nível de criticidade ou flakiness para complexidade.

## 3. O que NÃO define complexidade

Não usar diretamente estes fatores:

- criticidade de negócio / impacto no usuário
- flakiness / taxa de falha intermitente
- “é importante, então é complexo”
- tamanho do arquivo de Page Object sozinho (sem esforço real)
- preferência pessoal do autor do teste

Teste crítico pode ser `LOW`. Teste cosmético pode ser `HIGH`.

## 4. Dimensões avaliadas

| Dimensão | Pergunta |
|----------|----------|
| Interações | Que tipos de ação o teste exige (tap, type, gesto, dialog SO, hybrid)? |
| Setup | Quão pesado é preparar device, app, dados e pré-condições? |
| Conhecimento técnico | Exige domínio de APIs de SO, biometria, permissões, WebView, storage seguro? |
| Divergência de plataforma | Android e iOS exigem implementação/assert distintos? |
| Manutenção | Mudança pequena de UI quebra o teste com alto custo de ajuste? |
| Diagnóstico | Falha exige expertise avançada para achar a causa no teste vs app? |
| Contextos | Há troca de contexto (app ↔ Settings, native ↔ web, app ↔ prompt SO)? |
| Orquestração | Há muitos passos acoplados, waits especiais ou fluxos multi-tela? |

## 5. Perguntas para classificação (Q1–Q8)

### Q1 — Tipos de interação

`Tap/type simples` · `Picker/Alert/scroll` · `Gesto, dialog SO, hybrid ou biometria`  
Quanto mais especializadas as ações → maior complexidade.

### Q2 — Setup / pré-condições

`Mínimo (abrir tela)` · `Estado/app data específicos` · `Device capabilities (biometria enrolled, permissões, keystore, rede)`  
Setup pesado → maior complexidade.

### Q3 — Conhecimento técnico especializado

`UI básica` · `APIs/async/storage` · `SO (permissions, biometrics, SecureStore, WebView)`  
Mais especialização → maior complexidade.

### Q4 — Divergência Android / iOS

`Mesmo fluxo e asserts` · `Ajustes pontuais` · `Fluxos ou seletores substancialmente diferentes`  
Maior divergência → maior complexidade.

### Q5 — Custo de manutenção

`Seletor estável, assert direto` · `Dependência de textos/Alert/ordem` · `Coordenadas, hierarquia frágil, class name, contexto híbrido`  
Maior fragilidade estrutural → maior complexidade (esforço contínuo).

### Q6 — Esforço de diagnóstico

`Falha óbvia no passo` · `Precisa correlacionar logs/app` · `Precisa conhecimento profundo de SO/driver/gesto`  
Diagnóstico difícil → maior complexidade.

### Q7 — Troca de contexto

`Só app nativo` · `Modal/Alert no app` · `Settings do SO, WebView, prompt biométrico/permissão`  
Mais contextos → maior complexidade.

### Q8 — Orquestração do cenário

`1–3 ações lineares` · `Fluxo médio com waits condicionais` · `Multi-gesto, multi-tela, sync com SO ou rede`  
Orquestração pesada → maior complexidade.

## 6. Fluxo de classificação

```text
1. Identificar o cenário / elemento sob teste
2. Responder Q1–Q8
3. Aplicar overrides (§8)
4. Se ainda incerto → pontuação (§7)
5. Determinar HIGH | MEDIUM | LOW
6. Registrar no page object / .feature
7. Se MEDIUM/HIGH, registrar motivo em 1 linha (opcional no JSON: note)
```

Em dúvida entre dois níveis (e sem override): preferir o **mais alto** e documentar.

## 7. Pontuação auxiliar

| Critério | LOW | MEDIUM | HIGH |
|----------|----:|-------:|-----:|
| Tipos de interação | 0 | 1 | 2 |
| Setup / pré-condições | 0 | 1 | 2 |
| Conhecimento técnico | 0 | 1 | 2 |
| Divergência de plataforma | 0 | 1 | 2 |
| Custo de manutenção | 0 | 1 | 2 |
| Esforço de diagnóstico | 0 | 1 | 2 |
| Troca de contexto | 0 | 1 | 2 |
| Orquestração | 0 | 1 | 2 |

```text
0–3 pontos  → LOW
4–8 pontos  → MEDIUM
9–16 pontos → HIGH
```

Pontuação é auxiliar. **Overrides (§8) têm prioridade.**

## 8. Regras de override

### HIGH obrigatório

Elevar para `HIGH` quando:

- o teste exige gesto (drag/swipe coordenado), biometria, permissão de SO, ou contexto WebView/híbrido; **ou**
- Android e iOS precisam de automações substancialmente diferentes para o mesmo objetivo; **ou**
- o diagnóstico típico exige expertise de driver/SO além do fluxo de UI.

### MEDIUM obrigatório

Elevar para `MEDIUM` (mínimo) quando:

- há picker nativo, Alert assíncrono, modal animado, ou storage async/secure; **ou**
- há waits não triviais ou asserts sobre estado persistido; **ou**
- há divergência pontual de plataforma conhecida.

### LOW tipicamente

Manter/baixar para `LOW` quando:

- interação = tap/type/assert em `accessibilityId` estável; **e**
- sem troca de contexto SO/hybrid; **e**
- mesmo fluxo serve Android e iOS com asserts equivalentes.

## 9. Complexidade ≠ Flakiness ≠ Criticality

| Dimensão | Mede |
|----------|------|
| Criticality | Impacto da falha no produto/negócio |
| Flakiness | Confiabilidade do sinal PASS/FAIL |
| Complexity | Esforço de implementar/executar/manter/diagnosticar |

Exemplo válido neste repo (demo):

```text
Elemento: input-email (Login)
Criticality: HIGH   — impede jornada de acesso
Flakiness: LOW      — seletor estável, sem timing especial
Complexity: LOW     — type + assert simples
```

```text
Elemento: button-biometric
Criticality: MEDIUM — existe alternativa (senha)
Flakiness: HIGH     — dialog SO / enrolled / ambiente
Complexity: HIGH    — biometria + contexto SO + divergência de plataforma
```

## 10. Registro

Nos page objects (`android.json` / `ios.json`):

```json
"complexity": "low"
```

Valores: `high` | `medium` | `low` (minúsculos no JSON; tags podem usar `HIGH`/`MEDIUM`/`LOW`).

No `.feature` (cenário):

```gherkin
  Scenario: CT001 - Login com dados válidos de formato
    Criticality: HIGH
    Flakiness: LOW
    Complexity: LOW
```

Tags sugeridas: `@complexity:high` · `@complexity:medium` · `@complexity:low`.

## 11. Regra para agentes

Ao criar ou revisar um teste/elemento:

1. Separar mentalmente das classificações de criticality e flakiness.
2. Responder Q1–Q8 sob a ótica de **esforço**.
3. Aplicar overrides.
4. Determinar `HIGH` | `MEDIUM` | `LOW`.
5. Registrar a classificação.
6. Se `MEDIUM`/`HIGH`, anotar o motivo principal (1 linha).

**Não** classificar `HIGH` só porque a feature é crítica.  
**Não** classificar `LOW` só porque o teste “parece curto”.

## 12. Princípio final

> Complexidade mede o custo técnico do teste como artefato de engenharia.

Bom equilíbrio:

```text
Criticality HIGH + Complexity LOW  → automatizar cedo (smoke)
Criticality HIGH + Complexity HIGH → investir em abstração estável; não adiar por preguiça
Criticality LOW  + Complexity HIGH → automatizar só se ROI claro
```
