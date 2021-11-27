import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'role_column_grants',
  synchronize: false,
})
export class RoleColumnGrants {
  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'grantee' })
  public readonly grantee!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'column_name' })
  public readonly column_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'privilege_type' })
  public readonly privilege_type!: 'SELECT' | 'INSERT' | 'UPDATE' | 'REFERENCES';

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;
}
