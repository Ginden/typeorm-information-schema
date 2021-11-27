import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_db_role_setting records the default
 *    values that have been set for run-time configuration variables,
 *    for each role and database combination.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_db_role_setting',
  synchronize: false,
})
export class PgDbRoleSetting {
  /**
   * The OID of the database the setting is applicable to, or zero if not database-specific */

  @ViewColumn({ name: 'setdatabase' })
  public readonly setdatabase!: number /* oid */;
  /**
   * The OID of the role the setting is applicable to, or zero if not role-specific */

  @ViewColumn({ name: 'setrole' })
  public readonly setrole!: number /* oid */;
  /**
   * Defaults for run-time configuration variables */

  @ViewColumn({ name: 'setconfig' })
  public readonly setconfig!: string | null /* _text */;
}
