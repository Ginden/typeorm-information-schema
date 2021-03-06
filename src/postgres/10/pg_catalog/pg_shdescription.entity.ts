import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shdescription',
  synchronize: false,
})
export class PgShdescription {
  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;

  @ViewColumn({ name: 'description' })
  public readonly description!: string /* text */;
}
