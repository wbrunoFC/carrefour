import { page } from '../../tests/support/fixtures/page';

export class NavigationPage {
  private readonly elements = page('navigation');

  async clickHomeTab(): Promise<void> {
    await this.elements.click('homeTab');
  }

  async clickFormsTab(): Promise<void> {
    await this.elements.click('formsTab');
  }

  async clickSettingsTab(): Promise<void> {
    await this.elements.click('settingsTab');
  }

  async clickMenuIcon(): Promise<void> {
    await this.elements.click('menuIcon');
  }

  async clickHomeMenuItem(): Promise<void> {
    await this.elements.click('homeMenuItem');
  }

  async clickSettingsMenuItem(): Promise<void> {
    await this.elements.click('settingsMenuItem');
  }

  async clickLogoutMenuItem(): Promise<void> {
    await this.elements.click('logoutMenuItem');
  }
}
