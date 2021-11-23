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

  @ViewColumn({ name: 'compression' })
  public readonly compression!: boolean | null /* bool */;

  @ViewColumn({ name: 'clientdn' })
  public readonly clientdn!: string | null /* text */;
}
