import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stats',
  synchronize: false,
})
export class PgStats {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;

  @ViewColumn({ name: 'attname' })
  public readonly attname!: unknown | null /* name */;

  @ViewColumn({ name: 'inherited' })
  public readonly inherited!: boolean | null /* bool */;

  @ViewColumn({ name: 'null_frac' })
  public readonly null_frac!: number | null /* float4 */;

  @ViewColumn({ name: 'avg_width' })
  public readonly avg_width!: number | null /* int4 */;

  @ViewColumn({ name: 'n_distinct' })
  public readonly n_distinct!: number | null /* float4 */;

  @ViewColumn({ name: 'most_common_vals' })
  public readonly most_common_vals!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'most_common_freqs' })
  public readonly most_common_freqs!: number | null /* _float4 */;

  @ViewColumn({ name: 'histogram_bounds' })
  public readonly histogram_bounds!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'correlation' })
  public readonly correlation!: number | null /* float4 */;

  @ViewColumn({ name: 'most_common_elems' })
  public readonly most_common_elems!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'most_common_elem_freqs' })
  public readonly most_common_elem_freqs!: number | null /* _float4 */;

  @ViewColumn({ name: 'elem_count_histogram' })
  public readonly elem_count_histogram!: number | null /* _float4 */;
}
