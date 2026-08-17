import { page } from '../../tests/support/fixtures/page';

export class SideMenuPage {
  private readonly elements = page('side-menu');

  async clickMenuButton(): Promise<void> {
    await this.elements.click('menuButton');
  }

  async waitForModal(timeout = 15000): Promise<void> {
    await this.elements.waitForDisplayed('modal', timeout);
  }

  async isModalDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('modal');
  }

  async waitForPanel(timeout = 15000): Promise<void> {
    await this.elements.waitForDisplayed('panel', timeout);
  }

  async isPanelDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('panel');
  }

  async clickItemHome(): Promise<void> {
    await this.elements.click('itemHome');
  }

  async clickItemWebview(): Promise<void> {
    await this.elements.click('itemWebview');
  }

  async clickItemLogin(): Promise<void> {
    await this.elements.click('itemLogin');
  }

  async clickItemForms(): Promise<void> {
    await this.elements.click('itemForms');
  }

  async clickItemSwipe(): Promise<void> {
    await this.elements.click('itemSwipe');
  }

  async clickItemDrag(): Promise<void> {
    await this.elements.click('itemDrag');
  }

  async clickItemPermissions(): Promise<void> {
    await this.elements.click('itemPermissions');
  }

  async clickItemData(): Promise<void> {
    await this.elements.click('itemData');
  }
}
