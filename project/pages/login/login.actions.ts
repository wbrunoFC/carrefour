import { dismissSoftwareKeyboard } from '../../tests/support/fixtures/dismissSoftwareKeyboard';
import { LoginPage } from './login.page';

export class LoginActions {
  constructor(private readonly screen = new LoginPage()) {}

  async login(email: string, password: string): Promise<void> {
    await this.screen.setEmail(email);
    await this.screen.setPassword(password);
    await dismissSoftwareKeyboard();
    await this.screen.clickLogin();
  }

  async dismissSuccess(): Promise<void> {
    await this.screen.clickSuccessOk();
  }

  async openLoginTab(): Promise<void> {
    await this.screen.clickLoginTab();
  }

  async openSignUpTab(): Promise<void> {
    await this.screen.clickSignUpTab();
  }

  async loginWithBiometrics(): Promise<void> {
    await this.screen.clickBiometricLogin();
  }

}
