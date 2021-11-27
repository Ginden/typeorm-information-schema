import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_largeobject_metadata
 *    holds metadata associated with large objects.  The actual large object
 *    data is stored in
 *    pg_largeobject.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_largeobject_metadata',
  synchronize: false,
})
export class PgLargeobjectMetadata {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Owner of the large object */

  @ViewColumn({ name: 'lomowner' })
  public readonly lomowner!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'lomacl' })
  public readonly lomacl!: unknown | null /* _aclitem */;
}
