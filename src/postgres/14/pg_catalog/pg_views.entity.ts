import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_views provides access to
 *    useful information about each view in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_views',
  synchronize: false,
})
export class PgViews {
  /**
   * Name of schema containing view */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of view */

  @ViewColumn({ name: 'viewname' })
  public readonly viewname!: unknown | null /* name */;
  /**
   * Name of view's owner */

  @ViewColumn({ name: 'viewowner' })
  public readonly viewowner!: unknown | null /* name */;
  /**
   * View definition (a reconstructed > query) */

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
