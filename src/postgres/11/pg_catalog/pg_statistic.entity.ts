import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_statistic',
  synchronize: false,
})
export class PgStatistic {
  @ViewColumn({ name: 'starelid' })
  public readonly starelid!: number /* oid */;

  @ViewColumn({ name: 'staattnum' })
  public readonly staattnum!: number /* int2 */;

  @ViewColumn({ name: 'stainherit' })
  public readonly stainherit!: boolean /* bool */;

  @ViewColumn({ name: 'stanullfrac' })
  public readonly stanullfrac!: number /* float4 */;

  @ViewColumn({ name: 'stawidth' })
  public readonly stawidth!: number /* int4 */;

  @ViewColumn({ name: 'stadistinct' })
  public readonly stadistinct!: number /* float4 */;

  @ViewColumn({ name: 'stakind1' })
  public readonly stakind1!: number /* int2 */;

  @ViewColumn({ name: 'stakind2' })
  public readonly stakind2!: number /* int2 */;

  @ViewColumn({ name: 'stakind3' })
  public readonly stakind3!: number /* int2 */;

  @ViewColumn({ name: 'stakind4' })
  public readonly stakind4!: number /* int2 */;

  @ViewColumn({ name: 'stakind5' })
  public readonly stakind5!: number /* int2 */;

  @ViewColumn({ name: 'staop1' })
  public readonly staop1!: number /* oid */;

  @ViewColumn({ name: 'staop2' })
  public readonly staop2!: number /* oid */;

  @ViewColumn({ name: 'staop3' })
  public readonly staop3!: number /* oid */;

  @ViewColumn({ name: 'staop4' })
  public readonly staop4!: number /* oid */;

  @ViewColumn({ name: 'staop5' })
  public readonly staop5!: number /* oid */;

  @ViewColumn({ name: 'stanumbers1' })
  public readonly stanumbers1!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers2' })
  public readonly stanumbers2!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers3' })
  public readonly stanumbers3!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers4' })
  public readonly stanumbers4!: number | null /* _float4 */;

  @ViewColumn({ name: 'stanumbers5' })
  public readonly stanumbers5!: number | null /* _float4 */;

  @ViewColumn({ name: 'stavalues1' })
  public readonly stavalues1!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues2' })
  public readonly stavalues2!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues3' })
  public readonly stavalues3!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues4' })
  public readonly stavalues4!: unknown | null /* anyarray */;

  @ViewColumn({ name: 'stavalues5' })
  public readonly stavalues5!: unknown | null /* anyarray */;
}
