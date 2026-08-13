# Seu primeiro teste Appium

Stack do exemplo: **Java + TestNG + Appium Java Client**.

- Appium Java Client: binding oficial; classes como `AndroidDriver` (UiAutomator2) e `IOSDriver` (XCUITest)
- Versões de referência do tutorial: Java Client **10.1.1**, TestNG **7.12.0**

## Passo 1 — Dependências Maven (`pom.xml`)

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>appium-mobile-tests</artifactId>
    <version>1.0-SNAPSHOT</version>
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <appium.java.client.version>10.1.1</appium.java.client.version>
        <testng.version>7.12.0</testng.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>io.appium</groupId>
            <artifactId>java-client</artifactId>
            <version>${appium.java.client.version}</version>
        </dependency>
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>${testng.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

Não é obrigatório adicionar Selenium à parte neste exemplo básico: o Java Client já depende das libs Selenium. Fixe Selenium só se o framework exigir controle mais rígido (veja a matriz de compatibilidade do client).

## Passo 2 — Subir o Appium

Em outro terminal:

```bash
appium
```

URL do client: `http://127.0.0.1:4723`

Emulador Android rodando, ou device real conectado e visível:

```bash
adb devices
```

## Passo 3 — Teste Android básico

Arquivo: `src/test/java/tests/FirstAndroidTest.java`

```java
package tests;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.net.URI;
import java.net.URL;
import java.time.Duration;

public class FirstAndroidTest {
    private AndroidDriver driver;
    private WebDriverWait wait;

    @BeforeMethod
    public void setUp() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options()
                .setPlatformName("Android")
                .setAutomationName("UiAutomator2")
                .setDeviceName("Android Emulator")
                .setApp(System.getProperty("user.dir") + "/apps/sample.apk");

        URL appiumServerUrl = URI.create("http://127.0.0.1:4723").toURL();
        driver = new AndroidDriver(appiumServerUrl, options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    public void userCanOpenLoginScreen() {
        WebElement loginButton = wait.until(
                ExpectedConditions.elementToBeClickable(
                        AppiumBy.accessibilityId("Login")
                )
        );
        loginButton.click();

        WebElement loginTitle = wait.until(
                ExpectedConditions.visibilityOfElementLocated(
                        AppiumBy.accessibilityId("Login Screen")
                )
        );

        Assert.assertTrue(
                loginTitle.isDisplayed(),
                "Login screen should be visible after tapping Login."
        );
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
```

O exemplo assume accessibility IDs `Login` e `Login Screen`. No projeto real, use o Appium Inspector e troque pelos localizadores do seu app.

## Passo 4 — Rodar

Na raiz do projeto:

```bash
mvn test
```

Se o setup estiver ok: Maven compila, TestNG executa, Appium cria sessão Android via UiAutomator2.

## O que o teste faz

| Peça | Papel |
|------|--------|
| `UiAutomator2Options` | Define a sessão Android |
| `setAutomationName("UiAutomator2")` | Escolhe o driver |
| `setApp()` | APK a instalar e abrir |
| `AndroidDriver` | Abre a sessão com o servidor |
| `WebDriverWait` | Espera o botão ficar clicável |
| `AppiumBy.accessibilityId()` | Localiza elemento estável |
| `driver.quit()` | Encerra a sessão |

Estrutura que importa: setup → sessão → wait → ação → assert → cleanup. Facilita debug.

## Próximo

→ [07-localizadores.md](./07-localizadores.md)
