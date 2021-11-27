import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'triggered_update_columns',
  synchronize: false,
})
export class TriggeredUpdateColumns {
  @ViewColumn({ name: 'trigger_catalog' })
  public readonly trigger_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'trigger_schema' })
  public readonly trigger_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'trigger_name' })
  public readonly trigger_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_catalog' })
  public readonly event_object_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_schema' })
  public readonly event_object_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_table' })
  public readonly event_object_table!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'event_object_column' })
  public readonly event_object_column!: string | null /* sql_identifier */;
}
