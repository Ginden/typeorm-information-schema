import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_collation',
  synchronize: false,
})
export class PgCollation {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'collname' })
  public readonly collname!: unknown /* name */;

  @ViewColumn({ name: 'collnamespace' })
  public readonly collnamespace!: number /* oid */;

  @ViewColumn({ name: 'collowner' })
  public readonly collowner!: number /* oid */;

  @ViewColumn({ name: 'collprovider' })
  public readonly collprovider!: unknown /* char */;

  @ViewColumn({ name: 'collisdeterministic' })
  public readonly collisdeterministic!: boolean /* bool */;

  @ViewColumn({ name: 'collencoding' })
  public readonly collencoding!: number /* int4 */;

  @ViewColumn({ name: 'collcollate' })
  public readonly collcollate!: unknown /* name */;

  @ViewColumn({ name: 'collctype' })
  public readonly collctype!: unknown /* name */;

  @ViewColumn({ name: 'collversion' })
  public readonly collversion!: string | null /* text */;
}
