import { execSync } from 'child_process';
import { writeFile } from 'fs/promises';
import { DatabaseEngine } from '../generate';
import { join } from 'path';
import { parseString } from 'xml2js';
import { promisify } from 'util';

type Target = {
  from: string;
  to: string;
};

export async function downloadPostgresDocumentation(engine: DatabaseEngine) {
  if (engine.version !== 14) {
    return;
  }
  const { default: fetch } = await import('node-fetch');

  const targets: Target[] = [
    {
      from: `https://raw.githubusercontent.com/postgres/postgres/REL_${engine.version}_STABLE/doc/src/sgml/catalogs.sgml`,
      to: `docs_${engine.type}_${engine.version}_catalogs.sgml`,
    },
  ];
  await Promise.all(
    targets.map(async ({ from, to }) => {
      const res = await fetch(from);
      const body = await res.text();
      if (!body) {
        throw new Error(`Empty body`);
      }
      const outputPath = join(process.cwd(), 'artifacts', to);
      await writeFile(outputPath, body);
      await writeFile(outputPath + '.json', JSON.stringify(await promisify(parseString)(body), null, 1));
      execSync(`<'${outputPath}' osx > '${outputPath}.xml'`);
    }),
  );
}
