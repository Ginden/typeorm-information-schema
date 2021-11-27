import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_opclass defines
 *    index access method operator classes.  Each operator class defines
 *    semantics for index columns of a particular data type and a particular
 *    index access method.  An operator class essentially specifies that a
 *    particular operator family is applicable to a particular indexable column
 *    data type.  The set of operators from the family that are actually usable
 *    with the indexed column are whichever ones accept the column's data type
 *    as their left-hand input.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_opclass',
  synchronize: false,
})
export class PgOpclass {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Index access method operator class is for */

  @ViewColumn({ name: 'opcmethod' })
  public readonly opcmethod!: number /* oid */;
  /**
   * Name of this operator class */

  @ViewColumn({ name: 'opcname' })
  public readonly opcname!: unknown /* name */;
  /**
   * Namespace of this operator class */

  @ViewColumn({ name: 'opcnamespace' })
  public readonly opcnamespace!: number /* oid */;
  /**
   * Owner of the operator class */

  @ViewColumn({ name: 'opcowner' })
  public readonly opcowner!: number /* oid */;
  /**
   * Operator family containing the operator class */

  @ViewColumn({ name: 'opcfamily' })
  public readonly opcfamily!: number /* oid */;
  /**
   * Data type that the operator class indexes */

  @ViewColumn({ name: 'opcintype' })
  public readonly opcintype!: number /* oid */;
  /**
   * True if this operator class is the default for opcintype */

  @ViewColumn({ name: 'opcdefault' })
  public readonly opcdefault!: boolean /* bool */;
  /**
   * Type of data stored in index, or zero if same as opcintype */

  @ViewColumn({ name: 'opckeytype' })
  public readonly opckeytype!: number /* oid */;
}
