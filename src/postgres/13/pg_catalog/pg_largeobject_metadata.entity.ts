import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_largeobject_metadata',
  synchronize: false,
})
export class PgLargeobjectMetadata {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'lomowner' })
  public readonly lomowner!: number /* oid */;

  @ViewColumn({ name: 'lomacl' })
  public readonly lomacl!: unknown | null /* _aclitem */;
}
