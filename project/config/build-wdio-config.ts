import { buildAndroidBrowserStackConfig } from './browserstack/android-config';
import { buildIosBrowserStackConfig } from './browserstack/ios-config';
import { buildAndroidLocalConfig } from './capabilities/android-local-config';
import { buildIosLocalConfig } from './capabilities/ios-local-config';
import type { ExecutionPlatform } from './environment/execution-platform';
import { isBrowserStackTarget } from './environment/execution-target';

const localConfigBuilders = {
  android: buildAndroidLocalConfig,
  ios: buildIosLocalConfig,
} as const;

const browserStackConfigBuilders = {
  android: buildAndroidBrowserStackConfig,
  ios: buildIosBrowserStackConfig,
} as const;

export function buildWdioConfig(platform: ExecutionPlatform): WebdriverIO.Config {
  const configBuilders = isBrowserStackTarget()
    ? browserStackConfigBuilders
    : localConfigBuilders;

  return configBuilders[platform]();
}
