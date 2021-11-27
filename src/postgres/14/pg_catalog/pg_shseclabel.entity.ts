import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_shseclabel stores security
 *    labels on shared database objects.  Security labels can be manipulated
 *    with the SECURITY LABEL command.  For an easier
 *    way to view security labels, see >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shseclabel',
  synchronize: false,
})
export class PgShseclabel {
  /**
   * The OID of the object this security label pertains to */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;
  /**
   * The OID of the system catalog this object appears in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;
  /**
   * The label provider associated with this label. */

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string /* text */;
  /**
   * The security label applied to this object. */

  @ViewColumn({ name: 'label' })
  public readonly label!: string /* text */;
}
