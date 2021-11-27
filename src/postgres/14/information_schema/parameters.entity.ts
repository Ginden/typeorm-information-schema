import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'parameters',
  synchronize: false,
})
export class Parameters {
  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'ordinal_position' })
  public readonly ordinal_position!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'parameter_mode' })
  public readonly parameter_mode!: string | null /* character_data */;

  @ViewColumn({ name: 'is_result' })
  public readonly is_result!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'as_locator' })
  public readonly as_locator!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'parameter_name' })
  public readonly parameter_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'data_type' })
  public readonly data_type!: string | null /* character_data */;

  @ViewColumn({ name: 'character_maximum_length' })
  public readonly character_maximum_length!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'character_octet_length' })
  public readonly character_octet_length!: number | null /* cardinal_number */;

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

  @ViewColumn({ name: 'parameter_default' })
  public readonly parameter_default!: string | null /* character_data */;
}
