import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'views',
  synchronize: false,
})
export class Views {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'view_definition' })
  public readonly view_definition!: string | null /* character_data */;

  @ViewColumn({ name: 'check_option' })
  public readonly check_option!: string | null /* character_data */;

  @ViewColumn({ name: 'is_updatable' })
  public readonly is_updatable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_insertable_into' })
  public readonly is_insertable_into!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_trigger_updatable' })
  public readonly is_trigger_updatable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_trigger_deletable' })
  public readonly is_trigger_deletable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_trigger_insertable_into' })
  public readonly is_trigger_insertable_into!: ('YES' | 'NO') | null /* yes_or_no */;
}
