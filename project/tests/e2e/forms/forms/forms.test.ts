import { FormsActions } from '../../../../pages/forms/forms.actions';
import { FormsAssertions } from '../../../../pages/forms/forms.assertions';
import { SideMenuActions } from '../../../../pages/side-menu/side-menu.actions';
import { casesFor } from '../../../support/fixtures/loadTestData';
import { buildScenarioTitle } from '../../../support/metadata/scenario-title';
import { FORMS_FORMS_001, FORMS_FORMS_003, FORMS_FORMS_004 } from './forms.scenarios';

const FORMS_DATA_FILE = 'forms';

describe('FEATURE: forms', () => {
	const sideMenuActions = new SideMenuActions();
	const formsActions = new FormsActions();
	const formsAssertions = new FormsAssertions();

	beforeEach(async () => {
		await sideMenuActions.goToForms();
		await formsAssertions.expectScreen();
	});

	for (const testCase of casesFor(FORMS_DATA_FILE, FORMS_FORMS_001.id)) {
		it(`${buildScenarioTitle(FORMS_FORMS_001, ['smoke'])} ${testCase.input.text}`, async () => {
			await formsActions.fillText(testCase.input.text);
			await formsAssertions.expectTyped(testCase.expected);
		});
	}

	it(buildScenarioTitle(FORMS_FORMS_004), async () => {
		await formsActions.tapInactive();
		await formsAssertions.expectNoActiveAlert();
	});

	it(buildScenarioTitle(FORMS_FORMS_003), async () => {
		await formsActions.tapActive();
		await formsAssertions.expectActiveAlert();
	});
});
