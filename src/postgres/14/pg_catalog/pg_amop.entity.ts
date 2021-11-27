import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_amop stores information about
 *    operators associated with access method operator families.  There is one
 *    row for each operator that is a member of an operator family.  A family
 *    member can be either a search operator or an
 *    ordering operator.  An operator
 *    can appear in more than one family, but cannot appear in more than one
 *    search position nor more than one ordering position within a family.
 *    (It is allowed, though unlikely, for an operator to be used for both
 *    search and ordering purposes.)
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_amop',
  synchronize: false,
})
export class PgAmop {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The operator family this entry is for */

  @ViewColumn({ name: 'amopfamily' })
  public readonly amopfamily!: number /* oid */;
  /**
   * Left-hand input data type of operator */

  @ViewColumn({ name: 'amoplefttype' })
  public readonly amoplefttype!: number /* oid */;
  /**
   * Right-hand input data type of operator */

  @ViewColumn({ name: 'amoprighttype' })
  public readonly amoprighttype!: number /* oid */;
  /**
   * Operator strategy number */

  @ViewColumn({ name: 'amopstrategy' })
  public readonly amopstrategy!: number /* int2 */;
  /**
   * Operator purpose, either s for search or
   * o for ordering */

  @ViewColumn({ name: 'amoppurpose' })
  public readonly amoppurpose!: unknown /* char */;
  /**
   * OID of the operator */

  @ViewColumn({ name: 'amopopr' })
  public readonly amopopr!: number /* oid */;
  /**
   * Index access method operator family is for */

  @ViewColumn({ name: 'amopmethod' })
  public readonly amopmethod!: number /* oid */;
  /**
   * The B-tree operator family this entry sorts according to, if an
   * ordering operator; zero if a search operator */

  @ViewColumn({ name: 'amopsortfamily' })
  public readonly amopsortfamily!: number /* oid */;
}
