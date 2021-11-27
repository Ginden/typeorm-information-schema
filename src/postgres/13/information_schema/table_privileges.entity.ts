import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'table_privileges',
  synchronize: false,
})
export class TablePrivileges {
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

  @ViewColumn({ name: 'privilege_type' })
  public readonly privilege_type!: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'TRUNCATE' | 'REFERENCES' | 'TRIGGER';

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'with_hierarchy' })
  public readonly with_hierarchy!: ('YES' | 'NO') | null /* yes_or_no */;
}
