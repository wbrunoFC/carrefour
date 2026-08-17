import { dismissSoftwareKeyboard } from '../../tests/support/fixtures/dismissSoftwareKeyboard';
import { FormsPage } from './forms.page';

export class FormsActions {
  constructor(private readonly screen = new FormsPage()) {}

  async fillText(value: string): Promise<void> {
    await this.screen.setTextInput(value);
    await dismissSoftwareKeyboard();
  }

  async toggleSwitch(): Promise<void> {
    await this.screen.clickSwitch();
  }

  async tapActive(): Promise<void> {
    await this.screen.clickActiveButton();
  }

  async tapInactive(): Promise<void> {
    await this.screen.clickInactiveButton();
  }

}
