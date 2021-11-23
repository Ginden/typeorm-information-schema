import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'character_sets',
  synchronize: false,
})
export class CharacterSets {
  @ViewColumn({ name: 'character_set_catalog' })
  public readonly character_set_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_schema' })
  public readonly character_set_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_name' })
  public readonly character_set_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_repertoire' })
  public readonly character_repertoire!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'form_of_use' })
  public readonly form_of_use!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_collate_catalog' })
  public readonly default_collate_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_collate_schema' })
  public readonly default_collate_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'default_collate_name' })
  public readonly default_collate_name!: string | null /* sql_identifier */;
}
