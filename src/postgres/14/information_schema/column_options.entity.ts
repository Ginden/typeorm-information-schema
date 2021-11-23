import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'column_options',
  synchronize: false,
})
export class ColumnOptions {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'column_name' })
  public readonly column_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_name' })
  public readonly option_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_value' })
  public readonly option_value!: string | null /* character_data */;
}
