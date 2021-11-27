import { join } from 'path';
import { storeJsonForPostgres } from './postgres/store-json-for-postgres';
import { generateViewEntitiesForPostgres } from './postgres/generate-view-entities-for-postgres';

export type DatabaseEngine = {
  service: string;
  type: 'postgres';
  outputPath: string;
  version: number;
};

const engines: DatabaseEngine[] = [
  {
    type: 'postgres',
    outputPath: 'postgres/10/',
    service: 'postgres10',
    version: 10,
  },
  {
    type: 'postgres',
    outputPath: 'postgres/11/',
    service: 'postgres11',
    version: 11,
  },
  {
    type: 'postgres',
    outputPath: 'postgres/12/',
    service: 'postgres12',
    version: 12,
  },
  {
    type: 'postgres',
    outputPath: 'postgres/13/',
    service: 'postgres13',
    version: 13,
  },
  {
    type: 'postgres',
    outputPath: 'postgres/14/',
    service: 'postgres14',
    version: 14,
  },
];

export async function generate() {
  const useCache = process.argv.includes('--cache');
  console.log(`Generating files`);
  for (const engine of engines) {
    console.log(`Generating files for ${engine.type}@${engine.version}`);
    const outputPath = join(process.cwd(), 'artifacts', `${engine.service}.json`);
    if (!useCache) {
      console.log(`Storing postgres data`);
      await storeJsonForPostgres(engine, outputPath);
    } else {
      console.log(`Skipping definition generation due to --cache`);
    }
    await generateViewEntitiesForPostgres(engine, outputPath);
  }
}

if (require.main === module) {
  generate().catch((e) => {
    console.error(e);
    setImmediate(() => {
      throw e;
    });
  });
}
