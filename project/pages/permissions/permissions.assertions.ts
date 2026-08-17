import { page } from '../../tests/support/fixtures/page';

export class PermissionsAssertions {
  private readonly elements = page('permissions');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

}
