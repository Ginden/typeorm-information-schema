import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_cluster',
  synchronize: false,
})
export class PgStatProgressCluster {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'command' })
  public readonly command!: string | null /* text */;

  @ViewColumn({ name: 'phase' })
  public readonly phase!: string | null /* text */;

  @ViewColumn({ name: 'cluster_index_relid' })
  public readonly cluster_index_relid!: number | null /* oid */;

  @ViewColumn({ name: 'heap_tuples_scanned' })
  public readonly heap_tuples_scanned!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_tuples_written' })
  public readonly heap_tuples_written!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_blks_total' })
  public readonly heap_blks_total!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_blks_scanned' })
  public readonly heap_blks_scanned!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'index_rebuild_count' })
  public readonly index_rebuild_count!: `${number}` | null /* int8 */;
}
