import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'enabled_roles',
  synchronize: false,
})
export class EnabledRoles {
  @ViewColumn({ name: 'role_name' })
  public readonly role_name!: string | null /* sql_identifier */;
}
