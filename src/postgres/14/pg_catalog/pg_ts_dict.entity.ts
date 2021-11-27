import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_ts_dict catalog contains entries
 *    defining text search dictionaries.  A dictionary depends on a text
 *    search template, which specifies all the implementation functions
 *    needed; the dictionary itself provides values for the user-settable
 *    parameters supported by the template.  This division of labor allows
 *    dictionaries to be created by unprivileged users.  The parameters
 *    are specified by a text string dictinitoption,
 *    whose format and meaning vary depending on the template.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_dict',
  synchronize: false,
})
export class PgTsDict {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Text search dictionary name */

  @ViewColumn({ name: 'dictname' })
  public readonly dictname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this dictionary */

  @ViewColumn({ name: 'dictnamespace' })
  public readonly dictnamespace!: number /* oid */;
  /**
   * Owner of the dictionary */

  @ViewColumn({ name: 'dictowner' })
  public readonly dictowner!: number /* oid */;
  /**
   * The OID of the text search template for this dictionary */

  @ViewColumn({ name: 'dicttemplate' })
  public readonly dicttemplate!: number /* oid */;
  /**
   * Initialization option string for the template */

  @ViewColumn({ name: 'dictinitoption' })
  public readonly dictinitoption!: string | null /* text */;
}
