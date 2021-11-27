import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_opclass',
  synchronize: false,
})
export class PgOpclass {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'opcmethod' })
  public readonly opcmethod!: number /* oid */;

  @ViewColumn({ name: 'opcname' })
  public readonly opcname!: unknown /* name */;

  @ViewColumn({ name: 'opcnamespace' })
  public readonly opcnamespace!: number /* oid */;

  @ViewColumn({ name: 'opcowner' })
  public readonly opcowner!: number /* oid */;

  @ViewColumn({ name: 'opcfamily' })
  public readonly opcfamily!: number /* oid */;

  @ViewColumn({ name: 'opcintype' })
  public readonly opcintype!: number /* oid */;

  @ViewColumn({ name: 'opcdefault' })
  public readonly opcdefault!: boolean /* bool */;

  @ViewColumn({ name: 'opckeytype' })
  public readonly opckeytype!: number /* oid */;
}
