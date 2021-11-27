import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'constraint_column_usage',
  synchronize: false,
})
export class ConstraintColumnUsage {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'column_name' })
  public readonly column_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_catalog' })
  public readonly constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_schema' })
  public readonly constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_name' })
  public readonly constraint_name!: string | null /* sql_identifier */;
}
