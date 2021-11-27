import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_ts_config catalog contains entries
 *    representing text search configurations.  A configuration specifies
 *    a particular text search parser and a list of dictionaries to use
 *    for each of the parser's output token types.  The parser is shown
 *    in the pg_ts_config entry, but the
 *    token-to-dictionary mapping is defined by subsidiary entries in pg_ts_config_map.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_config',
  synchronize: false,
})
export class PgTsConfig {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Text search configuration name */

  @ViewColumn({ name: 'cfgname' })
  public readonly cfgname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this configuration */

  @ViewColumn({ name: 'cfgnamespace' })
  public readonly cfgnamespace!: number /* oid */;
  /**
   * Owner of the configuration */

  @ViewColumn({ name: 'cfgowner' })
  public readonly cfgowner!: number /* oid */;
  /**
   * The OID of the text search parser for this configuration */

  @ViewColumn({ name: 'cfgparser' })
  public readonly cfgparser!: number /* oid */;
}
