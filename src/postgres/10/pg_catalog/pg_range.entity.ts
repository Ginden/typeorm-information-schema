import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_range',
  synchronize: false,
})
export class PgRange {
  @ViewColumn({ name: 'rngtypid' })
  public readonly rngtypid!: number /* oid */;

  @ViewColumn({ name: 'rngsubtype' })
  public readonly rngsubtype!: number /* oid */;

  @ViewColumn({ name: 'rngcollation' })
  public readonly rngcollation!: number /* oid */;

  @ViewColumn({ name: 'rngsubopc' })
  public readonly rngsubopc!: number /* oid */;

  @ViewColumn({ name: 'rngcanonical' })
  public readonly rngcanonical!: unknown /* regproc */;

  @ViewColumn({ name: 'rngsubdiff' })
  public readonly rngsubdiff!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'rngsubdiff',
    referencedColumnName: 'oid',
  })
  readonly rngsubdiff_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'rngcanonical',
    referencedColumnName: 'oid',
  })
  readonly rngcanonical_rel?: PgProc;
}
