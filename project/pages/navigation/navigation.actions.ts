import { NavigationPage } from './navigation.page';

export class NavigationActions {
  constructor(private readonly screen = new NavigationPage()) {}

  async goToHomeTab(): Promise<void> {
    await this.screen.clickHomeTab();
  }

  async goToFormsTab(): Promise<void> {
    await this.screen.clickFormsTab();
  }

  async goToLoginTab(): Promise<void> {
    await this.screen.clickSettingsTab();
  }

  async openMenu(): Promise<void> {
    await this.screen.clickMenuIcon();
  }

}
