import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'view_routine_usage',
  synchronize: false,
})
export class ViewRoutineUsage {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;
}
