import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_views',
  synchronize: false,
})
export class PgViews {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'viewname' })
  public readonly viewname!: unknown | null /* name */;

  @ViewColumn({ name: 'viewowner' })
  public readonly viewowner!: unknown | null /* name */;

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
