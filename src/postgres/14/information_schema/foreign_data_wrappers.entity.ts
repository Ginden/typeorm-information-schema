import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'foreign_data_wrappers',
  synchronize: false,
})
export class ForeignDataWrappers {
  @ViewColumn({ name: 'foreign_data_wrapper_catalog' })
  public readonly foreign_data_wrapper_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_name' })
  public readonly foreign_data_wrapper_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'authorization_identifier' })
  public readonly authorization_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'library_name' })
  public readonly library_name!: string | null /* character_data */;

  @ViewColumn({ name: 'foreign_data_wrapper_language' })
  public readonly foreign_data_wrapper_language!: string | null /* character_data */;
}
