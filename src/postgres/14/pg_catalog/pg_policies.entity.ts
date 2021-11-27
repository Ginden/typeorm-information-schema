import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_policies provides access to
 *    useful information about each row-level security policy in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_policies',
  synchronize: false,
})
export class PgPolicies {
  /**
   * Name of schema containing table policy is on */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of table policy is on */

  @ViewColumn({ name: 'tablename' })
  public readonly tablename!: unknown | null /* name */;
  /**
   * Name of policy */

  @ViewColumn({ name: 'policyname' })
  public readonly policyname!: unknown | null /* name */;
  /**
   * Is the policy permissive or restrictive? */

  @ViewColumn({ name: 'permissive' })
  public readonly permissive!: string | null /* text */;
  /**
   * The roles to which this policy applies */

  @ViewColumn({ name: 'roles' })
  public readonly roles!: unknown | null /* _name */;
  /**
   * The command type to which the policy is applied */

  @ViewColumn({ name: 'cmd' })
  public readonly cmd!: string | null /* text */;
  /**
   * The expression added to the security barrier qualifications for
   * queries that this policy applies to */

  @ViewColumn({ name: 'qual' })
  public readonly qual!: string | null /* text */;
  /**
   * The expression added to the WITH CHECK qualifications for
   * queries that attempt to add rows to this table */

  @ViewColumn({ name: 'with_check' })
  public readonly with_check!: string | null /* text */;
}
