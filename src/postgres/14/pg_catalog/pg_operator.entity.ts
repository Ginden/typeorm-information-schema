import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_operator stores information about operators.
 *    See >
 *    and > for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_operator',
  synchronize: false,
})
export class PgOperator {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the operator */

  @ViewColumn({ name: 'oprname' })
  public readonly oprname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this operator */

  @ViewColumn({ name: 'oprnamespace' })
  public readonly oprnamespace!: number /* oid */;
  /**
   * Owner of the operator */

  @ViewColumn({ name: 'oprowner' })
  public readonly oprowner!: number /* oid */;
  /**
   * b = infix operator (both),
   * or l = prefix operator (left) */

  @ViewColumn({ name: 'oprkind' })
  public readonly oprkind!: unknown /* char */;
  /**
   * This operator supports merge joins */

  @ViewColumn({ name: 'oprcanmerge' })
  public readonly oprcanmerge!: boolean /* bool */;
  /**
   * This operator supports hash joins */

  @ViewColumn({ name: 'oprcanhash' })
  public readonly oprcanhash!: boolean /* bool */;
  /**
   * Type of the left operand (zero for a prefix operator) */

  @ViewColumn({ name: 'oprleft' })
  public readonly oprleft!: number /* oid */;
  /**
   * Type of the right operand */

  @ViewColumn({ name: 'oprright' })
  public readonly oprright!: number /* oid */;
  /**
   * Type of the result
   * (zero for a not-yet-defined shell operator) */

  @ViewColumn({ name: 'oprresult' })
  public readonly oprresult!: number /* oid */;
  /**
   * Commutator of this operator (zero if none) */

  @ViewColumn({ name: 'oprcom' })
  public readonly oprcom!: number /* oid */;
  /**
   * Negator of this operator (zero if none) */

  @ViewColumn({ name: 'oprnegate' })
  public readonly oprnegate!: number /* oid */;
  /**
   * Function that implements this operator
   * (zero for a not-yet-defined shell operator) */

  @ViewColumn({ name: 'oprcode' })
  public readonly oprcode!: unknown /* regproc */;
  /**
   * Restriction selectivity estimation function for this operator
   * (zero if none) */

  @ViewColumn({ name: 'oprrest' })
  public readonly oprrest!: unknown /* regproc */;
  /**
   * Join selectivity estimation function for this operator
   * (zero if none) */

  @ViewColumn({ name: 'oprjoin' })
  public readonly oprjoin!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprcode',
    referencedColumnName: 'oid',
  })
  readonly oprcode_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprrest',
    referencedColumnName: 'oid',
  })
  readonly oprrest_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprjoin',
    referencedColumnName: 'oid',
  })
  readonly oprjoin_rel?: PgProc;
}
