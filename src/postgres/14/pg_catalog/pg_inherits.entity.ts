import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_inherits records information about
 *    table and index inheritance hierarchies.  There is one entry for each direct
 *    parent-child table or index relationship in the database.  (Indirect
 *    inheritance can be determined by following chains of entries.)
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_inherits',
  synchronize: false,
})
export class PgInherits {
  /**
   * The OID of the child table or index */

  @ViewColumn({ name: 'inhrelid' })
  public readonly inhrelid!: number /* oid */;
  /**
   * The OID of the parent table or index */

  @ViewColumn({ name: 'inhparent' })
  public readonly inhparent!: number /* oid */;
  /**
   * If there is more than one direct parent for a child table (multiple
   * inheritance), this number tells the order in which the
   * inherited columns are to be arranged.  The count starts at 1. */

  @ViewColumn({ name: 'inhseqno' })
  public readonly inhseqno!: number /* int4 */;
  /**
   * true for a partition that is in the process of
   * being detached; false otherwise. */

  @ViewColumn({ name: 'inhdetachpending' })
  public readonly inhdetachpending!: boolean /* bool */;
}
