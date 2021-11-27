import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_auth_members',
  synchronize: false,
})
export class PgAuthMembers {
  @ViewColumn({ name: 'roleid' })
  public readonly roleid!: number /* oid */;

  @ViewColumn({ name: 'member' })
  public readonly member!: number /* oid */;

  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: number /* oid */;

  @ViewColumn({ name: 'admin_option' })
  public readonly admin_option!: boolean /* bool */;
}
