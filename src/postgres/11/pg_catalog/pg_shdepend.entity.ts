import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shdepend',
  synchronize: false,
})
export class PgShdepend {
  @ViewColumn({ name: 'dbid' })
  public readonly dbid!: number /* oid */;

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

  @ViewColumn({ name: 'deptype' })
  public readonly deptype!: unknown /* char */;
}
