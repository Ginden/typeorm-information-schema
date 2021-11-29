import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_am stores information about
 *    relation access methods.  There is one row for each access method supported
 *    by the system.
 *    Currently, only tables and indexes have access methods. The requirements for table
 *    and index access methods are discussed in detail in > and
 *    > respectively.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_am',
  synchronize: false,
})
export class PgAm {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the access method */

  @ViewColumn({ name: 'amname' })
  public readonly amname!: unknown /* name */;
  /**
   * OID of a handler function that is responsible for supplying information
   * about the access method */

  @ViewColumn({ name: 'amhandler' })
  public readonly amhandler!: unknown /* regproc */;
  /**
   * t = table (including materialized views),
   * i = index. */

  @ViewColumn({ name: 'amtype' })
  public readonly amtype!: unknown /* char */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'amhandler',
    referencedColumnName: 'oid',
  })
  readonly amhandler_rel?: PgProc;
}
