import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_matviews',
  synchronize: false,
})
export class PgMatviews {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'matviewname' })
  public readonly matviewname!: unknown | null /* name */;

  @ViewColumn({ name: 'matviewowner' })
  public readonly matviewowner!: unknown | null /* name */;

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;

  @ViewColumn({ name: 'hasindexes' })
  public readonly hasindexes!: boolean | null /* bool */;

  @ViewColumn({ name: 'ispopulated' })
  public readonly ispopulated!: boolean | null /* bool */;

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
