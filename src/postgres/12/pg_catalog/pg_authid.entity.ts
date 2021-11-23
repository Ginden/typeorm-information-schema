import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_authid',
  synchronize: false,
})
export class PgAuthid {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'rolname' })
  public readonly rolname!: unknown /* name */;

  @ViewColumn({ name: 'rolsuper' })
  public readonly rolsuper!: boolean /* bool */;

  @ViewColumn({ name: 'rolinherit' })
  public readonly rolinherit!: boolean /* bool */;

  @ViewColumn({ name: 'rolcreaterole' })
  public readonly rolcreaterole!: boolean /* bool */;

  @ViewColumn({ name: 'rolcreatedb' })
  public readonly rolcreatedb!: boolean /* bool */;

  @ViewColumn({ name: 'rolcanlogin' })
  public readonly rolcanlogin!: boolean /* bool */;

  @ViewColumn({ name: 'rolreplication' })
  public readonly rolreplication!: boolean /* bool */;

  @ViewColumn({ name: 'rolbypassrls' })
  public readonly rolbypassrls!: boolean /* bool */;

  @ViewColumn({ name: 'rolconnlimit' })
  public readonly rolconnlimit!: number /* int4 */;

  @ViewColumn({ name: 'rolpassword' })
  public readonly rolpassword!: string | null /* text */;

  @ViewColumn({ name: 'rolvaliduntil' })
  public readonly rolvaliduntil!: Date | null /* timestamptz */;
}
