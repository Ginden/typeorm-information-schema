import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_extension stores information
 *    about the installed extensions.  See >
 *    for details about extensions.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_extension',
  synchronize: false,
})
export class PgExtension {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the extension */

  @ViewColumn({ name: 'extname' })
  public readonly extname!: unknown /* name */;
  /**
   * Owner of the extension */

  @ViewColumn({ name: 'extowner' })
  public readonly extowner!: number /* oid */;
  /**
   * Schema containing the extension's exported objects */

  @ViewColumn({ name: 'extnamespace' })
  public readonly extnamespace!: number /* oid */;
  /**
   * True if extension can be relocated to another schema */

  @ViewColumn({ name: 'extrelocatable' })
  public readonly extrelocatable!: boolean /* bool */;
  /**
   * Version name for the extension */

  @ViewColumn({ name: 'extversion' })
  public readonly extversion!: string /* text */;
  /**
   * Array of regclass OIDs for the extension's configuration
   * table(s), or NULL if none */

  @ViewColumn({ name: 'extconfig' })
  public readonly extconfig!: unknown | null /* _oid */;
  /**
   * Array of WHERE-clause filter conditions for the
   * extension's configuration table(s), or NULL if none */

  @ViewColumn({ name: 'extcondition' })
  public readonly extcondition!: string | null /* _text */;
}
