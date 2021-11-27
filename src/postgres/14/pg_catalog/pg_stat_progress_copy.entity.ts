import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_progress_copy',
  synchronize: false,
})
export class PgStatProgressCopy {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'command' })
  public readonly command!: string | null /* text */;

  @ViewColumn({ name: 'type' })
  public readonly type!: string | null /* text */;

  @ViewColumn({ name: 'bytes_processed' })
  public readonly bytes_processed!: string | null /* int8 */;

  @ViewColumn({ name: 'bytes_total' })
  public readonly bytes_total!: string | null /* int8 */;

  @ViewColumn({ name: 'tuples_processed' })
  public readonly tuples_processed!: string | null /* int8 */;

  @ViewColumn({ name: 'tuples_excluded' })
  public readonly tuples_excluded!: string | null /* int8 */;
}
