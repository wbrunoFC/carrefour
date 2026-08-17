import { page } from '../../tests/support/fixtures/page';

export class ErrorValidationAssertions {
  private readonly elements = page('error-validation');

  async expectInvalidEmail(): Promise<void> {
    await expect(await this.elements.$('emailErrorMessage')).toBeDisplayed();
  }

  async expectInvalidPassword(): Promise<void> {
    await expect(await this.elements.$('passwordErrorMessage')).toBeDisplayed();
  }

  async expectRequiredFields(): Promise<void> {
    await expect(await this.elements.$('requiredFieldsErrorMessage')).toBeDisplayed();
  }

  async expectErrorAlert(): Promise<void> {
    await expect(await this.elements.$('errorAlert')).toBeDisplayed();
  }

  async expectMismatchedPassword(): Promise<void> {
    await expect(await this.elements.$('confirmPasswordErrorMessage')).toBeDisplayed();
  }

}
