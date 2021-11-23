import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stats_ext',
  synchronize: false,
})
export class PgStatsExt {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'statistics_schemaname' })
  public readonly statistics_schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'statistics_name' })
  public readonly statistics_name!: unknown | null /* name */;

  @ViewColumn({ name: 'statistics_owner' })
  public readonly statistics_owner!: unknown | null /* name */;

  @ViewColumn({ name: 'attnames' })
  public readonly attnames!: unknown | null /* _name */;

  @ViewColumn({ name: 'exprs' })
  public readonly exprs!: string | null /* _text */;

  @ViewColumn({ name: 'kinds' })
  public readonly kinds!: unknown | null /* _char */;

  @ViewColumn({ name: 'n_distinct' })
  public readonly n_distinct!: unknown | null /* pg_ndistinct */;

  @ViewColumn({ name: 'dependencies' })
  public readonly dependencies!: unknown | null /* pg_dependencies */;

  @ViewColumn({ name: 'most_common_vals' })
  public readonly most_common_vals!: string | null /* _text */;

  @ViewColumn({ name: 'most_common_val_nulls' })
  public readonly most_common_val_nulls!: boolean | null /* _bool */;

  @ViewColumn({ name: 'most_common_freqs' })
  public readonly most_common_freqs!: unknown | null /* _float8 */;

  @ViewColumn({ name: 'most_common_base_freqs' })
  public readonly most_common_base_freqs!: unknown | null /* _float8 */;
}
