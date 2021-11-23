import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_tablespace',
  synchronize: false,
})
export class PgTablespace {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'spcname' })
  public readonly spcname!: unknown /* name */;

  @ViewColumn({ name: 'spcowner' })
  public readonly spcowner!: number /* oid */;

  @ViewColumn({ name: 'spcacl' })
  public readonly spcacl!: unknown | null /* _aclitem */;

  @ViewColumn({ name: 'spcoptions' })
  public readonly spcoptions!: string | null /* _text */;
}
