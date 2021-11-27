import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_settings provides access to
 *    run-time parameters of the server.  It is essentially an alternative
 *    interface to the SHOW
 *    and SET commands.
 *    It also provides access to some facts about each parameter that are
 *    not directly available from SHOW, such as minimum and
 *    maximum values.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_settings',
  synchronize: false,
})
export class PgSettings {
  /**
   * Run-time configuration parameter name */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * Current value of the parameter */

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;
  /**
   * Implicit unit of the parameter */

  @ViewColumn({ name: 'unit' })
  public readonly unit!: string | null /* text */;
  /**
   * Logical group of the parameter */

  @ViewColumn({ name: 'category' })
  public readonly category!: string | null /* text */;
  /**
   * A brief description of the parameter */

  @ViewColumn({ name: 'short_desc' })
  public readonly short_desc!: string | null /* text */;
  /**
   * Additional, more detailed, description of the parameter */

  @ViewColumn({ name: 'extra_desc' })
  public readonly extra_desc!: string | null /* text */;
  /**
   * Context required to set the parameter's value (see below) */

  @ViewColumn({ name: 'context' })
  public readonly context!: string | null /* text */;
  /**
   * Parameter type (bool, enum,
   * integer, real, or string) */

  @ViewColumn({ name: 'vartype' })
  public readonly vartype!: string | null /* text */;
  /**
   * Source of the current parameter value */

  @ViewColumn({ name: 'source' })
  public readonly source!: string | null /* text */;
  /**
   * Minimum allowed value of the parameter (null for non-numeric
   * values) */

  @ViewColumn({ name: 'min_val' })
  public readonly min_val!: string | null /* text */;
  /**
   * Maximum allowed value of the parameter (null for non-numeric
   * values) */

  @ViewColumn({ name: 'max_val' })
  public readonly max_val!: string | null /* text */;
  /**
   * Allowed values of an enum parameter (null for non-enum
   * values) */

  @ViewColumn({ name: 'enumvals' })
  public readonly enumvals!: string | null /* _text */;
  /**
   * Parameter value assumed at server startup if the parameter is
   * not otherwise set */

  @ViewColumn({ name: 'boot_val' })
  public readonly boot_val!: string | null /* text */;
  /**
   * Value that RESET would reset the parameter to
   * in the current session */

  @ViewColumn({ name: 'reset_val' })
  public readonly reset_val!: string | null /* text */;
  /**
   * Configuration file the current value was set in (null for
   * values set from sources other than configuration files, or when
   * examined by a user who is neither a superuser or a member of
   * pg_read_all_settings); helpful when using
   * include directives in configuration files */

  @ViewColumn({ name: 'sourcefile' })
  public readonly sourcefile!: string | null /* text */;
  /**
   * Line number within the configuration file the current value was
   * set at (null for values set from sources other than configuration files,
   * or when examined by a user who is neither a superuser or a member of
   * pg_read_all_settings). */

  @ViewColumn({ name: 'sourceline' })
  public readonly sourceline!: number | null /* int4 */;
  /**
   * true if the value has been changed in the
   * configuration file but needs a restart; or false
   * otherwise. */

  @ViewColumn({ name: 'pending_restart' })
  public readonly pending_restart!: boolean | null /* bool */;
}
