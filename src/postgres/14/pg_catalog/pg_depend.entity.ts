import { ViewEntity, ViewColumn } from 'typeorm';

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
  public readonly deptype!: unknown /* char */;
}
