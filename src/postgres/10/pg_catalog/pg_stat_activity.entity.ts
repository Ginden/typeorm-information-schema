import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_activity',
  synchronize: false,
})
export class PgStatActivity {
  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'leader_pid' })
  public readonly leader_pid!: number | null /* int4 */;

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

  @ViewColumn({ name: 'xact_start' })
  public readonly xact_start!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'query_start' })
  public readonly query_start!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'state_change' })
  public readonly state_change!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'wait_event_type' })
  public readonly wait_event_type!: string | null /* text */;

  @ViewColumn({ name: 'wait_event' })
  public readonly wait_event!: string | null /* text */;

  @ViewColumn({ name: 'state' })
  public readonly state!: string | null /* text */;

  @ViewColumn({ name: 'backend_xid' })
  public readonly backend_xid!: unknown | null /* xid */;

  @ViewColumn({ name: 'backend_xmin' })
  public readonly backend_xmin!: unknown | null /* xid */;

  @ViewColumn({ name: 'query' })
  public readonly query!: string | null /* text */;

  @ViewColumn({ name: 'backend_type' })
  public readonly backend_type!: string | null /* text */;
}
