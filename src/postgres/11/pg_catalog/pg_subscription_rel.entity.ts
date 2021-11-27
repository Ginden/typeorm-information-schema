import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_subscription_rel',
  synchronize: false,
})
export class PgSubscriptionRel {
  @ViewColumn({ name: 'srsubid' })
  public readonly srsubid!: number /* oid */;

  @ViewColumn({ name: 'srrelid' })
  public readonly srrelid!: number /* oid */;

  @ViewColumn({ name: 'srsubstate' })
  public readonly srsubstate!: unknown /* char */;

  @ViewColumn({ name: 'srsublsn' })
  public readonly srsublsn!: unknown /* pg_lsn */;
}
