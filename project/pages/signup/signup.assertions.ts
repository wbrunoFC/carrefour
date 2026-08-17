import { page } from '../../tests/support/fixtures/page';

export class SignupAssertions {
  private readonly elements = page('signup');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

  async expectSignUpScreen(): Promise<void> {
    await this.expectScreen();
    await expect(await this.elements.$('confirmPassword')).toBeDisplayed();
    await expect(await this.elements.$('signUpButton')).toBeDisplayed();
  }

  async expectSignUpSuccess(): Promise<void> {
    await expect(await this.elements.$('signedUpAlert')).toBeDisplayed();
  }

  async expectNoSignUpSuccess(): Promise<void> {
    expect(await this.elements.isDisplayed('signedUpAlert', 400)).toBe(false);
  }

}
