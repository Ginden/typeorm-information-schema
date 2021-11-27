import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_config describes the
 *    compile-time configuration parameters of the currently installed
 *    version of PostgreSQL. It is intended, for example, to
 *    be used by software packages that want to interface to
 *    PostgreSQL to facilitate finding the required header
 *    files and libraries. It provides the same basic information as the
 *    > PostgreSQL client
 *    application.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_config',
  synchronize: false,
})
export class PgConfig {
  /**
   * The parameter name */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * The parameter value */

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;
}
