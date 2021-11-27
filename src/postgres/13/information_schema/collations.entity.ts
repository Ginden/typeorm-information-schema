import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'collations',
  synchronize: false,
})
export class Collations {
  @ViewColumn({ name: 'collation_catalog' })
  public readonly collation_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_schema' })
  public readonly collation_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_name' })
  public readonly collation_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'pad_attribute' })
  public readonly pad_attribute!: string | null /* character_data */;
}
