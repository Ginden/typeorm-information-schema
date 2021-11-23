import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_sizing',
  synchronize: false,
})
export class SqlSizing {
  @ViewColumn({ name: 'sizing_id' })
  public readonly sizing_id!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'sizing_name' })
  public readonly sizing_name!: string | null /* character_data */;

  @ViewColumn({ name: 'supported_value' })
  public readonly supported_value!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'comments' })
  public readonly comments!: string | null /* character_data */;
}
