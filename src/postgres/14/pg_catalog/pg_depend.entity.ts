import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_depend records the dependency
 *    relationships between database objects.  This information allows
 *    DROP commands to find which other objects must be dropped
 *    by DROP CASCADE or prevent dropping in the DROP
 *    RESTRICT case.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_depend',
  synchronize: false,
})
export class PgDepend {
  /**
   * The OID of the system catalog the dependent object is in,
   * or zero for a DEPENDENCY_PIN entry */

  @ViewColumn({ name: 'classid' })
  public readonly classid!: number /* oid */;
  /**
   * The OID of the specific dependent object,
   * or zero for a DEPENDENCY_PIN entry */

  @ViewColumn({ name: 'objid' })
  public readonly objid!: number /* oid */;
  /**
   * For a table column, this is the column number (the
   * objid and classid refer to the
   * table itself).  For all other object types, this column is
   * zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;
  /**
   * The OID of the system catalog the referenced object is in */

  @ViewColumn({ name: 'refclassid' })
  public readonly refclassid!: number /* oid */;
  /**
   * The OID of the specific referenced object */

  @ViewColumn({ name: 'refobjid' })
  public readonly refobjid!: number /* oid */;
  /**
   * For a table column, this is the column number (the
   * refobjid and refclassid refer
   * to the table itself).  For all other object types, this column
   * is zero. */

  @ViewColumn({ name: 'refobjsubid' })
  public readonly refobjsubid!: number /* int4 */;
  /**
   * A code defining the specific semantics of this dependency relationship; see text */

  @ViewColumn({ name: 'deptype' })
  public readonly deptype!: 'n' | 'a' | 'i' | 'P' | 'S' | 'e' | 'x' | 'p';
}
