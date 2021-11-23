import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic_ext_data',
  synchronize: false,
})
export class PgStatisticExtData {
  @ViewColumn({ name: 'stxoid' })
  public readonly stxoid!: number /* oid */;

  @ViewColumn({ name: 'stxdndistinct' })
  public readonly stxdndistinct!: unknown | null /* pg_ndistinct */;

  @ViewColumn({ name: 'stxddependencies' })
  public readonly stxddependencies!: unknown | null /* pg_dependencies */;

  @ViewColumn({ name: 'stxdmcv' })
  public readonly stxdmcv!: unknown | null /* pg_mcv_list */;
}
