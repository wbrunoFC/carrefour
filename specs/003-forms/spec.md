# Feature Specification: Forms

**Feature Branch**: `003-forms`

**Created**: 2026-08-16

**Status**: Draft

**Input**: Domínio forms do slice aprovado na constituição (eco do input data-driven + botões Active/Inactive; 3 Scenario IDs).

## Source of Truth *(mandatory)*

Cenários selecionados de `project/features/`. Given/When/Then abaixo são os já documentados — esta spec não cria catálogo paralelo nem reescreve o comportamento.

| Scenario ID | Fonte | Papel neste slice |
|-------------|-------|-------------------|
| FORMS-FORMS-001 | [forms.md](../../project/features/forms/forms.md) | Eco do input (data-driven) |
| FORMS-FORMS-003 | [forms.md](../../project/features/forms/forms.md) | Botão Active |
| FORMS-FORMS-004 | [forms.md](../../project/features/forms/forms.md) | Botão Inactive |

Domínio: **forms**. Um diretório Speckit. Constituição: `.specify/memory/constitution.md`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ver o texto ecoado no input (Priority: P1)

Pessoa abre Forms e digita no campo de texto. O aplicativo mostra o mesmo texto em “You have typed”, em tempo real. Não envia nada a servidor. Vários textos distintos comprovam o mesmo comportamento (mesmo Scenario ID).

**Why this priority**: Eco do input é o controle mais visível da tela e o único caso do slice que a constituição exige data-driven.

**Independent Test**: Em Forms, digitar um texto (até 30 caracteres) e verificar que “You have typed” mostra exatamente esse texto. Repetir com outro texto. Não depende dos botões Active/Inactive.

**Acceptance Scenarios**:

1. **FORMS-FORMS-001 — Eco do input**
   **Dado que** o usuário está em Forms
   **Quando** digitar um texto no input
   **Então** o mesmo texto deverá aparecer em You have typed.

---

### User Story 2 - Ver o alerta do botão Active (Priority: P2)

Pessoa está em Forms e toca em Active. O aplicativo mostra o alerta informando que o botão está active (This button is / This button is active), com as ações Ask me later, Cancel e OK.

**Why this priority**: Único controle que dispara alerta. Distinto do eco: aqui o resultado é diálogo, não texto ao lado do campo.

**Independent Test**: Em Forms, tocar Active e verificar o alerta. Não precisa preencher o input nem tocar Inactive.

**Acceptance Scenarios**:

1. **FORMS-FORMS-003 — Botão Active**
   **Dado que** o usuário está em Forms
   **Quando** tocar em Active
   **Então** deverá ver o alerta informando que o botão está active.

---

### User Story 3 - Botão Inactive não faz nada (Priority: P3)

Pessoa está em Forms e tenta acionar Inactive. O aplicativo não mostra alerta nem outra ação — o botão está desabilitado.

**Why this priority**: Complemento de Active. Sem este caso, “só Active dispara alerta” fica sem prova negativa.

**Independent Test**: Em Forms, tentar acionar Inactive e confirmar que nenhum alerta aparece. Não depende do texto digitado.

**Acceptance Scenarios**:

1. **FORMS-FORMS-004 — Botão Inactive**
   **Dado que** o usuário está em Forms
   **Quando** tentar acionar Inactive
   **Então** nenhum alerta deverá ser exibido.

---

### Edge Cases

- Input aceita no máximo 30 caracteres; texto além disso não entra. Jornada de exceção em `forms.md`; **não há Scenario ID** neste slice.
- Switch ON/OFF e dropdown (webdriver.io / Appium / This app) existem na mesma tela; FORMS-FORMS-002 e a jornada de dropdown **não** entram neste spec.
- Estado dos controles é local; fechar o app descarta texto, switch e dropdown. Sem persistência e sem submit remoto.
- Alerta de Active oferece Ask me later, Cancel e OK. Fechar o alerta não é Scenario ID deste slice — só a aparição do alerta.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O aplicativo MUST exibir a seção Form components (input, switch, dropdown e botões) quando a pessoa estiver em Forms.
- **FR-002**: Com a pessoa em Forms, o aplicativo MUST ecoar no rótulo You have typed exatamente o texto digitado no input (FORMS-FORMS-001).
- **FR-003**: FORMS-FORMS-001 MUST ser comprovado com mais de um texto de entrada (mesmo Scenario ID, entradas distintas). Cada texto MUST ter no máximo 30 caracteres.
- **FR-004**: Com a pessoa em Forms, o aplicativo MUST mostrar o alerta de botão active quando a pessoa tocar em Active (FORMS-FORMS-003).
- **FR-005**: Com a pessoa em Forms, o aplicativo MUST NOT mostrar alerta quando a pessoa tentar acionar Inactive (FORMS-FORMS-004).
- **FR-006**: Os três Scenario IDs deste spec MUST ser verificáveis no Android e no iOS como o mesmo comportamento (um cenário, duas plataformas). Divergência de comportamento entre plataformas está fora deste domínio.

### Key Entities

- **Texto digitado**: conteúdo do input, até 30 caracteres; ecoado em You have typed.
- **Alerta de Active**: diálogo que informa que o botão está active; ações Ask me later, Cancel e OK.
- **Botão Inactive**: controle visível e desabilitado; toque não gera alerta.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em 100% das vezes em que a pessoa está em Forms e digita um texto de até 30 caracteres, You have typed mostra exatamente esse texto. Isso vale para cada texto do conjunto data-driven de FORMS-FORMS-001.
- **SC-002**: Em 100% das vezes em que a pessoa está em Forms e toca em Active, o alerta de botão active aparece.
- **SC-003**: Em 100% das vezes em que a pessoa está em Forms e tenta acionar Inactive, nenhum alerta aparece.
- **SC-004**: Os 3 Scenario IDs deste spec são demonstráveis de ponta a ponta no Android e no iOS, sem cenário duplicado por plataforma.

## Assumptions

- App sob teste é o demo nativo, não um app de produção Carrefour. Controles de Forms não enviam dados a servidor.
- FORMS-FORMS-001, FORMS-FORMS-003 e FORMS-FORMS-004 são o gap de automação deste domínio (não há `project/tests/e2e/forms/` ainda). Page objects em `project/pages/forms/` e o destino Forms no menu lateral já existem e devem ser reutilizados no plano. Não criar módulo de página paralelo.
- Chegar a Forms: destino Forms do Menu (pré-condição da feature). Abrir o menu e escolher Forms não é Scenario ID deste spec.
- Data-driven obrigatório do slice é FORMS-FORMS-001. Default: pelo menos dois textos distintos (palavra curta e frase com espaço), ambos ≤ 30 caracteres, em `project/data/` indexados pelo Scenario ID. Não cobre o limite de 30 neste ID.
- Textos de alerta e rótulos são os da demo em inglês (`forms.md`). Não traduzir na verificação.
- FORMS-FORMS-002 (switch) não entra neste slice.

## Out of Scope

Catálogo existente **não** selecionado neste spec:

- FORMS-FORMS-002 (toggle do switch)
- Limite de 30 caracteres (jornada de exceção sem ID neste slice)
- Seleção de dropdown
- Validação de e-mail/senha (domínio authentication)
- Persistência das escolhas e submit remoto
- HOME / menu como cenário próprio (domínio navigation)
- Pipeline CI e evidências de relatório (plano posterior do slice, não desta spec)
