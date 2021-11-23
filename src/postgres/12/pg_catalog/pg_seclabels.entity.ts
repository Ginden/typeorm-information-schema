import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_seclabels',
  synchronize: false,
})
export class PgSeclabels {
  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number | null /* oid */;

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number | null /* oid */;

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number | null /* int4 */;

  @ViewColumn({ name: 'objtype' })
  public readonly objtype!: string | null /* text */;

  @ViewColumn({ name: 'objnamespace' })
  public readonly objnamespace!: number | null /* oid */;

  @ViewColumn({ name: 'objname' })
  public readonly objname!: string | null /* text */;

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string | null /* text */;

  @ViewColumn({ name: 'label' })
  public readonly label!: string | null /* text */;
}
