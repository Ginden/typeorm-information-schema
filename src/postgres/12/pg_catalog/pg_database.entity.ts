import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_database',
  synchronize: false,
})
export class PgDatabase {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'datname' })
  public readonly datname!: unknown /* name */;

  @ViewColumn({ name: 'datdba' })
  public readonly datdba!: number /* oid */;

  @ViewColumn({ name: 'encoding' })
  public readonly encoding!: number /* int4 */;

  @ViewColumn({ name: 'datcollate' })
  public readonly datcollate!: unknown /* name */;

  @ViewColumn({ name: 'datctype' })
  public readonly datctype!: unknown /* name */;

  @ViewColumn({ name: 'datistemplate' })
  public readonly datistemplate!: boolean /* bool */;

  @ViewColumn({ name: 'datallowconn' })
  public readonly datallowconn!: boolean /* bool */;

  @ViewColumn({ name: 'datconnlimit' })
  public readonly datconnlimit!: number /* int4 */;

  @ViewColumn({ name: 'datlastsysoid' })
  public readonly datlastsysoid!: number /* oid */;

  @ViewColumn({ name: 'datfrozenxid' })
  public readonly datfrozenxid!: unknown /* xid */;

  @ViewColumn({ name: 'datminmxid' })
  public readonly datminmxid!: unknown /* xid */;

  @ViewColumn({ name: 'dattablespace' })
  public readonly dattablespace!: number /* oid */;

  @ViewColumn({ name: 'datacl' })
  public readonly datacl!: unknown | null /* _aclitem */;
}
