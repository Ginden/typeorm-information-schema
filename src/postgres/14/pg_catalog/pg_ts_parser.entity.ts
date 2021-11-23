import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_parser',
  synchronize: false,
})
export class PgTsParser {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'prsname' })
  public readonly prsname!: unknown /* name */;

  @ViewColumn({ name: 'prsnamespace' })
  public readonly prsnamespace!: number /* oid */;

  @ViewColumn({ name: 'prsstart' })
  public readonly prsstart!: unknown /* regproc */;

  @ViewColumn({ name: 'prstoken' })
  public readonly prstoken!: unknown /* regproc */;

  @ViewColumn({ name: 'prsend' })
  public readonly prsend!: unknown /* regproc */;

  @ViewColumn({ name: 'prsheadline' })
  public readonly prsheadline!: unknown /* regproc */;

  @ViewColumn({ name: 'prslextype' })
  public readonly prslextype!: unknown /* regproc */;
}
