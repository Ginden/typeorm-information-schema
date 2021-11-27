import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_prepared_xacts displays
 *    information about transactions that are currently prepared for two-phase
 *    commit (see > for details).
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_prepared_xacts',
  synchronize: false,
})
export class PgPreparedXacts {
  /**
   * Numeric transaction identifier of the prepared transaction */

  @ViewColumn({ name: 'transaction' })
  public readonly transaction!: unknown | null /* xid */;
  /**
   * Global transaction identifier that was assigned to the transaction */

  @ViewColumn({ name: 'gid' })
  public readonly gid!: string | null /* text */;
  /**
   * Time at which the transaction was prepared for commit */

  @ViewColumn({ name: 'prepared' })
  public readonly prepared!: Date | null /* timestamptz */;
  /**
   * Name of the user that executed the transaction */

  @ViewColumn({ name: 'owner' })
  public readonly owner!: unknown | null /* name */;
  /**
   * Name of the database in which the transaction was executed */

  @ViewColumn({ name: 'database' })
  public readonly database!: unknown | null /* name */;
}
