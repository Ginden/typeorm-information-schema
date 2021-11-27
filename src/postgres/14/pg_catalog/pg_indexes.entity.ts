import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_indexes provides access to
 *    useful information about each index in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_indexes',
  synchronize: false,
})
export class PgIndexes {
  /**
   * Name of schema containing table and index */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table the index is for */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of index */

  @ViewColumn({ name: 'indexname' })
  public readonly indexname!: unknown | null /* name */;
  /**
   * Name of tablespace containing index (null if default for database) */

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;
  /**
   * Index definition (a reconstructed >
   * command) */

  @ViewColumn({ name: 'indexdef' })
  public readonly indexdef!: string | null /* text */;
}
