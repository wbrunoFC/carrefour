import { BiometricsLoginPage } from './biometrics-login.page';

export class BiometricsLoginActions {
  constructor(private readonly screen = new BiometricsLoginPage()) {}

  async loginWithBiometrics(): Promise<void> {
    await this.screen.clickLoginTab();
    await this.screen.clickBiometricButton();
  }

}
