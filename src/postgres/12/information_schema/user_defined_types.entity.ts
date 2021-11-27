import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'user_defined_types',
  synchronize: false,
})
export class UserDefinedTypes {
  @ViewColumn({ name: 'user_defined_type_catalog' })
  public readonly user_defined_type_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'user_defined_type_schema' })
  public readonly user_defined_type_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'user_defined_type_name' })
  public readonly user_defined_type_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'user_defined_type_category' })
  public readonly user_defined_type_category!: string | null /* character_data */;

  @ViewColumn({ name: 'is_instantiable' })
  public readonly is_instantiable!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_final' })
  public readonly is_final!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'ordering_form' })
  public readonly ordering_form!: string | null /* character_data */;

  @ViewColumn({ name: 'ordering_category' })
  public readonly ordering_category!: string | null /* character_data */;

  @ViewColumn({ name: 'ordering_routine_catalog' })
  public readonly ordering_routine_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'ordering_routine_schema' })
  public readonly ordering_routine_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'ordering_routine_name' })
  public readonly ordering_routine_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'reference_type' })
  public readonly reference_type!: string | null /* character_data */;

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

  @ViewColumn({ name: 'source_dtd_identifier' })
  public readonly source_dtd_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'ref_dtd_identifier' })
  public readonly ref_dtd_identifier!: string | null /* sql_identifier */;
}
