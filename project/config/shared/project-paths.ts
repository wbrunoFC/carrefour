import path from 'node:path';

export const projectRoot = path.resolve(__dirname, '../..');

export function getLocalRunDate(): string {
  return new Date().toLocaleDateString('en-CA');
}

export function buildReportPaths(runDate: string) {
  const reportRoot = path.join(projectRoot, 'tests', 'results', runDate);

  return {
    reportRoot,
    allureResultsDir: path.join(reportRoot, 'allure-results'),
    allureReportDir: path.join(reportRoot, 'allure-report'),
  };
}
