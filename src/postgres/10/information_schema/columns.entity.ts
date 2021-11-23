import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'columns',
  synchronize: false,
})
export class Columns {
  @ViewColumn({ name: 'table_catalog' })
  public readonly table_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_schema' })
  public readonly table_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'table_name' })
  public readonly table_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'column_name' })
  public readonly column_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'ordinal_position' })
  public readonly ordinal_position!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'column_default' })
  public readonly column_default!: string | null /* character_data */;

  @ViewColumn({ name: 'is_nullable' })
  public readonly is_nullable!: 'YES' | 'NO';

  @ViewColumn({ name: 'data_type' })
  public readonly data_type!: string | null /* character_data */;

  @ViewColumn({ name: 'character_maximum_length' })
  public readonly character_maximum_length!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'character_octet_length' })
  public readonly character_octet_length!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'numeric_precision' })
  public readonly numeric_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'numeric_precision_radix' })
  public readonly numeric_precision_radix!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'numeric_scale' })
  public readonly numeric_scale!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'datetime_precision' })
  public readonly datetime_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'interval_type' })
  public readonly interval_type!: string | null /* character_data */;

  @ViewColumn({ name: 'interval_precision' })
  public readonly interval_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'character_set_catalog' })
  public readonly character_set_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_schema' })
  public readonly character_set_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'character_set_name' })
  public readonly character_set_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_catalog' })
  public readonly collation_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_schema' })
  public readonly collation_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'collation_name' })
  public readonly collation_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_catalog' })
  public readonly domain_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_schema' })
  public readonly domain_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'domain_name' })
  public readonly domain_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_catalog' })
  public readonly udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_schema' })
  public readonly udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_name' })
  public readonly udt_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'scope_catalog' })
  public readonly scope_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'scope_schema' })
  public readonly scope_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'scope_name' })
  public readonly scope_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'maximum_cardinality' })
  public readonly maximum_cardinality!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'dtd_identifier' })
  public readonly dtd_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'is_self_referencing' })
  public readonly is_self_referencing!: 'YES' | 'NO';

  @ViewColumn({ name: 'is_identity' })
  public readonly is_identity!: 'YES' | 'NO';

  @ViewColumn({ name: 'identity_generation' })
  public readonly identity_generation!: string | null /* character_data */;

  @ViewColumn({ name: 'identity_start' })
  public readonly identity_start!: string | null /* character_data */;

  @ViewColumn({ name: 'identity_increment' })
  public readonly identity_increment!: string | null /* character_data */;

  @ViewColumn({ name: 'identity_maximum' })
  public readonly identity_maximum!: string | null /* character_data */;

  @ViewColumn({ name: 'identity_minimum' })
  public readonly identity_minimum!: string | null /* character_data */;

  @ViewColumn({ name: 'identity_cycle' })
  public readonly identity_cycle!: ('YES' | 'NO') | null;

  @ViewColumn({ name: 'is_generated' })
  public readonly is_generated!: 'ALWAYS' | 'NEVER';

  @ViewColumn({ name: 'generation_expression' })
  public readonly generation_expression!: string | null /* character_data */;

  @ViewColumn({ name: 'is_updatable' })
  public readonly is_updatable!: 'YES' | 'NO';
}
