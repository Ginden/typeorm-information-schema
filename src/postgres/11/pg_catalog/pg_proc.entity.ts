import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_proc',
  synchronize: false,
})
export class PgProc {
  @ViewColumn({ name: 'proname' })
  public readonly proname!: unknown /* name */;

  @ViewColumn({ name: 'pronamespace' })
  public readonly pronamespace!: number /* oid */;

  @ViewColumn({ name: 'proowner' })
  public readonly proowner!: number /* oid */;

  @ViewColumn({ name: 'prolang' })
  public readonly prolang!: number /* oid */;

  @ViewColumn({ name: 'procost' })
  public readonly procost!: number /* float4 */;

  @ViewColumn({ name: 'prorows' })
  public readonly prorows!: number /* float4 */;

  @ViewColumn({ name: 'provariadic' })
  public readonly provariadic!: number /* oid */;

  @ViewColumn({ name: 'protransform' })
  public readonly protransform!: unknown /* regproc */;

  @ViewColumn({ name: 'prokind' })
  public readonly prokind!: unknown /* char */;

  @ViewColumn({ name: 'prosecdef' })
  public readonly prosecdef!: boolean /* bool */;

  @ViewColumn({ name: 'proleakproof' })
  public readonly proleakproof!: boolean /* bool */;

  @ViewColumn({ name: 'proisstrict' })
  public readonly proisstrict!: boolean /* bool */;

  @ViewColumn({ name: 'proretset' })
  public readonly proretset!: boolean /* bool */;

  @ViewColumn({ name: 'provolatile' })
  public readonly provolatile!: unknown /* char */;

  @ViewColumn({ name: 'proparallel' })
  public readonly proparallel!: unknown /* char */;

  @ViewColumn({ name: 'pronargs' })
  public readonly pronargs!: number /* int2 */;

  @ViewColumn({ name: 'pronargdefaults' })
  public readonly pronargdefaults!: number /* int2 */;

  @ViewColumn({ name: 'prorettype' })
  public readonly prorettype!: number /* oid */;

  @ViewColumn({ name: 'proargtypes' })
  public readonly proargtypes!: unknown /* oidvector */;

  @ViewColumn({ name: 'proallargtypes' })
  public readonly proallargtypes!: unknown | null /* _oid */;

  @ViewColumn({ name: 'proargmodes' })
  public readonly proargmodes!: unknown | null /* _char */;

  @ViewColumn({ name: 'proargnames' })
  public readonly proargnames!: string | null /* _text */;

  @ViewColumn({ name: 'proargdefaults' })
  public readonly proargdefaults!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'protrftypes' })
  public readonly protrftypes!: unknown | null /* _oid */;

  @ViewColumn({ name: 'prosrc' })
  public readonly prosrc!: string /* text */;

  @ViewColumn({ name: 'probin' })
  public readonly probin!: string | null /* text */;

  @ViewColumn({ name: 'proconfig' })
  public readonly proconfig!: string | null /* _text */;

  @ViewColumn({ name: 'proacl' })
  public readonly proacl!: unknown | null /* _aclitem */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'protransform',
    referencedColumnName: 'oid',
  })
  readonly protransform_rel?: PgProc;
}
