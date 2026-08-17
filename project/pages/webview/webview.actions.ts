import { WebviewPage } from './webview.page';

export class WebviewActions {
  constructor(private readonly screen = new WebviewPage()) {}

  async openTab(): Promise<void> {
    await this.screen.clickTabWebview();
  }

  async openMenuItem(): Promise<void> {
    await this.screen.clickMenuItem();
  }

}
