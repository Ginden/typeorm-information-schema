import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_namespace',
  synchronize: false,
})
export class PgNamespace {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'nspname' })
  public readonly nspname!: unknown /* name */;

  @ViewColumn({ name: 'nspowner' })
  public readonly nspowner!: number /* oid */;

  @ViewColumn({ name: 'nspacl' })
  public readonly nspacl!: unknown | null /* _aclitem */;
}
