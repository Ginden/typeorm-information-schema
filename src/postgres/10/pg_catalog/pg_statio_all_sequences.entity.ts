import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statio_all_sequences',
  synchronize: false,
})
export class PgStatioAllSequences {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'blks_read' })
  public readonly blks_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'blks_hit' })
  public readonly blks_hit!: `${number}` | null /* int8 */;
}
