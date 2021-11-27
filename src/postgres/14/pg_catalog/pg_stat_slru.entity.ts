import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_slru',
  synchronize: false,
})
export class PgStatSlru {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'blks_zeroed' })
  public readonly blks_zeroed!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_hit' })
  public readonly blks_hit!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_read' })
  public readonly blks_read!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_written' })
  public readonly blks_written!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_exists' })
  public readonly blks_exists!: string | null /* int8 */;

  @ViewColumn({ name: 'flushes' })
  public readonly flushes!: string | null /* int8 */;

  @ViewColumn({ name: 'truncates' })
  public readonly truncates!: string | null /* int8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
