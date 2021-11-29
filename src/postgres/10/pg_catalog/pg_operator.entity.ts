import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_operator',
  synchronize: false,
})
export class PgOperator {
  @ViewColumn({ name: 'oprname' })
  public readonly oprname!: unknown /* name */;

  @ViewColumn({ name: 'oprnamespace' })
  public readonly oprnamespace!: number /* oid */;

  @ViewColumn({ name: 'oprowner' })
  public readonly oprowner!: number /* oid */;

  @ViewColumn({ name: 'oprkind' })
  public readonly oprkind!: unknown /* char */;

  @ViewColumn({ name: 'oprcanmerge' })
  public readonly oprcanmerge!: boolean /* bool */;

  @ViewColumn({ name: 'oprcanhash' })
  public readonly oprcanhash!: boolean /* bool */;

  @ViewColumn({ name: 'oprleft' })
  public readonly oprleft!: number /* oid */;

  @ViewColumn({ name: 'oprright' })
  public readonly oprright!: number /* oid */;

  @ViewColumn({ name: 'oprresult' })
  public readonly oprresult!: number /* oid */;

  @ViewColumn({ name: 'oprcom' })
  public readonly oprcom!: number /* oid */;

  @ViewColumn({ name: 'oprnegate' })
  public readonly oprnegate!: number /* oid */;

  @ViewColumn({ name: 'oprcode' })
  public readonly oprcode!: unknown /* regproc */;

  @ViewColumn({ name: 'oprrest' })
  public readonly oprrest!: unknown /* regproc */;

  @ViewColumn({ name: 'oprjoin' })
  public readonly oprjoin!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprrest',
    referencedColumnName: 'oid',
  })
  readonly oprrest_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprjoin',
    referencedColumnName: 'oid',
  })
  readonly oprjoin_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'oprcode',
    referencedColumnName: 'oid',
  })
  readonly oprcode_rel?: PgProc;
}
