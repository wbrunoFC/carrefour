# Estratégias de localizadores no Appium

Localizadores definem como o Appium acha elementos. Localizador frágil faz teste bom falhar com app ok — posição na tela, texto que muda, XPath longo amarrado à hierarquia.

Bom localizador:

- estável diante de mudanças pequenas de UI
- legível para outro tester
- específico o bastante para não pegar o elemento errado
- suportado pelo driver da plataforma

## 1. Accessibility ID (preferido)

Melhor opção na maioria dos casos. Funciona em Android e iOS; menos dependente da estrutura visual.

```java
driver.findElement(AppiumBy.accessibilityId("Login"));
```

Use em ações importantes: login, busca, menu, checkout.

Peça aos devs labels/content descriptions significativos — ajuda automação e acessibilidade.

## 2. Resource ID (Android)

Aponta para o ID definido no código Android.

```java
driver.findElement(AppiumBy.id("com.example:id/login_button"));
```

Bom quando os IDs são estáveis. Evite IDs gerados dinamicamente ou que mudam entre builds.

## 3. iOS Predicate String

Em iOS, costuma ser mais confiável que XPath. Filtra por label, name, value, type, visibility etc.

```java
driver.findElement(
        AppiumBy.iOSNsPredicateString("label == 'Login'")
);
```

Condições combinadas:

```java
driver.findElement(
        AppiumBy.iOSNsPredicateString("label == 'Login' AND visible == true")
);
```

Útil com vários elementos parecidos ou condição mais específica.

## 4. iOS Class Chain

Mais rápido e limpo que XPath em muitos lookups por hierarquia.

```java
driver.findElement(
        AppiumBy.iOSClassChain("**/XCUIElementTypeButton[`label == 'Login'`]")
);
```

Use quando Accessibility ID / predicate não bastam. Evite chains muito dependentes da hierarquia exata.

## 5. Android UiAutomator selector

Matching específico de Android:

```java
driver.findElement(
        AppiumBy.androidUIAutomator("new UiSelector().text(\"Login\")")
);
```

Scroll até o elemento:

```java
driver.findElement(
        AppiumBy.androidUIAutomator(
                "new UiScrollable(new UiSelector().scrollable(true))" +
                ".scrollIntoView(new UiSelector().text(\"Settings\"))"
        )
);
```

## 6. XPath (fallback)

Pode funcionar, mas costuma ser mais lento e frágil.

```java
driver.findElement(
        AppiumBy.xpath("//android.widget.Button[@text='Login']")
);
```

Evite XPath absoluto por hierarquia:

```java
driver.findElement(
        AppiumBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button[2]")
);
```

Quebra fácil com mudança de layout, mesmo com a tela “igual” para o usuário.

## Ordem recomendada

| Prioridade | Estratégia | Quando usar |
|------------|------------|-------------|
| 1 | Accessibility ID | Default estável cross-platform |
| 2 | Android resource ID | Apps Android com IDs estáveis |
| 3 | iOS Predicate String | iOS sem Accessibility ID |
| 4 | iOS Class Chain | Lookup por hierarquia no iOS |
| 5 | Android UiAutomator | Seleção/scroll específicos Android |
| 6 | XPath | Só se não houver opção melhor |

Melhor localizador ≠ o mais curto. É o que continua funcionando após mudanças de UI, updates e diferenças de device. Em produção, estabilidade > velocidade de escrita.

## Próximo

→ [08-waits.md](./08-waits.md)
