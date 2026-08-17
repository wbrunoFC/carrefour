# UI contract: telas visíveis (navigation)

Contrato com o app demo. Testes MUST afirmar estas superfícies. Não traduzir accessibility ids na assertion — eles vivem nos JSON de `project/pages/`.

Fonte: `project/features/home/home.md`, `project/features/navigation/side-menu.md`.

| Scenario ID | Superfície | Como o usuário percebe |
|-------------|------------|------------------------|
| HOME-HOME-001 | tela Home | Conteúdo introdutório da Home visível após acessar a aba Home |
| NAV-SIDE-MENU-002 | tela Login / Sign up | Após escolher Login no Menu, campos de login (e-mail, senha, LOGIN) visíveis |

Pré-condição de NAV-SIDE-MENU-002: painel do Menu aberto (aba Menu). Não é Scenario ID deste spec; o teste abre o menu como passo.

Não há mensagem de erro neste domínio.

Selectors concretos (`Home-screen`, `Menu`, `side-menu-item-login`, `Login-screen`) ficam nos JSON `EL00N`, não neste arquivo.
