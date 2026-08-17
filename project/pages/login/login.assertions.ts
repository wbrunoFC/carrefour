import { page } from '../../tests/support/fixtures/page';

export class LoginAssertions {
  private readonly elements = page('login');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

  async expectLoginScreen(): Promise<void> {
    await this.expectScreen();
    await expect(await this.elements.$('email')).toBeDisplayed();
    await expect(await this.elements.$('password')).toBeDisplayed();
    await expect(await this.elements.$('loginButton')).toBeDisplayed();
  }

  async expectLoginSuccess(): Promise<void> {
    await expect(await this.elements.$('successAlert')).toBeDisplayed();
  }

}
