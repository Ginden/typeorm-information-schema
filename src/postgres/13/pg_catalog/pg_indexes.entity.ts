import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_indexes',
  synchronize: false,
})
export class PgIndexes {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'indexname' })
  public readonly indexname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;

  @ViewColumn({ name: 'indexdef' })
  public readonly indexdef!: string | null /* text */;
}
