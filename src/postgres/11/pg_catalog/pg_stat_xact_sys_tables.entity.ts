import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_xact_sys_tables',
  synchronize: false,
})
export class PgStatXactSysTables {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'seq_scan' })
  public readonly seq_scan!: string | null /* int8 */;

  @ViewColumn({ name: 'seq_tup_read' })
  public readonly seq_tup_read!: string | null /* int8 */;

  @ViewColumn({ name: 'idx_scan' })
  public readonly idx_scan!: string | null /* int8 */;

  @ViewColumn({ name: 'idx_tup_fetch' })
  public readonly idx_tup_fetch!: string | null /* int8 */;

  @ViewColumn({ name: 'n_tup_ins' })
  public readonly n_tup_ins!: string | null /* int8 */;

  @ViewColumn({ name: 'n_tup_upd' })
  public readonly n_tup_upd!: string | null /* int8 */;

  @ViewColumn({ name: 'n_tup_del' })
  public readonly n_tup_del!: string | null /* int8 */;

  @ViewColumn({ name: 'n_tup_hot_upd' })
  public readonly n_tup_hot_upd!: string | null /* int8 */;
}
