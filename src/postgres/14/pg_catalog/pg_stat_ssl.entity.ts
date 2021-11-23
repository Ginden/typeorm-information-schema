import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_stat_ssl',
  synchronize: false,
})
export class PgStatSsl {
  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'ssl' })
  public readonly ssl!: boolean | null /* bool */;

  @ViewColumn({ name: 'version' })
  public readonly version!: string | null /* text */;

  @ViewColumn({ name: 'cipher' })
  public readonly cipher!: string | null /* text */;

  @ViewColumn({ name: 'bits' })
  public readonly bits!: number | null /* int4 */;

  @ViewColumn({ name: 'client_dn' })
  public readonly client_dn!: string | null /* text */;

  @ViewColumn({ name: 'client_serial' })
  public readonly client_serial!: unknown | null /* numeric */;

  @ViewColumn({ name: 'issuer_dn' })
  public readonly issuer_dn!: string | null /* text */;
}
