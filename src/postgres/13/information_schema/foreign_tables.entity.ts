import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_tables',
  synchronize: false,
})
export class ForeignTables {
  @ViewColumn({ name: 'foreign_table_catalog' })
  public readonly foreign_table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_table_schema' })
  public readonly foreign_table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_table_name' })
  public readonly foreign_table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_catalog' })
  public readonly foreign_server_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_name' })
  public readonly foreign_server_name!: string | null /* sql_identifier */;
}
