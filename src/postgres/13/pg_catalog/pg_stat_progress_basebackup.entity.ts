import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_basebackup',
  synchronize: false,
})
export class PgStatProgressBasebackup {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'phase' })
  public readonly phase!: string | null /* text */;

  @ViewColumn({ name: 'backup_total' })
  public readonly backup_total!: string | null /* int8 */;

  @ViewColumn({ name: 'backup_streamed' })
  public readonly backup_streamed!: string | null /* int8 */;

  @ViewColumn({ name: 'tablespaces_total' })
  public readonly tablespaces_total!: string | null /* int8 */;

  @ViewColumn({ name: 'tablespaces_streamed' })
  public readonly tablespaces_streamed!: string | null /* int8 */;
}
