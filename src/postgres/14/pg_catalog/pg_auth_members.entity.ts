import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_auth_members shows the membership
 *    relations between roles.  Any non-circular set of relationships is allowed.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_auth_members',
  synchronize: false,
})
export class PgAuthMembers {
  /**
   * ID of a role that has a member */

  @ViewColumn({ name: 'roleid' })
  public readonly roleid!: number /* oid */;
  /**
   * ID of a role that is a member of roleid */

  @ViewColumn({ name: 'member' })
  public readonly member!: number /* oid */;
  /**
   * ID of the role that granted this membership */

  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: number /* oid */;
  /**
   * True if member can grant membership in
   * roleid to others */

  @ViewColumn({ name: 'admin_option' })
  public readonly admin_option!: boolean /* bool */;
}
