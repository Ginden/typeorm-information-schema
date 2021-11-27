import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'enabled_roles',
  synchronize: false,
})
export class EnabledRoles {
  @ViewColumn({ name: 'role_name' })
  public readonly role_name!: string | null /* sql_identifier */;
}
