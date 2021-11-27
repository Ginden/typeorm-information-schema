import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_timezone_names provides a list
 *    of time zone names that are recognized by SET TIMEZONE,
 *    along with their associated abbreviations, UTC offsets,
 *    and daylight-savings status.  (Technically,
 *    PostgreSQL does not use UTC because leap
 *    seconds are not handled.)
 *    Unlike the abbreviations shown in pg_timezone_abbrevs, many of these names imply a set of daylight-savings transition
 *    date rules.  Therefore, the associated information changes across local DST
 *    boundaries.  The displayed information is computed based on the current
 *    value of CURRENT_TIMESTAMP.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_timezone_names',
  synchronize: false,
})
export class PgTimezoneNames {
  /**
   * Time zone name */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * Time zone abbreviation */

  @ViewColumn({ name: 'abbrev' })
  public readonly abbrev!: string | null /* text */;
  /**
   * Offset from UTC (positive means east of Greenwich) */

  @ViewColumn({ name: 'utc_offset' })
  public readonly utc_offset!: unknown | null /* interval */;
  /**
   * True if currently observing daylight savings */

  @ViewColumn({ name: 'is_dst' })
  public readonly is_dst!: boolean | null /* bool */;
}
