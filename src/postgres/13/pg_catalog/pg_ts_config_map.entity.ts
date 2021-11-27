import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_config_map',
  synchronize: false,
})
export class PgTsConfigMap {
  @ViewColumn({ name: 'mapcfg' })
  public readonly mapcfg!: number /* oid */;

  @ViewColumn({ name: 'maptokentype' })
  public readonly maptokentype!: number /* int4 */;

  @ViewColumn({ name: 'mapseqno' })
  public readonly mapseqno!: number /* int4 */;

  @ViewColumn({ name: 'mapdict' })
  public readonly mapdict!: number /* oid */;
}
