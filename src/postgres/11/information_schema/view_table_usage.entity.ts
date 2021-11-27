import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'view_table_usage',
  synchronize: false,
})
export class ViewTableUsage {
  @ViewColumn({ name: 'view_catalog' })
  public readonly view_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'view_schema' })
  public readonly view_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'view_name' })
  public readonly view_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;
}
