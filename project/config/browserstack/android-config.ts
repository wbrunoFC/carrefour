import { BROWSERSTACK_ANDROID_APP_CUSTOM_ID } from '../constants/app-artifacts';
import { resolveAndroidAppPath, buildAndroidBrowserStackCapabilities } from '../capabilities/android-capabilities';
import { E2E_COMMAND_TIMEOUT_SEC } from '../constants/timeouts';
import { wdioBaseConfig } from '../shared/wdio-base.config';
import { resolveBrowserStackAppOption } from './app-option';
import { requireBrowserStackCredentials } from './credentials';
import { createBrowserStackService } from './service';

export function buildAndroidBrowserStackConfig() {
  const { user, key } = requireBrowserStackCredentials();
  const appPath = resolveAndroidAppPath();

  return {
    ...wdioBaseConfig,
    user,
    key,
    hostname: 'hub.browserstack.com',
    services: [
      createBrowserStackService(
        resolveBrowserStackAppOption(appPath, BROWSERSTACK_ANDROID_APP_CUSTOM_ID),
      ),
    ],
    capabilities: buildAndroidBrowserStackCapabilities({
      commandTimeoutSeconds: E2E_COMMAND_TIMEOUT_SEC,
    }),
  } as WebdriverIO.Config;
}
