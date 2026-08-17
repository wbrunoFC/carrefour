import { HomeActions } from '../../../../pages/home/home.actions';
import { SideMenuActions } from '../../../../pages/side-menu/side-menu.actions';
import { LoginAssertions } from '../../../../pages/login/login.assertions';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { NAV_SIDE_MENU_002 } from './side-menu.scenarios';

describe('FEATURE: side-menu', () => {
	const homeActions = new HomeActions();
	const sideMenuActions = new SideMenuActions();
	const loginAssertions = new LoginAssertions();

	beforeEach(async () => {
		await homeActions.goToHomeTab();
	});

	it(buildScenarioTitle(NAV_SIDE_MENU_002), async () => {
		await sideMenuActions.goToLogin();
		await loginAssertions.expectLoginScreen();
	});
});
