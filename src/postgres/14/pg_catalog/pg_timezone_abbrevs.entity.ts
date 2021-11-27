import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_timezone_abbrevs provides a list
 *    of time zone abbreviations that are currently recognized by the datetime
 *    input routines.  The contents of this view change when the
 *    > run-time parameter is modified.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_timezone_abbrevs',
  synchronize: false,
})
export class PgTimezoneAbbrevs {
  /**
   * Time zone abbreviation */

  @ViewColumn({ name: 'abbrev' })
  public readonly abbrev!: string | null /* text */;
  /**
   * Offset from UTC (positive means east of Greenwich) */

  @ViewColumn({ name: 'utc_offset' })
  public readonly utc_offset!: unknown | null /* interval */;
  /**
   * True if this is a daylight-savings abbreviation */

  @ViewColumn({ name: 'is_dst' })
  public readonly is_dst!: boolean | null /* bool */;
}
