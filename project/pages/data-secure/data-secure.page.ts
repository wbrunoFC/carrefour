import { page } from '../../tests/support/fixtures/page';

export class DataSecurePage {
  private readonly elements = page('data-secure');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async setInput(value: string): Promise<void> {
    await this.elements.setValue('input', value);
  }

  async getReadout(): Promise<string> {
    return this.elements.getText('readout');
  }

  async clickSave(): Promise<void> {
    await this.elements.click('save');
  }

  async clickClear(): Promise<void> {
    await this.elements.click('clear');
  }
}
