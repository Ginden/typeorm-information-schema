import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_config',
  synchronize: false,
})
export class PgConfig {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;
}
