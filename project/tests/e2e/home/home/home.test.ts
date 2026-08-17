import { HomeActions } from '../../../../pages/home/home.actions';
import { HomeAssertions } from '../../../../pages/home/home.assertions';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { HOME_HOME_001 } from './home.scenarios';

describe('FEATURE: home', () => {
	const homeActions = new HomeActions();
	const homeAssertions = new HomeAssertions();

	it(buildScenarioTitle(HOME_HOME_001, ['smoke']), async () => {
		await homeActions.goToHomeTab();
		await homeAssertions.expectScreen();
	});
});
