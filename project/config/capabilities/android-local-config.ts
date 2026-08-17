import { buildAndroidLocalCapabilities } from '../capabilities/android-capabilities';
import { APPIUM_PORT, E2E_COMMAND_TIMEOUT_SEC } from '../constants/timeouts';
import { appiumLocalService } from '../services/appium-local.service';
import { wdioBaseConfig } from '../shared/wdio-base.config';

export function buildAndroidLocalConfig() {
  return {
    ...wdioBaseConfig,
    port: APPIUM_PORT,
    services: [appiumLocalService],
    capabilities: buildAndroidLocalCapabilities({
      commandTimeoutSeconds: E2E_COMMAND_TIMEOUT_SEC,
    }),
  } as WebdriverIO.Config;
}
