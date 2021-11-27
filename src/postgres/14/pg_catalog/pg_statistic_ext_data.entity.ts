import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_statistic_ext_data
 *    holds data for extended planner statistics defined in
 *    pg_statistic_ext.
 *    Each row in this catalog corresponds to a statistics object
 *    created with CREATE STATISTICS.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic_ext_data',
  synchronize: false,
})
export class PgStatisticExtData {
  /**
   * Extended statistics object containing the definition for this data */

  @ViewColumn({ name: 'stxoid' })
  public readonly stxoid!: number /* oid */;
  /**
   * N-distinct counts, serialized as pg_ndistinct type */

  @ViewColumn({ name: 'stxdndistinct' })
  public readonly stxdndistinct!: unknown | null /* pg_ndistinct */;
  /**
   * Functional dependency statistics, serialized
   * as pg_dependencies type */

  @ViewColumn({ name: 'stxddependencies' })
  public readonly stxddependencies!: unknown | null /* pg_dependencies */;
  /**
   * MCV (most-common values) list statistics, serialized as
   * pg_mcv_list type */

  @ViewColumn({ name: 'stxdmcv' })
  public readonly stxdmcv!: unknown | null /* pg_mcv_list */;
  /**
   * Per-expression statistics, serialized as an array of
   * pg_statistic type */

  @ViewColumn({ name: 'stxdexpr' })
  public readonly stxdexpr!: unknown | null /* _pg_statistic */;
}
