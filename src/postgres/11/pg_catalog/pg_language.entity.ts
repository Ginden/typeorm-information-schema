import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_language',
  synchronize: false,
})
export class PgLanguage {
  @ViewColumn({ name: 'lanname' })
  public readonly lanname!: unknown /* name */;

  @ViewColumn({ name: 'lanowner' })
  public readonly lanowner!: number /* oid */;

  @ViewColumn({ name: 'lanispl' })
  public readonly lanispl!: boolean /* bool */;

  @ViewColumn({ name: 'lanpltrusted' })
  public readonly lanpltrusted!: boolean /* bool */;

  @ViewColumn({ name: 'lanplcallfoid' })
  public readonly lanplcallfoid!: number /* oid */;

  @ViewColumn({ name: 'laninline' })
  public readonly laninline!: number /* oid */;

  @ViewColumn({ name: 'lanvalidator' })
  public readonly lanvalidator!: number /* oid */;

  @ViewColumn({ name: 'lanacl' })
  public readonly lanacl!: unknown | null /* _aclitem */;
}
