import { dismissSoftwareKeyboard } from '../../tests/support/fixtures/dismissSoftwareKeyboard';
import { SignupPage } from './signup.page';

export class SignupActions {
  constructor(private readonly screen = new SignupPage()) {}

  async signUp(email: string, password: string, confirmPassword: string): Promise<void> {
    await this.screen.clickSignUpTab();
    await this.screen.setEmail(email);
    await this.screen.setPassword(password);
    await this.screen.setConfirmPassword(confirmPassword);
    await dismissSoftwareKeyboard();
    await this.screen.clickSignUpButton();
  }

  async dismissSuccess(): Promise<void> {
    await this.screen.clickSuccessOk();
  }

}
