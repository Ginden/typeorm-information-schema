import { join } from 'path';
import { storeJsonForPostgres } from './store-json-for-postgres';
import { generateViewEntitiesForPostgres } from './generate-view-entities-for-postgres';

export type DatabaseEngine = {
  service: string;
  type: 'postgres';
  outputPath: string;
};

const engines: DatabaseEngine[] = [
  {
    type: 'postgres',
    outputPath: 'postgres/10/',
    service: 'postgres10',
  },
  {
    type: 'postgres',
    outputPath: 'postgres/11/',
    service: 'postgres11',
  },
  {
    type: 'postgres',
    outputPath: 'postgres/12/',
    service: 'postgres12',
  },
  {
    type: 'postgres',
    outputPath: 'postgres/13/',
    service: 'postgres13',
  },
  {
    type: 'postgres',
    outputPath: 'postgres/10/',
    service: 'postgres13',
  },
  {
    type: 'postgres',
    outputPath: 'postgres/14/',
    service: 'postgres14',
  },
];

(async () => {
  for (const engine of engines) {
    const outputPath = join(process.cwd(), 'artifacts', `${engine.service}.json`);
    if (!process.argv.includes('--cache')) {
      await storeJsonForPostgres(engine, outputPath);
    }
    await generateViewEntitiesForPostgres(engine, outputPath);
  }
})().catch((e) => {
  setImmediate(() => {
    throw e;
  });
});
