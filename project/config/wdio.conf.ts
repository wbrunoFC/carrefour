import { buildWdioConfig } from './build-wdio-config';
import { loadEnvironment } from './environment/load-environment';
import { resolveExecutionPlatform } from './environment/execution-platform';

loadEnvironment();

export const config = buildWdioConfig(resolveExecutionPlatform());
