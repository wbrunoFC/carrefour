import { page } from '../../tests/support/fixtures/page';

export class TabBarCustomizationPage {
  private readonly elements = page('tab-bar-customization');

  async clickMenuButton(): Promise<void> {
    await this.elements.click('menuButton');
  }

  async waitForPanel(timeout = 15000): Promise<void> {
    await this.elements.waitForDisplayed('panel', timeout);
  }

  async isPanelDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('panel');
  }

  async clickStarWebview(): Promise<void> {
    await this.elements.click('starWebview');
  }

  async clickStarLogin(): Promise<void> {
    await this.elements.click('starLogin');
  }

  async clickStarForms(): Promise<void> {
    await this.elements.click('starForms');
  }

  async clickStarSwipe(): Promise<void> {
    await this.elements.click('starSwipe');
  }

  async clickStarDrag(): Promise<void> {
    await this.elements.click('starDrag');
  }

  async clickStarPermissions(): Promise<void> {
    await this.elements.click('starPermissions');
  }

  async clickStarData(): Promise<void> {
    await this.elements.click('starData');
  }
}
