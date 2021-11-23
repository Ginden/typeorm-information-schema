import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_bgwriter',
  synchronize: false,
})
export class PgStatBgwriter {
  @ViewColumn({ name: 'checkpoints_timed' })
  public readonly checkpoints_timed!: string | null /* int8 */;

  @ViewColumn({ name: 'checkpoints_req' })
  public readonly checkpoints_req!: string | null /* int8 */;

  @ViewColumn({ name: 'checkpoint_write_time' })
  public readonly checkpoint_write_time!: number | null /* float8 */;

  @ViewColumn({ name: 'checkpoint_sync_time' })
  public readonly checkpoint_sync_time!: number | null /* float8 */;

  @ViewColumn({ name: 'buffers_checkpoint' })
  public readonly buffers_checkpoint!: string | null /* int8 */;

  @ViewColumn({ name: 'buffers_clean' })
  public readonly buffers_clean!: string | null /* int8 */;

  @ViewColumn({ name: 'maxwritten_clean' })
  public readonly maxwritten_clean!: string | null /* int8 */;

  @ViewColumn({ name: 'buffers_backend' })
  public readonly buffers_backend!: string | null /* int8 */;

  @ViewColumn({ name: 'buffers_backend_fsync' })
  public readonly buffers_backend_fsync!: string | null /* int8 */;

  @ViewColumn({ name: 'buffers_alloc' })
  public readonly buffers_alloc!: string | null /* int8 */;

  @ViewColumn({ name: 'stats_reset' })
  public readonly stats_reset!: Date | null /* timestamptz */;
}
