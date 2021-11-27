import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'referential_constraints',
  synchronize: false,
})
export class ReferentialConstraints {
  @ViewColumn({ name: 'constraint_catalog' })
  public readonly constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_schema' })
  public readonly constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_name' })
  public readonly constraint_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'unique_constraint_catalog' })
  public readonly unique_constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'unique_constraint_schema' })
  public readonly unique_constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'unique_constraint_name' })
  public readonly unique_constraint_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'match_option' })
  public readonly match_option!: string | null /* character_data */;

  @ViewColumn({ name: 'update_rule' })
  public readonly update_rule!: 'CASCADE' | 'SET NULL' | 'SET DEFAULT' | 'RESTRICT' | 'NO ACTION';

  @ViewColumn({ name: 'delete_rule' })
  public readonly delete_rule!: 'CASCADE' | 'SET NULL' | 'SET DEFAULT' | 'RESTRICT' | 'NO ACTION';
}
