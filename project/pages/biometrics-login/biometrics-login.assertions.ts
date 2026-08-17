import { page } from '../../tests/support/fixtures/page';

export class BiometricsLoginAssertions {
  private readonly elements = page('biometrics-login');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

  async expectBiometricButton(): Promise<void> {
    await expect(await this.elements.$('biometricButton')).toBeDisplayed();
  }

}
