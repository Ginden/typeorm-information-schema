import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'routine_routine_usage',
  synchronize: false,
})
export class RoutineRoutineUsage {
  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_catalog' })
  public readonly routine_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_schema' })
  public readonly routine_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_name' })
  public readonly routine_name!: string | null /* sql_identifier */;
}
