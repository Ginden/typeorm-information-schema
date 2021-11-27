import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_user provides access to
 *    information about database users.  This is simply a publicly
 *    readable view of
 *    pg_shadow
 *    that blanks out the password field.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user',
  synchronize: false,
})
export class PgUser {
  /**
   * User name */

  @ViewColumn({ name: 'usename' })
  public readonly usename!: unknown | null /* name */;
  /**
   * ID of this user */

  @ViewColumn({ name: 'usesysid' })
  public readonly usesysid!: number | null /* oid */;
  /**
   * User can create databases */

  @ViewColumn({ name: 'usecreatedb' })
  public readonly usecreatedb!: boolean | null /* bool */;
  /**
   * User is a superuser */

  @ViewColumn({ name: 'usesuper' })
  public readonly usesuper!: boolean | null /* bool */;
  /**
   * User can initiate streaming replication and put the system in and
   * out of backup mode. */

  @ViewColumn({ name: 'userepl' })
  public readonly userepl!: boolean | null /* bool */;
  /**
   * User bypasses every row-level security policy, see
   * > for more information. */

  @ViewColumn({ name: 'usebypassrls' })
  public readonly usebypassrls!: boolean | null /* bool */;
  /**
   * Not the password (always reads as ********) */

  @ViewColumn({ name: 'passwd' })
  public readonly passwd!: string | null /* text */;
  /**
   * Password expiry time (only used for password authentication) */

  @ViewColumn({ name: 'valuntil' })
  public readonly valuntil!: Date | null /* timestamptz */;
  /**
   * Session defaults for run-time configuration variables */

  @ViewColumn({ name: 'useconfig' })
  public readonly useconfig!: string | null /* _text */;
}
