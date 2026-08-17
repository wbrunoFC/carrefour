export type Criticality = 'HIGH' | 'MEDIUM' | 'LOW';
export type Complexity = 'HIGH' | 'MEDIUM' | 'LOW';
export type Flakiness = 'UNKNOWN' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface ScenarioMeta {
  id: string;
  criticality: Criticality;
  complexity: Complexity;
  flakiness: Flakiness;
  tags: string[];
  platforms: Array<'android' | 'ios' | 'api'>;
}
