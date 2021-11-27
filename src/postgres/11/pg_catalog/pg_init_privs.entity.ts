import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_init_privs',
  synchronize: false,
})
export class PgInitPrivs {
  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;

  @ViewColumn({ name: 'privtype' })
  public readonly privtype!: unknown /* char */;

  @ViewColumn({ name: 'initprivs' })
  public readonly initprivs!: unknown /* _aclitem */;
}
