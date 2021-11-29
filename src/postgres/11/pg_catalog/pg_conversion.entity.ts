import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_conversion',
  synchronize: false,
})
export class PgConversion {
  @ViewColumn({ name: 'conname' })
  public readonly conname!: unknown /* name */;

  @ViewColumn({ name: 'connamespace' })
  public readonly connamespace!: number /* oid */;

  @ViewColumn({ name: 'conowner' })
  public readonly conowner!: number /* oid */;

  @ViewColumn({ name: 'conforencoding' })
  public readonly conforencoding!: number /* int4 */;

  @ViewColumn({ name: 'contoencoding' })
  public readonly contoencoding!: number /* int4 */;

  @ViewColumn({ name: 'conproc' })
  public readonly conproc!: unknown /* regproc */;

  @ViewColumn({ name: 'condefault' })
  public readonly condefault!: boolean /* bool */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'conproc',
    referencedColumnName: 'oid',
  })
  readonly conproc_rel?: PgProc;
}
