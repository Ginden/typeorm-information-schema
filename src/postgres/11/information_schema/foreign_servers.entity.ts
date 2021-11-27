import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_servers',
  synchronize: false,
})
export class ForeignServers {
  @ViewColumn({ name: 'foreign_server_catalog' })
  public readonly foreign_server_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_name' })
  public readonly foreign_server_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_catalog' })
  public readonly foreign_data_wrapper_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_name' })
  public readonly foreign_data_wrapper_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_type' })
  public readonly foreign_server_type!: string | null /* character_data */;

  @ViewColumn({ name: 'foreign_server_version' })
  public readonly foreign_server_version!: string | null /* character_data */;

  @ViewColumn({ name: 'authorization_identifier' })
  public readonly authorization_identifier!: string | null /* sql_identifier */;
}
