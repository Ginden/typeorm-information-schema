import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_proc stores information about
 *    functions, procedures, aggregate functions, and window functions
 *    (collectively also known as routines).  See >, >, and
 *    > for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_proc',
  synchronize: false,
})
export class PgProc {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the function */

  @ViewColumn({ name: 'proname' })
  public readonly proname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this function */

  @ViewColumn({ name: 'pronamespace' })
  public readonly pronamespace!: number /* oid */;
  /**
   * Owner of the function */

  @ViewColumn({ name: 'proowner' })
  public readonly proowner!: number /* oid */;
  /**
   * Implementation language or call interface of this function */

  @ViewColumn({ name: 'prolang' })
  public readonly prolang!: number /* oid */;
  /**
   * Estimated execution cost (in units of
   * >); if proretset,
   * this is cost per row returned */

  @ViewColumn({ name: 'procost' })
  public readonly procost!: number /* float4 */;
  /**
   * Estimated number of result rows (zero if not proretset) */

  @ViewColumn({ name: 'prorows' })
  public readonly prorows!: number /* float4 */;
  /**
   * Data type of the variadic array parameter's elements,
   * or zero if the function does not have a variadic parameter */

  @ViewColumn({ name: 'provariadic' })
  public readonly provariadic!: number /* oid */;
  /**
   * Planner support function for this function
   * (see >), or zero if none */

  @ViewColumn({ name: 'prosupport' })
  public readonly prosupport!: unknown /* regproc */;
  /**
   * f for a normal function, p
   * for a procedure, a for an aggregate function, or
   * w for a window function */

  @ViewColumn({ name: 'prokind' })
  public readonly prokind!: unknown /* char */;
  /**
   * Function is a security definer (i.e., a setuid
   * function) */

  @ViewColumn({ name: 'prosecdef' })
  public readonly prosecdef!: boolean /* bool */;
  /**
   * The function has no side effects.  No information about the
   * arguments is conveyed except via the return value.  Any function
   * that might throw an error depending on the values of its arguments
   * is not leak-proof. */

  @ViewColumn({ name: 'proleakproof' })
  public readonly proleakproof!: boolean /* bool */;
  /**
   * Function returns null if any call argument is null.  In that
   * case the function won't actually be called at all.  Functions
   * that are not strict must be prepared to handle
   * null inputs. */

  @ViewColumn({ name: 'proisstrict' })
  public readonly proisstrict!: boolean /* bool */;
  /**
   * Estimated execution cost (in units of
   * >); if proretset,
   * this is cost per row returned */

  @ViewColumn({ name: 'proretset' })
  public readonly proretset!: boolean /* bool */;
  /**
   * provolatile tells whether the function's
   * result depends only on its input arguments, or is affected by outside
   * factors.
   * It is i for immutable functions,
   * which always deliver the same result for the same inputs.
   * It is s for stable functions,
   * whose results (for fixed inputs) do not change within a scan.
   * It is v for volatile functions,
   * whose results might change at any time.  (Use v also
   * for functions with side-effects, so that calls to them cannot get
   * optimized away.) */

  @ViewColumn({ name: 'provolatile' })
  public readonly provolatile!: unknown /* char */;
  /**
   * proparallel tells whether the function
   * can be safely run in parallel mode.
   * It is s for functions which are safe to run in
   * parallel mode without restriction.
   * It is r for functions which can be run in parallel
   * mode, but their execution is restricted to the parallel group leader;
   * parallel worker processes cannot invoke these functions.
   * It is u for functions which are unsafe in parallel
   * mode; the presence of such a function forces a serial execution plan. */

  @ViewColumn({ name: 'proparallel' })
  public readonly proparallel!: unknown /* char */;
  /**
   * Number of input arguments */

  @ViewColumn({ name: 'pronargs' })
  public readonly pronargs!: number /* int2 */;
  /**
   * Number of arguments that have defaults */

  @ViewColumn({ name: 'pronargdefaults' })
  public readonly pronargdefaults!: number /* int2 */;
  /**
   * Data type of the return value */

  @ViewColumn({ name: 'prorettype' })
  public readonly prorettype!: number /* oid */;
  /**
   * An array of the data types of the function arguments.  This includes
   * only input arguments (including INOUT and
   * VARIADIC arguments), and thus represents
   * the call signature of the function. */

  @ViewColumn({ name: 'proargtypes' })
  public readonly proargtypes!: unknown /* oidvector */;
  /**
   * An array of the data types of the function arguments.  This includes
   * all arguments (including OUT and
   * INOUT arguments); however, if all the
   * arguments are IN arguments, this field will be null.
   * Note that subscripting is 1-based, whereas for historical reasons
   * proargtypes is subscripted from 0. */

  @ViewColumn({ name: 'proallargtypes' })
  public readonly proallargtypes!: unknown | null /* _oid */;
  /**
   * An array of the modes of the function arguments, encoded as
   * i for IN arguments,
   * o for OUT arguments,
   * b for INOUT arguments,
   * v for VARIADIC arguments,
   * t for TABLE arguments.
   * If all the arguments are IN arguments,
   * this field will be null.
   * Note that subscripts correspond to positions of
   * proallargtypes not proargtypes. */

  @ViewColumn({ name: 'proargmodes' })
  public readonly proargmodes!: unknown | null /* _char */;
  /**
   * An array of the names of the function arguments.
   * Arguments without a name are set to empty strings in the array.
   * If none of the arguments have a name, this field will be null.
   * Note that subscripts correspond to positions of
   * proallargtypes not proargtypes. */

  @ViewColumn({ name: 'proargnames' })
  public readonly proargnames!: string | null /* _text */;
  /**
   * Expression trees (in nodeToString() representation)
   * for default values.  This is a list with
   * pronargdefaults elements, corresponding to the last
   * N input arguments (i.e., the last
   * N proargtypes positions).
   * If none of the arguments have defaults, this field will be null. */

  @ViewColumn({ name: 'proargdefaults' })
  public readonly proargdefaults!: unknown | null /* pg_node_tree */;
  /**
   * An array of the argument/result data type(s) for which to apply
   * transforms (from the function's TRANSFORM
   * clause).  Null if none. */

  @ViewColumn({ name: 'protrftypes' })
  public readonly protrftypes!: unknown | null /* _oid */;
  /**
   * This tells the function handler how to invoke the function.  It
   * might be the actual source code of the function for interpreted
   * languages, a link symbol, a file name, or just about anything
   * else, depending on the implementation language/call convention. */

  @ViewColumn({ name: 'prosrc' })
  public readonly prosrc!: string /* text */;
  /**
   * Additional information about how to invoke the function.
   * Again, the interpretation is language-specific. */

  @ViewColumn({ name: 'probin' })
  public readonly probin!: string | null /* text */;
  /**
   * Pre-parsed SQL function body.  This is used for SQL-language
   * functions when the body is given in SQL-standard notation
   * rather than as a string literal.  It's null in other cases. */

  @ViewColumn({ name: 'prosqlbody' })
  public readonly prosqlbody!: unknown | null /* pg_node_tree */;
  /**
   * Function's local settings for run-time configuration variables */

  @ViewColumn({ name: 'proconfig' })
  public readonly proconfig!: string | null /* _text */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'proacl' })
  public readonly proacl!: unknown | null /* _aclitem */;
}
