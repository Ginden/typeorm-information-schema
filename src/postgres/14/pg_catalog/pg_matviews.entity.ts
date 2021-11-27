import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_matviews provides access to
 *    useful information about each materialized view in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_matviews',
  synchronize: false,
})
export class PgMatviews {
  /**
   * Name of schema containing materialized view */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of materialized view */

  @ViewColumn({ name: 'matviewname' })
  public readonly matviewname!: unknown | null /* name */;
  /**
   * Name of materialized view's owner */

  @ViewColumn({ name: 'matviewowner' })
  public readonly matviewowner!: unknown | null /* name */;
  /**
   * Name of tablespace containing materialized view (null if default for database) */

  @ViewColumn({ name: 'tablespace' })
  public readonly tablespace!: unknown | null /* name */;
  /**
   * True if materialized view has (or recently had) any indexes */

  @ViewColumn({ name: 'hasindexes' })
  public readonly hasindexes!: boolean | null /* bool */;
  /**
   * True if materialized view is currently populated */

  @ViewColumn({ name: 'ispopulated' })
  public readonly ispopulated!: boolean | null /* bool */;
  /**
   * Materialized view definition (a reconstructed > query) */

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
