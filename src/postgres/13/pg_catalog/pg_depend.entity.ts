import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_depend',
  synchronize: false,
})
export class PgDepend {
  @ViewColumn({ name: 'classid' })
  public readonly classid!: number /* oid */;

  @ViewColumn({ name: 'objid' })
  public readonly objid!: number /* oid */;

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;

  @ViewColumn({ name: 'refclassid' })
  public readonly refclassid!: number /* oid */;

  @ViewColumn({ name: 'refobjid' })
  public readonly refobjid!: number /* oid */;

  @ViewColumn({ name: 'refobjsubid' })
  public readonly refobjsubid!: number /* int4 */;

  @ViewColumn({ name: 'deptype' })
  public readonly deptype!: 'n' | 'a' | 'i' | 'P' | 'S' | 'e' | 'x' | 'p';
}
