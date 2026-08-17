import { page } from '../../tests/support/fixtures/page';

export class SwipePage {
  private readonly elements = page('swipe');

  async isDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('screen');
  }

  async waitForScreen(timeout = 20000): Promise<void> {
    await this.elements.waitForDisplayed('screen', timeout);
  }

  async waitForCarousel(timeout = 15000): Promise<void> {
    await this.elements.waitForDisplayed('carousel', timeout);
  }

  async isCarouselDisplayed(): Promise<boolean> {
    return this.elements.isDisplayed('carousel');
  }

  async getSlideText(): Promise<string> {
    return this.elements.getText('slideText');
  }
}
