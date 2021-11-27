import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_hba_file_rules provides a summary of
 *    the contents of the client authentication configuration file,
 *    pg_hba.conf.
 *    A row appears in this view for each
 *    non-empty, non-comment line in the file, with annotations indicating
 *    whether the rule could be applied successfully.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_hba_file_rules',
  synchronize: false,
})
export class PgHbaFileRules {
  /**
   * Line number of this rule in pg_hba.conf */

  @ViewColumn({ name: 'line_number' })
  public readonly line_number!: number | null /* int4 */;
  /**
   * Type of connection */

  @ViewColumn({ name: 'type' })
  public readonly type!: string | null /* text */;
  /**
   * List of database name(s) to which this rule applies */

  @ViewColumn({ name: 'database' })
  public readonly database!: string | null /* _text */;
  /**
   * List of user and group name(s) to which this rule applies */

  @ViewColumn({ name: 'user_name' })
  public readonly user_name!: string | null /* _text */;
  /**
   * Host name or IP address, or one
   * of all, samehost,
   * or samenet, or null for local connections */

  @ViewColumn({ name: 'address' })
  public readonly address!: string | null /* text */;
  /**
   * IP address mask, or null if not applicable */

  @ViewColumn({ name: 'netmask' })
  public readonly netmask!: string | null /* text */;
  /**
   * Authentication method */

  @ViewColumn({ name: 'auth_method' })
  public readonly auth_method!: string | null /* text */;
  /**
   * Options specified for authentication method, if any */

  @ViewColumn({ name: 'options' })
  public readonly options!: string | null /* _text */;
  /**
   * If not null, an error message indicating why this
   * line could not be processed */

  @ViewColumn({ name: 'error' })
  public readonly error!: string | null /* text */;
}
