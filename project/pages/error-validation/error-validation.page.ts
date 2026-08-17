import { page } from '../../tests/support/fixtures/page';

export class ErrorValidationPage {
  private readonly elements = page('error-validation');

  async getEmailErrorMessage(): Promise<string> {
    return this.elements.getText('emailErrorMessage');
  }

  async getPasswordErrorMessage(): Promise<string> {
    return this.elements.getText('passwordErrorMessage');
  }

  async getRequiredFieldsErrorMessage(): Promise<string> {
    return this.elements.getText('requiredFieldsErrorMessage');
  }

  async getErrorAlert(): Promise<string> {
    return this.elements.getText('errorAlert');
  }
}
