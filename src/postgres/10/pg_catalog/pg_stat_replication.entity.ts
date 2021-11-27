import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_replication',
  synchronize: false,
})
export class PgStatReplication {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'usesysid' })
  public readonly usesysid!: number | null /* oid */;

  @ViewColumn({ name: 'usename' })
  public readonly usename!: unknown | null /* name */;

  @ViewColumn({ name: 'application_name' })
  public readonly application_name!: string | null /* text */;

  @ViewColumn({ name: 'client_addr' })
  public readonly client_addr!: unknown | null /* inet */;

  @ViewColumn({ name: 'client_hostname' })
  public readonly client_hostname!: string | null /* text */;

  @ViewColumn({ name: 'client_port' })
  public readonly client_port!: number | null /* int4 */;

  @ViewColumn({ name: 'backend_start' })
  public readonly backend_start!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'backend_xmin' })
  public readonly backend_xmin!: unknown | null /* xid */;

  @ViewColumn({ name: 'state' })
  public readonly state!: string | null /* text */;

  @ViewColumn({ name: 'sent_lsn' })
  public readonly sent_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'write_lsn' })
  public readonly write_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'flush_lsn' })
  public readonly flush_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'replay_lsn' })
  public readonly replay_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'write_lag' })
  public readonly write_lag!: unknown | null /* interval */;

  @ViewColumn({ name: 'flush_lag' })
  public readonly flush_lag!: unknown | null /* interval */;

  @ViewColumn({ name: 'replay_lag' })
  public readonly replay_lag!: unknown | null /* interval */;

  @ViewColumn({ name: 'sync_priority' })
  public readonly sync_priority!: number | null /* int4 */;

  @ViewColumn({ name: 'sync_state' })
  public readonly sync_state!: string | null /* text */;
}
