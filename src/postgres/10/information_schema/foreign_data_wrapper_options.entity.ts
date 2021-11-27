import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_data_wrapper_options',
  synchronize: false,
})
export class ForeignDataWrapperOptions {
  @ViewColumn({ name: 'foreign_data_wrapper_catalog' })
  public readonly foreign_data_wrapper_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_name' })
  public readonly foreign_data_wrapper_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_name' })
  public readonly option_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_value' })
  public readonly option_value!: string | null /* character_data */;
}
