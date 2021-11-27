import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_tables provides access to
 *    useful information about each table in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_tables',
  synchronize: false,
})
export class PgTables {
  /**
   * Name of schema containing table */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of table's owner */

  @ViewColumn({ name: 'tableowner' })
  public readonly tableowner!: unknown | null /* name */;
  /**
   * Name of tablespace containing table (null if default for database) */

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;
  /**
   * True if table has (or recently had) any indexes */

  @ViewColumn({ name: 'hasindexes' })
  public readonly hasindexes!: boolean | null /* bool */;
  /**
   * True if table has (or once had) rules */

  @ViewColumn({ name: 'hasrules' })
  public readonly hasrules!: boolean | null /* bool */;
  /**
   * True if table has (or once had) triggers */

  @ViewColumn({ name: 'hastriggers' })
  public readonly hastriggers!: boolean | null /* bool */;
  /**
   * True if row security is enabled on the table */

  @ViewColumn({ name: 'rowsecurity' })
  public readonly rowsecurity!: boolean | null /* bool */;
}
