import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_rules provides access to
 *    useful information about query rewrite rules.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_rules',
  synchronize: false,
})
export class PgRules {
  /**
   * Name of schema containing table */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table the rule is for */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of rule */

  @ViewColumn({ name: 'rulename' })
  public readonly rulename!: unknown | null /* name */;
  /**
   * Rule definition (a reconstructed creation command) */

  @ViewColumn({ name: 'definition' })
  public readonly definition!: string | null /* text */;
}
