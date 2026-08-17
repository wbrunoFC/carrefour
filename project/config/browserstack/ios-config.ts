import { buildIosBrowserStackCapabilities } from '../capabilities/ios-capabilities';
import { E2E_COMMAND_TIMEOUT_SEC } from '../constants/timeouts';
import { wdioBaseConfig } from '../shared/wdio-base.config';
import {
  requireIosBrowserStackApp,
  resolveBrowserStackServiceApp,
} from './app-option';
import { requireBrowserStackCredentials } from './credentials';
import { createBrowserStackService } from './service';

export function buildIosBrowserStackConfig() {
  const { user, key } = requireBrowserStackCredentials();
  const iosApp = requireIosBrowserStackApp();

  return {
    ...wdioBaseConfig,
    user,
    key,
    hostname: 'hub.browserstack.com',
    services: [
      createBrowserStackService(
        resolveBrowserStackServiceApp(iosApp, 'wdio-demo-ios'),
      ),
    ],
    capabilities: buildIosBrowserStackCapabilities(iosApp, {
      commandTimeoutSeconds: E2E_COMMAND_TIMEOUT_SEC,
    }),
  } as WebdriverIO.Config;
}
