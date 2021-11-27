import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'sql_packages',
  synchronize: false,
})
export class SqlPackages {
  @ViewColumn({ name: 'feature_id' })
  public readonly feature_id!: string | null /* character_data */;

  @ViewColumn({ name: 'feature_name' })
  public readonly feature_name!: string | null /* character_data */;

  @ViewColumn({ name: 'is_supported' })
  public readonly is_supported!: ('YES' | 'NO') | null /* yes_or_no */;

  @ViewColumn({ name: 'is_verified_by' })
  public readonly is_verified_by!: string | null /* character_data */;

  @ViewColumn({ name: 'comments' })
  public readonly comments!: string | null /* character_data */;
}
