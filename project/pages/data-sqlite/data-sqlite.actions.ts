import { DataSqlitePage } from './data-sqlite.page';

export class DataSqliteActions {
  constructor(private readonly screen = new DataSqlitePage()) {}

  async save(value: string): Promise<void> {
    await this.screen.setInput(value);
    await this.screen.clickSave();
  }

  async clear(): Promise<void> {
    await this.screen.clickClear();
  }

}
