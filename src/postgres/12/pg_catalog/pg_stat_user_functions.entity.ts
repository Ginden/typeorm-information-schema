import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_user_functions',
  synchronize: false,
})
export class PgStatUserFunctions {
  @ViewColumn({ name: 'funcid' })
  public readonly funcid!: number | null /* oid */;

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'funcname' })
  public readonly funcname!: unknown | null /* name */;

  @ViewColumn({ name: 'calls' })
  public readonly calls!: string | null /* int8 */;

  @ViewColumn({ name: 'total_time' })
  public readonly total_time!: number | null /* float8 */;

  @ViewColumn({ name: 'self_time' })
  public readonly self_time!: number | null /* float8 */;
}
