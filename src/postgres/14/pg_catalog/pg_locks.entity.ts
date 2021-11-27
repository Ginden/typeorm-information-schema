import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgDatabase } from './pg_database.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_locks provides access to
 *    information about the locks held by active processes within the
 *    database server.  See > for more discussion
 *    of locking.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_locks',
  synchronize: false,
})
export class PgLocks {
  /**
   * Type of the lockable object:
   * relation,
   * extend,
   * frozenid,
   * page,
   * tuple,
   * transactionid,
   * virtualxid,
   * spectoken,
   * object,
   * userlock, or
   * advisory.
   * (See also >.) */

  @ViewColumn({ name: 'locktype' })
  public readonly locktype!: string | null /* text */;
  /**
   * OID of the database in which the lock target exists, or
   * zero if the target is a shared object, or
   * null if the target is a transaction ID */

  @ViewColumn({ name: 'database' })
  public readonly database!: number | null /* oid */;
  /**
   * OID of the relation targeted by the lock, or null if the target is not
   * a relation or part of a relation */

  @ViewColumn({ name: 'relation' })
  public readonly relation!: number | null /* oid */;
  /**
   * Page number targeted by the lock within the relation,
   * or null if the target is not a relation page or tuple */

  @ViewColumn({ name: 'page' })
  public readonly page!: number | null /* int4 */;
  /**
   * Tuple number targeted by the lock within the page,
   * or null if the target is not a tuple */

  @ViewColumn({ name: 'tuple' })
  public readonly tuple!: number | null /* int2 */;
  /**
   * Virtual ID of the transaction targeted by the lock,
   * or null if the target is not a virtual transaction ID */

  @ViewColumn({ name: 'virtualxid' })
  public readonly virtualxid!: string | null /* text */;
  /**
   * ID of the transaction targeted by the lock,
   * or null if the target is not a transaction ID */

  @ViewColumn({ name: 'transactionid' })
  public readonly transactionid!: unknown | null /* xid */;
  /**
   * OID of the system catalog containing the lock target, or null if the
   * target is not a general database object */

  @ViewColumn({ name: 'classid' })
  public readonly classid!: number | null /* oid */;
  /**
   * OID of the lock target within its system catalog, or null if the
   * target is not a general database object */

  @ViewColumn({ name: 'objid' })
  public readonly objid!: number | null /* oid */;
  /**
   * Column number targeted by the lock (the
   * classid and objid refer to the
   * table itself),
   * or zero if the target is some other general database object,
   * or null if the target is not a general database object */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number | null /* int2 */;
  /**
   * Virtual ID of the transaction that is holding or awaiting this lock */

  @ViewColumn({ name: 'virtualtransaction' })
  public readonly virtualtransaction!: string | null /* text */;
  /**
   * Process ID of the server process holding or awaiting this
   * lock, or null if the lock is held by a prepared transaction */

  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;
  /**
   * Name of the lock mode held or desired by this process (see > and >) */

  @ViewColumn({ name: 'mode' })
  public readonly mode!: string | null /* text */;
  /**
   * True if lock is held, false if lock is awaited */

  @ViewColumn({ name: 'granted' })
  public readonly granted!: boolean | null /* bool */;
  /**
   * True if lock was taken via fast path, false if taken via main
   * lock table */

  @ViewColumn({ name: 'fastpath' })
  public readonly fastpath!: boolean | null /* bool */;
  /**
   * Time when the server process started waiting for this lock,
   * or null if the lock is held.
   * Note that this can be null for a very short period of time after
   * the wait started even though granted
   * is false. */

  @ViewColumn({ name: 'waitstart' })
  public readonly waitstart!: Date | null /* timestamptz */;

  @ManyToOne(() => PgDatabase)
  @JoinColumn({
    name: 'database',
    referencedColumnName: 'oid',
  })
  readonly databaseEntity?: PgDatabase;
}
