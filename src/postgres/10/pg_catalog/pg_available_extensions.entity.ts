import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_available_extensions',
  synchronize: false,
})
export class PgAvailableExtensions {
  @ViewColumn({ name: 'name' })
  public readonly name!: unknown | null /* name */;

  @ViewColumn({ name: 'default_version' })
  public readonly default_version!: string | null /* text */;

  @ViewColumn({ name: 'installed_version' })
  public readonly installed_version!: string | null /* text */;

  @ViewColumn({ name: 'comment' })
  public readonly comment!: string | null /* text */;
}
