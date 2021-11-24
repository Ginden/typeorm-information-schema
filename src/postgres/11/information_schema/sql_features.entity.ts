import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_features',
  synchronize: false,
})
export class SqlFeatures {
  @ViewColumn({ name: 'feature_id' })
  public readonly feature_id!: string | null /* character_data */;

  @ViewColumn({ name: 'feature_name' })
  public readonly feature_name!: string | null /* character_data */;

  @ViewColumn({ name: 'sub_feature_id' })
  public readonly sub_feature_id!: string | null /* character_data */;

  @ViewColumn({ name: 'sub_feature_name' })
  public readonly sub_feature_name!: string | null /* character_data */;

  @ViewColumn({ name: 'is_supported' })
  public readonly is_supported!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_verified_by' })
  public readonly is_verified_by!: null;

  @ViewColumn({ name: 'comments' })
  public readonly comments!: string | null /* character_data */;
}
