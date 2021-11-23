import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_prepared_statements',
  synchronize: false,
})
export class PgPreparedStatements {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'statement' })
  public readonly statement!: string | null /* text */;

  @ViewColumn({ name: 'prepare_time' })
  public readonly prepare_time!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'parameter_types' })
  public readonly parameter_types!: unknown | null /* _regtype */;

  @ViewColumn({ name: 'from_sql' })
  public readonly from_sql!: boolean | null /* bool */;
}
