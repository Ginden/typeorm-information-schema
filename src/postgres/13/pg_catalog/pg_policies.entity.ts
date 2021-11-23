import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_policies',
  synchronize: false,
})
export class PgPolicies {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'policyname' })
  public readonly policyname!: unknown | null /* name */;

  @ViewColumn({ name: 'permissive' })
  public readonly permissive!: string | null /* text */;

  @ViewColumn({ name: 'roles' })
  public readonly roles!: unknown | null /* _name */;

  @ViewColumn({ name: 'cmd' })
  public readonly cmd!: string | null /* text */;

  @ViewColumn({ name: 'qual' })
  public readonly qual!: string | null /* text */;

  @ViewColumn({ name: 'with_check' })
  public readonly with_check!: string | null /* text */;
}
