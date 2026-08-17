# Feature Specification: CI Android

**Feature Branch**: `004-ci`

**Created**: 2026-08-16

**Status**: Draft

**Input**: Pipeline do slice aprovado — pedido de revisão e integração na linha principal; nuvem Android; pacote de evidência; iOS fora.

## Source of Truth *(mandatory)*

Isto **não** é um domínio de tela. Não inventa Scenario ID. A pipeline MUST executar o catálogo já selecionado nas specs `001`–`003`, cujas fontes estão em `project/features/`.

| Scenario ID | Fonte | Spec |
|-------------|-------|------|
| AUTH-LOGIN-001 | [login.md](../../project/features/authentication/login.md) | `001-authentication` |
| AUTH-LOGIN-002 | [login.md](../../project/features/authentication/login.md) | `001-authentication` |
| AUTH-LOGIN-003 | [login.md](../../project/features/authentication/login.md) | `001-authentication` |
| AUTH-SIGNUP-001 | [signup.md](../../project/features/authentication/signup.md) | `001-authentication` |
| AUTH-SIGNUP-002 | [signup.md](../../project/features/authentication/signup.md) | `001-authentication` |
| HOME-HOME-001 | [home.md](../../project/features/home/home.md) | `002-navigation` |
| NAV-SIDE-MENU-002 | [side-menu.md](../../project/features/navigation/side-menu.md) | `002-navigation` |
| FORMS-FORMS-001 | [forms.md](../../project/features/forms/forms.md) | `003-forms` (data-driven, ≥2 execuções) |
| FORMS-FORMS-003 | [forms.md](../../project/features/forms/forms.md) | `003-forms` |
| FORMS-FORMS-004 | [forms.md](../../project/features/forms/forms.md) | `003-forms` |

Constituição: `.specify/memory/constitution.md` (gatilhos, nuvem Android, iOS fora, evidência, segredos).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ver o slice na nuvem ao pedir revisão (Priority: P1)

Pessoa abre um pedido de revisão contra a linha principal. Um check automático sobe o app demo num aparelho Android na nuvem e corre os 11 cenários do slice. O pedido mostra passou / falhou. Push isolado numa branch de feature, sem pedido de revisão, **não** dispara essa corrida.

**Why this priority**: Gate de revisão é o valor da pipeline. Sem ele, o slice só existe na máquina local.

**Independent Test**: Abrir um pedido de revisão com o slice no código. Check Android nuvem corre. Pedido mostra resultado. Sem merge.

**Acceptance Scenarios**:

1. **Dado que** existe um pedido de revisão contra a linha principal
   **Quando** o check automático inicia
   **Então** os 11 cenários do slice MUST correr em Android na nuvem
   **E** o pedido MUST mostrar passou ou falhou conforme o resultado.

2. **Dado que** alguém só empurra commits numa branch de feature, sem pedido de revisão
   **Quando** o remoto recebe o push
   **Então** a corrida Android na nuvem MUST NOT iniciar.

---

### User Story 2 - Repetir o mesmo check ao integrar na linha principal (Priority: P2)

Pessoa integra o pedido na linha principal. O mesmo check Android nuvem corre de novo. Não é um segundo produto — é o mesmo conjunto de cenários, para a linha principal não ficar sem evidência depois do merge.

**Why this priority**: Constituição exige check no merge. Sem isso, a linha principal pode divergir do último PR.

**Independent Test**: Integrar na linha principal. Mesmo check Android nuvem corre. Não depende de iOS.

**Acceptance Scenarios**:

1. **Dado que** o código do slice entrou na linha principal
   **Quando** o check automático inicia
   **Então** os mesmos 11 cenários MUST correr em Android na nuvem
   **E** o resultado MUST ficar visível no histórico da linha principal.

---

### User Story 3 - Baixar o pacote de evidência da corrida (Priority: P3)

Pessoa que não estava na máquina local precisa ver o que passou e o que falhou. Ao fim da corrida (sucesso ou falha), um pacote de evidência fica disponível para download: resumo, prints de falha, logs, info de ambiente.

**Why this priority**: Constituição trata evidência como requisito de produto. Check sem pacote não fecha o slice.

