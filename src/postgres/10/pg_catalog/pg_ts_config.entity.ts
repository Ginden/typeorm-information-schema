import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_config',
  synchronize: false,
})
export class PgTsConfig {
  @ViewColumn({ name: 'cfgname' })
  public readonly cfgname!: unknown /* name */;

  @ViewColumn({ name: 'cfgnamespace' })
  public readonly cfgnamespace!: number /* oid */;

  @ViewColumn({ name: 'cfgowner' })
  public readonly cfgowner!: number /* oid */;

  @ViewColumn({ name: 'cfgparser' })
  public readonly cfgparser!: number /* oid */;
}
