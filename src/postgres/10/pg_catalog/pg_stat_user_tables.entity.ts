import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_user_tables',
  synchronize: false,
})
export class PgStatUserTables {
  @ViewColumn({ name: 'relid' })
  public readonly relid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown | null /* name */;

  @ViewColumn({ name: 'seq_scan' })
  public readonly seq_scan!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'seq_tup_read' })
  public readonly seq_tup_read!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'idx_scan' })
  public readonly idx_scan!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'idx_tup_fetch' })
  public readonly idx_tup_fetch!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_tup_ins' })
  public readonly n_tup_ins!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_tup_upd' })
  public readonly n_tup_upd!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_tup_del' })
  public readonly n_tup_del!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_tup_hot_upd' })
  public readonly n_tup_hot_upd!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_live_tup' })
  public readonly n_live_tup!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_dead_tup' })
  public readonly n_dead_tup!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'n_mod_since_analyze' })
  public readonly n_mod_since_analyze!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'last_vacuum' })
  public readonly last_vacuum!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'last_autovacuum' })
  public readonly last_autovacuum!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'last_analyze' })
  public readonly last_analyze!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'last_autoanalyze' })
  public readonly last_autoanalyze!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'vacuum_count' })
  public readonly vacuum_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'autovacuum_count' })
  public readonly autovacuum_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'analyze_count' })
  public readonly analyze_count!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'autoanalyze_count' })
  public readonly autoanalyze_count!: `${number}` | null /* int8 */;
}
