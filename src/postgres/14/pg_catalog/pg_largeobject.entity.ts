import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_largeobject holds the data making up
 *    large objects.  A large object is identified by an OID
 *    assigned when it is created.  Each large object is broken into
 *    segments or pages small enough to be conveniently stored as rows
 *    in pg_largeobject.
 *    The amount of data per page is defined to be LOBLKSIZE (which is currently
 *    BLCKSZ/4, or typically 2 kB).
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_largeobject',
  synchronize: false,
})
export class PgLargeobject {
  /**
   * Identifier of the large object that includes this page */

  @ViewColumn({ name: 'loid' })
  public readonly loid!: number /* oid */;
  /**
   * Page number of this page within its large object
   * (counting from zero) */

  @ViewColumn({ name: 'pageno' })
  public readonly pageno!: number /* int4 */;
  /**
   * Actual data stored in the large object.
   * This will never be more than LOBLKSIZE bytes and might be less. */

  @ViewColumn({ name: 'data' })
  public readonly data!: unknown /* bytea */;
}
