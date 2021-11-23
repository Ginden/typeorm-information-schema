import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user_mappings',
  synchronize: false,
})
export class PgUserMappings {
  @ViewColumn({ name: 'umid' })
  public readonly umid!: number | null /* oid */;

  @ViewColumn({ name: 'srvid' })
  public readonly srvid!: number | null /* oid */;

  @ViewColumn({ name: 'srvname' })
  public readonly srvname!: unknown | null /* name */;

  @ViewColumn({ name: 'umuser' })
  public readonly umuser!: number | null /* oid */;

  @ViewColumn({ name: 'usename' })
  public readonly usename!: unknown | null /* name */;

  @ViewColumn({ name: 'umoptions' })
  public readonly umoptions!: string | null /* _text */;
}
