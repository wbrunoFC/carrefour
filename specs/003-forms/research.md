# Research: Forms

## Decision: Um teste em `tests/e2e/forms/forms/`

- **Decision**: `forms.scenarios.ts` + `forms.test.ts` sob `project/tests/e2e/forms/forms/`. Três IDs no mesmo `describe('FEATURE: forms')`.
- **Rationale**: folder-tests.md C.1. Um domínio, uma feature (`FORMS-FORMS-*`).
- **Alternatives considered**: um arquivo por ID — pasta extra sem ganho. Separar 001 porque é data-driven — o `it()` já se multiplica; arquivo extra é cerimônia.

## Decision: Chegar via `SideMenuActions.goToForms`

- **Decision**: `beforeEach` chama `goToForms()` + `FormsAssertions.expectScreen()`. Não `openLoginScreen`. Não `NavigationPage`.
- **Rationale**: Spec: destino Forms do Menu é pré-condição, não Scenario ID. `goToForms` já existe. `openLoginScreen` prova Login. `pages/navigation` é Settings/Logout (app errado) — mesmo veto do domínio navigation.
- **Alternatives considered**: fixture `openFormsScreen` — wrapper de uma linha; só se o beforeEach se repetir em outro arquivo. Neste slice um arquivo. Aba inferior Forms se existir — Menu é o caminho documentado.

## Decision: Completar `pages/forms`, não criar módulo

- **Decision**: Reusar `FormsPage` (`setTextInput`, `getInputResult`, `clickActiveButton`, `clickInactiveButton`, `waitForScreen`). Acrescentar `FormsActions.tapInactive`. Acrescentar assertions: eco do `inputResult`, alerta Active visível, alerta ausente após Inactive. Acrescentar EL de alerta nos JSON android/ios no mesmo padrão do login (`textContains` no corpo).
- **Rationale**: Constituição: reusar page object; não adicionar módulo que já existe. Hoje `FormsAssertions` só tem `expectScreen`; actions não expõem Inactive. Teste não deve ler selector cru.
- **Alternatives considered**: (1) Assertion no `*.test.ts` com `page('forms')` — fura a camada. (2) Novo `forms-alert.page.ts` — módulo paralelo. (3) Congelar pages como no plan de navigation — lá os métodos já existiam; aqui não.

## Decision: `casesFor` para FORMS-FORMS-001; sem JSON em 003/004

- **Decision**: `project/data/forms.json`, `domain: FORMS`. Dois cases com o **mesmo** `scenarioId` `FORMS-FORMS-001`. Teste itera `casesFor('forms', FORMS_FORMS_001.id)`. Não usar `requireTestCase` neste ID (ele pega só o primeiro). 003 e 004 sem entrada variável — sem rows no JSON.
- **Rationale**: Constituição exige data-driven em 001. Auth usa um case por ID (`requireTestCase`). Aqui o conjunto é o ponto. Inventar `FORMS-FORMS-001-A` quebra o catálogo.
- **Alternatives considered**: um `it()` que faz loop interno — Allure vira um resultado só. Dois IDs no catálogo — viola Features-First.

## Decision: Textos default e eco por contenção

- **Decision**: Cases: palavra curta (`Hello`) e frase com espaço (`Hello world`), ambos ≤ 30. `expected` = o texto digitado. Assertion: `input-text-result` **contém** `expected` (rótulo “You have typed” pode prefixar o widget).
- **Rationale**: Spec default. `toContain` não chuta o prefixo. Se o widget devolver só o texto, ainda passa.
- **Alternatives considered**: `toEqual` no texto cru — quebra se o demo concatenar o rótulo. Terceiro case no limite 30 — mistura a jornada de exceção (fora do slice).

## Decision: Alerta Active pelo corpo; Inactive = ausência curta

- **Decision**: 003 afirma alerta cujo texto contém `This button is active` (corpo da feature). Não precisa clicar Ask me later / Cancel / OK neste slice. 004: `tapInactive` + alerta **não** visível (timeout curto, espelha `expectNoSignUpSuccess`).
- **Rationale**: Feature: Active dispara alerta; Inactive não. Fechar o alerta não é Scenario ID. Login já localiza alerta nativo por `textContains`.
- **Alternatives considered**: Assertar os três botões do alerta — infla 003. Tratar “click em disabled falha” como único pass de 004 — no Android o clique às vezes chega e o app ignora; ausência de alerta é o contrato.

## Decision: Switch, dropdown, maxLength, CI fora

- **Decision**: Não chamar `toggleSwitch` / dropdown. Não automatizar limite 30. Não criar `.github/workflows`. Não alterar Allure em `project/config/`. Não editar testes de authentication/navigation/home.
- **Rationale**: Constituição congelou 3 IDs. Allure já cobre `*.test.ts` novo. CI é plan posterior do slice.
- **Alternatives considered**: “Já que a tela tem switch…” — infla o slice.

## NEEDS CLARIFICATION

Nenhum. Textos, Menu → Forms, e data-driven ≥2 cases vieram da spec. Stack e page objects no disco.
