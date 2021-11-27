import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_user_mappings provides access
 *    to information about user mappings.  This is essentially a publicly
 *    readable view of
 *    pg_user_mapping
 *    that leaves out the options field if the user has no rights to use
 *    it.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user_mappings',
  synchronize: false,
})
export class PgUserMappings {
  /**
   * OID of the user mapping */

  @ViewColumn({ name: 'umid' })
  public readonly umid!: number | null /* oid */;
  /**
   * The OID of the foreign server that contains this mapping */

  @ViewColumn({ name: 'srvid' })
  public readonly srvid!: number | null /* oid */;
  /**
   * Name of the foreign server */

  @ViewColumn({ name: 'srvname' })
  public readonly srvname!: unknown | null /* name */;
  /**
   * OID of the local role being mapped, or zero if the user mapping is public */

  @ViewColumn({ name: 'umuser' })
  public readonly umuser!: number | null /* oid */;
  /**
   * Name of the local user to be mapped */

  @ViewColumn({ name: 'usename' })
  public readonly usename!: unknown | null /* name */;
  /**
   * User mapping specific options, as keyword=value strings */

  @ViewColumn({ name: 'umoptions' })
  public readonly umoptions!: string | null /* _text */;
}
