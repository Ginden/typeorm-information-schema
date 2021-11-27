import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_database stores information about
 *    the available databases.  Databases are created with the CREATE DATABASE command.
 *    Consult > for details about the meaning
 *    of some of the parameters.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_database',
  synchronize: false,
})
export class PgDatabase {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Database name */

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown /* name */;
  /**
   * Owner of the database, usually the user who created it */

  @ViewColumn({ name: 'datdba' })
  public readonly datdba!: number /* oid */;
  /**
   * Character encoding for this database
   * (pg_encoding_to_char() can translate
   * this number to the encoding name) */

  @ViewColumn({ name: 'encoding' })
  public readonly encoding!: number /* int4 */;
  /**
   * LC_COLLATE for this database */

  @ViewColumn({ name: 'datcollate' })
  public readonly datcollate!: unknown /* name */;
  /**
   * LC_CTYPE for this database */

  @ViewColumn({ name: 'datctype' })
  public readonly datctype!: unknown /* name */;
  /**
   * If true, then this database can be cloned by
   * any user with CREATEDB privileges;
   * if false, then only superusers or the owner of
   * the database can clone it. */

  @ViewColumn({ name: 'datistemplate' })
  public readonly datistemplate!: boolean /* bool */;
  /**
   * If false then no one can connect to this database.  This is
   * used to protect the template0 database from being altered. */

  @ViewColumn({ name: 'datallowconn' })
  public readonly datallowconn!: boolean /* bool */;
  /**
   * Sets maximum number of concurrent connections that can be made
   * to this database.  -1 means no limit. */

  @ViewColumn({ name: 'datconnlimit' })
  public readonly datconnlimit!: number /* int4 */;
  /**
   * Last system OID in the database; useful
   * particularly to pg_dump */

  @ViewColumn({ name: 'datlastsysoid' })
  public readonly datlastsysoid!: number /* oid */;
  /**
   * All transaction IDs before this one have been replaced with a permanent
   * (frozen) transaction ID in this database.  This is used to
   * track whether the database needs to be vacuumed in order to prevent
   * transaction ID wraparound or to allow pg_xact to be shrunk.
   * It is the minimum of the per-table
   * pg_class.relfrozenxid values. */

  @ViewColumn({ name: 'datfrozenxid' })
  public readonly datfrozenxid!: unknown /* xid */;
  /**
   * All multixact IDs before this one have been replaced with a
   * transaction ID in this database.  This is used to
   * track whether the database needs to be vacuumed in order to prevent
   * multixact ID wraparound or to allow pg_multixact to be shrunk.
   * It is the minimum of the per-table
   * pg_class.relminmxid values. */

  @ViewColumn({ name: 'datminmxid' })
  public readonly datminmxid!: unknown /* xid */;
  /**
   * The default tablespace for the database.
   * Within this database, all tables for which
   * pg_class.reltablespace is zero
   * will be stored in this tablespace; in particular, all the non-shared
   * system catalogs will be there. */

  @ViewColumn({ name: 'dattablespace' })
  public readonly dattablespace!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'datacl' })
  public readonly datacl!: unknown | null /* _aclitem */;
}
