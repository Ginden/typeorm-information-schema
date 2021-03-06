import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_database_conflicts',
  synchronize: false,
})
export class PgStatDatabaseConflicts {
  @ViewColumn({ name: 'datid' })
  public readonly datid!: number | null /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown | null /* name */;

  @ViewColumn({ name: 'confl_tablespace' })
  public readonly confl_tablespace!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'confl_lock' })
  public readonly confl_lock!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'confl_snapshot' })
  public readonly confl_snapshot!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'confl_bufferpin' })
  public readonly confl_bufferpin!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'confl_deadlock' })
  public readonly confl_deadlock!: `${number}` | null /* int8 */;
}
