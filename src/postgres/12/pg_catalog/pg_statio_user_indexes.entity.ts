import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statio_user_indexes',
  synchronize: false,
})
export class PgStatioUserIndexes {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'indexrelid' })
  public readonly indexrelid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'indexrelname' })
  public readonly indexrelname!: unknown | null /* name */;

  @ViewColumn({ name: 'idx_blks_read' })
  public readonly idx_blks_read!: string | null /* int8 */;

  @ViewColumn({ name: 'idx_blks_hit' })
  public readonly idx_blks_hit!: string | null /* int8 */;
}
