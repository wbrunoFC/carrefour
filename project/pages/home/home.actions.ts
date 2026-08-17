import { HomePage } from './home.page';

export class HomeActions {
  constructor(private readonly screen = new HomePage()) {}

  async openMenu(): Promise<void> {
    await this.screen.clickMenuButton();
  }

  async goToHomeTab(): Promise<void> {
    await this.screen.clickTabHome();
  }

}
