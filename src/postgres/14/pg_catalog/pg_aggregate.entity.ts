import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
import { PgType } from './pg_type.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_aggregate stores information about
 *    aggregate functions.  An aggregate function is a function that
 *    operates on a set of values (typically one column from each row
 *    that matches a query condition) and returns a single value computed
 *    from all these values.  Typical aggregate functions are
 *    sum, count, and
 *    max.  Each entry in
 *    pg_aggregate is an extension of an entry
 *    in pg_proc.
 *    The pg_proc entry carries the aggregate's name,
 *    input and output data types, and other information that is similar to
 *    ordinary functions.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_aggregate',
  synchronize: false,
})
export class PgAggregate {
  /**
   * pg_proc OID of the aggregate function */

  @ViewColumn({ name: 'aggfnoid' })
  public readonly aggfnoid!: unknown /* regproc */;
  /**
   * Aggregate kind:
   * n for normal aggregates,
   * o for ordered-set aggregates, or
   * h for hypothetical-set aggregates */

  @ViewColumn({ name: 'aggkind' })
  public readonly aggkind!: 'n' | 'h';
  /**
   * Number of direct (non-aggregated) arguments of an ordered-set or
   * hypothetical-set aggregate, counting a variadic array as one argument.
   * If equal to pronargs, the aggregate must be variadic
   * and the variadic array describes the aggregated arguments as well as
   * the final direct arguments.
   * Always zero for normal aggregates. */

  @ViewColumn({ name: 'aggnumdirectargs' })
  public readonly aggnumdirectargs!: number /* int2 */;
  /**
   * Transition function */

  @ViewColumn({ name: 'aggtransfn' })
  public readonly aggtransfn!: unknown /* regproc */;
  /**
   * Final function (zero if none) */

  @ViewColumn({ name: 'aggfinalfn' })
  public readonly aggfinalfn!: unknown /* regproc */;
  /**
   * Combine function (zero if none) */

  @ViewColumn({ name: 'aggcombinefn' })
  public readonly aggcombinefn!: unknown /* regproc */;
  /**
   * Serialization function (zero if none) */

  @ViewColumn({ name: 'aggserialfn' })
  public readonly aggserialfn!: unknown /* regproc */;
  /**
   * Deserialization function (zero if none) */

  @ViewColumn({ name: 'aggdeserialfn' })
  public readonly aggdeserialfn!: unknown /* regproc */;
  /**
   * Forward transition function for moving-aggregate mode (zero if none) */

  @ViewColumn({ name: 'aggmtransfn' })
  public readonly aggmtransfn!: unknown /* regproc */;
  /**
   * Inverse transition function for moving-aggregate mode (zero if none) */

  @ViewColumn({ name: 'aggminvtransfn' })
  public readonly aggminvtransfn!: unknown /* regproc */;
  /**
   * Final function for moving-aggregate mode (zero if none) */

  @ViewColumn({ name: 'aggmfinalfn' })
  public readonly aggmfinalfn!: unknown /* regproc */;
  /**
   * True to pass extra dummy arguments to aggfinalfn */

  @ViewColumn({ name: 'aggfinalextra' })
  public readonly aggfinalextra!: boolean /* bool */;
  /**
   * True to pass extra dummy arguments to aggmfinalfn */

  @ViewColumn({ name: 'aggmfinalextra' })
  public readonly aggmfinalextra!: boolean /* bool */;
  /**
   * Whether aggfinalfn modifies the
   * transition state value:
   * r if it is read-only,
   * s if the aggtransfn
   * cannot be applied after the aggfinalfn, or
   * w if it writes on the value */

  @ViewColumn({ name: 'aggfinalmodify' })
  public readonly aggfinalmodify!: 'r' | 's' | 'w';
  /**
   * Like aggfinalmodify, but for
   * the aggmfinalfn */

  @ViewColumn({ name: 'aggmfinalmodify' })
  public readonly aggmfinalmodify!: 'r' | 's' | 'w';
  /**
   * Associated sort operator (zero if none) */

  @ViewColumn({ name: 'aggsortop' })
  public readonly aggsortop!: number /* oid */;
  /**
   * Data type of the aggregate function's internal transition (state) data */

  @ViewColumn({ name: 'aggtranstype' })
  public readonly aggtranstype!: number /* oid */;
  /**
   * Approximate average size (in bytes) of the transition state
   * data, or zero to use a default estimate */

  @ViewColumn({ name: 'aggtransspace' })
  public readonly aggtransspace!: number /* int4 */;
  /**
   * Data type of the aggregate function's internal transition (state)
   * data for moving-aggregate mode (zero if none) */

  @ViewColumn({ name: 'aggmtranstype' })
  public readonly aggmtranstype!: number /* oid */;
  /**
   * Approximate average size (in bytes) of the transition state data
   * for moving-aggregate mode, or zero to use a default estimate */

  @ViewColumn({ name: 'aggmtransspace' })
  public readonly aggmtransspace!: number /* int4 */;
  /**
   * The initial value of the transition state.  This is a text
   * field containing the initial value in its external string
   * representation.  If this field is null, the transition state
   * value starts out null. */

  @ViewColumn({ name: 'agginitval' })
  public readonly agginitval!: string | null /* text */;
  /**
   * The initial value of the transition state for moving-aggregate mode.
   * This is a text field containing the initial value in its external
   * string representation.  If this field is null, the transition state
   * value starts out null. */

  @ViewColumn({ name: 'aggminitval' })
  public readonly aggminitval!: string | null /* text */;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'aggtranstype',
    referencedColumnName: 'oid',
  })
  readonly aggtranstype_rel?: PgType;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'aggmtranstype',
    referencedColumnName: 'oid',
  })
  readonly aggmtranstype_rel?: PgType;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggmfinalfn',
    referencedColumnName: 'oid',
  })
  readonly aggmfinalfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggfnoid',
    referencedColumnName: 'oid',
  })
  readonly aggfn?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggcombinefn',
    referencedColumnName: 'oid',
  })
  readonly aggcombinefn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggdeserialfn',
    referencedColumnName: 'oid',
  })
  readonly aggdeserialfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggserialfn',
    referencedColumnName: 'oid',
  })
  readonly aggserialfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggmtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggmtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggminvtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggminvtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggfinalfn',
    referencedColumnName: 'oid',
  })
  readonly aggfinalfn_rel?: PgProc;
}
