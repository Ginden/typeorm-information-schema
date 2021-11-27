import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_server',
  synchronize: false,
})
export class PgForeignServer {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'srvname' })
  public readonly srvname!: unknown /* name */;

  @ViewColumn({ name: 'srvowner' })
  public readonly srvowner!: number /* oid */;

  @ViewColumn({ name: 'srvfdw' })
  public readonly srvfdw!: number /* oid */;

  @ViewColumn({ name: 'srvtype' })
  public readonly srvtype!: string | null /* text */;

  @ViewColumn({ name: 'srvversion' })
  public readonly srvversion!: string | null /* text */;

  @ViewColumn({ name: 'srvacl' })
  public readonly srvacl!: unknown | null /* _aclitem */;

  @ViewColumn({ name: 'srvoptions' })
  public readonly srvoptions!: string | null /* _text */;
}
