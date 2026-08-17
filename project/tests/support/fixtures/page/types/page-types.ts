import type { PageJson } from './page-json';

export type ExecutionPlatform = 'android' | 'ios';

export type PlatformPageMaps = Record<ExecutionPlatform, PageJson>;
