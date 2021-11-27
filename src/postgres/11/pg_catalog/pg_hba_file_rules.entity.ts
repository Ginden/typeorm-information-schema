import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_hba_file_rules',
  synchronize: false,
})
export class PgHbaFileRules {
  @ViewColumn({ name: 'line_number' })
  public readonly line_number!: number | null /* int4 */;

  @ViewColumn({ name: 'type' })
  public readonly type!: string | null /* text */;

  @ViewColumn({ name: 'database' })
  public readonly database!: string | null /* _text */;

  @ViewColumn({ name: 'user_name' })
  public readonly user_name!: string | null /* _text */;

  @ViewColumn({ name: 'address' })
  public readonly address!: string | null /* text */;

  @ViewColumn({ name: 'netmask' })
  public readonly netmask!: string | null /* text */;

  @ViewColumn({ name: 'auth_method' })
  public readonly auth_method!: string | null /* text */;

  @ViewColumn({ name: 'options' })
  public readonly options!: string | null /* _text */;

  @ViewColumn({ name: 'error' })
  public readonly error!: string | null /* text */;
}
