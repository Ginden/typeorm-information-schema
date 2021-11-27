import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_wal',
  synchronize: false,
})
export class PgStatWal {
  @ViewColumn({ name: 'wal_records' })
  public readonly wal_records!: string | null /* int8 */;

  @ViewColumn({ name: 'wal_fpi' })
  public readonly wal_fpi!: string | null /* int8 */;

  @ViewColumn({ name: 'wal_bytes' })
  public readonly wal_bytes!: unknown | null /* numeric */;

  @ViewColumn({ name: 'wal_buffers_full' })
  public readonly wal_buffers_full!: string | null /* int8 */;

  @ViewColumn({ name: 'wal_write' })
  public readonly wal_write!: string | null /* int8 */;

  @ViewColumn({ name: 'wal_sync' })
  public readonly wal_sync!: string | null /* int8 */;

  @ViewColumn({ name: 'wal_write_time' })
  public readonly wal_write_time!: number | null /* float8 */;

  @ViewColumn({ name: 'wal_sync_time' })
  public readonly wal_sync_time!: number | null /* float8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
