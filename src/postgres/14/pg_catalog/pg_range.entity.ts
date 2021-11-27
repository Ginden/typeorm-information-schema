import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_range stores information about
 *    range types.  This is in addition to the types' entries in
 *    pg_type.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_range',
  synchronize: false,
})
export class PgRange {
  /**
   * OID of the range type */

  @ViewColumn({ name: 'rngtypid' })
  public readonly rngtypid!: number /* oid */;
  /**
   * OID of the element type (subtype) of this range type */

  @ViewColumn({ name: 'rngsubtype' })
  public readonly rngsubtype!: number /* oid */;
  /**
   * OID of the multirange type for this range type */

  @ViewColumn({ name: 'rngmultitypid' })
  public readonly rngmultitypid!: number /* oid */;
  /**
   * OID of the collation used for range comparisons, or zero if none */

  @ViewColumn({ name: 'rngcollation' })
  public readonly rngcollation!: number /* oid */;
  /**
   * OID of the subtype's operator class used for range comparisons */

  @ViewColumn({ name: 'rngsubopc' })
  public readonly rngsubopc!: number /* oid */;
  /**
   * OID of the function to convert a range value into canonical form,
   * or zero if none */

  @ViewColumn({ name: 'rngcanonical' })
  public readonly rngcanonical!: unknown /* regproc */;
  /**
   * OID of the function to return the difference between two element
   * values as double precision, or zero if none */

  @ViewColumn({ name: 'rngsubdiff' })
  public readonly rngsubdiff!: unknown /* regproc */;
}
