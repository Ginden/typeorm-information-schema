import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_slots',
  synchronize: false,
})
export class PgReplicationSlots {
  @ViewColumn({ name: 'slot_name' })
  public readonly slot_name!: unknown | null /* name */;

  @ViewColumn({ name: 'plugin' })
  public readonly plugin!: unknown | null /* name */;

  @ViewColumn({ name: 'slot_type' })
  public readonly slot_type!: string | null /* text */;

  @ViewColumn({ name: 'datoid' })
  public readonly datoid!: number | null /* oid */;

  @ViewColumn({ name: 'database' })
  public readonly database!: unknown | null /* name */;

  @ViewColumn({ name: 'temporary' })
  public readonly temporary!: boolean | null /* bool */;

  @ViewColumn({ name: 'active' })
  public readonly active!: boolean | null /* bool */;

  @ViewColumn({ name: 'active_pid' })
  public readonly active_pid!: number | null /* int4 */;

  @ViewColumn({ name: 'xmin' })
  public readonly xmin!: unknown | null /* xid */;

  @ViewColumn({ name: 'catalog_xmin' })
  public readonly catalog_xmin!: unknown | null /* xid */;

  @ViewColumn({ name: 'restart_lsn' })
  public readonly restart_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'confirmed_flush_lsn' })
  public readonly confirmed_flush_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'wal_status' })
  public readonly wal_status!: string | null /* text */;

  @ViewColumn({ name: 'safe_wal_size' })
  public readonly safe_wal_size!: `${number}` | null /* int8 */;
}
