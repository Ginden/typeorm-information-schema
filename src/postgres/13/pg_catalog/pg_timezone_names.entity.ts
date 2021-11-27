import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_timezone_names',
  synchronize: false,
})
export class PgTimezoneNames {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'abbrev' })
  public readonly abbrev!: string | null /* text */;

  @ViewColumn({ name: 'utc_offset' })
  public readonly utc_offset!: unknown | null /* interval */;

  @ViewColumn({ name: 'is_dst' })
  public readonly is_dst!: boolean | null /* bool */;
}
