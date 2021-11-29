import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_transform',
  synchronize: false,
})
export class PgTransform {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'trftype' })
  public readonly trftype!: number /* oid */;

  @ViewColumn({ name: 'trflang' })
  public readonly trflang!: number /* oid */;

  @ViewColumn({ name: 'trffromsql' })
  public readonly trffromsql!: unknown /* regproc */;

  @ViewColumn({ name: 'trftosql' })
  public readonly trftosql!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'trffromsql',
    referencedColumnName: 'oid',
  })
  readonly trffromsql_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'trftosql',
    referencedColumnName: 'oid',
  })
  readonly trftosql_rel?: PgProc;
}
