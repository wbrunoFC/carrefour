# Esperas (waits) no Appium

Telas mobile raramente carregam na mesma velocidade. Elemento pode aparecer após animação, rede, permissão ou WebView. Agir cedo demais = app ok, teste falha.

Waits fazem o teste esperar uma condição real antes da próxima ação.

## Por que hard wait é problema

Hard wait pausa por tempo fixo (ex.: `Thread.sleep(5000)`).

Problemas:

- Elemento em 1s → teste ainda espera 5s
- Elemento em 6s → teste falha mesmo assim

Suite fica lenta e timing continua instável. Evite, salvo debug raro.

## Prefira espera explícita

Espera até uma condição ser verdadeira — ex.: botão clicável antes do tap.

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement loginButton = wait.until(
        ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("Login")
        )
);
loginButton.click();
```

Não espera 10s cego: espera **até** 10s. Se o botão ficar pronto antes, segue na hora.

## Condições comuns

| Condição | Quando usar |
|----------|-------------|
| `visibilityOfElementLocated` | Elemento visível antes de validar/ler texto |
| `elementToBeClickable` | Pronto para tap/click |
| `presenceOfElementLocated` | Existe na árvore UI (mesmo se ainda não visível) |
| `invisibilityOfElementLocated` | Loader, toast ou overlay some |
| `textToBePresentInElementLocated` | Label/mensagem/status atualiza antes do assert |

Loader sumindo:

```java
wait.until(
        ExpectedConditions.invisibilityOfElementLocated(
                AppiumBy.accessibilityId("Loading")
        )
);
```

Útil após login, pagamento, busca ou tela que depende de backend.

## Espere estado da tela, não só um elemento

Erro comum: esperar um elemento e achar que a tela inteira está pronta. Botão pode aparecer antes de dados, imagens ou conteúdo dinâmico.

Espere o estado que prova que a tela está usável. Ex.: após login, espere elemento que confirma sucesso — não só o container da próxima tela.

```java
WebElement accountHeader = wait.until(
        ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.accessibilityId("Account Home")
        )
);
Assert.assertTrue(accountHeader.isDisplayed());
```

Mais próximo de como um usuário julga se a ação deu certo.

## Diálogos de permissão

Podem aparecer no install fresco e não nas execuções seguintes. Trate só quando existirem.

```java
try {
    WebElement allowButton = new WebDriverWait(driver, Duration.ofSeconds(3))
            .until(ExpectedConditions.elementToBeClickable(
                    AppiumBy.id("com.android.permissioncontroller:id/permission_allow_button")
            ));
    allowButton.click();
} catch (Exception ignored) {
    // Diálogo não apareceu — segue o teste.
}
```

Timeout curto; se não houver diálogo, continue.

## Não misture implicit e explicit wait

- **Implicit:** global em buscas de elemento
- **Explicit:** baseada em condição

Misturar deixa falhas mais difíceis de entender (espera maior do que o esperado).

Abordagem mais segura:

- implicit baixo ou zero
- explicit nas condições importantes de UI
- helpers reutilizáveis por tela

```java
public WebElement waitForVisible(By locator) {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
}
```

Uso:

```java
WebElement loginButton = waitForVisible(AppiumBy.accessibilityId("Login"));
loginButton.click();
```

## Próximo

→ [09-debug.md](./09-debug.md)
