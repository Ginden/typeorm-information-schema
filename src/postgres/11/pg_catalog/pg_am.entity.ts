import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_am',
  synchronize: false,
})
export class PgAm {
  @ViewColumn({ name: 'amname' })
  public readonly amname!: unknown /* name */;

  @ViewColumn({ name: 'amhandler' })
  public readonly amhandler!: unknown /* regproc */;

  @ViewColumn({ name: 'amtype' })
  public readonly amtype!: unknown /* char */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'amhandler',
    referencedColumnName: 'oid',
  })
  readonly amhandler_rel?: PgProc;
}
