import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'sequences',
  synchronize: false,
})
export class Sequences {
  @ViewColumn({ name: 'sequence_catalog' })
  public readonly sequence_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'sequence_schema' })
  public readonly sequence_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'sequence_name' })
  public readonly sequence_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'data_type' })
  public readonly data_type!: string | null /* character_data */;

  @ViewColumn({ name: 'numeric_precision' })
  public readonly numeric_precision!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'numeric_precision_radix' })
  public readonly numeric_precision_radix!: 2 | 10;

  @ViewColumn({ name: 'numeric_scale' })
  public readonly numeric_scale!: 2 | 10;

  @ViewColumn({ name: 'start_value' })
  public readonly start_value!: string | null /* character_data */;

  @ViewColumn({ name: 'minimum_value' })
  public readonly minimum_value!: string | null /* character_data */;

  @ViewColumn({ name: 'maximum_value' })
  public readonly maximum_value!: string | null /* character_data */;

  @ViewColumn({ name: 'increment' })
  public readonly increment!: string | null /* character_data */;

  @ViewColumn({ name: 'cycle_option' })
  public readonly cycle_option!: ('YES' | 'NO') | null /* yes_or_no */;
}
