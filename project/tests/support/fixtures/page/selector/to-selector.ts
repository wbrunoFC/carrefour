type SelectorBuilder = (value: string) => string;

const SELECTOR_BUILDERS: Record<string, SelectorBuilder> = {
	accessibilityId: (value) => `~${value}`,
	xpath: (value) => value,
	id: (value) => `id=${value}`,
	'class name': (value) => value,
	androidUiAutomator: (value) => `android=${value}`,
	iosPredicate: (value) => `-ios predicate string:${value}`,
};

export function toSelector(strategy: string, value: string): string {
	const buildSelector = SELECTOR_BUILDERS[strategy];

	return buildSelector ? buildSelector(value) : `~${value}`;
}
