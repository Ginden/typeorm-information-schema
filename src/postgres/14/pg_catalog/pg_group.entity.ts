import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_group exists for backwards
 *    compatibility: it emulates a catalog that existed in
 *    PostgreSQL before version 8.1.
 *    It shows the names and members of all roles that are marked as not
 *    rolcanlogin, which is an approximation to the set
 *    of roles that are being used as groups.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_group',
  synchronize: false,
})
export class PgGroup {
  /**
   * Name of the group */

  @ViewColumn({ name: 'groname' })
  public readonly groname!: unknown | null /* name */;
  /**
   * ID of this group */

  @ViewColumn({ name: 'grosysid' })
  public readonly grosysid!: number | null /* oid */;
  /**
   * An array containing the IDs of the roles in this group */

  @ViewColumn({ name: 'grolist' })
  public readonly grolist!: number | null /* _oid */;
}
