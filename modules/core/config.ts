import { setupApi } from './services/api';

export interface CoreConfig {
  apiUrl: string;
}

let coreConfig: CoreConfig | null = null;

export function initializeCore(config: CoreConfig) {
  coreConfig = config;

  setupApi(config.apiUrl);
}

export function getCoreConfig(): CoreConfig {
  if (!coreConfig) {
    throw new Error('CoreConfig has not been initialized!');
  }

  return coreConfig;
}
