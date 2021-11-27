import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'administrable_role_authorizations',
  synchronize: false,
})
export class AdministrableRoleAuthorizations {
  @ViewColumn({ name: 'grantee' })
  public readonly grantee!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'role_name' })
  public readonly role_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: 'YES';
}
