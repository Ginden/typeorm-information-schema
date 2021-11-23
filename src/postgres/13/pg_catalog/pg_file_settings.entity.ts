import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_file_settings',
  synchronize: false,
})
export class PgFileSettings {
  @ViewColumn({ name: 'sourcefile' })
  public readonly sourcefile!: string | null /* text */;

  @ViewColumn({ name: 'sourceline' })
  public readonly sourceline!: number | null /* int4 */;

  @ViewColumn({ name: 'seqno' })
  public readonly seqno!: number | null /* int4 */;

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;

  @ViewColumn({ name: 'applied' })
  public readonly applied!: boolean | null /* bool */;

  @ViewColumn({ name: 'error' })
  public readonly error!: string | null /* text */;
}
