import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'information_schema_catalog_name',
  synchronize: false,
})
export class InformationSchemaCatalogName {
  @ViewColumn({ name: 'catalog_name' })
  public readonly catalog_name!: string | null /* sql_identifier */;
}
