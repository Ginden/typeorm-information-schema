import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'routines',
  synchronize: false,
})
export class Routines {
  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_catalog' })
  public readonly routine_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_schema' })
  public readonly routine_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_name' })
  public readonly routine_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_type' })
  public readonly routine_type!: string | null /* character_data */;

  @ViewColumn({ name: 'module_catalog' })
  public readonly module_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'module_schema' })
  public readonly module_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'module_name' })
  public readonly module_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_catalog' })
  public readonly udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_schema' })
  public readonly udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'udt_name' })
  public readonly udt_name!: string | null /* sql_identifier */;

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

  @ViewColumn({ name: 'type_udt_catalog' })
  public readonly type_udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'type_udt_schema' })
  public readonly type_udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'type_udt_name' })
  public readonly type_udt_name!: string | null /* sql_identifier */;

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

  @ViewColumn({ name: 'routine_body' })
  public readonly routine_body!: string | null /* character_data */;

  @ViewColumn({ name: 'routine_definition' })
  public readonly routine_definition!: string | null /* character_data */;

  @ViewColumn({ name: 'external_name' })
  public readonly external_name!: string | null /* character_data */;

  @ViewColumn({ name: 'external_language' })
  public readonly external_language!: string | null /* character_data */;

  @ViewColumn({ name: 'parameter_style' })
  public readonly parameter_style!: string | null /* character_data */;

  @ViewColumn({ name: 'is_deterministic' })
  public readonly is_deterministic!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'sql_data_access' })
  public readonly sql_data_access!: string | null /* character_data */;

  @ViewColumn({ name: 'is_null_call' })
  public readonly is_null_call!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'sql_path' })
  public readonly sql_path!: string | null /* character_data */;

  @ViewColumn({ name: 'schema_level_routine' })
  public readonly schema_level_routine!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'max_dynamic_result_sets' })
  public readonly max_dynamic_result_sets!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'is_user_defined_cast' })
  public readonly is_user_defined_cast!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_implicitly_invocable' })
  public readonly is_implicitly_invocable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'security_type' })
  public readonly security_type!: string | null /* character_data */;

  @ViewColumn({ name: 'to_sql_specific_catalog' })
  public readonly to_sql_specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'to_sql_specific_schema' })
  public readonly to_sql_specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'to_sql_specific_name' })
  public readonly to_sql_specific_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'as_locator' })
  public readonly as_locator!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'created' })
  public readonly created!: Date | null /* time_stamp */;

  @ViewColumn({ name: 'last_altered' })
  public readonly last_altered!: Date | null /* time_stamp */;

  @ViewColumn({ name: 'new_savepoint_level' })
  public readonly new_savepoint_level!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_udt_dependent' })
  public readonly is_udt_dependent!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'result_cast_from_data_type' })
  public readonly result_cast_from_data_type!: string | null /* character_data */;

  @ViewColumn({ name: 'result_cast_as_locator' })
  public readonly result_cast_as_locator!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'result_cast_char_max_length' })
  public readonly result_cast_char_max_length!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_char_octet_length' })
  public readonly result_cast_char_octet_length!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_char_set_catalog' })
  public readonly result_cast_char_set_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_char_set_schema' })
  public readonly result_cast_char_set_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_char_set_name' })
  public readonly result_cast_char_set_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_collation_catalog' })
  public readonly result_cast_collation_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_collation_schema' })
  public readonly result_cast_collation_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_collation_name' })
  public readonly result_cast_collation_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_numeric_precision' })
  public readonly result_cast_numeric_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_numeric_precision_radix' })
  public readonly result_cast_numeric_precision_radix!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_numeric_scale' })
  public readonly result_cast_numeric_scale!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_datetime_precision' })
  public readonly result_cast_datetime_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_interval_type' })
  public readonly result_cast_interval_type!: string | null /* character_data */;

  @ViewColumn({ name: 'result_cast_interval_precision' })
  public readonly result_cast_interval_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_type_udt_catalog' })
  public readonly result_cast_type_udt_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_type_udt_schema' })
  public readonly result_cast_type_udt_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_type_udt_name' })
  public readonly result_cast_type_udt_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_scope_catalog' })
  public readonly result_cast_scope_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_scope_schema' })
  public readonly result_cast_scope_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_scope_name' })
  public readonly result_cast_scope_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'result_cast_maximum_cardinality' })
  public readonly result_cast_maximum_cardinality!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'result_cast_dtd_identifier' })
  public readonly result_cast_dtd_identifier!: string | null /* sql_identifier */;
}
