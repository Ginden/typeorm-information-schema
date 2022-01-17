import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statio_all_tables',
  synchronize: false,
})
export class PgStatioAllTables {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'heap_blks_read' })
  public readonly heap_blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'heap_blks_hit' })
  public readonly heap_blks_hit!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'idx_blks_read' })
  public readonly idx_blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'idx_blks_hit' })
  public readonly idx_blks_hit!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'toast_blks_read' })
  public readonly toast_blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'toast_blks_hit' })
  public readonly toast_blks_hit!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tidx_blks_read' })
  public readonly tidx_blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'tidx_blks_hit' })
  public readonly tidx_blks_hit!: `${number}` | null /* int8 */;
}
