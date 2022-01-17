import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_event_trigger',
  synchronize: false,
})
export class PgEventTrigger {
  @ViewColumn({ name: 'evtname' })
  public readonly evtname!: unknown /* name */;

  @ViewColumn({ name: 'evtevent' })
  public readonly evtevent!: unknown /* name */;

  @ViewColumn({ name: 'evtowner' })
  public readonly evtowner!: number /* oid */;

  @ViewColumn({ name: 'evtfoid' })
  public readonly evtfoid!: number /* oid */;

  @ViewColumn({ name: 'evtenabled' })
  public readonly evtenabled!: 'O' | 'D' | 'R' | 'A';

  @ViewColumn({ name: 'evttags' })
  public readonly evttags!: string | null /* _text */;
}
