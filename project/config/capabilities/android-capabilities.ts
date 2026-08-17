import {
  ANDROID_APP_PACKAGE,
  ANDROID_APP_PATH,
  BROWSERSTACK_ANDROID_APP_CUSTOM_ID,
  BROWSERSTACK_PROJECT_NAME,
} from '../constants/app-artifacts';
import { useBrowserStackLocalTunnel } from '../environment/execution-target';

type AndroidCapabilityOptions = {
  commandTimeoutSeconds: number;
};

export function resolveAndroidAppPath(): string {
  return process.env.ANDROID_APP_PATH || ANDROID_APP_PATH;
}

export function buildAndroidLocalCapabilities(
  options: AndroidCapabilityOptions,
): WebdriverIO.Capabilities[] {
  return [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
      'appium:app': resolveAndroidAppPath(),
      'appium:appPackage': ANDROID_APP_PACKAGE,
      'appium:noReset': false,
      'appium:newCommandTimeout': options.commandTimeoutSeconds,
    },
  ];
}

export function buildAndroidBrowserStackCapabilities(
  options: AndroidCapabilityOptions,
): WebdriverIO.Capabilities[] {
  const browserStackApp =
    process.env.BROWSERSTACK_APP_ID ??
    process.env.BROWSERSTACK_APP_CUSTOM_ID ??
    BROWSERSTACK_ANDROID_APP_CUSTOM_ID;

  return [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:app': browserStackApp,
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': options.commandTimeoutSeconds,
      'bstack:options': {
        deviceName: process.env.BROWSERSTACK_ANDROID_DEVICE || 'Samsung Galaxy S23',
        osVersion: process.env.BROWSERSTACK_ANDROID_OS || '13.0',
        projectName: BROWSERSTACK_PROJECT_NAME,
        buildName: process.env.BROWSERSTACK_BUILD_NAME || 'android-e2e',
        sessionName: 'android e2e',
        debug: true,
        networkLogs: true,
        local: useBrowserStackLocalTunnel(),
      },
    },
  ];
}
