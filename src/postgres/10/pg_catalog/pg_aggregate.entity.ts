import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
import { PgType } from './pg_type.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_aggregate',
  synchronize: false,
})
export class PgAggregate {
  @ViewColumn({ name: 'aggfnoid' })
  public readonly aggfnoid!: unknown /* regproc */;

  @ViewColumn({ name: 'aggkind' })
  public readonly aggkind!: 'n' | 'h';

  @ViewColumn({ name: 'aggnumdirectargs' })
  public readonly aggnumdirectargs!: number /* int2 */;

  @ViewColumn({ name: 'aggtransfn' })
  public readonly aggtransfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggfinalfn' })
  public readonly aggfinalfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggcombinefn' })
  public readonly aggcombinefn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggserialfn' })
  public readonly aggserialfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggdeserialfn' })
  public readonly aggdeserialfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggmtransfn' })
  public readonly aggmtransfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggminvtransfn' })
  public readonly aggminvtransfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggmfinalfn' })
  public readonly aggmfinalfn!: unknown /* regproc */;

  @ViewColumn({ name: 'aggfinalextra' })
  public readonly aggfinalextra!: boolean /* bool */;

  @ViewColumn({ name: 'aggmfinalextra' })
  public readonly aggmfinalextra!: boolean /* bool */;

  @ViewColumn({ name: 'aggsortop' })
  public readonly aggsortop!: number /* oid */;

  @ViewColumn({ name: 'aggtranstype' })
  public readonly aggtranstype!: number /* oid */;

  @ViewColumn({ name: 'aggtransspace' })
  public readonly aggtransspace!: number /* int4 */;

  @ViewColumn({ name: 'aggmtranstype' })
  public readonly aggmtranstype!: number /* oid */;

  @ViewColumn({ name: 'aggmtransspace' })
  public readonly aggmtransspace!: number /* int4 */;

  @ViewColumn({ name: 'agginitval' })
  public readonly agginitval!: string | null /* text */;

  @ViewColumn({ name: 'aggminitval' })
  public readonly aggminitval!: string | null /* text */;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'aggtranstype',
    referencedColumnName: 'oid',
  })
  readonly aggtranstype_rel?: PgType;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'aggmtranstype',
    referencedColumnName: 'oid',
  })
  readonly aggmtranstype_rel?: PgType;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggminvtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggminvtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggmfinalfn',
    referencedColumnName: 'oid',
  })
  readonly aggmfinalfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggmtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggmtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggdeserialfn',
    referencedColumnName: 'oid',
  })
  readonly aggdeserialfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggserialfn',
    referencedColumnName: 'oid',
  })
  readonly aggserialfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggcombinefn',
    referencedColumnName: 'oid',
  })
  readonly aggcombinefn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggfinalfn',
    referencedColumnName: 'oid',
  })
  readonly aggfinalfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggtransfn',
    referencedColumnName: 'oid',
  })
  readonly aggtransfn_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'aggfnoid',
    referencedColumnName: 'oid',
  })
  readonly aggfn?: PgProc;
}
