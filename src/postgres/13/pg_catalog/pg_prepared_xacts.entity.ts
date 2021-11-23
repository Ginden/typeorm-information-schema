import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_prepared_xacts',
  synchronize: false,
})
export class PgPreparedXacts {
  @ViewColumn({ name: 'transaction' })
  public readonly transaction!: unknown | null /* xid */;

  @ViewColumn({ name: 'gid' })
  public readonly gid!: string | null /* text */;

  @ViewColumn({ name: 'prepared' })
  public readonly prepared!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'owner' })
  public readonly owner!: unknown | null /* name */;

  @ViewColumn({ name: 'database' })
  public readonly database!: unknown | null /* name */;
}
