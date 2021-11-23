import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shseclabel',
  synchronize: false,
})
export class PgShseclabel {
  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;

  @ViewColumn({ name: 'provider' })
  public readonly provider!: string /* text */;

  @ViewColumn({ name: 'label' })
  public readonly label!: string /* text */;
}
