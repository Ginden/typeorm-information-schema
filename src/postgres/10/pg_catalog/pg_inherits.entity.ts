import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_inherits',
  synchronize: false,
})
export class PgInherits {
  @ViewColumn({ name: 'inhrelid' })
  public readonly inhrelid!: number /* oid */;

  @ViewColumn({ name: 'inhparent' })
  public readonly inhparent!: number /* oid */;

  @ViewColumn({ name: 'inhseqno' })
  public readonly inhseqno!: number /* int4 */;
}
