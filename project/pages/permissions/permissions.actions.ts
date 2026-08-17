import { PermissionsPage } from './permissions.page';

export class PermissionsActions {
  constructor(private readonly screen = new PermissionsPage()) {}

  async tapCamera(): Promise<void> {
    await this.screen.clickCamera();
  }

  async tapMicrophone(): Promise<void> {
    await this.screen.clickMicrophone();
  }

  async tapLocation(): Promise<void> {
    await this.screen.clickLocation();
  }

  async tapPhotos(): Promise<void> {
    await this.screen.clickPhotos();
  }

}
