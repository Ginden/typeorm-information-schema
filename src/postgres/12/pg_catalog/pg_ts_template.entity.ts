import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_template',
  synchronize: false,
})
export class PgTsTemplate {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'tmplname' })
  public readonly tmplname!: unknown /* name */;

  @ViewColumn({ name: 'tmplnamespace' })
  public readonly tmplnamespace!: number /* oid */;

  @ViewColumn({ name: 'tmplinit' })
  public readonly tmplinit!: unknown /* regproc */;

  @ViewColumn({ name: 'tmpllexize' })
  public readonly tmpllexize!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'tmplinit',
    referencedColumnName: 'oid',
  })
  readonly tmplinit_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'tmpllexize',
    referencedColumnName: 'oid',
  })
  readonly tmpllexize_rel?: PgProc;
}
