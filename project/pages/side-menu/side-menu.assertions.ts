import { page } from '../../tests/support/fixtures/page';

export class SideMenuAssertions {
  private readonly elements = page('side-menu');

  async expectMenuOpen(): Promise<void> {
    await expect(await this.elements.$('panel')).toBeDisplayed();
  }

}
