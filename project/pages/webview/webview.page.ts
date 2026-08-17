import { page } from '../../tests/support/fixtures/page';

export class WebviewPage {
  private readonly elements = page('webview');

  async clickTabWebview(): Promise<void> {
    await this.elements.click('tabWebview');
  }

  async clickMenuItem(): Promise<void> {
    await this.elements.click('menuItem');
  }

  async waitForWebView(timeout = 15000): Promise<void> {
    await this.elements.waitForDisplayed('webView', timeout);
  }

  async isWebViewDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('webView');
  }
}
