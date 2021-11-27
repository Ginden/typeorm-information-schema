import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_statistic stores
 *    statistical data about the contents of the database.  Entries are
 *    created by ANALYZE
 *    and subsequently used by the query planner.  Note that all the
 *    statistical data is inherently approximate, even assuming that it
 *    is up-to-date.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic',
  synchronize: false,
})
export class PgStatistic {
  /**
   * The table or index that the described column belongs to */

  @ViewColumn({ name: 'starelid' })
  public readonly starelid!: number /* oid */;
  /**
   * The number of the described column */

  @ViewColumn({ name: 'staattnum' })
  public readonly staattnum!: number /* int2 */;
  /**
   * If true, the stats include inheritance child columns, not just the
   * values in the specified relation */

  @ViewColumn({ name: 'stainherit' })
  public readonly stainherit!: boolean /* bool */;
  /**
   * The fraction of the column's entries that are null */

  @ViewColumn({ name: 'stanullfrac' })
  public readonly stanullfrac!: number /* float4 */;
  /**
   * The average stored width, in bytes, of nonnull entries */

  @ViewColumn({ name: 'stawidth' })
  public readonly stawidth!: number /* int4 */;
  /**
   * The number of distinct nonnull data values in the column.
   * A value greater than zero is the actual number of distinct values.
   * A value less than zero is the negative of a multiplier for the number
   * of rows in the table; for example, a column in which about 80% of the
   * values are nonnull and each nonnull value appears about twice on
   * average could be represented by stadistinct = -0.4.
   * A zero value means the number of distinct values is unknown. */

  @ViewColumn({ name: 'stadistinct' })
  public readonly stadistinct!: number /* float4 */;

  @ViewColumn({ name: 'stakind1' })
  public readonly stakind1!: number /* int2 */;

  @ViewColumn({ name: 'stakind2' })
  public readonly stakind2!: number /* int2 */;

  @ViewColumn({ name: 'stakind3' })
  public readonly stakind3!: number /* int2 */;

  @ViewColumn({ name: 'stakind4' })
  public readonly stakind4!: number /* int2 */;

  @ViewColumn({ name: 'stakind5' })
  public readonly stakind5!: number /* int2 */;

  @ViewColumn({ name: 'staop1' })
  public readonly staop1!: number /* oid */;

  @ViewColumn({ name: 'staop2' })
  public readonly staop2!: number /* oid */;

  @ViewColumn({ name: 'staop3' })
  public readonly staop3!: number /* oid */;

  @ViewColumn({ name: 'staop4' })
  public readonly staop4!: number /* oid */;

  @ViewColumn({ name: 'staop5' })
  public readonly staop5!: number /* oid */;

  @ViewColumn({ name: 'stacoll1' })
  public readonly stacoll1!: number /* oid */;

  @ViewColumn({ name: 'stacoll2' })
  public readonly stacoll2!: number /* oid */;

  @ViewColumn({ name: 'stacoll3' })
  public readonly stacoll3!: number /* oid */;

  @ViewColumn({ name: 'stacoll4' })
  public readonly stacoll4!: number /* oid */;

  @ViewColumn({ name: 'stacoll5' })
  public readonly stacoll5!: number /* oid */;

  @ViewColumn({ name: 'stanumbers1' })
  public readonly stanumbers1!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers2' })
  public readonly stanumbers2!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers3' })
  public readonly stanumbers3!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers4' })
  public readonly stanumbers4!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers5' })
  public readonly stanumbers5!: number | null /* _float4 */;

  @ViewColumn({ name: 'stavalues1' })
  public readonly stavalues1!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues2' })
  public readonly stavalues2!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues3' })
  public readonly stavalues3!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues4' })
  public readonly stavalues4!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues5' })
  public readonly stavalues5!: unknown | null /* anyarray */;
}
