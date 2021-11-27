import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_publication_tables provides
 *    information about the mapping between publications and the tables they
 *    contain.  Unlike the underlying catalog
 *    pg_publication_rel,
 *    this view expands
 *    publications defined as FOR ALL TABLES, so for such
 *    publications there will be a row for each eligible table.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication_tables',
  synchronize: false,
})
export class PgPublicationTables {
  /**
   * Name of publication */

  @ViewColumn({ name: 'pubname' })
  public readonly pubname!: unknown | null /* name */;
  /**
   * Name of schema containing table */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
}
