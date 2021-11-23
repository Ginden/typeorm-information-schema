import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'tables',
  synchronize: false,
})
export class Tables {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_type' })
  public readonly table_type!: string | null /* character_data */;

  @ViewColumn({ name: 'self_referencing_column_name' })
  public readonly self_referencing_column_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'reference_generation' })
  public readonly reference_generation!: string | null /* character_data */;

  @ViewColumn({ name: 'user_defined_type_catalog' })
  public readonly user_defined_type_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'user_defined_type_schema' })
  public readonly user_defined_type_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'user_defined_type_name' })
  public readonly user_defined_type_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'is_insertable_into' })
  public readonly is_insertable_into!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_typed' })
  public readonly is_typed!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'commit_action' })
  public readonly commit_action!: string | null /* character_data */;
}
