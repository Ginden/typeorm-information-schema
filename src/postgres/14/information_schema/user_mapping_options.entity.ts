import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'user_mapping_options',
  synchronize: false,
})
export class UserMappingOptions {
  @ViewColumn({ name: 'authorization_identifier' })
  public readonly authorization_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_catalog' })
  public readonly foreign_server_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_name' })
  public readonly foreign_server_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_name' })
  public readonly option_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_value' })
  public readonly option_value!: string | null /* character_data */;
}
