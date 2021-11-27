import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_cast',
  synchronize: false,
})
export class PgCast {
  @ViewColumn({ name: 'castsource' })
  public readonly castsource!: number /* oid */;

  @ViewColumn({ name: 'casttarget' })
  public readonly casttarget!: number /* oid */;

  @ViewColumn({ name: 'castfunc' })
  public readonly castfunc!: number /* oid */;

  @ViewColumn({ name: 'castcontext' })
  public readonly castcontext!: unknown /* char */;

  @ViewColumn({ name: 'castmethod' })
  public readonly castmethod!: unknown /* char */;
}
