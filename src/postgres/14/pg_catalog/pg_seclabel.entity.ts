import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_seclabel stores security
 *    labels on database objects.  Security labels can be manipulated
 *    with the SECURITY LABEL command.  For an easier
 *    way to view security labels, see >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_seclabel',
  synchronize: false,
})
export class PgSeclabel {
  /**
   * The OID of the object this security label pertains to */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;
  /**
   * The OID of the system catalog this object appears in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;
  /**
   * For a security label on a table column, this is the column number (the
   * objoid and classoid refer to
   * the table itself).  For all other object types, this column is
   * zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;
  /**
   * The label provider associated with this label. */

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string /* text */;
  /**
   * The security label applied to this object. */

  @ViewColumn({ name: 'label' })
  public readonly label!: string /* text */;
}
