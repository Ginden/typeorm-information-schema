import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: '_pg_foreign_table_columns',
  synchronize: false,
})
export class PgForeignTableColumns {
  @ViewColumn({ name: 'nspname' })
  public readonly nspname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'attname' })
  public readonly attname!: unknown | null /* name */;

  @ViewColumn({ name: 'attfdwoptions' })
  public readonly attfdwoptions!: string | null /* _text */;
}
