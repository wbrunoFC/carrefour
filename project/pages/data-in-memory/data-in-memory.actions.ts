import { DataInMemoryPage } from './data-in-memory.page';

export class DataInMemoryActions {
  constructor(private readonly screen = new DataInMemoryPage()) {}

  async save(value: string): Promise<void> {
    await this.screen.setInput(value);
    await this.screen.clickSave();
  }

  async clear(): Promise<void> {
    await this.screen.clickClear();
  }

}
