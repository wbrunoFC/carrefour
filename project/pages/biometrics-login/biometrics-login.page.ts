import { page } from '../../tests/support/fixtures/page';

export class BiometricsLoginPage {
  private readonly elements = page('biometrics-login');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickLoginTab(): Promise<void> {
    await this.elements.click('loginTab');
  }

  async clickBiometricButton(): Promise<void> {
    await this.elements.click('biometricButton');
  }

  async setEmail(value: string): Promise<void> {
    await this.elements.setValue('email', value);
  }

  async setPassword(value: string): Promise<void> {
    await this.elements.setValue('password', value);
  }
}
