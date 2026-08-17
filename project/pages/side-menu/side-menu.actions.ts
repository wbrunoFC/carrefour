import { dismissSoftwareKeyboard } from '../../tests/support/fixtures/dismissSoftwareKeyboard';
import { SideMenuPage } from './side-menu.page';

export class SideMenuActions {
  constructor(private readonly screen = new SideMenuPage()) {}

  async open(): Promise<void> {
    await dismissSoftwareKeyboard();
    await this.screen.clickMenuButton();
    await this.screen.waitForPanel();
  }

  async goToLogin(): Promise<void> {
    await this.open();
    await this.screen.clickItemLogin();
  }

  async goToHome(): Promise<void> {
    await this.open();
    await this.screen.clickItemHome();
  }

  async goToWebview(): Promise<void> {
    await this.open();
    await this.screen.clickItemWebview();
  }

  async goToForms(): Promise<void> {
    await this.open();
    await this.screen.clickItemForms();
  }

  async goToSwipe(): Promise<void> {
    await this.open();
    await this.screen.clickItemSwipe();
  }

  async goToDrag(): Promise<void> {
    await this.open();
    await this.screen.clickItemDrag();
  }

  async goToPermissions(): Promise<void> {
    await this.open();
    await this.screen.clickItemPermissions();
  }

  async goToData(): Promise<void> {
    await this.open();
    await this.screen.clickItemData();
  }

}
