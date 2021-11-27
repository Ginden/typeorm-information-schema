import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_stats_ext provides access to
 *    information about each extended statistics object in the database,
 *    combining information stored in the pg_statistic_ext
 *    and pg_statistic_ext_data
 *    catalogs.  This view allows access only to rows of
 *    pg_statistic_ext and pg_statistic_ext_data
 *    that correspond to tables the user has permission to read, and therefore
 *    it is safe to allow public read access to this view.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stats_ext',
  synchronize: false,
})
export class PgStatsExt {
  /**
   * Name of schema containing table */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of schema containing extended statistics object */

  @ViewColumn({ name: 'statistics_schemaname' })
  public readonly statistics_schemaname!: unknown | null /* name */;
  /**
   * Name of extended statistics object */

  @ViewColumn({ name: 'statistics_name' })
  public readonly statistics_name!: unknown | null /* name */;
  /**
   * Owner of the extended statistics object */

  @ViewColumn({ name: 'statistics_owner' })
  public readonly statistics_owner!: unknown | null /* name */;
  /**
   * Names of the columns included in the extended statistics object */

  @ViewColumn({ name: 'attnames' })
  public readonly attnames!: unknown | null /* _name */;
  /**
   * Expressions included in the extended statistics object */

  @ViewColumn({ name: 'exprs' })
  public readonly exprs!: string | null /* _text */;
  /**
   * Types of extended statistics object enabled for this record */

  @ViewColumn({ name: 'kinds' })
  public readonly kinds!: unknown | null /* _char */;
  /**
   * N-distinct counts for combinations of column values. If greater
   * than zero, the estimated number of distinct values in the combination.
   * If less than zero, the negative of the number of distinct values divided
   * by the number of rows.
   * (The negated form is used when ANALYZE believes that
   * the number of distinct values is likely to increase as the table grows;
   * the positive form is used when the column seems to have a fixed number
   * of possible values.)  For example, -1 indicates a unique combination of
   * columns in which the number of distinct combinations is the same as the
   * number of rows. */

  @ViewColumn({ name: 'n_distinct' })
  public readonly n_distinct!: unknown | null /* pg_ndistinct */;
  /**
   * Functional dependency statistics */

  @ViewColumn({ name: 'dependencies' })
  public readonly dependencies!: unknown | null /* pg_dependencies */;
  /**
   * A list of the most common combinations of values in the columns.
   * (Null if no combinations seem to be more common than any others.) */

  @ViewColumn({ name: 'most_common_vals' })
  public readonly most_common_vals!: string | null /* _text */;
  /**
   * A list of NULL flags for the most common combinations of values.
   * (Null when most_common_vals is.) */

  @ViewColumn({ name: 'most_common_val_nulls' })
  public readonly most_common_val_nulls!: boolean | null /* _bool */;
  /**
   * A list of the frequencies of the most common combinations,
   * i.e., number of occurrences of each divided by total number of rows.
   * (Null when most_common_vals is.) */

  @ViewColumn({ name: 'most_common_freqs' })
  public readonly most_common_freqs!: unknown | null /* _float8 */;
  /**
   * A list of the base frequencies of the most common combinations,
   * i.e., product of per-value frequencies.
   * (Null when most_common_vals is.) */

  @ViewColumn({ name: 'most_common_base_freqs' })
  public readonly most_common_base_freqs!: unknown | null /* _float8 */;
}
