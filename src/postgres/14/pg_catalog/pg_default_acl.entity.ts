import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_default_acl stores initial
 *    privileges to be assigned to newly created objects.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_default_acl',
  synchronize: false,
})
export class PgDefaultAcl {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The OID of the role associated with this entry */

  @ViewColumn({ name: 'defaclrole' })
  public readonly defaclrole!: number /* oid */;
  /**
   * The OID of the namespace associated with this entry,
   * or zero if none */

  @ViewColumn({ name: 'defaclnamespace' })
  public readonly defaclnamespace!: number /* oid */;
  /**
   * Type of object this entry is for:
   * r = relation (table, view),
   * S = sequence,
   * f = function,
   * T = type,
   * n = schema */

  @ViewColumn({ name: 'defaclobjtype' })
  public readonly defaclobjtype!: unknown /* char */;
  /**
   * Access privileges that this type of object should have on creation */

  @ViewColumn({ name: 'defaclacl' })
  public readonly defaclacl!: unknown /* _aclitem */;
}
