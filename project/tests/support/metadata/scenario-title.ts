import type { ScenarioMeta } from './scenario';

export function buildScenarioTitle(meta: ScenarioMeta, extraTags: string[] = []): string {
  const tags = [
    `@${meta.id}`,
    ...extraTags.map((tag) => (tag.startsWith('@') ? tag : `@${tag}`)),
    `@criticality:${meta.criticality.toLowerCase()}`,
  ];

  return tags.join(' ');
}
