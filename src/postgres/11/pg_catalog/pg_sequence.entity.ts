import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_sequence',
  synchronize: false,
})
export class PgSequence {
  @ViewColumn({ name: 'seqrelid' })
  public readonly seqrelid!: number /* oid */;

  @ViewColumn({ name: 'seqtypid' })
  public readonly seqtypid!: number /* oid */;

  @ViewColumn({ name: 'seqstart' })
  public readonly seqstart!: `${number}` /* int8 */;

  @ViewColumn({ name: 'seqincrement' })
  public readonly seqincrement!: `${number}` /* int8 */;

  @ViewColumn({ name: 'seqmax' })
  public readonly seqmax!: `${number}` /* int8 */;

  @ViewColumn({ name: 'seqmin' })
  public readonly seqmin!: `${number}` /* int8 */;

  @ViewColumn({ name: 'seqcache' })
  public readonly seqcache!: `${number}` /* int8 */;

  @ViewColumn({ name: 'seqcycle' })
  public readonly seqcycle!: boolean /* bool */;
}
