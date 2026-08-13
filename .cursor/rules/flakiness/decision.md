# Decisão de flakiness de testes

Fonte canônica para classificar a **confiabilidade do resultado** de um teste neste repositório.  
Níveis: [HIGH](./high.md) · [MEDIUM](./medium.md) · [LOW](./low.md).

> **Criticidade** responde: "Quanto dói se a funcionalidade estiver quebrada?" — ver [criticality/decision.md](../criticality/decision.md).  
> **Flakiness** responde: "Quanto podemos confiar no resultado deste teste?"

## 1. Objetivo

Definir metodologia objetiva para classificar flakiness em `HIGH` | `MEDIUM` | `LOW`.

A classificação mede **confiança no resultado do teste**, não criticidade funcional do produto.

## 2. Princípio fundamental

Um teste é **flaky** quando apresenta resultados inconsistentes **sem** alteração correspondente no produto, nos dados ou na configuração esperada do teste.

```text
Execução 1 → PASS
Execução 2 → PASS
Execução 3 → FAIL
Execução 4 → PASS
Execução 5 → FAIL
Execução 6 → PASS
```

Flakiness avalia-se **independentemente** da criticidade. Exemplos válidos:

```text
Criticality: HIGH  | Flakiness: LOW
Criticality: HIGH  | Flakiness: HIGH
Criticality: LOW   | Flakiness: HIGH
```

## 3. O que NÃO define flakiness

Não usar diretamente estes fatores para classificar:

- quantidade de passos / linhas de código
- complexidade do Page Object
- quantidade de elementos
- tempo de execução
- dificuldade de encontrar seletores
- plataforma (Android / iOS)
- teste E2E vs isolado

Teste complexo pode ser `LOW`. Teste simples pode ser `HIGH`.

## 4. Dimensões avaliadas

| Dimensão | Pergunta |
|----------|----------|
| Reprodutibilidade | A falha acontece novamente nas mesmas condições? |
| Consistência | O mesmo código produz resultados diferentes? |
| Dependência temporal | Depende de timing, delays ou sincronização? |
| Dependência externa | Depende de APIs, serviços ou infraestrutura externa? |
| Dependência de estado | Depende de estado anterior do app ou de outro teste? |
| Dependência de ambiente | Varia conforme device, OS ou ambiente? |
| Histórico | Há histórico de falhas intermitentes? |
| Diagnóstico | Quando falha, a causa é clara? |
| Retry | É necessário reexecutar para obter PASS? |

## 5. Perguntas para classificação (Q1–Q8)

Antes de classificar, responder:

### Q1 — Falhas sem alteração no produto?

`Nunca` · `Ocasionalmente` · `Frequentemente`  
Maior frequência → maior flakiness.

### Q2 — A falha é reproduzível?

`Sempre` · `Às vezes` · `Não`  
Menos reproduzível → maior flakiness.

### Q3 — Depende de timing?

Ex.: carregamento de tela, animações, transições, API, boot do app, sync com device.  
`Não` · `Parcialmente` · `Fortemente`

### Q4 — Depende de serviços externos?

Ex.: APIs, bancos, auth, pagamento, notificação, infra.  
`Não` · `Sim, controlados` · `Sim, instáveis`

### Q5 — Depende de estado anterior?

Ex.: Teste B depende de A; usuário pré-cadastrado; app em estado específico; dados pré-existentes.  
`Não` · `Parcialmente` · `Fortemente`  
Preferir testes independentes.

### Q6 — Varia conforme o ambiente?

Ex.: Android/iOS, versão OS, modelo, emulator/simulator, rede, ambiente de execução.  
`Não` · `Sim, ocasionalmente` · `Sim, frequentemente`

### Q7 — Precisa de retry para PASS?

`Não` · `Às vezes` · `Frequentemente`  
Retry frequente = forte indicador de flakiness.

> Retry **não corrige** flakiness — apenas pode mascará-la.

### Q8 — Causa da falha é identificável?

`Sim` · `Parcialmente` · `Não`  
Mais difícil diagnosticar → maior risco de flaky.

## 6. Fluxo de classificação

```text
1. Identificar cenário
2. Avaliar histórico (se houver)
3. Responder Q1–Q8 / dimensões
4. Identificar causa provável (se MEDIUM/HIGH)
5. Aplicar overrides (§8)
6. Se ainda incerto → pontuação (§7)
7. Determinar HIGH | MEDIUM | LOW
8. Registrar em `features/**/*.md` (cenário) e/ou metadata do teste; se MEDIUM/HIGH, registrar motivo
```

Em dúvida entre dois níveis (e sem override): preferir o **mais alto** e documentar.

## 7. Pontuação auxiliar

