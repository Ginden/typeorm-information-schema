import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_roles provides access to
 *    information about database roles.  This is simply a publicly
 *    readable view of
 *    pg_authid
 *    that blanks out the password field.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_roles',
  synchronize: false,
})
export class PgRoles {
  /**
   * Role name */

  @ViewColumn({ name: 'rolname' })
  public readonly rolname!: unknown | null /* name */;
  /**
   * Role has superuser privileges */

  @ViewColumn({ name: 'rolsuper' })
  public readonly rolsuper!: boolean | null /* bool */;
  /**
   * Role automatically inherits privileges of roles it is a
   * member of */

  @ViewColumn({ name: 'rolinherit' })
  public readonly rolinherit!: boolean | null /* bool */;
  /**
   * Role can create more roles */

  @ViewColumn({ name: 'rolcreaterole' })
  public readonly rolcreaterole!: boolean | null /* bool */;
  /**
   * Role can create databases */

  @ViewColumn({ name: 'rolcreatedb' })
  public readonly rolcreatedb!: boolean | null /* bool */;
  /**
   * Role can log in. That is, this role can be given as the initial
   * session authorization identifier */

  @ViewColumn({ name: 'rolcanlogin' })
  public readonly rolcanlogin!: boolean | null /* bool */;
  /**
   * Role is a replication role. A replication role can initiate replication
   * connections and create and drop replication slots. */

  @ViewColumn({ name: 'rolreplication' })
  public readonly rolreplication!: boolean | null /* bool */;
  /**
   * For roles that can log in, this sets maximum number of concurrent
   * connections this role can make.  -1 means no limit. */

  @ViewColumn({ name: 'rolconnlimit' })
  public readonly rolconnlimit!: number | null /* int4 */;
  /**
   * Not the password (always reads as ********) */

  @ViewColumn({ name: 'rolpassword' })
  public readonly rolpassword!: string | null /* text */;
  /**
   * Password expiry time (only used for password authentication);
   * null if no expiration */

  @ViewColumn({ name: 'rolvaliduntil' })
  public readonly rolvaliduntil!: Date | null /* timestamptz */;
  /**
   * Role bypasses every row-level security policy, see
   * > for more information. */

  @ViewColumn({ name: 'rolbypassrls' })
  public readonly rolbypassrls!: boolean | null /* bool */;
  /**
   * Role-specific defaults for run-time configuration variables */

  @ViewColumn({ name: 'rolconfig' })
  public readonly rolconfig!: string | null /* _text */;
  /**
   * ID of role */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number | null /* oid */;
}
