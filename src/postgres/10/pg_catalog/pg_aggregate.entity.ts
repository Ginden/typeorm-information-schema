import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_aggregate',
  synchronize: false,
})
export class PgAggregate {
  @ViewColumn({ name: 'aggfnoid' })
  public readonly aggfnoid!: unknown /* regproc */;

  @ViewColumn({ name: 'aggkind' })
  public readonly aggkind!: unknown /* char */;

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

  @ViewColumn({ name: 'aggfinalmodify' })
  public readonly aggfinalmodify!: unknown /* char */;

  @ViewColumn({ name: 'aggmfinalmodify' })
  public readonly aggmfinalmodify!: unknown /* char */;

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
}
