# Feature Specification: Navigation

**Feature Branch**: `002-navigation`

**Created**: 2026-08-16

**Status**: Draft

**Input**: Domínio navigation do slice aprovado na constituição (Home + menu lateral; 2 Scenario IDs).

## Source of Truth *(mandatory)*

Cenários selecionados de `project/features/`. Given/When/Then abaixo são os já documentados — esta spec não cria catálogo paralelo nem reescreve o comportamento.

| Scenario ID | Fonte | Papel neste slice |
|-------------|-------|-------------------|
| HOME-HOME-001 | [home.md](../../project/features/home/home.md) | Visualizar tela Home |
| NAV-SIDE-MENU-002 | [side-menu.md](../../project/features/navigation/side-menu.md) | Navegar por destino do menu |

Domínio: **navigation**. Um diretório Speckit. Constituição: `.specify/memory/constitution.md`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ver a tela Home (Priority: P1)

Pessoa abre o aplicativo e acessa a aba Home. O aplicativo mostra o conteúdo introdutório da demo (identidade visual e textos de boas-vindas). Não pede autenticação nem altera dados.

**Why this priority**: Home é o ponto de entrada estável. Sem ela, navegação pelo menu não tem âncora de “onde o app começa”.

**Independent Test**: Com o aplicativo aberto, acessar a aba Home e verificar o conteúdo introdutório. Não depende do menu lateral.

**Acceptance Scenarios**:

1. **HOME-HOME-001 — Visualizar tela Home**
   **Dado que** o aplicativo está aberto
   **Quando** o usuário acessar a aba Home
   **Então** deverá visualizar o conteúdo introdutório do aplicativo.

---

### User Story 2 - Ir a outra tela pelo menu (Priority: P2)

Pessoa abre o Menu (aba da direita) e escolhe um destino da lista. O aplicativo leva à tela correspondente. Destino neste slice: Login / Sign up.

**Why this priority**: Cobre “navegação entre telas” do pedido original. Distinto da Home: aqui o caminho é o painel lateral, não a aba Home.

**Independent Test**: Abrir o Menu, selecionar Login, verificar que a tela de Login / Sign up aparece. Abrir o menu é pré-condição do passo, não um Scenario ID deste spec.

**Acceptance Scenarios**:

1. **NAV-SIDE-MENU-002 — Navegar por destino**
   **Dado que** o Menu está aberto
   **Quando** selecionar um destino
   **Então** o usuário deverá ser levado à tela correspondente.

---

### Edge Cases

- Home não exige autenticação e não altera dados persistidos. Continua disponível na barra inferior.
- Abrir o menu é estado em memória; não persiste após fechar o app.
- Escolher de novo o destino já ativo (ex.: Login estando em Login) permanece/reativa a tela e o menu fecha. Jornada alternativa em `side-menu.md`; **não há Scenario ID** neste slice.
- Fechar o menu pelo fundo (backdrop) ou back (Android) sem escolher destino: NAV-SIDE-MENU-003 — fora deste spec.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O aplicativo MUST exibir a tela Home com conteúdo introdutório quando a pessoa acessar a aba Home com o aplicativo aberto (HOME-HOME-001).
- **FR-002**: A tela Home MUST estar acessível sem autenticação.
- **FR-003**: O aplicativo MUST abrir o painel lateral (Menu) a partir da aba Menu, de modo que a pessoa consiga escolher um destino. Abrir o menu é pré-condição de NAV-SIDE-MENU-002, não um Scenario ID deste spec.
- **FR-004**: Com o Menu aberto, o aplicativo MUST navegar para a tela Login / Sign up quando a pessoa selecionar o destino Login (NAV-SIDE-MENU-002 neste slice).
- **FR-005**: Após selecionar o destino, a pessoa MUST ver a tela correspondente (Login), não permanecer só no painel do Menu.
- **FR-006**: Os dois Scenario IDs deste spec MUST ser verificáveis no Android e no iOS como o mesmo comportamento (um cenário, duas plataformas). Divergência de comportamento entre plataformas está fora deste domínio.

### Key Entities

- **Tela Home**: tela introdutória da demo, acessível pela aba Home, sem autenticação.
- **Menu lateral**: painel listando destinos principais; abre pela aba Menu; estado não persistido.
- **Destino**: item da lista do Menu que leva a uma tela principal. Neste slice o destino verificado é Login.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em 100% das vezes em que o aplicativo está aberto e a pessoa acessa a aba Home, o conteúdo introdutório da Home fica visível.
- **SC-002**: Em 100% das vezes em que o Menu está aberto e a pessoa seleciona Login, a tela Login / Sign up aparece.
- **SC-003**: Os 2 Scenario IDs deste spec são demonstráveis de ponta a ponta no Android e no iOS, sem cenário duplicado por plataforma.

## Assumptions

- App sob teste é o demo nativo, não um app de produção Carrefour.
- HOME-HOME-001 e NAV-SIDE-MENU-002 são o gap de automação deste domínio (não há `project/tests/e2e/home/` nem `.../navigation/` ainda). Page objects de home, navigation e side-menu já existem e devem ser reutilizados no plano.
- NAV-SIDE-MENU-002 documenta “um destino”. Default deste spec: **Login**. Prova troca de tela sem puxar o domínio forms. Outros destinos (Webview, Forms, Swipe, etc.) não entram neste slice.
- Data-driven obrigatório do slice está em forms (`FORMS-FORMS-001`), não neste domínio.
- NAV-SIDE-MENU-001 (só abrir o menu) não entra: abrir o menu é passo interno de NAV-SIDE-MENU-002.
- HOME-HOME-002 (scroll) não entra neste slice.
- Chegar à Home pela aba inferior é o caminho de HOME-HOME-001. Chegar à Home pelo Menu é jornada alternativa de `home.md` sem Scenario ID neste spec.

## Out of Scope

Catálogo existente **não** selecionado neste spec:

- HOME-HOME-002 (scroll na Home)
- NAV-SIDE-MENU-001 (abrir menu, isolado)
- NAV-SIDE-MENU-003 (fechar pelo backdrop)
- Customização da tab bar (estrelas / pin)
- Deep links
- Login, cadastro e preenchimento de formulários (domínios authentication e forms)
- Pipeline CI e evidências de relatório (plano posterior do slice, não desta spec)
