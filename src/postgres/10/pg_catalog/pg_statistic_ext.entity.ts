import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic_ext',
  synchronize: false,
})
export class PgStatisticExt {
  @ViewColumn({ name: 'stxrelid' })
  public readonly stxrelid!: number /* oid */;

  @ViewColumn({ name: 'stxname' })
  public readonly stxname!: unknown /* name */;

  @ViewColumn({ name: 'stxnamespace' })
  public readonly stxnamespace!: number /* oid */;

  @ViewColumn({ name: 'stxowner' })
  public readonly stxowner!: number /* oid */;

  @ViewColumn({ name: 'stxkeys' })
  public readonly stxkeys!: unknown /* int2vector */;

  @ViewColumn({ name: 'stxkind' })
  public readonly stxkind!: unknown /* _char */;

  @ViewColumn({ name: 'stxndistinct' })
  public readonly stxndistinct!: unknown | null /* pg_ndistinct */;

  @ViewColumn({ name: 'stxdependencies' })
  public readonly stxdependencies!: unknown | null /* pg_dependencies */;
}
