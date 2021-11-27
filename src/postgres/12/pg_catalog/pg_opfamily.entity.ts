import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_opfamily',
  synchronize: false,
})
export class PgOpfamily {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'opfmethod' })
  public readonly opfmethod!: number /* oid */;

  @ViewColumn({ name: 'opfname' })
  public readonly opfname!: unknown /* name */;

  @ViewColumn({ name: 'opfnamespace' })
  public readonly opfnamespace!: number /* oid */;

  @ViewColumn({ name: 'opfowner' })
  public readonly opfowner!: number /* oid */;
}
