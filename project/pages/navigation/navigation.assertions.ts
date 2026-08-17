import { page } from '../../tests/support/fixtures/page';

export class NavigationAssertions {
  private readonly elements = page('navigation');

  async expectHomeTab(): Promise<void> {
    await expect(await this.elements.$('homeTab')).toBeDisplayed();
  }

}
