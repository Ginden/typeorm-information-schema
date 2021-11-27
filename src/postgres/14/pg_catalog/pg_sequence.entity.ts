import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_sequence contains information about
 *    sequences.  Some of the information about sequences, such as the name and
 *    the schema, is in
 *    pg_class
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_sequence',
  synchronize: false,
})
export class PgSequence {
  /**
   * The OID of the pg_class entry for this sequence */

  @ViewColumn({ name: 'seqrelid' })
  public readonly seqrelid!: number /* oid */;
  /**
   * Data type of the sequence */

  @ViewColumn({ name: 'seqtypid' })
  public readonly seqtypid!: number /* oid */;
  /**
   * Start value of the sequence */

  @ViewColumn({ name: 'seqstart' })
  public readonly seqstart!: string /* int8 */;
  /**
   * Increment value of the sequence */

  @ViewColumn({ name: 'seqincrement' })
  public readonly seqincrement!: string /* int8 */;
  /**
   * Maximum value of the sequence */

  @ViewColumn({ name: 'seqmax' })
  public readonly seqmax!: string /* int8 */;
  /**
   * Minimum value of the sequence */

  @ViewColumn({ name: 'seqmin' })
  public readonly seqmin!: string /* int8 */;
  /**
   * Cache size of the sequence */

  @ViewColumn({ name: 'seqcache' })
  public readonly seqcache!: string /* int8 */;
  /**
   * Whether the sequence cycles */

  @ViewColumn({ name: 'seqcycle' })
  public readonly seqcycle!: boolean /* bool */;
}
