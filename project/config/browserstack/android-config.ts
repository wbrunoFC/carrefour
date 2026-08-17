import {
  buildAndroidBrowserStackCapabilities,
  resolveAndroidAppPath,
} from '../capabilities/android-capabilities';
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
        resolveBrowserStackAppOption(appPath, 'wdio-demo-android'),
      ),
    ],
    capabilities: buildAndroidBrowserStackCapabilities({
      commandTimeoutSeconds: E2E_COMMAND_TIMEOUT_SEC,
    }),
  } as WebdriverIO.Config;
}
