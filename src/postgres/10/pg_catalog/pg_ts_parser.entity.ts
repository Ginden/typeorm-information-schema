import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_parser',
  synchronize: false,
})
export class PgTsParser {
  @ViewColumn({ name: 'prsname' })
  public readonly prsname!: unknown /* name */;

  @ViewColumn({ name: 'prsnamespace' })
  public readonly prsnamespace!: number /* oid */;

  @ViewColumn({ name: 'prsstart' })
  public readonly prsstart!: unknown /* regproc */;

  @ViewColumn({ name: 'prstoken' })
  public readonly prstoken!: unknown /* regproc */;

  @ViewColumn({ name: 'prsend' })
  public readonly prsend!: unknown /* regproc */;

  @ViewColumn({ name: 'prsheadline' })
  public readonly prsheadline!: unknown /* regproc */;

  @ViewColumn({ name: 'prslextype' })
  public readonly prslextype!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'prsstart',
    referencedColumnName: 'oid',
  })
  readonly prsstart_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'prstoken',
    referencedColumnName: 'oid',
  })
  readonly prstoken_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'prsend',
    referencedColumnName: 'oid',
  })
  readonly prsend_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'prsheadline',
    referencedColumnName: 'oid',
  })
  readonly prsheadline_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'prslextype',
    referencedColumnName: 'oid',
  })
  readonly prslextype_rel?: PgProc;
}
