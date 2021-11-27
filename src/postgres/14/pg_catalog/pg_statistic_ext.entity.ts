import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_statistic_ext
 *    holds definitions of extended planner statistics.
 *    Each row in this catalog corresponds to a statistics object
 *    created with CREATE STATISTICS.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic_ext',
  synchronize: false,
})
export class PgStatisticExt {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Table containing the columns described by this object */

  @ViewColumn({ name: 'stxrelid' })
  public readonly stxrelid!: number /* oid */;
  /**
   * Name of the statistics object */

  @ViewColumn({ name: 'stxname' })
  public readonly stxname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this statistics object */

  @ViewColumn({ name: 'stxnamespace' })
  public readonly stxnamespace!: number /* oid */;
  /**
   * Owner of the statistics object */

  @ViewColumn({ name: 'stxowner' })
  public readonly stxowner!: number /* oid */;
  /**
   * stxstattarget controls the level of detail
   * of statistics accumulated for this statistics object by
   * ANALYZE.
   * A zero value indicates that no statistics should be collected.
   * A negative value says to use the maximum of the statistics targets of
   * the referenced columns, if set, or the system default statistics target.
   * Positive values of stxstattarget
   * determine the target number of most common values
   * to collect. */

  @ViewColumn({ name: 'stxstattarget' })
  public readonly stxstattarget!: number /* int4 */;
  /**
   * An array of attribute numbers, indicating which table columns are
   * covered by this statistics object;
   * for example a value of 1 3 would
   * mean that the first and the third table columns are covered */

  @ViewColumn({ name: 'stxkeys' })
  public readonly stxkeys!: unknown /* int2vector */;
  /**
   * An array containing codes for the enabled statistics kinds;
   * valid values are:
   * d for n-distinct statistics,
   * f for functional dependency statistics,
   * m for most common values (MCV) list statistics, and
   * e for expression statistics */

  @ViewColumn({ name: 'stxkind' })
  public readonly stxkind!: unknown /* _char */;
  /**
   * Expression trees (in nodeToString()
   * representation) for statistics object attributes that are not simple
   * column references.  This is a list with one element per expression.
   * Null if all statistics object attributes are simple references. */

  @ViewColumn({ name: 'stxexprs' })
  public readonly stxexprs!: unknown | null /* pg_node_tree */;
}
