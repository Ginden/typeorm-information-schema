import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_archiver',
  synchronize: false,
})
export class PgStatArchiver {
  @ViewColumn({ name: 'archived_count' })
  public readonly archived_count!: string | null /* int8 */;

  @ViewColumn({ name: 'last_archived_wal' })
  public readonly last_archived_wal!: string | null /* text */;

  @ViewColumn({ name: 'last_archived_time' })
  public readonly last_archived_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'failed_count' })
  public readonly failed_count!: string | null /* int8 */;

  @ViewColumn({ name: 'last_failed_wal' })
  public readonly last_failed_wal!: string | null /* text */;

  @ViewColumn({ name: 'last_failed_time' })
  public readonly last_failed_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
