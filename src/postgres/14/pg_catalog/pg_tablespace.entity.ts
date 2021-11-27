import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_tablespace stores information
 *    about the available tablespaces.  Tables can be placed in particular
 *    tablespaces to aid administration of disk layout.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_tablespace',
  synchronize: false,
})
export class PgTablespace {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Tablespace name */

  @ViewColumn({ name: 'spcname' })
  public readonly spcname!: unknown /* name */;
  /**
   * Owner of the tablespace, usually the user who created it */

  @ViewColumn({ name: 'spcowner' })
  public readonly spcowner!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'spcacl' })
  public readonly spcacl!: unknown | null /* _aclitem */;
  /**
   * Tablespace-level options, as keyword=value strings */

  @ViewColumn({ name: 'spcoptions' })
  public readonly spcoptions!: string | null /* _text */;
}
