import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_origin',
  synchronize: false,
})
export class PgReplicationOrigin {
  @ViewColumn({ name: 'roident' })
  public readonly roident!: number /* oid */;

  @ViewColumn({ name: 'roname' })
  public readonly roname!: string /* text */;
}
