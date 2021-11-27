import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_foreign_table contains
 *    auxiliary information about foreign tables.  A foreign table is
 *    primarily represented by a
 *    pg_class
 *    entry, just like a regular table.  Its pg_foreign_table
 *    entry contains the information that is pertinent only to foreign tables
 *    and not any other kind of relation.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_table',
  synchronize: false,
})
export class PgForeignTable {
  /**
   * The OID of the pg_class entry for this foreign table */

  @ViewColumn({ name: 'ftrelid' })
  public readonly ftrelid!: number /* oid */;
  /**
   * OID of the foreign server for this foreign table */

  @ViewColumn({ name: 'ftserver' })
  public readonly ftserver!: number /* oid */;
  /**
   * Foreign table options, as keyword=value strings */

  @ViewColumn({ name: 'ftoptions' })
  public readonly ftoptions!: string | null /* _text */;
}
