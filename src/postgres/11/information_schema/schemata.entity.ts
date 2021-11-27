import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'schemata',
  synchronize: false,
})
export class Schemata {
  @ViewColumn({ name: 'catalog_name' })
  public readonly catalog_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'schema_name' })
  public readonly schema_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'schema_owner' })
  public readonly schema_owner!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_character_set_catalog' })
  public readonly default_character_set_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_character_set_schema' })
  public readonly default_character_set_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_character_set_name' })
  public readonly default_character_set_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'sql_path' })
  public readonly sql_path!: string | null /* character_data */;
}
