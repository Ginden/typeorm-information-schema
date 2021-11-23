import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_create_index',
  synchronize: false,
})
export class PgStatProgressCreateIndex {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'index_relid' })
  public readonly index_relid!: number | null /* oid */;

  @ViewColumn({ name: 'command' })
  public readonly command!: string | null /* text */;

  @ViewColumn({ name: 'phase' })
  public readonly phase!: string | null /* text */;

  @ViewColumn({ name: 'lockers_total' })
  public readonly lockers_total!: string | null /* int8 */;

  @ViewColumn({ name: 'lockers_done' })
  public readonly lockers_done!: string | null /* int8 */;

  @ViewColumn({ name: 'current_locker_pid' })
  public readonly current_locker_pid!: string | null /* int8 */;

  @ViewColumn({ name: 'blocks_total' })
  public readonly blocks_total!: string | null /* int8 */;

  @ViewColumn({ name: 'blocks_done' })
  public readonly blocks_done!: string | null /* int8 */;

  @ViewColumn({ name: 'tuples_total' })
  public readonly tuples_total!: string | null /* int8 */;

  @ViewColumn({ name: 'tuples_done' })
  public readonly tuples_done!: string | null /* int8 */;

  @ViewColumn({ name: 'partitions_total' })
  public readonly partitions_total!: string | null /* int8 */;

  @ViewColumn({ name: 'partitions_done' })
  public readonly partitions_done!: string | null /* int8 */;
}
