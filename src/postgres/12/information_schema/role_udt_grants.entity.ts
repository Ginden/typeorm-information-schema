import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'role_udt_grants',
  synchronize: false,
})
export class RoleUdtGrants {
  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'grantee' })
  public readonly grantee!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_catalog' })
  public readonly udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_schema' })
  public readonly udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_name' })
  public readonly udt_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'privilege_type' })
  public readonly privilege_type!: string | null /* character_data */;

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;
}
