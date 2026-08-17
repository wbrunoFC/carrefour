export interface ElementSelector {
	strategy: string;
	value: string;
}

export interface PageElement {
	id: string;
	name: string;
	type: string;
	selector: ElementSelector;
}

export interface PageJson {
	page: string;
	platform: string;
	elements: Record<string, PageElement>;
}
