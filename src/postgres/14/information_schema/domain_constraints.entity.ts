import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'domain_constraints',
  synchronize: false,
})
export class DomainConstraints {
  @ViewColumn({ name: 'constraint_catalog' })
  public readonly constraint_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_schema' })
  public readonly constraint_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'constraint_name' })
  public readonly constraint_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_catalog' })
  public readonly domain_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_schema' })
  public readonly domain_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_name' })
  public readonly domain_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'is_deferrable' })
  public readonly is_deferrable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'initially_deferred' })
  public readonly initially_deferred!: ('YES' | 'NO') | null /* yes_or_no */;
}
