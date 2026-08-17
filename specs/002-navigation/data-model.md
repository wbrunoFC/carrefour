# Data Model: Navigation

Não há persistência. Modelo = telas visíveis + estado em memória do Menu. Sem arquivo em `project/data/`.

## Tela Home

- Identidade visível: container `Home-screen`.
- Acesso: aba Home (sempre na barra inferior). Sem autenticação.
- Relação: HOME-HOME-001 verifica esta entidade após acessar a aba.

Não há campos de input. Nenhum `TestCase` JSON.

## Menu lateral

- Estado: fechado (default) | aberto (painel visível). Só memória; some ao matar o app.
- Transição deste spec:

```text
app aberto (Home)
  → toque na aba Menu
      → painel aberto (pré-condição de NAV-SIDE-MENU-002)
          → toque no destino Login
              → tela Login / Sign up visível; painel não é o foco
```

- Destino neste slice: **Login** (constante). Outros itens (Webview, Forms, …) existem no page object e ficam fora do modelo desta spec.

## Tela Login (destino)

- Já modelada no domínio authentication. Aqui só o fato “está visível após o Menu”.
- Relação: NAV-SIDE-MENU-002 termina nesta entidade (`expectLoginScreen`), sem submeter o form.

## ScenarioMeta

Já definido em `project/tests/support/metadata/scenario.ts`. Home e side-menu copiam o shape: `id`, `criticality`, `complexity`, `flakiness`, `tags`, `platforms`. Título via `buildScenarioTitle`. Sem schema novo.
