import { page } from '../../tests/support/fixtures/page';

export class PermissionsPage {
  private readonly elements = page('permissions');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickCamera(): Promise<void> {
    await this.elements.click('camera');
  }

  async clickMicrophone(): Promise<void> {
    await this.elements.click('microphone');
  }

  async clickLocation(): Promise<void> {
    await this.elements.click('location');
  }

  async clickPhotos(): Promise<void> {
    await this.elements.click('photos');
  }
}
