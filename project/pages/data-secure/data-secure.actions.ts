import { DataSecurePage } from './data-secure.page';

export class DataSecureActions {
  constructor(private readonly screen = new DataSecurePage()) {}

  async save(value: string): Promise<void> {
    await this.screen.setInput(value);
    await this.screen.clickSave();
  }

  async clear(): Promise<void> {
    await this.screen.clickClear();
  }

}
