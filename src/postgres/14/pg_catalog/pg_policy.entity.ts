import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_policy stores row-level
 *    security policies for tables.  A policy includes the kind of
 *    command that it applies to (possibly all commands), the roles that it
 *    applies to, the expression to be added as a security-barrier
 *    qualification to queries that include the table, and the expression
 *    to be added as a WITH CHECK option for queries that attempt to
 *    add new records to the table.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_policy',
  synchronize: false,
})
export class PgPolicy {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The name of the policy */

  @ViewColumn({ name: 'polname' })
  public readonly polname!: unknown /* name */;
  /**
   * The table to which the policy applies */

  @ViewColumn({ name: 'polrelid' })
  public readonly polrelid!: number /* oid */;
  /**
   * The command type to which the policy is applied:
   * r for >,
   * a for >,
   * w for >,
   * d for >,
   * or * for all */

  @ViewColumn({ name: 'polcmd' })
  public readonly polcmd!: 'r' | 'a' | 'w' | 'd' | '*';
  /**
   * Is the policy permissive or restrictive? */

  @ViewColumn({ name: 'polpermissive' })
  public readonly polpermissive!: boolean /* bool */;
  /**
   * The roles to which the policy is applied;
   * zero means PUBLIC
   * (and normally appears alone in the array) */

  @ViewColumn({ name: 'polroles' })
  public readonly polroles!: number /* _oid */;
  /**
   * The expression tree to be added to the security barrier qualifications for queries that use the table */

  @ViewColumn({ name: 'polqual' })
  public readonly polqual!: unknown | null /* pg_node_tree */;
  /**
   * The expression tree to be added to the WITH CHECK qualifications for queries that attempt to add rows to the table */

  @ViewColumn({ name: 'polwithcheck' })
  public readonly polwithcheck!: unknown | null /* pg_node_tree */;
}
