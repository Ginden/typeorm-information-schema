import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_tables',
  synchronize: false,
})
export class PgTables {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'tableowner' })
  public readonly tableowner!: unknown | null /* name */;

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;

  @ViewColumn({ name: 'hasindexes' })
  public readonly hasindexes!: boolean | null /* bool */;

  @ViewColumn({ name: 'hasrules' })
  public readonly hasrules!: boolean | null /* bool */;

  @ViewColumn({ name: 'hastriggers' })
  public readonly hastriggers!: boolean | null /* bool */;

  @ViewColumn({ name: 'rowsecurity' })
  public readonly rowsecurity!: boolean | null /* bool */;
}
