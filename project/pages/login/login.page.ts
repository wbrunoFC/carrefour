import { page } from '../../tests/support/fixtures/page';

export class LoginPage {
  private readonly elements = page('login');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async clickLoginTab(): Promise<void> {
    await this.elements.click('loginTab');
  }

  async clickSignUpTab(): Promise<void> {
    await this.elements.click('signUpTab');
  }

  async setEmail(email: string): Promise<void> {
    await this.elements.setValue('email', email);
  }

  async setPassword(password: string): Promise<void> {
    await this.elements.setValue('password', password);
  }

  async clickLogin(): Promise<void> {
    await this.elements.click('loginButton');
  }

  async clickBiometricLogin(): Promise<void> {
    await this.elements.click('biometricButton');
  }

  async clickSuccessOk(): Promise<void> {
    await this.elements.click('successAlertOk');
  }

  async getEmailValue(): Promise<string> {
    return this.elements.getValue('email');
  }

  async getPasswordValue(): Promise<string> {
    return this.elements.getValue('password');
  }

  async isLoginEnabled(): Promise<boolean> {
    return this.elements.isEnabled('loginButton');
  }

  async isEmailDisplayed(timeout = 800): Promise<boolean> {
    return this.elements.isDisplayed('email', timeout);
  }

  async isSuccessDisplayed(timeout = 400): Promise<boolean> {
    return this.elements.isDisplayed('successAlert', timeout);
  }
}
