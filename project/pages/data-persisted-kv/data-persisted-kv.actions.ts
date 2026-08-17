import { DataPersistedKvPage } from './data-persisted-kv.page';

export class DataPersistedKvActions {
  constructor(private readonly screen = new DataPersistedKvPage()) {}

  async save(value: string): Promise<void> {
    await this.screen.setInput(value);
    await this.screen.clickSave();
  }

  async clear(): Promise<void> {
    await this.screen.clickClear();
  }

}
