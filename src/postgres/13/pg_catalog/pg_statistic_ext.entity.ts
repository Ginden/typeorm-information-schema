import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic_ext',
  synchronize: false,
})
export class PgStatisticExt {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'stxrelid' })
  public readonly stxrelid!: number /* oid */;

  @ViewColumn({ name: 'stxname' })
  public readonly stxname!: unknown /* name */;

  @ViewColumn({ name: 'stxnamespace' })
  public readonly stxnamespace!: number /* oid */;

  @ViewColumn({ name: 'stxowner' })
  public readonly stxowner!: number /* oid */;

  @ViewColumn({ name: 'stxstattarget' })
  public readonly stxstattarget!: number /* int4 */;

  @ViewColumn({ name: 'stxkeys' })
  public readonly stxkeys!: number[] /* int2vector */;

  @ViewColumn({ name: 'stxkind' })
  public readonly stxkind!: ('d' | 'f' | 'm' | 'e')[];
}
