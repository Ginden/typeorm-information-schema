import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_subscription',
  synchronize: false,
})
export class PgSubscription {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'subdbid' })
  public readonly subdbid!: number /* oid */;

  @ViewColumn({ name: 'subname' })
  public readonly subname!: unknown /* name */;

  @ViewColumn({ name: 'subowner' })
  public readonly subowner!: number /* oid */;

  @ViewColumn({ name: 'subenabled' })
  public readonly subenabled!: boolean /* bool */;

  @ViewColumn({ name: 'subconninfo' })
  public readonly subconninfo!: string /* text */;

  @ViewColumn({ name: 'subslotname' })
  public readonly subslotname!: unknown | null /* name */;

  @ViewColumn({ name: 'subsynccommit' })
  public readonly subsynccommit!: string /* text */;

  @ViewColumn({ name: 'subpublications' })
  public readonly subpublications!: string /* _text */;
}
