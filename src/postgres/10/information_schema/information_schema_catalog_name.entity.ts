import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'information_schema_catalog_name',
  synchronize: false,
})
export class InformationSchemaCatalogName {
  @ViewColumn({ name: 'catalog_name' })
  public readonly catalog_name!: string | null /* sql_identifier */;
}
