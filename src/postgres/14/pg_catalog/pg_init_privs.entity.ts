import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_init_privs records information about
 *    the initial privileges of objects in the system.  There is one entry
 *    for each object in the database which has a non-default (non-NULL)
 *    initial set of privileges.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_init_privs',
  synchronize: false,
})
export class PgInitPrivs {
  /**
   * The OID of the specific object */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;
  /**
   * The OID of the system catalog the object is in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;
  /**
   * For a table column, this is the column number (the
   * objoid and classoid refer to the
   * table itself).  For all other object types, this column is
   * zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;
  /**
   * A code defining the type of initial privilege of this object; see text */

  @ViewColumn({ name: 'privtype' })
  public readonly privtype!: unknown /* char */;
  /**
   * The initial access privileges; see
   * > for details */

  @ViewColumn({ name: 'initprivs' })
  public readonly initprivs!: unknown /* _aclitem */;
}
