import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_largeobject',
  synchronize: false,
})
export class PgLargeobject {
  @ViewColumn({ name: 'loid' })
  public readonly loid!: number /* oid */;

  @ViewColumn({ name: 'pageno' })
  public readonly pageno!: number /* int4 */;

  @ViewColumn({ name: 'data' })
  public readonly data!: unknown /* bytea */;
}
