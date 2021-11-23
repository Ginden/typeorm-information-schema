import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_analyze',
  synchronize: false,
})
export class PgStatProgressAnalyze {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'phase' })
  public readonly phase!: string | null /* text */;

  @ViewColumn({ name: 'sample_blks_total' })
  public readonly sample_blks_total!: string | null /* int8 */;

  @ViewColumn({ name: 'sample_blks_scanned' })
  public readonly sample_blks_scanned!: string | null /* int8 */;

  @ViewColumn({ name: 'ext_stats_total' })
  public readonly ext_stats_total!: string | null /* int8 */;

  @ViewColumn({ name: 'ext_stats_computed' })
  public readonly ext_stats_computed!: string | null /* int8 */;

  @ViewColumn({ name: 'child_tables_total' })
  public readonly child_tables_total!: string | null /* int8 */;

  @ViewColumn({ name: 'child_tables_done' })
  public readonly child_tables_done!: string | null /* int8 */;

  @ViewColumn({ name: 'current_child_table_relid' })
  public readonly current_child_table_relid!: number | null /* oid */;
}
