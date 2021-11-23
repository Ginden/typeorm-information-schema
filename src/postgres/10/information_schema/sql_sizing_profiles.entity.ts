import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_sizing_profiles',
  synchronize: false,
})
export class SqlSizingProfiles {
  @ViewColumn({ name: 'sizing_id' })
  public readonly sizing_id!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'sizing_name' })
  public readonly sizing_name!: string | null /* character_data */;

  @ViewColumn({ name: 'profile_id' })
  public readonly profile_id!: string | null /* character_data */;

  @ViewColumn({ name: 'required_value' })
  public readonly required_value!: number | null /* cardinal_number */;

  @ViewColumn({ name: 'comments' })
  public readonly comments!: string | null /* character_data */;
}
