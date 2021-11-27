import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_seclabels provides information about
 *    security labels.  It as an easier-to-query version of the
 *    pg_seclabel catalog.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_seclabels',
  synchronize: false,
})
export class PgSeclabels {
  /**
   * The OID of the object this security label pertains to */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number | null /* oid */;
  /**
   * The OID of the system catalog this object appears in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number | null /* oid */;
  /**
   * For a security label on a table column, this is the column number (the
   * objoid and classoid refer to
   * the table itself).  For all other object types, this column is
   * zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number | null /* int4 */;
  /**
   * The type of object to which this label applies, as text. */

  @ViewColumn({ name: 'objtype' })
  public readonly objtype!: string | null /* text */;
  /**
   * The OID of the namespace for this object, if applicable;
   * otherwise NULL. */

  @ViewColumn({ name: 'objnamespace' })
  public readonly objnamespace!: number | null /* oid */;
  /**
   * The name of the object to which this label applies, as text. */

  @ViewColumn({ name: 'objname' })
  public readonly objname!: string | null /* text */;
  /**
   * The label provider associated with this label. */

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string | null /* text */;
  /**
   * The security label applied to this object. */

  @ViewColumn({ name: 'label' })
  public readonly label!: string | null /* text */;
}
