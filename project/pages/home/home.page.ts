import { page } from '../../tests/support/fixtures/page';

export class HomePage {
  private readonly elements = page('home');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickTabHome(): Promise<void> {
    await this.elements.click('tabHome');
  }

  async clickMenuButton(): Promise<void> {
    await this.elements.click('menuButton');
  }
}
