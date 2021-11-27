import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_conversion describes
 *    encoding conversion functions.  See >
 *    for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_conversion',
  synchronize: false,
})
export class PgConversion {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Conversion name (unique within a namespace) */

  @ViewColumn({ name: 'conname' })
  public readonly conname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this conversion */

  @ViewColumn({ name: 'connamespace' })
  public readonly connamespace!: number /* oid */;
  /**
   * Owner of the conversion */

  @ViewColumn({ name: 'conowner' })
  public readonly conowner!: number /* oid */;
  /**
   * Source encoding ID */

  @ViewColumn({ name: 'conforencoding' })
  public readonly conforencoding!: number /* int4 */;
  /**
   * Destination encoding ID */

  @ViewColumn({ name: 'contoencoding' })
  public readonly contoencoding!: number /* int4 */;
  /**
   * Conversion function */

  @ViewColumn({ name: 'conproc' })
  public readonly conproc!: unknown /* regproc */;
  /**
   * True if this is the default conversion */

  @ViewColumn({ name: 'condefault' })
  public readonly condefault!: boolean /* bool */;
}
