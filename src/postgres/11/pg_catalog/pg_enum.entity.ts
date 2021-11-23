import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_enum',
  synchronize: false,
})
export class PgEnum {
  @ViewColumn({ name: 'enumtypid' })
  public readonly enumtypid!: number /* oid */;

  @ViewColumn({ name: 'enumsortorder' })
  public readonly enumsortorder!: number /* float4 */;

  @ViewColumn({ name: 'enumlabel' })
  public readonly enumlabel!: unknown /* name */;
}
