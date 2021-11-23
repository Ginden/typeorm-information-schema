import { ViewEntity, ViewColumn } from 'typeorm';

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
  public readonly xact_commit!: string | null /* int8 */;

  @ViewColumn({ name: 'xact_rollback' })
  public readonly xact_rollback!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_read' })
  public readonly blks_read!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_hit' })
  public readonly blks_hit!: string | null /* int8 */;

  @ViewColumn({ name: 'tup_returned' })
  public readonly tup_returned!: string | null /* int8 */;

  @ViewColumn({ name: 'tup_fetched' })
  public readonly tup_fetched!: string | null /* int8 */;

  @ViewColumn({ name: 'tup_inserted' })
  public readonly tup_inserted!: string | null /* int8 */;

  @ViewColumn({ name: 'tup_updated' })
  public readonly tup_updated!: string | null /* int8 */;

  @ViewColumn({ name: 'tup_deleted' })
  public readonly tup_deleted!: string | null /* int8 */;

  @ViewColumn({ name: 'conflicts' })
  public readonly conflicts!: string | null /* int8 */;

  @ViewColumn({ name: 'temp_files' })
  public readonly temp_files!: string | null /* int8 */;

  @ViewColumn({ name: 'temp_bytes' })
  public readonly temp_bytes!: string | null /* int8 */;

  @ViewColumn({ name: 'deadlocks' })
  public readonly deadlocks!: string | null /* int8 */;

  @ViewColumn({ name: 'blk_read_time' })
  public readonly blk_read_time!: number | null /* float8 */;

  @ViewColumn({ name: 'blk_write_time' })
  public readonly blk_write_time!: number | null /* float8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
