import { page } from '../../tests/support/fixtures/page';

export class FormsPage {
  private readonly elements = page('forms');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async setTextInput(value: string): Promise<void> {
    await this.elements.setValue('textInput', value);
  }

  async getInputResult(): Promise<string> {
    return this.elements.getText('inputResult');
  }

  async clickSwitch(): Promise<void> {
    await this.elements.click('switch');
  }

  async getSwitchText(): Promise<string> {
    return this.elements.getText('switchText');
  }

  async clickDropdown(): Promise<void> {
    await this.elements.click('dropdown');
  }

  async clickDropdownPicker(): Promise<void> {
    await this.elements.click('dropdownPicker');
  }

  async clickDropdownChevron(): Promise<void> {
    await this.elements.click('dropdownChevron');
  }

  async clickActiveButton(): Promise<void> {
    await this.elements.click('activeButton');
  }

  async clickInactiveButton(): Promise<void> {
    await this.elements.click('inactiveButton');
  }
}
