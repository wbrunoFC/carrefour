import { execSync } from 'node:child_process';
import path from 'node:path';

import { projectRoot } from './project-paths';

export function createAllureLifecycleHooks(
  allureResultsDir: string,
  allureReportDir: string,
) {
  return {
    afterTest: async function () {
      await browser.takeScreenshot();
    },
    onComplete() {
      generateAllureReport(allureResultsDir, allureReportDir);
      openAllureReportWhenAllowed(allureReportDir);
    },
  };
}

function generateAllureReport(
  allureResultsDir: string,
  allureReportDir: string,
): void {
  try {
    execSync(
      `npx allure generate "${allureResultsDir}" --clean --single-file -o "${allureReportDir}"`,
      { stdio: 'inherit', cwd: projectRoot },
    );
  } catch {
    console.error(
      `Allure generate falhou (Java no PATH?). Raw: ${allureResultsDir}`,
    );
  }
}

function shouldOpenAllureReport(): boolean {
  if (process.env.CI === 'true') {
    return false;
  }

  if (process.env.TARGET === 'browserstack') {
    return false;
  }

  if (process.env.ALLURE_OPEN === 'false') {
    return false;
  }

  return process.platform === 'darwin';
}

function openAllureReportWhenAllowed(allureReportDir: string): void {
  if (!shouldOpenAllureReport()) {
    return;
  }

  execSync(`open "${path.join(allureReportDir, 'index.html')}"`);
}
