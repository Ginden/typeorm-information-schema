import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_cursors view lists the cursors that
 *    are currently available. Cursors can be defined in several ways:
 *          via the DECLARE
 *       statement in SQL
 *            via the Bind message in the frontend/backend protocol, as
 *       described in >
 *            via the Server Programming Interface (SPI), as described in
 *       >
 *
 *
 *    The pg_cursors view displays cursors
 *    created by any of these means. Cursors only exist for the duration
 *    of the transaction that defines them, unless they have been
 *    declared WITH HOLD. Therefore non-holdable
 *    cursors are only present in the view until the end of their
 *    creating transaction.
 *
 *         Cursors are used internally to implement some of the components
 *      of PostgreSQL, such as procedural languages.
 *      Therefore, the pg_cursors view might include cursors
 *      that have not been explicitly created by the user.
 *
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_cursors',
  synchronize: false,
})
export class PgCursors {
  /**
   * The name of the cursor */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * The verbatim query string submitted to declare this cursor */

  @ViewColumn({ name: 'statement' })
  public readonly statement!: string | null /* text */;
  /**
   * true if the cursor is holdable (that is, it
   * can be accessed after the transaction that declared the cursor
   * has committed); false otherwise */

  @ViewColumn({ name: 'is_holdable' })
  public readonly is_holdable!: boolean | null /* bool */;
  /**
   * true if the cursor was declared
   * BINARY; false
   * otherwise */

  @ViewColumn({ name: 'is_binary' })
  public readonly is_binary!: boolean | null /* bool */;
  /**
   * true if the cursor is scrollable (that is, it
   * allows rows to be retrieved in a nonsequential manner);
   * false otherwise */

  @ViewColumn({ name: 'is_scrollable' })
  public readonly is_scrollable!: boolean | null /* bool */;
  /**
   * The time at which the cursor was declared */

  @ViewColumn({ name: 'creation_time' })
  public readonly creation_time!: Date | null /* timestamptz */;
}
