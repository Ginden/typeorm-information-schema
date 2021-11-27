import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_foreign_data_wrapper stores
 *    foreign-data wrapper definitions.  A foreign-data wrapper is the
 *    mechanism by which external data, residing on foreign servers, is
 *    accessed.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_data_wrapper',
  synchronize: false,
})
export class PgForeignDataWrapper {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the foreign-data wrapper */

  @ViewColumn({ name: 'fdwname' })
  public readonly fdwname!: unknown /* name */;
  /**
   * Owner of the foreign-data wrapper */

  @ViewColumn({ name: 'fdwowner' })
  public readonly fdwowner!: number /* oid */;
  /**
   * References a handler function that is responsible for
   * supplying execution routines for the foreign-data wrapper.
   * Zero if no handler is provided */

  @ViewColumn({ name: 'fdwhandler' })
  public readonly fdwhandler!: number /* oid */;
  /**
   * References a validator function that is responsible for
   * checking the validity of the options given to the
   * foreign-data wrapper, as well as options for foreign servers and user
   * mappings using the foreign-data wrapper.  Zero if no validator
   * is provided */

  @ViewColumn({ name: 'fdwvalidator' })
  public readonly fdwvalidator!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'fdwacl' })
  public readonly fdwacl!: unknown | null /* _aclitem */;
  /**
   * Foreign-data wrapper specific options, as keyword=value strings */

  @ViewColumn({ name: 'fdwoptions' })
  public readonly fdwoptions!: string | null /* _text */;
}
