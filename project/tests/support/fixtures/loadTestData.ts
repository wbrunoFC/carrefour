import fs from 'node:fs';
import path from 'node:path';

export interface TestCase {
  scenarioId: string;
  input: Record<string, string>;
  expected: string;
}

export interface TestDataFile {
  domain: string;
  cases: TestCase[];
}

export function loadTestData(filename: string): TestDataFile {
  const file = path.resolve(process.cwd(), `data/${filename}.json`);
  if (!fs.existsSync(file)) {
    throw new Error(`Test data not found: ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, 'utf8')) as TestDataFile;
}

export function casesFor(filename: string, scenarioId?: string): TestCase[] {
  const data = loadTestData(filename);
  if (!scenarioId) return data.cases;

  return data.cases.filter((testCase) => testCase.scenarioId === scenarioId);
}

export function requireTestCase(filename: string, scenarioId: string): TestCase {
  const [testCase] = casesFor(filename, scenarioId);

  if (!testCase) {
    throw new Error(`Dado ausente em data/${filename}.json: ${scenarioId}`);
  }

  return testCase;
}
