import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_language registers
 *    languages in which you can write functions or stored procedures.
 *    See >
 *    and > for more information about language handlers.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_language',
  synchronize: false,
})
export class PgLanguage {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the language */

  @ViewColumn({ name: 'lanname' })
  public readonly lanname!: unknown /* name */;
  /**
   * Owner of the language */

  @ViewColumn({ name: 'lanowner' })
  public readonly lanowner!: number /* oid */;
  /**
   * This is false for internal languages (such as
   * SQL) and true for user-defined languages.
   * Currently, pg_dump still uses this
   * to determine which languages need to be dumped, but this might be
   * replaced by a different mechanism in the future. */

  @ViewColumn({ name: 'lanispl' })
  public readonly lanispl!: boolean /* bool */;
  /**
   * True if this is a trusted language, which means that it is believed
   * not to grant access to anything outside the normal SQL execution
   * environment.  Only superusers can create functions in untrusted
   * languages. */

  @ViewColumn({ name: 'lanpltrusted' })
  public readonly lanpltrusted!: boolean /* bool */;
  /**
   * For noninternal languages this references the language
   * handler, which is a special function that is responsible for
   * executing all functions that are written in the particular
   * language. Zero for internal languages. */

  @ViewColumn({ name: 'lanplcallfoid' })
  public readonly lanplcallfoid!: number /* oid */;
  /**
   * This references a function that is responsible for executing
   * inline anonymous code blocks
   * (> blocks).
   * Zero if inline blocks are not supported. */

  @ViewColumn({ name: 'laninline' })
  public readonly laninline!: number /* oid */;
  /**
   * This references a language validator function that is responsible
   * for checking the syntax and validity of new functions when they
   * are created.  Zero if no validator is provided. */

  @ViewColumn({ name: 'lanvalidator' })
  public readonly lanvalidator!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'lanacl' })
  public readonly lanacl!: unknown | null /* _aclitem */;
}
