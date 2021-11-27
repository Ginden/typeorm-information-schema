import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_template',
  synchronize: false,
})
export class PgTsTemplate {
  @ViewColumn({ name: 'tmplname' })
  public readonly tmplname!: unknown /* name */;

  @ViewColumn({ name: 'tmplnamespace' })
  public readonly tmplnamespace!: number /* oid */;

  @ViewColumn({ name: 'tmplinit' })
  public readonly tmplinit!: unknown /* regproc */;

  @ViewColumn({ name: 'tmpllexize' })
  public readonly tmpllexize!: unknown /* regproc */;
}
