import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'information_schema',
  name: 'role_routine_grants',
  synchronize: false,
})
export class RoleRoutineGrants {
  @ViewColumn({ name: 'grantor' })
  public readonly grantor!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'grantee' })
  public readonly grantee!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_catalog' })
  public readonly specific_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_schema' })
  public readonly specific_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'specific_name' })
  public readonly specific_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_catalog' })
  public readonly routine_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_schema' })
  public readonly routine_schema!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'routine_name' })
  public readonly routine_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'privilege_type' })
  public readonly privilege_type!: string | null /* character_data */;

  @ViewColumn({ name: 'is_grantable' })
  public readonly is_grantable!: ('YES' | 'NO') | null /* yes_or_no */;
}
