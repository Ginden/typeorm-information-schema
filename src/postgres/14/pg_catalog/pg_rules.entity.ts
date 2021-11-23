import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_rules',
  synchronize: false,
})
export class PgRules {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'rulename' })
  public readonly rulename!: unknown | null /* name */;

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
