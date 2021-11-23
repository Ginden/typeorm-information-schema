import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_transform',
  synchronize: false,
})
export class PgTransform {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'trftype' })
  public readonly trftype!: number /* oid */;

  @ViewColumn({ name: 'trflang' })
  public readonly trflang!: number /* oid */;

  @ViewColumn({ name: 'trffromsql' })
  public readonly trffromsql!: unknown /* regproc */;

  @ViewColumn({ name: 'trftosql' })
  public readonly trftosql!: unknown /* regproc */;
}
