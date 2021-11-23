import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_roles',
  synchronize: false,
})
export class PgRoles {
  @ViewColumn({ name: 'rolname' })
  public readonly rolname!: unknown | null /* name */;

  @ViewColumn({ name: 'rolsuper' })
  public readonly rolsuper!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolinherit' })
  public readonly rolinherit!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolcreaterole' })
  public readonly rolcreaterole!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolcreatedb' })
  public readonly rolcreatedb!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolcanlogin' })
  public readonly rolcanlogin!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolreplication' })
  public readonly rolreplication!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolconnlimit' })
  public readonly rolconnlimit!: number | null /* int4 */;

  @ViewColumn({ name: 'rolpassword' })
  public readonly rolpassword!: string | null /* text */;

  @ViewColumn({ name: 'rolvaliduntil' })
  public readonly rolvaliduntil!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'rolbypassrls' })
  public readonly rolbypassrls!: boolean | null /* bool */;

  @ViewColumn({ name: 'rolconfig' })
  public readonly rolconfig!: string | null /* _text */;

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number | null /* oid */;
}
