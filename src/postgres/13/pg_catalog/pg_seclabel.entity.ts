import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_seclabel',
  synchronize: false,
})
export class PgSeclabel {
  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string /* text */;

  @ViewColumn({ name: 'label' })
  public readonly label!: string /* text */;
}
