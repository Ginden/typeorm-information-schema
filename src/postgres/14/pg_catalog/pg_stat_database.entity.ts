import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_database',
  synchronize: false,
})
export class PgStatDatabase {
  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'numbackends' })
  public readonly numbackends!: number | null /* int4 */;

  @ViewColumn({ name: 'xact_commit' })
  public readonly xact_commit!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'xact_rollback' })
  public readonly xact_rollback!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'blks_read' })
  public readonly blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'blks_hit' })
  public readonly blks_hit!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tup_returned' })
  public readonly tup_returned!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tup_fetched' })
  public readonly tup_fetched!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tup_inserted' })
  public readonly tup_inserted!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tup_updated' })
  public readonly tup_updated!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tup_deleted' })
  public readonly tup_deleted!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'conflicts' })
  public readonly conflicts!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'temp_files' })
  public readonly temp_files!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'temp_bytes' })
  public readonly temp_bytes!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'deadlocks' })
  public readonly deadlocks!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'checksum_failures' })
  public readonly checksum_failures!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'checksum_last_failure' })
  public readonly checksum_last_failure!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'blk_read_time' })
  public readonly blk_read_time!: number | null /* float8 */;

  @ViewColumn({ name: 'blk_write_time' })
  public readonly blk_write_time!: number | null /* float8 */;

  @ViewColumn({ name: 'session_time' })
  public readonly session_time!: number | null /* float8 */;

  @ViewColumn({ name: 'active_time' })
  public readonly active_time!: number | null /* float8 */;

  @ViewColumn({ name: 'idle_in_transaction_time' })
  public readonly idle_in_transaction_time!: number | null /* float8 */;

  @ViewColumn({ name: 'sessions' })
  public readonly sessions!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'sessions_abandoned' })
  public readonly sessions_abandoned!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'sessions_fatal' })
  public readonly sessions_fatal!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'sessions_killed' })
  public readonly sessions_killed!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
