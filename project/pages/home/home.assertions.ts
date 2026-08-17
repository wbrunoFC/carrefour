import { page } from '../../tests/support/fixtures/page';

export class HomeAssertions {
  private readonly elements = page('home');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

}
