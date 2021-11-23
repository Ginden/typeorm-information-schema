import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_timezone_abbrevs',
  synchronize: false,
})
export class PgTimezoneAbbrevs {
  @ViewColumn({ name: 'abbrev' })
  public readonly abbrev!: string | null /* text */;

  @ViewColumn({ name: 'utc_offset' })
  public readonly utc_offset!: unknown | null /* interval */;

  @ViewColumn({ name: 'is_dst' })
  public readonly is_dst!: boolean | null /* bool */;
}
