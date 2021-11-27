import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_collation describes the
 *    available collations, which are essentially mappings from an SQL
 *    name to operating system locale categories.
 *    See > for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_collation',
  synchronize: false,
})
export class PgCollation {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Collation name (unique per namespace and encoding) */

  @ViewColumn({ name: 'collname' })
  public readonly collname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this collation */

  @ViewColumn({ name: 'collnamespace' })
  public readonly collnamespace!: number /* oid */;
  /**
   * Owner of the collation */

  @ViewColumn({ name: 'collowner' })
  public readonly collowner!: number /* oid */;
  /**
   * Provider of the collation: d = database
   * default, c = libc, i = icu */

  @ViewColumn({ name: 'collprovider' })
  public readonly collprovider!: unknown /* char */;
  /**
   * Is the collation deterministic? */

  @ViewColumn({ name: 'collisdeterministic' })
  public readonly collisdeterministic!: boolean /* bool */;
  /**
   * Encoding in which the collation is applicable, or -1 if it
   * works for any encoding */

  @ViewColumn({ name: 'collencoding' })
  public readonly collencoding!: number /* int4 */;
  /**
   * LC_COLLATE for this collation object */

  @ViewColumn({ name: 'collcollate' })
  public readonly collcollate!: unknown /* name */;
  /**
   * LC_CTYPE for this collation object */

  @ViewColumn({ name: 'collctype' })
  public readonly collctype!: unknown /* name */;
  /**
   * Provider-specific version of the collation.  This is recorded when the
   * collation is created and then checked when it is used, to detect
   * changes in the collation definition that could lead to data corruption. */

  @ViewColumn({ name: 'collversion' })
  public readonly collversion!: string | null /* text */;
}
