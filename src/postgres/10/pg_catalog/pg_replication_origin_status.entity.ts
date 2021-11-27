import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_origin_status',
  synchronize: false,
})
export class PgReplicationOriginStatus {
  @ViewColumn({ name: 'local_id' })
  public readonly local_id!: number | null /* oid */;

  @ViewColumn({ name: 'external_id' })
  public readonly external_id!: string | null /* text */;

  @ViewColumn({ name: 'remote_lsn' })
  public readonly remote_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'local_lsn' })
  public readonly local_lsn!: unknown | null /* pg_lsn */;
}
