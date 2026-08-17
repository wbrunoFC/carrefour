export type ExecutionPlatform = 'android' | 'ios';

const VALID_PLATFORMS = new Set<ExecutionPlatform>(['android', 'ios']);

export function resolveExecutionPlatform(): ExecutionPlatform {
  const platform = (process.env.PLATFORM || '').toLowerCase();

  if (VALID_PLATFORMS.has(platform as ExecutionPlatform)) {
    return platform as ExecutionPlatform;
  }

  throw new Error(
    'PLATFORM é obrigatório. Use PLATFORM=android ou PLATFORM=ios (ex.: npm run test:android).',
  );
}
