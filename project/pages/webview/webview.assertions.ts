import { page } from '../../tests/support/fixtures/page';

export class WebviewAssertions {
  private readonly elements = page('webview');

  async expectTabWebview(): Promise<void> {
    await expect(await this.elements.$('tabWebview')).toBeDisplayed();
  }

}
