import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'role_usage_grants',
  synchronize: false,
})
export class RoleUsageGrants {
  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'grantee' })
  public readonly grantee!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_catalog' })
  public readonly object_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_schema' })
  public readonly object_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_name' })
  public readonly object_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_type' })
  public readonly object_type!: string | null /* character_data */;

  @ViewColumn({ name: 'privilege_type' })
  public readonly privilege_type!: string | null /* character_data */;

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;
}
