import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_amproc',
  synchronize: false,
})
export class PgAmproc {
  @ViewColumn({ name: 'amprocfamily' })
  public readonly amprocfamily!: number /* oid */;

  @ViewColumn({ name: 'amproclefttype' })
  public readonly amproclefttype!: number /* oid */;

  @ViewColumn({ name: 'amprocrighttype' })
  public readonly amprocrighttype!: number /* oid */;

  @ViewColumn({ name: 'amprocnum' })
  public readonly amprocnum!: number /* int2 */;

  @ViewColumn({ name: 'amproc' })
  public readonly amproc!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'amproc',
    referencedColumnName: 'oid',
  })
  readonly amproc_rel?: PgProc;
}
