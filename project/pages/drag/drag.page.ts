import { page } from '../../tests/support/fixtures/page';

export class DragPage {
  private readonly elements = page('drag');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickRenew(): Promise<void> {
    await this.elements.click('renew');
  }
}
