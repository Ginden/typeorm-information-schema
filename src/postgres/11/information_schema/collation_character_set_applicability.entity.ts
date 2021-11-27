import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'collation_character_set_applicability',
  synchronize: false,
})
export class CollationCharacterSetApplicability {
  @ViewColumn({ name: 'collation_catalog' })
  public readonly collation_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_schema' })
  public readonly collation_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_name' })
  public readonly collation_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_catalog' })
  public readonly character_set_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_schema' })
  public readonly character_set_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_name' })
  public readonly character_set_name!: string | null /* sql_identifier */;
}
