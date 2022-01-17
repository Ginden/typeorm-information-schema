import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_vacuum',
  synchronize: false,
})
export class PgStatProgressVacuum {
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

  @ViewColumn({ name: 'heap_blks_total' })
  public readonly heap_blks_total!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_blks_scanned' })
  public readonly heap_blks_scanned!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_blks_vacuumed' })
  public readonly heap_blks_vacuumed!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'index_vacuum_count' })
  public readonly index_vacuum_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'max_dead_tuples' })
  public readonly max_dead_tuples!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'num_dead_tuples' })
  public readonly num_dead_tuples!: `${number}` | null /* int8 */;
}
