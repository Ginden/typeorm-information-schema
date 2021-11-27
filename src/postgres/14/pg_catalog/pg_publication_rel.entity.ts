import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_publication_rel contains the
 *    mapping between relations and publications in the database.  This is a
 *    many-to-many mapping.  See also >
 *    for a more user-friendly view of this information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication_rel',
  synchronize: false,
})
export class PgPublicationRel {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Reference to publication */

  @ViewColumn({ name: 'prpubid' })
  public readonly prpubid!: number /* oid */;
  /**
   * Reference to relation */

  @ViewColumn({ name: 'prrelid' })
  public readonly prrelid!: number /* oid */;
}
