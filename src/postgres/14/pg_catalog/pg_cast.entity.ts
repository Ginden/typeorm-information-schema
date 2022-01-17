import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_cast stores data type conversion
 *    paths, both built-in and user-defined.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_cast',
  synchronize: false,
})
export class PgCast {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * OID of the source data type */

  @ViewColumn({ name: 'castsource' })
  public readonly castsource!: number /* oid */;
  /**
   * OID of the target data type */

  @ViewColumn({ name: 'casttarget' })
  public readonly casttarget!: number /* oid */;
  /**
   * The OID of the function to use to perform this cast.  Zero is
   * stored if the cast method doesn't require a function. */

  @ViewColumn({ name: 'castfunc' })
  public readonly castfunc!: number /* oid */;
  /**
   * Indicates what contexts the cast can be invoked in.
   * e means only as an explicit cast (using
   * CAST or :: syntax).
   * a means implicitly in assignment
   * to a target column, as well as explicitly.
   * i means implicitly in expressions, as well as the
   * other cases. */

  @ViewColumn({ name: 'castcontext' })
  public readonly castcontext!: 'a' | 'i';
  /**
   * Indicates how the cast is performed.
   * f means that the function specified in the castfunc field is used.
   * i means that the input/output functions are used.
   * b means that the types are binary-coercible, thus no conversion is required. */

  @ViewColumn({ name: 'castmethod' })
  public readonly castmethod!: 'f' | 'i' | 'b';
}
