import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_amproc stores information about
 *    support functions associated with access method operator families.  There
 *    is one row for each support function belonging to an operator family.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_amproc',
  synchronize: false,
})
export class PgAmproc {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The operator family this entry is for */

  @ViewColumn({ name: 'amprocfamily' })
  public readonly amprocfamily!: number /* oid */;
  /**
   * Left-hand input data type of associated operator */

  @ViewColumn({ name: 'amproclefttype' })
  public readonly amproclefttype!: number /* oid */;
  /**
   * Right-hand input data type of associated operator */

  @ViewColumn({ name: 'amprocrighttype' })
  public readonly amprocrighttype!: number /* oid */;
  /**
   * Support function number */

  @ViewColumn({ name: 'amprocnum' })
  public readonly amprocnum!: number /* int2 */;
  /**
   * OID of the function */

  @ViewColumn({ name: 'amproc' })
  public readonly amproc!: unknown /* regproc */;
}
