import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'data_type_privileges',
  synchronize: false,
})
export class DataTypePrivileges {
  @ViewColumn({ name: 'object_catalog' })
  public readonly object_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_schema' })
  public readonly object_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_name' })
  public readonly object_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_type' })
  public readonly object_type!: 'TABLE' | 'DOMAIN' | 'ROUTINE';

  @ViewColumn({ name: 'dtd_identifier' })
  public readonly dtd_identifier!: string | null /* sql_identifier */;
}
