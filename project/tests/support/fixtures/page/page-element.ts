import {
	DEFAULT_ELEMENT_DISPLAY_TIMEOUT_MS,
	DEFAULT_ELEMENT_VISIBILITY_CHECK_TIMEOUT_MS,
	DEFAULT_ELEMENT_WAIT_TIMEOUT_MS,
} from './constants/element-timeouts';
import { resolvePlatform } from './platform/resolve-platform';
import { PAGE_MAPS } from './registry/page-maps';
import { toSelector } from './selector/to-selector';
import type { ElementKey, PageMap, PageName } from './types/page-name';

export class Page<N extends PageName> {
	private readonly pageMap: PageMap;

	constructor(private readonly pageName: N) {
		this.pageMap = PAGE_MAPS[pageName][resolvePlatform()];
	}

	private buildSelector(elementKey: ElementKey<N>): string {
		const element = this.pageMap.elements[elementKey as keyof typeof this.pageMap.elements];

		if (!element) {
			throw new Error(`Elemento "${String(elementKey)}" ausente em pages/${this.pageName}`);
		}

		return toSelector(element.selector.strategy, element.selector.value);
	}

	private async findElement(elementKey: ElementKey<N>) {
		return $(this.buildSelector(elementKey));
	}

	private async findDisplayedElement(
		elementKey: ElementKey<N>,
		timeout = DEFAULT_ELEMENT_DISPLAY_TIMEOUT_MS,
	) {
		const element = await this.findElement(elementKey);
		await element.waitForDisplayed({ timeout });

		return element;
	}

	async $(elementKey: ElementKey<N>) {
		return this.findElement(elementKey);
	}

	async click(elementKey: ElementKey<N>) {
		const element = await this.findDisplayedElement(elementKey);
		await element.click();
	}

	async setValue(elementKey: ElementKey<N>, value: string) {
		const element = await this.findDisplayedElement(elementKey);
		await element.clearValue();
		await element.setValue(value);
	}

	async clear(elementKey: ElementKey<N>) {
		const element = await this.findDisplayedElement(elementKey);
		await element.clearValue();
	}

	async getText(elementKey: ElementKey<N>) {
		const element = await this.findDisplayedElement(elementKey);

		return element.getText();
	}

	async waitForDisplayed(elementKey: ElementKey<N>, timeout = DEFAULT_ELEMENT_WAIT_TIMEOUT_MS) {
		await this.findDisplayedElement(elementKey, timeout);
	}

	async isDisplayed(elementKey: ElementKey<N>, timeout = DEFAULT_ELEMENT_VISIBILITY_CHECK_TIMEOUT_MS) {
		const element = await this.findElement(elementKey);

		try {
			await element.waitForDisplayed({ timeout });

			return true;
		} catch {
			return false;
		}
	}

	async isEnabled(elementKey: ElementKey<N>): Promise<boolean> {
		const element = await this.findElement(elementKey);

		try {
			return await element.isEnabled();
		} catch {
			// Elemento pode estar ausente ou em transição entre telas.
			return false;
		}
	}

	async getValue(elementKey: ElementKey<N>): Promise<string> {
		const element = await this.findElement(elementKey);

		try {
			return String((await element.getText()) ?? '');
		} catch {
			// Campo pode não estar pronto para leitura durante animação ou reset de formulário.
			return '';
		}
	}
}

export function page<N extends PageName>(pageName: N): Page<N> {
	return new Page(pageName);
}

export type { PageName } from './types/page-name';
