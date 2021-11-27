import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_largeobject_metadata',
  synchronize: false,
})
export class PgLargeobjectMetadata {
  @ViewColumn({ name: 'lomowner' })
  public readonly lomowner!: number /* oid */;

  @ViewColumn({ name: 'lomacl' })
  public readonly lomacl!: unknown | null /* _aclitem */;
}
