import { page } from '../../tests/support/fixtures/page';

export class DataSqliteAssertions {
  private readonly elements = page('data-sqlite');

  async expectScreen(): Promise<void> {
    await expect(await this.elements.$('screen')).toBeDisplayed();
  }

  async expectReadout(text: string): Promise<void> {
    await expect(await this.elements.$('readout')).toHaveText(text);
  }

}
