import type { ScenarioMeta } from '../../../support/metadata/scenario';

export const AUTH_SIGNUP_001: ScenarioMeta = {
  id: 'AUTH-SIGNUP-001',
  criticality: 'HIGH',
  complexity: 'LOW',
  flakiness: 'UNKNOWN',
  tags: ['authentication', 'signup', 'smoke'],
  platforms: ['android', 'ios'],
};

export const AUTH_SIGNUP_002: ScenarioMeta = {
  id: 'AUTH-SIGNUP-002',
  criticality: 'HIGH',
  complexity: 'LOW',
  flakiness: 'UNKNOWN',
  tags: ['authentication', 'signup'],
  platforms: ['android', 'ios'],
};
