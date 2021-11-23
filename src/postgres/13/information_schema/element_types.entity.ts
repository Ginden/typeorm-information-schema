import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'element_types',
  synchronize: false,
})
export class ElementTypes {
  @ViewColumn({ name: 'object_catalog' })
  public readonly object_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_schema' })
  public readonly object_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_name' })
  public readonly object_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'object_type' })
  public readonly object_type!: string | null /* character_data */;

  @ViewColumn({ name: 'collection_type_identifier' })
  public readonly collection_type_identifier!: string | null /* sql_identifier */;

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

  @ViewColumn({ name: 'domain_default' })
  public readonly domain_default!: string | null /* character_data */;

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
}
