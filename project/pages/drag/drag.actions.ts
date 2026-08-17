import { DragPage } from './drag.page';

export class DragActions {
  constructor(private readonly screen = new DragPage()) {}

  async renew(): Promise<void> {
    await this.screen.clickRenew();
  }

}
