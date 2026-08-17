import { page } from '../../tests/support/fixtures/page';

export class SwipeAssertions {
  private readonly elements = page('swipe');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

}
