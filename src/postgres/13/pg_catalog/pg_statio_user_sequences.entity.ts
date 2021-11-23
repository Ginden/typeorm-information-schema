import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statio_user_sequences',
  synchronize: false,
})
export class PgStatioUserSequences {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'blks_read' })
  public readonly blks_read!: string | null /* int8 */;

  @ViewColumn({ name: 'blks_hit' })
  public readonly blks_hit!: string | null /* int8 */;
}
