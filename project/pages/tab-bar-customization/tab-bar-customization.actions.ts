import { TabBarCustomizationPage } from './tab-bar-customization.page';

export class TabBarCustomizationActions {
  constructor(private readonly screen = new TabBarCustomizationPage()) {}

  async openMenu(): Promise<void> {
    await this.screen.clickMenuButton();
    await this.screen.waitForPanel();
  }

  async toggleStarWebview(): Promise<void> {
    await this.openMenu();
    await this.screen.clickStarWebview();
  }

}
