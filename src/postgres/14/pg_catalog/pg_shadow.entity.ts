import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_shadow exists for backwards
 *    compatibility: it emulates a catalog that existed in
 *    PostgreSQL before version 8.1.
 *    It shows properties of all roles that are marked as
 *    rolcanlogin in
 *    pg_authid.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shadow',
  synchronize: false,
})
export class PgShadow {
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
   * Password (possibly encrypted); null if none.  See
   * pg_authid
   * for details of how encrypted passwords are stored. */

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
