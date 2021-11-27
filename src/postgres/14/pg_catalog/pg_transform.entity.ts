import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_transform stores information about
 *    transforms, which are a mechanism to adapt data types to procedural
 *    languages.  See > for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_transform',
  synchronize: false,
})
export class PgTransform {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * OID of the data type this transform is for */

  @ViewColumn({ name: 'trftype' })
  public readonly trftype!: number /* oid */;
  /**
   * OID of the language this transform is for */

  @ViewColumn({ name: 'trflang' })
  public readonly trflang!: number /* oid */;
  /**
   * The OID of the function to use when converting the data type for input
   * to the procedural language (e.g., function parameters).  Zero is stored
   * if the default behavior should be used. */

  @ViewColumn({ name: 'trffromsql' })
  public readonly trffromsql!: unknown /* regproc */;
  /**
   * The OID of the function to use when converting output from the
   * procedural language (e.g., return values) to the data type.  Zero is
   * stored if the default behavior should be used. */

  @ViewColumn({ name: 'trftosql' })
  public readonly trftosql!: unknown /* regproc */;
}
