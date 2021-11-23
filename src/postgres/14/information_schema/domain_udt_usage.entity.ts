import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'domain_udt_usage',
  synchronize: false,
})
export class DomainUdtUsage {
  @ViewColumn({ name: 'udt_catalog' })
  public readonly udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_schema' })
  public readonly udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_name' })
  public readonly udt_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_catalog' })
  public readonly domain_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_schema' })
  public readonly domain_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_name' })
  public readonly domain_name!: string | null /* sql_identifier */;
}
