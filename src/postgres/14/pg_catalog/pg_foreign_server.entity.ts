import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_foreign_server stores
 *    foreign server definitions.  A foreign server describes a source
 *    of external data, such as a remote server.  Foreign
 *    servers are accessed via foreign-data wrappers.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_server',
  synchronize: false,
})
export class PgForeignServer {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the foreign server */

  @ViewColumn({ name: 'srvname' })
  public readonly srvname!: unknown /* name */;
  /**
   * Owner of the foreign server */

  @ViewColumn({ name: 'srvowner' })
  public readonly srvowner!: number /* oid */;
  /**
   * OID of the foreign-data wrapper of this foreign server */

  @ViewColumn({ name: 'srvfdw' })
  public readonly srvfdw!: number /* oid */;
  /**
   * Type of the server (optional) */

  @ViewColumn({ name: 'srvtype' })
  public readonly srvtype!: string | null /* text */;
  /**
   * Version of the server (optional) */

  @ViewColumn({ name: 'srvversion' })
  public readonly srvversion!: string | null /* text */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'srvacl' })
  public readonly srvacl!: unknown | null /* _aclitem */;
  /**
   * Foreign server specific options, as keyword=value strings */

  @ViewColumn({ name: 'srvoptions' })
  public readonly srvoptions!: string | null /* _text */;
}
