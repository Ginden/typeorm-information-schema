import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_replication_slots',
  synchronize: false,
})
export class PgStatReplicationSlots {
  @ViewColumn({ name: 'slot_name' })
  public readonly slot_name!: string | null /* text */;

  @ViewColumn({ name: 'spill_txns' })
  public readonly spill_txns!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'spill_count' })
  public readonly spill_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'spill_bytes' })
  public readonly spill_bytes!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'stream_txns' })
  public readonly stream_txns!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'stream_count' })
  public readonly stream_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'stream_bytes' })
  public readonly stream_bytes!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'total_txns' })
  public readonly total_txns!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'total_bytes' })
  public readonly total_bytes!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
