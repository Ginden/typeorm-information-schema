import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: '_pg_user_mappings',
  synchronize: false,
})
export class PgUserMappings {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number | null /* oid */;

  @ViewColumn({ name: 'umoptions' })
  public readonly umoptions!: string | null /* _text */;

  @ViewColumn({ name: 'umuser' })
  public readonly umuser!: number | null /* oid */;

  @ViewColumn({ name: 'authorization_identifier' })
  public readonly authorization_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_catalog' })
  public readonly foreign_server_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_server_name' })
  public readonly foreign_server_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'srvowner' })
  public readonly srvowner!: string | null /* sql_identifier */;
}
