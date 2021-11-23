import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_range',
  synchronize: false,
})
export class PgRange {
  @ViewColumn({ name: 'rngtypid' })
  public readonly rngtypid!: number /* oid */;

  @ViewColumn({ name: 'rngsubtype' })
  public readonly rngsubtype!: number /* oid */;

  @ViewColumn({ name: 'rngmultitypid' })
  public readonly rngmultitypid!: number /* oid */;

  @ViewColumn({ name: 'rngcollation' })
  public readonly rngcollation!: number /* oid */;

  @ViewColumn({ name: 'rngsubopc' })
  public readonly rngsubopc!: number /* oid */;

  @ViewColumn({ name: 'rngcanonical' })
  public readonly rngcanonical!: unknown /* regproc */;

  @ViewColumn({ name: 'rngsubdiff' })
  public readonly rngsubdiff!: unknown /* regproc */;
}
