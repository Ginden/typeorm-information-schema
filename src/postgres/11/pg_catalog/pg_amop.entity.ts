import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_amop',
  synchronize: false,
})
export class PgAmop {
  @ViewColumn({ name: 'amopfamily' })
  public readonly amopfamily!: number /* oid */;

  @ViewColumn({ name: 'amoplefttype' })
  public readonly amoplefttype!: number /* oid */;

  @ViewColumn({ name: 'amoprighttype' })
  public readonly amoprighttype!: number /* oid */;

  @ViewColumn({ name: 'amopstrategy' })
  public readonly amopstrategy!: number /* int2 */;

  @ViewColumn({ name: 'amoppurpose' })
  public readonly amoppurpose!: unknown /* char */;

  @ViewColumn({ name: 'amopopr' })
  public readonly amopopr!: number /* oid */;

  @ViewColumn({ name: 'amopmethod' })
  public readonly amopmethod!: number /* oid */;

  @ViewColumn({ name: 'amopsortfamily' })
  public readonly amopsortfamily!: number /* oid */;
}
