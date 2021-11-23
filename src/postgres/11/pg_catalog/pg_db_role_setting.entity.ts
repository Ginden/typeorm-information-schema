import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_db_role_setting',
  synchronize: false,
})
export class PgDbRoleSetting {
  @ViewColumn({ name: 'setdatabase' })
  public readonly setdatabase!: number /* oid */;

  @ViewColumn({ name: 'setrole' })
  public readonly setrole!: number /* oid */;

  @ViewColumn({ name: 'setconfig' })
  public readonly setconfig!: string | null /* _text */;
}
