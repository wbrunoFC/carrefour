import {
  BROWSERSTACK_PROJECT_NAME,
  IOS_BUNDLE_ID,
  IOS_SIMULATOR_APP_PATH,
} from '../constants/app-artifacts';
import { useBrowserStackLocalTunnel } from '../environment/execution-target';

type IosCapabilityOptions = {
  commandTimeoutSeconds: number;
};

export function resolveIosAppPath(): string {
  return process.env.IOS_APP_PATH || IOS_SIMULATOR_APP_PATH;
}

export function buildIosLocalCapabilities(
  options: IosCapabilityOptions,
): WebdriverIO.Capabilities[] {
  return [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone 15',
      'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '17.0',
      'appium:app': resolveIosAppPath(),
      'appium:bundleId': IOS_BUNDLE_ID,
      'appium:noReset': false,
      'appium:newCommandTimeout': options.commandTimeoutSeconds,
    },
  ];
}

export function buildIosBrowserStackCapabilities(
  iosApp: string,
  options: IosCapabilityOptions,
): WebdriverIO.Capabilities[] {
  return [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:app': iosApp,
      'appium:newCommandTimeout': options.commandTimeoutSeconds,
      'bstack:options': {
        deviceName: process.env.BROWSERSTACK_IOS_DEVICE || 'iPhone 15',
        osVersion: process.env.BROWSERSTACK_IOS_OS || '17',
        projectName: BROWSERSTACK_PROJECT_NAME,
        buildName: process.env.BROWSERSTACK_BUILD_NAME || 'ios-e2e',
        sessionName: 'ios e2e',
        debug: true,
        networkLogs: true,
        local: useBrowserStackLocalTunnel(),
      },
    },
  ];
}
