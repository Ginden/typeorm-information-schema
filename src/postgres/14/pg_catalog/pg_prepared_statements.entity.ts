import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_prepared_statements view displays
 *    all the prepared statements that are available in the current
 *    session. See > for more information about prepared
 *    statements.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_prepared_statements',
  synchronize: false,
})
export class PgPreparedStatements {
  /**
   * The identifier of the prepared statement */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * The query string submitted by the client to create this
   * prepared statement. For prepared statements created via SQL,
   * this is the PREPARE statement submitted by
   * the client. For prepared statements created via the
   * frontend/backend protocol, this is the text of the prepared
   * statement itself. */

  @ViewColumn({ name: 'statement' })
  public readonly statement!: string | null /* text */;
  /**
   * The time at which the prepared statement was created */

  @ViewColumn({ name: 'prepare_time' })
  public readonly prepare_time!: Date | null /* timestamptz */;
  /**
   * The expected parameter types for the prepared statement in the
   * form of an array of regtype. The OID corresponding
   * to an element of this array can be obtained by casting the
   * regtype value to oid. */

  @ViewColumn({ name: 'parameter_types' })
  public readonly parameter_types!: unknown | null /* _regtype */;
  /**
   * true if the prepared statement was created
   * via the PREPARE SQL command;
   * false if the statement was prepared via the
   * frontend/backend protocol */

  @ViewColumn({ name: 'from_sql' })
  public readonly from_sql!: boolean | null /* bool */;
  /**
   * Number of times generic plan was chosen */

  @ViewColumn({ name: 'generic_plans' })
  public readonly generic_plans!: string | null /* int8 */;
  /**
   * Number of times custom plan was chosen */

  @ViewColumn({ name: 'custom_plans' })
  public readonly custom_plans!: string | null /* int8 */;
}
