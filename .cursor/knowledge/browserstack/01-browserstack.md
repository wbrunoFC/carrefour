# Set up Local Testing in BrowserStack Live | BrowserStack Docs

**URL:** https://www.browserstack.com/docs/app-live/local-testing/set-up-local-testing#download-install-bstack

**Saved:** 2026-08-13

---

## Configurar testes locais

Aprenda como configurar testes locais.

Para configurar o Teste Local, você precisa instalar o aplicativo BrowserStack Local ou executar o binário, dependendo do sistema operacional e do navegador que você está usando para acessar o BrowserStack App Live.

Para entender por que você precisa instalar o aplicativo BrowserStack Local ou executar o binário, consulte [Por que você precisa instalar o aplicativo BrowserStackLocal?](https://www.browserstack.com/docs/app-live/local-testing#why-do-you-need-to-install-browserstack-local-app-or-run-the-binary) .

A configuração de Teste Local envolve as seguintes etapas gerais:

1.  [Baixe e instale o aplicativo ou binário BrowserStackLocal.](#download-install-bstack)
2.  [Inicie o aplicativo BrowserStackLocal](#launch-bstack-app) (aplicável somente ao aplicativo BrowserStackLocal)
3.  [Verifique se o aplicativo BrowserStackLocal está em execução](#verify-bstack-app-running) (aplicável somente ao aplicativo BrowserStackLocal).
4.  [Conecte o aplicativo BrowserStackLocal ao App Live](#connect-live-app-live) (aplicável somente ao aplicativo BrowserStackLocal).
5.  [Inicie uma sessão local do App Live e teste.](#launch-live-app-live-session)
6.  [Acesse seu aplicativo no App Live.](#access-website-live-app-live)

## Baixe e instale o BrowserStackLocal.

Para obter instruções sobre como baixar e instalar o BrowserStackLocal, consulte a seção correspondente:

O sistema operacional mencionado nas seções a seguir é o sistema operacional que você está usando para acessar o BrowserStack.

- [Windows](#Windows)
- [macOS](#macOS)
- [Linux](#Linux)

Para configurar o Teste Local, você pode usar o aplicativo ou o binário BrowserStackLocal. Se preferir configurar o Teste Local por meio de uma interface gráfica, baixe e instale o aplicativo BrowserStackLocal. Se preferir configurar o Teste Local por meio de uma interface de linha de comando, execute o binário BrowserStackLocal.

### Aplicativo BrowserStackLocal

### Download BrowserStackLocal app installer

You can download the BrowserStackLocal app installer (`BrowserStackLocal.pkg`) from the following sources:

After you download the installer or during the installation, you might get some security warnings depending on your organization’s security restrictions. You can still continue with the installation as the download links are secure. The installer is digitally signed, identifying the publisher as **BrowserStack Ltd.**

**Direct download link**:

[Download the BrowserStack Local app](https://local-downloads.browserstack.com/native-app/release/BrowserStackLocal.pkg)

**Live session**: You can also download `BrowserStackLocal.pkg` from the Local Testing option on the Live vertical toolbar.

![Live in-session download](https://www.browserstack.com/docs/static/img/live/local-testing/download-in-session/download-in-session.webp)  
The `BrowserStackLocal.pkg` package is downloaded to your default download folder. You can also find the installer on your browser’s downloads page.

![Mac Downloads folder](https://www.browserstack.com/docs/static/img/live/local-testing/download-in-session/mac-local-download.webp)

### Install BrowserStackLocal app

1.  Double-click the `BrowserStackLocal.pkg` file.  
    The installer launches.
2.  On the Introduction screen, click **Continue**. ![Introduction screen](https://www.browserstack.com/docs/static/img/live/local-testing/mac-install/introduction-screen.webp)  
    The installer takes the default destination for installation and goes to the Installation Type screen.
3.  (Optional) If you want to change the destination folder, on the Installation Type screen, click **Change Install Location**. On the Destination Select screen, choose your desired location where you want to install the app and click **Continue**. ![Change installation destination](https://www.browserstack.com/docs/static/img/live/local-testing/mac-install/change-install-location.webp)
4.  On the Installation Type screen, click **Install**.  
    ![Install local](https://www.browserstack.com/docs/static/img/live/local-testing/mac-install/mac-install.webp)

    The installer requests for your password to allow the installation. Enter the password and click **Install Software**.  
    ![Click install software](https://www.browserstack.com/docs/static/img/live/local-testing/mac-install/install-software.webp)

    The Summary window confirms that the BrowserStackLocal app is installed. Click **Close**. ![Click the close button](https://www.browserstack.com/docs/static/img/live/local-testing/mac-install/summary.webp)

### Binário local do BrowserStack

Download the [BrowserStack Local binary for macOS/OS X](https://local-downloads.browserstack.com/BrowserStackLocal-darwin-x64.zip).

After you download the binary or when you run the binary, you might get some security warnings depending on your organization’s security restrictions. You can still continue with the installation as the download links are secure. The binaries are digitally signed, identifying the publisher as **BrowserStack Ltd.**

Unzip the file to a folder/directory on your system, open the command-line interface, and navigate to the folder containing the Local binary.

Run the Local binary using the following command:

A success message confirms that BrowserStackLocal is running on your system.

## Inicie o aplicativo BrowserStackLocal

Esta etapa aplica-se apenas ao aplicativo BrowserStackLocal e não ao arquivo binário.

Após a instalação do aplicativo BrowserStackLocal, ele inicia automaticamente e você não precisa fazer nada para iniciá-lo.

Se o aplicativo não iniciar automaticamente, siga estas etapas para iniciar o aplicativo BrowserStack Local:

- [Windows](#Windows)
- [macOS](#macOS)

Abra o Finder. Em seguida, acesse a pasta **Aplicativos** e clique no aplicativo **BrowserStackLocal** .

To know more about the options on the BrowserStackLocal app, see [BrowserStackLocal app UI options](https://www.browserstack.com/docs/live/local-testing/local-app-ui).

## Verify whether BrowserStackLocal app is running

This step is only applicable to the BrowserStackLocal app, and not the binary.

To verify whether the BrowserStackLocal app is running:

- [Windows](#Windows)
- [macOS](#macOS)

You can see the BrowserStack Local app icon in the top menu bar.

![O aplicativo BrowserStack Local está em execução.](https://www.browserstack.com/docs/static/img/live/local-testing/local-running/local-running-mac.webp)

## Connect the BrowserStackLocal app with App Live

This step is only applicable to the BrowserStackLocal app, and not the binary.

If you do not have the [App Live dashboard](https://app-live.browserstack.com/) or App Live session open in your browser, open the dashboard to initiate the connection between the BrowserStackLocal app and App Live.

If you already have the [App Live dashboard](https://app-live.browserstack.com/) open or a App Live session running in your browser, the BrowserStackLocal app automatically connects with App Live.

On the BrowserStackLocal app, the status shows as **Connected**, which indicates that App Live is now connected to BrowserStackLocal.

- [Windows](#Windows)
- [macOS](#macOS)

![O aplicativo BrowserStack Local está conectado.](https://www.browserstack.com/docs/static/img/live/local-testing/local-connect/local-connected-mac.webp)

On the BrowserStackLocal app, if the status shows as **Disconnected**, then your setup might have network restrictions such as WebSockets traffic being blocked by the network or proxy server being used to access the internet. To resolve these issues, see [Troubleshoot connectivity issues](https://www.browserstack.com/docs/app-live/local-testing/setup-troubleshooting-guide#browserstacklocal-app-connectivity-issues).

## Launch a local App Live session and test

If you do not have a test session running in your browser, open the [App Live dashboard](https://live.browserstack.com/) and [launch an App Live session](https://www.browserstack.com/docs/app-live/get-started/launch-session) and proceed with testing.

On the App Live horizontal toolbar, the green indicator beside the Local Testing option indicates that Local Testing is enabled for your session.  
![Indicador para sinalizar que o teste local está ativado](https://www.browserstack.com/docs/static/img/live/local-testing/local-connect/local-connect.webp)

If you had a test session already running before you [connected BrowserStackLocal with App Live](#connect-live-app-live), then the session restarts with the Local settings and the Local Testing indicator becomes green.

If the BrowserStackLocal app shows **Connected** but the App Live session still asks you to install Local, enable Chrome’s **Local network access** permission:

1.  Click the padlock icon in the address bar.
2.  Enable the **Local network access** option.
3.  Reload the session tab. If the **Local network access option** isn’t available, update Chrome to the latest version.

## Access your app on App Live

In the App Live session, you can access and interact with your app as you would on a physical mobile device, regardless of whether the app interacts with one or multiple servers.

If your organization requires all the traffic to be routed through your network, you can enable the [Force Local flag](https://www.browserstack.com/docs/app-live/local-testing/force-local-proxy#enable-force-local).

Devido a restrições de segurança no Safari (no iOS 10 e posterior), os URLs de localhost serão automaticamente alterados para `bs-local.com`. Isso nos permite carregar os recursos do seu aplicativo corretamente. Lembre-se de garantir que seu servidor local esteja configurado para atender solicitações de `bs-local.com`.

## Próximos passos

Se você configurou corretamente o Teste Local e seu aplicativo ainda não consegue acessar os servidores internos, você pode ter restrições de rede. Dependendo das suas restrições de rede, consulte o tópico relevante:

- [Teste aplicativos por trás de um proxy](https://www.browserstack.com/docs/app-live/local-testing/behind-proxies-firewalls-vpns)
- [Teste aplicativos por trás de um firewall ou VPN.](https://www.browserstack.com/docs/app-live/local-testing/behind-firewall-vpn)

Para solucionar problemas, consulte:

- [Solucionar problemas de configuração](https://www.browserstack.com/docs/app-live/local-testing/setup-troubleshooting-guide)
- [Solucionar problemas do iOS](https://www.browserstack.com/docs/app-live/local-testing/ios-troubleshooting-guide)

#### We're sorry to hear that. Please share your feedback so we can do better

Contact our [Support team](https://www.browserstack.com/support) for immediate help while we work on improving our docs.

#### We're continuously improving our docs. We'd love to know what you liked

- This page has exactly what I am looking for
- This content & code samples are accurate and up-to-date
- The content on this page is easy to understand
- Other (please tell us more below)

Any additional feedback?

Thank you for your valuable feedback
