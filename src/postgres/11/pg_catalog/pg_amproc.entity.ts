import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_amproc',
  synchronize: false,
})
export class PgAmproc {
  @ViewColumn({ name: 'amprocfamily' })
  public readonly amprocfamily!: number /* oid */;

  @ViewColumn({ name: 'amproclefttype' })
  public readonly amproclefttype!: number /* oid */;

  @ViewColumn({ name: 'amprocrighttype' })
  public readonly amprocrighttype!: number /* oid */;

  @ViewColumn({ name: 'amprocnum' })
  public readonly amprocnum!: number /* int2 */;

  @ViewColumn({ name: 'amproc' })
  public readonly amproc!: unknown /* regproc */;
}
