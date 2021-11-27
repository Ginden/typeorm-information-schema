import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_available_extension_versions view lists the
 *    specific extension versions that are available for installation.
 *    See also the pg_extension
 *    catalog, which shows the extensions currently installed.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_available_extension_versions',
  synchronize: false,
})
export class PgAvailableExtensionVersions {
  /**
   * Extension name */

  @ViewColumn({ name: 'name' })
  public readonly name!: unknown | null /* name */;
  /**
   * Version name */

  @ViewColumn({ name: 'version' })
  public readonly version!: string | null /* text */;
  /**
   * True if this version of this extension is currently
   * installed */

  @ViewColumn({ name: 'installed' })
  public readonly installed!: boolean | null /* bool */;
  /**
   * True if only superusers are allowed to install this extension
   * (but see trusted) */

  @ViewColumn({ name: 'superuser' })
  public readonly superuser!: boolean | null /* bool */;
  /**
   * True if only superusers are allowed to install this extension
   * (but see trusted) */

  @ViewColumn({ name: 'trusted' })
  public readonly trusted!: boolean | null /* bool */;
  /**
   * True if extension can be relocated to another schema */

  @ViewColumn({ name: 'relocatable' })
  public readonly relocatable!: boolean | null /* bool */;
  /**
   * Name of the schema that the extension must be installed into,
   * or NULL if partially or fully relocatable */

  @ViewColumn({ name: 'schema' })
  public readonly schema!: unknown | null /* name */;
  /**
   * Names of prerequisite extensions,
   * or NULL if none */

  @ViewColumn({ name: 'requires' })
  public readonly requires!: unknown | null /* _name */;
  /**
   * Comment string from the extension's control file */

  @ViewColumn({ name: 'comment' })
  public readonly comment!: string | null /* text */;
}
