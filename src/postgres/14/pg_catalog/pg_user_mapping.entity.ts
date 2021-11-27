import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_user_mapping stores
 *    the mappings from local user to remote.  Access to this catalog is
 *    restricted from normal users, use the view
 *    pg_user_mappings
 *    instead.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user_mapping',
  synchronize: false,
})
export class PgUserMapping {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * OID of the local role being mapped, or zero if the user mapping is public */

  @ViewColumn({ name: 'umuser' })
  public readonly umuser!: number /* oid */;
  /**
   * The OID of the foreign server that contains this mapping */

  @ViewColumn({ name: 'umserver' })
  public readonly umserver!: number /* oid */;
  /**
   * User mapping specific options, as keyword=value strings */

  @ViewColumn({ name: 'umoptions' })
  public readonly umoptions!: string | null /* _text */;
}
