import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_table_options',
  synchronize: false,
})
export class ForeignTableOptions {
  @ViewColumn({ name: 'foreign_table_catalog' })
  public readonly foreign_table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_table_schema' })
  public readonly foreign_table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_table_name' })
  public readonly foreign_table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_name' })
  public readonly option_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_value' })
  public readonly option_value!: string | null /* character_data */;
}
