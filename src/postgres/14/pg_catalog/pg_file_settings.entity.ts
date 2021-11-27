import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_file_settings provides a summary of
 *    the contents of the server's configuration file(s).  A row appears in
 *    this view for each name = value entry appearing in the files,
 *    with annotations indicating whether the value could be applied
 *    successfully.  Additional row(s) may appear for problems not linked to
 *    a name = value entry, such as syntax errors in the files.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_file_settings',
  synchronize: false,
})
export class PgFileSettings {
  /**
   * Full path name of the configuration file */

  @ViewColumn({ name: 'sourcefile' })
  public readonly sourcefile!: string | null /* text */;
  /**
   * Line number within the configuration file where the entry appears */

  @ViewColumn({ name: 'sourceline' })
  public readonly sourceline!: number | null /* int4 */;
  /**
   * Order in which the entries are processed (1..n) */

  @ViewColumn({ name: 'seqno' })
  public readonly seqno!: number | null /* int4 */;
  /**
   * Configuration parameter name */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * Value to be assigned to the parameter */

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;
  /**
   * True if the value can be applied successfully */

  @ViewColumn({ name: 'applied' })
  public readonly applied!: boolean | null /* bool */;
  /**
   * If not null, an error message indicating why this entry could
   * not be applied */

  @ViewColumn({ name: 'error' })
  public readonly error!: string | null /* text */;
}
