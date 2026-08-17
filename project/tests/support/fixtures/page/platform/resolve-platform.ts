import type { ExecutionPlatform } from '../types/page-types';

export function resolvePlatform(): ExecutionPlatform {
	const capabilities = browser.capabilities as WebdriverIO.Capabilities;
	const platformName = String(capabilities.platformName ?? 'Android').toLowerCase();

	return platformName.includes('ios') ? 'ios' : 'android';
}
