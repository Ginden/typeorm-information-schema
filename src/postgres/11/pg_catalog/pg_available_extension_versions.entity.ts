import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_available_extension_versions',
  synchronize: false,
})
export class PgAvailableExtensionVersions {
  @ViewColumn({ name: 'name' })
  public readonly name!: unknown | null /* name */;

  @ViewColumn({ name: 'version' })
  public readonly version!: string | null /* text */;

  @ViewColumn({ name: 'installed' })
  public readonly installed!: boolean | null /* bool */;

  @ViewColumn({ name: 'superuser' })
  public readonly superuser!: boolean | null /* bool */;

  @ViewColumn({ name: 'relocatable' })
  public readonly relocatable!: boolean | null /* bool */;

  @ViewColumn({ name: 'schema' })
  public readonly schema!: unknown | null /* name */;

  @ViewColumn({ name: 'requires' })
  public readonly requires!: unknown | null /* _name */;

  @ViewColumn({ name: 'comment' })
  public readonly comment!: string | null /* text */;
}
