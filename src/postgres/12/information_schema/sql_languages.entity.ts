import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_languages',
  synchronize: false,
})
export class SqlLanguages {
  @ViewColumn({ name: 'sql_language_source' })
  public readonly sql_language_source!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_year' })
  public readonly sql_language_year!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_conformance' })
  public readonly sql_language_conformance!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_integrity' })
  public readonly sql_language_integrity!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_implementation' })
  public readonly sql_language_implementation!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_binding_style' })
  public readonly sql_language_binding_style!: string | null /* character_data */;

  @ViewColumn({ name: 'sql_language_programming_language' })
  public readonly sql_language_programming_language!: string | null /* character_data */;
}
