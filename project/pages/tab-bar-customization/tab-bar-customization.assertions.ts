import { page } from '../../tests/support/fixtures/page';

export class TabBarCustomizationAssertions {
  private readonly elements = page('tab-bar-customization');

  async expectMenuButton(): Promise<void> {
    await expect(await this.elements.$('menuButton')).toBeDisplayed();
  }

}
