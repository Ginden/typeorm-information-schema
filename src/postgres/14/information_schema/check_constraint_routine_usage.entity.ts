import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'check_constraint_routine_usage',
  synchronize: false,
})
export class CheckConstraintRoutineUsage {
  @ViewColumn({ name: 'constraint_catalog' })
  public readonly constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_schema' })
  public readonly constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_name' })
  public readonly constraint_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;
}
