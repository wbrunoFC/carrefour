import { SignupActions } from '../../../../pages/signup/signup.actions';
import { SignupAssertions } from '../../../../pages/signup/signup.assertions';
import { ErrorValidationAssertions } from '../../../../pages/error-validation/error-validation.assertions';
import { requireTestCase } from '../../../support/fixtures/loadTestData';
import { openLoginScreen } from '../../../support/fixtures/openLoginScreen';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { AUTH_SIGNUP_001, AUTH_SIGNUP_002 } from './signup.scenarios';

const AUTHENTICATION_DATA_FILE = 'authentication';

describe('FEATURE: signup', () => {
	const signupActions = new SignupActions();
	const signupAssertions = new SignupAssertions();
	const errorAssertions = new ErrorValidationAssertions();

	async function performSignUp(scenarioId: string): Promise<void> {
		const { input } = requireTestCase(AUTHENTICATION_DATA_FILE, scenarioId);
		await signupActions.signUp(input.email, input.password, input.confirmPassword);
	}

	beforeEach(async () => {
		await openLoginScreen();
	});

	it(buildScenarioTitle(AUTH_SIGNUP_001, ['smoke']), async () => {
		await performSignUp(AUTH_SIGNUP_001.id);
		await signupAssertions.expectSignUpSuccess();
		await signupActions.dismissSuccess();
	});

	it(buildScenarioTitle(AUTH_SIGNUP_002), async () => {
		await performSignUp(AUTH_SIGNUP_002.id);
		await errorAssertions.expectMismatchedPassword();
		await signupAssertions.expectNoSignUpSuccess();
	});
});
