import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_table',
  synchronize: false,
})
export class PgForeignTable {
  @ViewColumn({ name: 'ftrelid' })
  public readonly ftrelid!: number /* oid */;

  @ViewColumn({ name: 'ftserver' })
  public readonly ftserver!: number /* oid */;

  @ViewColumn({ name: 'ftoptions' })
  public readonly ftoptions!: string | null /* _text */;
}
