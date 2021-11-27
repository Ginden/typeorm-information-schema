import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_stats provides access to
 *    the information stored in the pg_statistic
 *    catalog.  This view allows access only to rows of
 *    pg_statistic that correspond to tables the
 *    user has permission to read, and therefore it is safe to allow public
 *    read access to this view.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stats',
  synchronize: false,
})
export class PgStats {
  /**
   * Name of schema containing table */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of column described by this row */

  @ViewColumn({ name: 'attname' })
  public readonly attname!: unknown | null /* name */;
  /**
   * If true, this row includes inheritance child columns, not just the
   * values in the specified table */

  @ViewColumn({ name: 'inherited' })
  public readonly inherited!: boolean | null /* bool */;
  /**
   * Fraction of column entries that are null */

  @ViewColumn({ name: 'null_frac' })
  public readonly null_frac!: number | null /* float4 */;
  /**
   * Average width in bytes of column's entries */

  @ViewColumn({ name: 'avg_width' })
  public readonly avg_width!: number | null /* int4 */;
  /**
   * If greater than zero, the estimated number of distinct values in the
   * column.  If less than zero, the negative of the number of distinct
   * values divided by the number of rows.  (The negated form is used when
   * ANALYZE believes that the number of distinct values is
   * likely to increase as the table grows; the positive form is used when
   * the column seems to have a fixed number of possible values.)  For
   * example, -1 indicates a unique column in which the number of distinct
   * values is the same as the number of rows. */

  @ViewColumn({ name: 'n_distinct' })
  public readonly n_distinct!: number | null /* float4 */;
  /**
   * A list of the most common values in the column. (Null if
   * no values seem to be more common than any others.) */

  @ViewColumn({ name: 'most_common_vals' })
  public readonly most_common_vals!: unknown | null /* anyarray */;
  /**
   * A list of the frequencies of the most common values,
   * i.e., number of occurrences of each divided by total number of rows.
   * (Null when most_common_vals is.) */

  @ViewColumn({ name: 'most_common_freqs' })
  public readonly most_common_freqs!: number | null /* _float4 */;
  /**
   * A list of values that divide the column's values into groups of
   * approximately equal population.  The values in
   * most_common_vals, if present, are omitted from this
   * histogram calculation.  (This column is null if the column data type
   * does not have a  operator or if the
   * most_common_vals list accounts for the entire
   * population.) */

  @ViewColumn({ name: 'histogram_bounds' })
  public readonly histogram_bounds!: unknown | null /* anyarray */;
  /**
   * Statistical correlation between physical row ordering and
   * logical ordering of the column values.  This ranges from -1 to +1.
   * When the value is near -1 or +1, an index scan on the column will
   * be estimated to be cheaper than when it is near zero, due to reduction
   * of random access to the disk.  (This column is null if the column data
   * type does not have a  operator.) */

  @ViewColumn({ name: 'correlation' })
  public readonly correlation!: number | null /* float4 */;
  /**
   * A list of non-null element values most often appearing within values of
   * the column. (Null for scalar types.) */

  @ViewColumn({ name: 'most_common_elems' })
  public readonly most_common_elems!: unknown | null /* anyarray */;
  /**
   * A list of the frequencies of the most common element values, i.e., the
   * fraction of rows containing at least one instance of the given value.
   * Two or three additional values follow the per-element frequencies;
   * these are the minimum and maximum of the preceding per-element
   * frequencies, and optionally the frequency of null elements.
   * (Null when most_common_elems is.) */

  @ViewColumn({ name: 'most_common_elem_freqs' })
  public readonly most_common_elem_freqs!: number | null /* _float4 */;
  /**
   * A histogram of the counts of distinct non-null element values within the
   * values of the column, followed by the average number of distinct
   * non-null elements.  (Null for scalar types.) */

  @ViewColumn({ name: 'elem_count_histogram' })
  public readonly elem_count_histogram!: number | null /* _float4 */;
}
