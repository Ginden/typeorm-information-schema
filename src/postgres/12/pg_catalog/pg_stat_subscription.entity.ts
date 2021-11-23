import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_subscription',
  synchronize: false,
})
export class PgStatSubscription {
  @ViewColumn({ name: 'subid' })
  public readonly subid!: number | null /* oid */;

  @ViewColumn({ name: 'subname' })
  public readonly subname!: unknown | null /* name */;

  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'received_lsn' })
  public readonly received_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'last_msg_send_time' })
  public readonly last_msg_send_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'last_msg_receipt_time' })
  public readonly last_msg_receipt_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'latest_end_lsn' })
  public readonly latest_end_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'latest_end_time' })
  public readonly latest_end_time!: Date | null /* timestamptz */;
}
