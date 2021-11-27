import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_replication_origin catalog contains
 *    all replication origins created.  For more on replication origins
 *    see >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_origin',
  synchronize: false,
})
export class PgReplicationOrigin {
  /**
   * A unique, cluster-wide identifier for the replication
   * origin. Should never leave the system. */

  @ViewColumn({ name: 'roident' })
  public readonly roident!: number /* oid */;
  /**
   * The external, user defined, name of a replication
   * origin. */

  @ViewColumn({ name: 'roname' })
  public readonly roname!: string /* text */;
}
