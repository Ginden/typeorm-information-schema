import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_implementation_info',
  synchronize: false,
})
export class SqlImplementationInfo {
  @ViewColumn({ name: 'implementation_info_id' })
  public readonly implementation_info_id!: string | null /* character_data */;

  @ViewColumn({ name: 'implementation_info_name' })
  public readonly implementation_info_name!: string | null /* character_data */;

  @ViewColumn({ name: 'integer_value' })
  public readonly integer_value!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'character_value' })
  public readonly character_value!: string | null /* character_data */;

  @ViewColumn({ name: 'comments' })
  public readonly comments!: string | null /* character_data */;
}
