import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_available_extensions view lists the
 *    extensions that are available for installation.
 *    See also the
 *    pg_extension
 *    catalog, which shows the extensions currently installed.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_available_extensions',
  synchronize: false,
})
export class PgAvailableExtensions {
  /**
   * Extension name */

  @ViewColumn({ name: 'name' })
  public readonly name!: unknown | null /* name */;
  /**
   * Name of default version, or NULL if none is
   * specified */

  @ViewColumn({ name: 'default_version' })
  public readonly default_version!: string | null /* text */;
  /**
   * Currently installed version of the extension,
   * or NULL if not installed */

  @ViewColumn({ name: 'installed_version' })
  public readonly installed_version!: string | null /* text */;
  /**
   * Comment string from the extension's control file */

  @ViewColumn({ name: 'comment' })
  public readonly comment!: string | null /* text */;
}
