import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_wal_receiver',
  synchronize: false,
})
export class PgStatWalReceiver {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'status' })
  public readonly status!: string | null /* text */;

  @ViewColumn({ name: 'receive_start_lsn' })
  public readonly receive_start_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'receive_start_tli' })
  public readonly receive_start_tli!: number | null /* int4 */;

  @ViewColumn({ name: 'written_lsn' })
  public readonly written_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'flushed_lsn' })
  public readonly flushed_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'received_tli' })
  public readonly received_tli!: number | null /* int4 */;

  @ViewColumn({ name: 'last_msg_send_time' })
  public readonly last_msg_send_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'last_msg_receipt_time' })
  public readonly last_msg_receipt_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'latest_end_lsn' })
  public readonly latest_end_lsn!: unknown | null /* pg_lsn */;

  @ViewColumn({ name: 'latest_end_time' })
  public readonly latest_end_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'slot_name' })
  public readonly slot_name!: string | null /* text */;

  @ViewColumn({ name: 'sender_host' })
  public readonly sender_host!: string | null /* text */;

  @ViewColumn({ name: 'sender_port' })
  public readonly sender_port!: number | null /* int4 */;

  @ViewColumn({ name: 'conninfo' })
  public readonly conninfo!: string | null /* text */;
}
