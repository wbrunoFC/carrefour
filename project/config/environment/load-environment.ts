import fs from 'node:fs';
import path from 'node:path';

import { projectRoot } from '../shared/project-paths';

const ENV_FILES = ['.env', '.env.example'] as const;

/** Lê `.env` e, se faltar chave, `.env.example`. Não sobrescreve variável já definida. */
export function loadEnvironment(): void {
  for (const fileName of ENV_FILES) {
    applyEnvironmentFile(path.join(projectRoot, fileName));
  }
}

function applyEnvironmentFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    return;
  }

  for (const rawLine of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const separatorIndex = line.indexOf('=');
    if (separatorIndex < 1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}
