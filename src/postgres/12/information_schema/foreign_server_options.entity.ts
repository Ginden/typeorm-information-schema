import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_server_options',
  synchronize: false,
})
export class ForeignServerOptions {
  @ViewColumn({ name: 'foreign_server_catalog' })
  public readonly foreign_server_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_name' })
  public readonly foreign_server_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_name' })
  public readonly option_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'option_value' })
  public readonly option_value!: string | null /* character_data */;
}