Usar quando não houver evidência suficiente para classificação direta:

| Critério | LOW | MEDIUM | HIGH |
|----------|----:|-------:|-----:|
| Falha intermitente | 0 | 1 | 2 |
| Não reprodutibilidade | 0 | 1 | 2 |
| Dependência de timing | 0 | 1 | 2 |
| Dependência externa | 0 | 1 | 2 |
| Dependência de estado | 0 | 1 | 2 |
| Dependência de ambiente | 0 | 1 | 2 |
| Necessidade de retry | 0 | 1 | 2 |
| Dificuldade de diagnóstico | 0 | 1 | 2 |

```text
0–3 pontos  → LOW
4–8 pontos  → MEDIUM
9–16 pontos → HIGH
```

Pontuação é auxiliar. **Overrides (§8) têm prioridade.** Detalhe dos níveis: [high](./high.md) · [medium](./medium.md) · [low](./low.md).

## 8. Regras de override

### HIGH obrigatório

Elevar para `HIGH` quando:

- falhas frequentes sem alteração correspondente no produto; **ou**
- frequentemente precisa de retry para PASS; **ou**
- a equipe não confia no resultado; **ou**
- a causa da falha não pode ser determinada de forma confiável.

### MEDIUM obrigatório

Elevar para `MEDIUM` (mínimo) quando:

- falha ocasional + causa conhecida + possibilidade de reprodução; **ou**
- instabilidade conhecida em determinado ambiente, device ou versão.

## 9. Flaky ≠ instabilidade de ambiente

| Tipo | Sinais |
|------|--------|
| **Flaky (teste)** | Resultados inconsistentes **sob as mesmas condições** (`PASS → FAIL → PASS`) |
| **Instabilidade de ambiente** | Falha externa: Appium indisponível, device desconectado, simulator travado, API/rede fora |

Analisar a falha **antes** de marcar o teste como flaky.

## 10. Classificação da causa

Para `MEDIUM` ou `HIGH`, registrar origem provável:

```text
Automation | Application | Test Data | Environment
Network | Device | External Dependency | Unknown
```

Exemplo:

```text
Flakiness: HIGH
Cause: Environment
Evidence: Sessão Appium falha ocasionalmente na inicialização do device.
```

## 11. Independência de Criticality

Registrar separadamente. Matriz de risco:

| Criticality | Flakiness | Interpretação |
|-------------|-----------|---------------|
| HIGH | LOW | Excelente cobertura |
| HIGH | MEDIUM | Atenção |
| HIGH | HIGH | **Prioridade máxima** |
| MEDIUM | LOW | Bom |
| MEDIUM | MEDIUM | Atenção |
| MEDIUM | HIGH | Necessita correção |
| LOW | LOW | Bom |
| LOW | MEDIUM | Avaliar |
| LOW | HIGH | Corrigir quando possível |

## 12. Registro no cenário (`features/**/*.md`)

Armazenar só o resultado da classificação (e motivo se instável).  
**Não** usar `pages/**/*.feature` (proibido). Page objects usam Element ID `EL00N`.

```markdown
### AUTH-LOGIN-001 — Login com credenciais válidas
- Criticality: HIGH
- Flakiness: LOW

Given o usuário está na página de login  
When informa credenciais válidas  
And confirma o acesso  
Then deve ser autenticado
```

Com instabilidade:

```markdown
### AUTH-LOGIN-001 — Login com credenciais válidas
- Criticality: HIGH
- Flakiness: MEDIUM
- FlakinessReason:
  - Falha ocasional no carregamento da página inicial
  - Relacionado ao tempo de resposta do ambiente de teste
```

Tags sugeridas: `@flakiness:high` · `@flakiness:medium` · `@flakiness:low`.

## 13. Regra para agentes

Ao criar ou revisar um teste:

1. Identificar o cenário.
2. Avaliar histórico de execução, quando disponível.
3. Avaliar as dimensões / Q1–Q8.
4. Identificar possíveis causas.
5. Aplicar overrides.
6. Determinar `HIGH`, `MEDIUM` ou `LOW`.
7. Registrar a classificação.
8. Se `MEDIUM` ou `HIGH`, registrar o motivo.

**Não** classificar como `HIGH` só porque o teste é complexo.  
**Não** classificar como `LOW` só porque está passando agora.

## 14. Princípio final

> Flakiness mede a confiabilidade do teste como instrumento de detecção de defeitos.

Bom teste:

```text
Produto saudável → PASS
Produto com defeito → FAIL
```

Teste flaky:

```text
Produto saudável → PASS / FAIL
Produto com defeito → PASS / FAIL
```

Nesse caso, tratar como problema de qualidade da **automação**, não só do produto.
