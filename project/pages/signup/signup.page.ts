import { page } from '../../tests/support/fixtures/page';

export class SignupPage {
  private readonly elements = page('signup');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickSignUpTab(): Promise<void> {
    await this.elements.click('signUpTab');
  }

  async clickLoginTab(): Promise<void> {
    await this.elements.click('loginTab');
  }

  async setEmail(value: string): Promise<void> {
    await this.elements.setValue('email', value);
  }

  async setPassword(value: string): Promise<void> {
    await this.elements.setValue('password', value);
  }

  async setConfirmPassword(value: string): Promise<void> {
    await this.elements.setValue('confirmPassword', value);
  }

  async clickSignUpButton(): Promise<void> {
    await this.elements.click('signUpButton');
  }

  async clickSuccessOk(): Promise<void> {
    await this.elements.click('signedUpAlertOk');
  }

  async isSuccessDisplayed(timeout = 400): Promise<boolean> {
    return this.elements.isDisplayed('signedUpAlert', timeout);
  }
}
