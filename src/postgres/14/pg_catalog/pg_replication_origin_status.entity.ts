import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_replication_origin_status view
 *    contains information about how far replay for a certain origin has
 *    progressed.  For more on replication origins
 *    see >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_origin_status',
  synchronize: false,
})
export class PgReplicationOriginStatus {
  /**
   * internal node identifier */

  @ViewColumn({ name: 'local_id' })
  public readonly local_id!: number | null /* oid */;
  /**
   * external node identifier */

  @ViewColumn({ name: 'external_id' })
  public readonly external_id!: string | null /* text */;
  /**
   * The origin node's LSN up to which data has been replicated. */

  @ViewColumn({ name: 'remote_lsn' })
  public readonly remote_lsn!: unknown | null /* pg_lsn */;
  /**
   * This node's LSN at which remote_lsn has
   * been replicated. Used to flush commit records before persisting
   * data to disk when using asynchronous commits. */

  @ViewColumn({ name: 'local_lsn' })
  public readonly local_lsn!: unknown | null /* pg_lsn */;
}