**Independent Test**: Terminar uma corrida (verde ou vermelha) e baixar o pacote. Abrir o resumo. Não precisa de iOS.

**Acceptance Scenarios**:

1. **Dado que** uma corrida do slice terminou
   **Quando** a pessoa abre os artefatos da corrida
   **Então** MUST existir um pacote de evidência baixável com resumo, prints de falha (se houver), logs e info de ambiente.

---

### Edge Cases

- Credenciais da nuvem ausentes: a corrida MUST falhar cedo, com mensagem que aponta o segredo em falta — sem commitar segredo.
- Um cenário falha: o check MUST ficar vermelho; o pacote de evidência MUST ser publicado mesmo assim.
- FORMS-FORMS-001: a corrida MUST executar pelo menos duas variações do mesmo ID (data-driven). Não basta um texto.
- App demo ausente no repositório: a corrida MUST falhar de forma explícita (não sessão vazia na nuvem).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Pedido de revisão contra a linha principal MUST disparar uma corrida Android na nuvem com os 11 cenários do slice.
- **FR-002**: Integração na linha principal MUST disparar a mesma corrida Android na nuvem.
- **FR-003**: Push em branch de feature sem pedido de revisão MUST NOT disparar a corrida.
- **FR-004**: A corrida MUST NOT incluir iOS.
- **FR-005**: Segredos da nuvem MUST viver só no ambiente do check (não no repositório, não em arquivo de ambiente versionado).
- **FR-006**: Ao terminar a corrida, o sistema MUST publicar um pacote de evidência baixável (resumo, prints de falha, logs, ambiente).
- **FR-007**: A corrida MUST falhar o pedido / a linha principal se qualquer um dos 11 cenários falhar.
- **FR-008**: A corrida MUST reusar a stack e o relatório já existentes — MUST NOT trocar o gerador de evidência nem adicionar dependência nova se a stack atual cobre.

### Key Entities

- **Pedido de revisão**: proposta de mudança contra a linha principal; carrega o check Android.
- **Linha principal**: branch estável (`main`); recebe o mesmo check após integração.
- **Corrida Android nuvem**: execução dos 11 cenários do slice num aparelho Android remoto.
- **Pacote de evidência**: artefato baixável da corrida (resumo, prints, logs, ambiente).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos pedidos de revisão contra a linha principal disparam a corrida Android nuvem do slice.
- **SC-002**: 100% das integrações na linha principal disparam a mesma corrida.
- **SC-003**: 0% dos pushes isolados em branch de feature (sem pedido de revisão) disparam a corrida.
- **SC-004**: 100% das corridas terminadas deixam um pacote de evidência baixável, inclusive quando há falha.
- **SC-005**: A corrida cobre os 11 cenários do slice (FORMS-FORMS-001 com ≥2 textos). Nenhum cenário iOS entra neste check.

## Assumptions

- Os 11 cenários já estão automatizados localmente (auth + navigation + forms). Esta spec só orquestra a corrida remota e a evidência.
- Nuvem = BrowserStack App Automate Android, já previsto em `project/config/browserstack/` e nos scripts `test:android:bs`. Sem módulo de nuvem novo.
- Nomes de segredo alinhados ao que o projeto já lê: `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY`. Humano cria os segredos no remoto; agente não inventa valor e não edita `.env`.
- App sob teste = APK demo já no repositório (`project/apps/`). Upload/referência via config existente.
- WDIO no repo não lista specs de forma confiável com glob `**/*.test.ts`. O plano MUST listar os arquivos do slice explicitamente.
- Relatório = Allure já em `project/config/`. CI publica o que o runner já gera. Sem segundo reporter.
- Host do check: máquina Linux do provedor de CI basta (nuvem executa o app; não precisa emulador local).

## Out of Scope

- iOS na pipeline
- Corrida a cada push de feature branch
- Emulador Android no CI (local continua válido só na máquina do desenvolvedor)
- Novos Scenario IDs / novos domínios (swipe, drag, webview, data, permissions)
- Trocar Allure, novo npm dependency, editar `.env`
- AUTH-SIGNUP-003, FORMS-FORMS-002
- Deploy de app de produção Carrefour
