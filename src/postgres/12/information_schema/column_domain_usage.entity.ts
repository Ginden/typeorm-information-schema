import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'column_domain_usage',
  synchronize: false,
})
export class ColumnDomainUsage {
  @ViewColumn({ name: 'domain_catalog' })
  public readonly domain_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_schema' })
  public readonly domain_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_name' })
  public readonly domain_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'column_name' })
  public readonly column_name!: string | null /* sql_identifier */;
}
