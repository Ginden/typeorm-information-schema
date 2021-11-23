import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'triggers',
  synchronize: false,
})
export class Triggers {
  @ViewColumn({ name: 'trigger_catalog' })
  public readonly trigger_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'trigger_schema' })
  public readonly trigger_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'trigger_name' })
  public readonly trigger_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_manipulation' })
  public readonly event_manipulation!: string | null /* character_data */;

  @ViewColumn({ name: 'event_object_catalog' })
  public readonly event_object_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_schema' })
  public readonly event_object_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_table' })
  public readonly event_object_table!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'action_order' })
  public readonly action_order!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'action_condition' })
  public readonly action_condition!: string | null /* character_data */;

  @ViewColumn({ name: 'action_statement' })
  public readonly action_statement!: string | null /* character_data */;

  @ViewColumn({ name: 'action_orientation' })
  public readonly action_orientation!: string | null /* character_data */;

  @ViewColumn({ name: 'action_timing' })
  public readonly action_timing!: string | null /* character_data */;

  @ViewColumn({ name: 'action_reference_old_table' })
  public readonly action_reference_old_table!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'action_reference_new_table' })
  public readonly action_reference_new_table!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'action_reference_old_row' })
  public readonly action_reference_old_row!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'action_reference_new_row' })
  public readonly action_reference_new_row!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'created' })
  public readonly created!: Date | null /* time_stamp */;
}
