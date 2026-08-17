import path from 'node:path';

import { loadEnvironment } from './environment/load-environment';
import { projectRoot } from './shared/project-paths';
import { wdioBaseConfig } from './shared/wdio-base.config';

loadEnvironment();

export const config: WebdriverIO.Config = {
  ...wdioBaseConfig,
  specs: [path.join(projectRoot, 'tests/integration/**/*.test.ts')],
  services: [],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['headless=new', 'disable-gpu', 'no-sandbox'],
      },
    },
  ],
};
