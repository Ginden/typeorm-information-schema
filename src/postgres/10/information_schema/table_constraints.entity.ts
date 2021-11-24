import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'table_constraints',
  synchronize: false,
})
export class TableConstraints {
  @ViewColumn({ name: 'constraint_catalog' })
  public readonly constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_schema' })
  public readonly constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_name' })
  public readonly constraint_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_type' })
  public readonly constraint_type!: 'CHECK' | 'FOREIGN KEY' | 'PRIMARY KEY' | 'UNIQUE';

  @ViewColumn({ name: 'is_deferrable' })
  public readonly is_deferrable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'initially_deferred' })
  public readonly initially_deferred!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'enforced' })
  public readonly enforced!: 'YES';
}
