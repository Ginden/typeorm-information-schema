import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_ts_config_map catalog contains entries
 *    showing which text search dictionaries should be consulted, and in
 *    what order, for each output token type of each text search configuration's
 *    parser.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_config_map',
  synchronize: false,
})
export class PgTsConfigMap {
  /**
   * The OID of the pg_ts_config entry owning this map entry */

  @ViewColumn({ name: 'mapcfg' })
  public readonly mapcfg!: number /* oid */;
  /**
   * A token type emitted by the configuration's parser */

  @ViewColumn({ name: 'maptokentype' })
  public readonly maptokentype!: number /* int4 */;
  /**
   * Order in which to consult this entry (lower
   * mapseqnos first) */

  @ViewColumn({ name: 'mapseqno' })
  public readonly mapseqno!: number /* int4 */;
  /**
   * The OID of the text search dictionary to consult */

  @ViewColumn({ name: 'mapdict' })
  public readonly mapdict!: number /* oid */;
}
