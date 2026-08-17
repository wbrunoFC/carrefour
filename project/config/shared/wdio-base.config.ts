import path from 'node:path';

import {
  CONNECTION_RETRY_COUNT,
  CONNECTION_RETRY_TIMEOUT_MS,
  DEFAULT_WAIT_FOR_TIMEOUT_MS,
  E2E_MOCHA_TIMEOUT_MS,
} from '../constants/timeouts';
import { createAllureLifecycleHooks } from './allure-lifecycle';
import { buildReportPaths, getLocalRunDate, projectRoot } from './project-paths';

const { allureResultsDir, allureReportDir } = buildReportPaths(getLocalRunDate());

export const wdioBaseConfig = {
  runner: 'local' as const,
  tsConfigPath: path.join(projectRoot, 'tsconfig.json'),
  specs: [path.join(projectRoot, 'tests/e2e/**/*.test.ts')],
  maxInstances: 1,
  logLevel: 'info' as const,
  bail: 0,
  waitforTimeout: DEFAULT_WAIT_FOR_TIMEOUT_MS,
  connectionRetryTimeout: CONNECTION_RETRY_TIMEOUT_MS,
  connectionRetryCount: CONNECTION_RETRY_COUNT,
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: allureResultsDir,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        reportedEnvironmentVars: {
          NODE_VERSION: process.version,
          TARGET: process.env.TARGET || 'local',
        },
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: E2E_MOCHA_TIMEOUT_MS,
  },
  ...createAllureLifecycleHooks(allureResultsDir, allureReportDir),
};
