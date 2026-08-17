import { LoginActions } from '../../../../pages/login/login.actions';
import { LoginAssertions } from '../../../../pages/login/login.assertions';
import { ErrorValidationAssertions } from '../../../../pages/error-validation/error-validation.assertions';
import { requireTestCase } from '../../../support/fixtures/loadTestData';
import { openLoginScreen } from '../../../support/fixtures/openLoginScreen';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { AUTH_LOGIN_001, AUTH_LOGIN_002, AUTH_LOGIN_003 } from './login.scenarios';

const AUTHENTICATION_DATA_FILE = 'authentication';

describe('FEATURE: login', () => {
	const loginActions = new LoginActions();
	const loginAssertions = new LoginAssertions();
	const errorAssertions = new ErrorValidationAssertions();

	async function performLogin(scenarioId: string): Promise<void> {
		const { input } = requireTestCase(AUTHENTICATION_DATA_FILE, scenarioId);
		await loginActions.login(input.email, input.password);
	}

	beforeEach(async () => {
		await openLoginScreen();
		await loginAssertions.expectLoginScreen();
	});

	it(buildScenarioTitle(AUTH_LOGIN_001, ['smoke']), async () => {
		await performLogin(AUTH_LOGIN_001.id);
		await loginAssertions.expectLoginSuccess();
		await loginActions.dismissSuccess();
	});

	it(buildScenarioTitle(AUTH_LOGIN_002), async () => {
		await performLogin(AUTH_LOGIN_002.id);
		await errorAssertions.expectInvalidEmail();
	});

	it(buildScenarioTitle(AUTH_LOGIN_003), async () => {
		await performLogin(AUTH_LOGIN_003.id);
		await errorAssertions.expectInvalidPassword();
	});
});
