import biometricsLoginAndroid from '../../../../../pages/biometrics-login/android.json';
import biometricsLoginIos from '../../../../../pages/biometrics-login/ios.json';
import dataInMemoryAndroid from '../../../../../pages/data-in-memory/android.json';
import dataInMemoryIos from '../../../../../pages/data-in-memory/ios.json';
import dataPersistedKvAndroid from '../../../../../pages/data-persisted-kv/android.json';
import dataPersistedKvIos from '../../../../../pages/data-persisted-kv/ios.json';
import dataSecureAndroid from '../../../../../pages/data-secure/android.json';
import dataSecureIos from '../../../../../pages/data-secure/ios.json';
import dataSqliteAndroid from '../../../../../pages/data-sqlite/android.json';
import dataSqliteIos from '../../../../../pages/data-sqlite/ios.json';
import dragAndroid from '../../../../../pages/drag/android.json';
import dragIos from '../../../../../pages/drag/ios.json';
import errorValidationAndroid from '../../../../../pages/error-validation/android.json';
import errorValidationIos from '../../../../../pages/error-validation/ios.json';
import formsAndroid from '../../../../../pages/forms/android.json';
import formsIos from '../../../../../pages/forms/ios.json';
import homeAndroid from '../../../../../pages/home/android.json';
import homeIos from '../../../../../pages/home/ios.json';
import loginAndroid from '../../../../../pages/login/android.json';
import loginIos from '../../../../../pages/login/ios.json';
import navigationAndroid from '../../../../../pages/navigation/android.json';
import navigationIos from '../../../../../pages/navigation/ios.json';
import permissionsAndroid from '../../../../../pages/permissions/android.json';
import permissionsIos from '../../../../../pages/permissions/ios.json';
import sideMenuAndroid from '../../../../../pages/side-menu/android.json';
import sideMenuIos from '../../../../../pages/side-menu/ios.json';
import signupAndroid from '../../../../../pages/signup/android.json';
import signupIos from '../../../../../pages/signup/ios.json';
import swipeAndroid from '../../../../../pages/swipe/android.json';
import swipeIos from '../../../../../pages/swipe/ios.json';
import tabBarCustomizationAndroid from '../../../../../pages/tab-bar-customization/android.json';
import tabBarCustomizationIos from '../../../../../pages/tab-bar-customization/ios.json';
import webviewAndroid from '../../../../../pages/webview/android.json';
import webviewIos from '../../../../../pages/webview/ios.json';

import type { PageJson } from '../types/page-json';
import type { PlatformPageMaps } from '../types/page-types';

function createPlatformPageMaps(android: PageJson, ios: PageJson): PlatformPageMaps {
	return { android, ios };
}

export const PAGE_MAPS = {
	login: createPlatformPageMaps(loginAndroid, loginIos),
	signup: createPlatformPageMaps(signupAndroid, signupIos),
	'side-menu': createPlatformPageMaps(sideMenuAndroid, sideMenuIos),
	navigation: createPlatformPageMaps(navigationAndroid, navigationIos),
	forms: createPlatformPageMaps(formsAndroid, formsIos),
	home: createPlatformPageMaps(homeAndroid, homeIos),
	'error-validation': createPlatformPageMaps(errorValidationAndroid, errorValidationIos),
	'biometrics-login': createPlatformPageMaps(biometricsLoginAndroid, biometricsLoginIos),
	'data-in-memory': createPlatformPageMaps(dataInMemoryAndroid, dataInMemoryIos),
	'data-persisted-kv': createPlatformPageMaps(dataPersistedKvAndroid, dataPersistedKvIos),
	'data-secure': createPlatformPageMaps(dataSecureAndroid, dataSecureIos),
	'data-sqlite': createPlatformPageMaps(dataSqliteAndroid, dataSqliteIos),
	drag: createPlatformPageMaps(dragAndroid, dragIos),
	permissions: createPlatformPageMaps(permissionsAndroid, permissionsIos),
	swipe: createPlatformPageMaps(swipeAndroid, swipeIos),
	'tab-bar-customization': createPlatformPageMaps(tabBarCustomizationAndroid, tabBarCustomizationIos),
	webview: createPlatformPageMaps(webviewAndroid, webviewIos),
} as const;
