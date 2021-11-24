import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'udt_privileges',
  synchronize: false,
})
export class UdtPrivileges {
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
  public readonly privilege_type!: 'TYPE USAGE';

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;
}
