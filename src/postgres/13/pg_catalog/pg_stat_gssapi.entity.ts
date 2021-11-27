import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_gssapi',
  synchronize: false,
})
export class PgStatGssapi {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'gss_authenticated' })
  public readonly gss_authenticated!: boolean | null /* bool */;

  @ViewColumn({ name: 'principal' })
  public readonly principal!: string | null /* text */;

  @ViewColumn({ name: 'encrypted' })
  public readonly encrypted!: boolean | null /* bool */;
}
