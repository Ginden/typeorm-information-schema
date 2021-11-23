import { spawn } from 'child_process';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Client } from 'pg';
import { setTimeout } from 'timers/promises';
import { DatabaseEngine } from './generate';

export async function storeJsonForPostgres(engine: DatabaseEngine, outputPath: string) {
  const dockerProcess = spawn('docker-compose', ['up', /*'--renew-anon-volumes',*/ engine.service]);
  await setTimeout(500);
  let client: Client | null = null;
  while (true) {
    try {
      client = new Client({
        host: 'localhost',
        port: 55432,
        user: 'FOOBAR',
        password: 'FOOBAR',
        database: 'FOOBAR',
      });
      await client.connect();
      await client.query('SELECT 1', []);
      break;
    } catch (e) {
      client?.end();
      console.error(e);
      await setTimeout(500);
    }
  }
  const { rows } = await client.query(`
      SELECT table_schema,
             table_name,
             array_agg(row_to_json(col)::jsonb - 'table_schema'::text - 'table_name'::text - 'collation_catalog'::text -
                       'table_catalog'::text - 'udt_catalog'::text) "columns"
      FROM information_schema.columns col
      WHERE col.table_schema IN ('information_schema', 'pg_catalog')
      GROUP BY table_schema, table_name
  `);
  await writeFile(outputPath, JSON.stringify(rows, null, 4));
  await new Promise((resolve) => {
    client?.end(resolve);
  });
  dockerProcess.kill('SIGINT');
  await new Promise((resolve) => {
    dockerProcess.on('error', resolve);
    dockerProcess.on('exit', resolve);
    dockerProcess.on('close', resolve);
  });
}
