import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_authid contains information about
 *    database authorization identifiers (roles).  A role subsumes the concepts
 *    of users and groups.  A user is essentially just a
 *    role with the rolcanlogin flag set.  Any role (with or
 *    without rolcanlogin) can have other roles as members; see
 *    pg_auth_members.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_authid',
  synchronize: false,
})
export class PgAuthid {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Role name */

  @ViewColumn({ name: 'rolname' })
  public readonly rolname!: unknown /* name */;
  /**
   * Role has superuser privileges */

  @ViewColumn({ name: 'rolsuper' })
  public readonly rolsuper!: boolean /* bool */;
  /**
   * Role automatically inherits privileges of roles it is a
   * member of */

  @ViewColumn({ name: 'rolinherit' })
  public readonly rolinherit!: boolean /* bool */;
  /**
   * Role can create more roles */

  @ViewColumn({ name: 'rolcreaterole' })
  public readonly rolcreaterole!: boolean /* bool */;
  /**
   * Role can create databases */

  @ViewColumn({ name: 'rolcreatedb' })
  public readonly rolcreatedb!: boolean /* bool */;
  /**
   * Role can log in. That is, this role can be given as the initial
   * session authorization identifier. */

  @ViewColumn({ name: 'rolcanlogin' })
  public readonly rolcanlogin!: boolean /* bool */;
  /**
   * Role is a replication role. A replication role can initiate replication
   * connections and create and drop replication slots. */

  @ViewColumn({ name: 'rolreplication' })
  public readonly rolreplication!: boolean /* bool */;
  /**
   * Role bypasses every row-level security policy, see
   * > for more information. */

  @ViewColumn({ name: 'rolbypassrls' })
  public readonly rolbypassrls!: boolean /* bool */;
  /**
   * For roles that can log in, this sets maximum number of concurrent
   * connections this role can make.  -1 means no limit. */

  @ViewColumn({ name: 'rolconnlimit' })
  public readonly rolconnlimit!: number /* int4 */;
  /**
   * Password (possibly encrypted); null if none. The format depends
   * on the form of encryption used. */

  @ViewColumn({ name: 'rolpassword' })
  public readonly rolpassword!: string | null /* text */;
  /**
   * Password expiry time (only used for password authentication);
   * null if no expiration */

  @ViewColumn({ name: 'rolvaliduntil' })
  public readonly rolvaliduntil!: Date | null /* timestamptz */;
}
