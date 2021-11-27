import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_shdepend records the
 *    dependency relationships between database objects and shared objects,
 *    such as roles.  This information allows
 *    PostgreSQL to ensure that those objects are
 *    unreferenced before attempting to delete them.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shdepend',
  synchronize: false,
})
export class PgShdepend {
  /**
   * The OID of the database the dependent object is in,
   * or zero for a shared object
   * or a SHARED_DEPENDENCY_PIN entry */

  @ViewColumn({ name: 'dbid' })
  public readonly dbid!: number /* oid */;
  /**
   * The OID of the system catalog the dependent object is in,
   * or zero for a SHARED_DEPENDENCY_PIN entry */

  @ViewColumn({ name: 'classid' })
  public readonly classid!: number /* oid */;
  /**
   * The OID of the specific dependent object,
   * or zero for a SHARED_DEPENDENCY_PIN entry */

  @ViewColumn({ name: 'objid' })
  public readonly objid!: number /* oid */;
  /**
   * For a table column, this is the column number (the
   * objid and classid refer to the
   * table itself).  For all other object types, this column is zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;
  /**
   * The OID of the system catalog the referenced object is in
   * (must be a shared catalog) */

  @ViewColumn({ name: 'refclassid' })
  public readonly refclassid!: number /* oid */;
  /**
   * The OID of the specific referenced object */

  @ViewColumn({ name: 'refobjid' })
  public readonly refobjid!: number /* oid */;
  /**
   * A code defining the specific semantics of this dependency relationship; see text */

  @ViewColumn({ name: 'deptype' })
  public readonly deptype!: unknown /* char */;
}
