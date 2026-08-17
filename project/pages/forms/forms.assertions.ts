import { page } from '../../tests/support/fixtures/page';

export class FormsAssertions {
  private readonly elements = page('forms');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

  async expectTyped(text: string): Promise<void> {
    await expect(await this.elements.getText('inputResult')).toContain(text);
  }

  async expectActiveAlert(): Promise<void> {
    await expect(await this.elements.$('activeAlert')).toBeDisplayed();
  }

  async expectNoActiveAlert(): Promise<void> {
    expect(await this.elements.isDisplayed('activeAlert', 400)).toBe(false);
  }

}
