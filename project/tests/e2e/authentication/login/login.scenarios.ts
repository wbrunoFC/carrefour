import type { ScenarioMeta } from '../../../support/metadata/scenario';

export const AUTH_LOGIN_001: ScenarioMeta = {
  id: 'AUTH-LOGIN-001',
  criticality: 'HIGH',
  complexity: 'LOW',
  flakiness: 'UNKNOWN',
  tags: ['authentication', 'login', 'smoke'],
  platforms: ['android', 'ios'],
};

export const AUTH_LOGIN_002: ScenarioMeta = {
  id: 'AUTH-LOGIN-002',
  criticality: 'HIGH',
  complexity: 'LOW',
  flakiness: 'LOW',
  tags: ['authentication', 'login'],
  platforms: ['android', 'ios'],
};

export const AUTH_LOGIN_003: ScenarioMeta = {
  id: 'AUTH-LOGIN-003',
  criticality: 'HIGH',
  complexity: 'LOW',
  flakiness: 'LOW',
  tags: ['authentication', 'login'],
  platforms: ['android', 'ios'],
};
