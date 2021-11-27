import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_default_acl',
  synchronize: false,
})
export class PgDefaultAcl {
  @ViewColumn({ name: 'defaclrole' })
  public readonly defaclrole!: number /* oid */;

  @ViewColumn({ name: 'defaclnamespace' })
  public readonly defaclnamespace!: number /* oid */;

  @ViewColumn({ name: 'defaclobjtype' })
  public readonly defaclobjtype!: unknown /* char */;

  @ViewColumn({ name: 'defaclacl' })
  public readonly defaclacl!: unknown | null /* _aclitem */;
}
