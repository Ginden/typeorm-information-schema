import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication_tables',
  synchronize: false,
})
export class PgPublicationTables {
  @ViewColumn({ name: 'pubname' })
  public readonly pubname!: unknown | null /* name */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
}
