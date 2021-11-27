import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_dict',
  synchronize: false,
})
export class PgTsDict {
  @ViewColumn({ name: 'dictname' })
  public readonly dictname!: unknown /* name */;

  @ViewColumn({ name: 'dictnamespace' })
  public readonly dictnamespace!: number /* oid */;

  @ViewColumn({ name: 'dictowner' })
  public readonly dictowner!: number /* oid */;

  @ViewColumn({ name: 'dicttemplate' })
  public readonly dicttemplate!: number /* oid */;

  @ViewColumn({ name: 'dictinitoption' })
  public readonly dictinitoption!: string | null /* text */;
}
