import { page } from '../../tests/support/fixtures/page';

export class DragAssertions {
  private readonly elements = page('drag');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

}
