import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_event_trigger stores event triggers.
 *    See > for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_event_trigger',
  synchronize: false,
})
export class PgEventTrigger {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Trigger name (must be unique) */

  @ViewColumn({ name: 'evtname' })
  public readonly evtname!: unknown /* name */;
  /**
   * Identifies the event for which this trigger fires */

  @ViewColumn({ name: 'evtevent' })
  public readonly evtevent!: unknown /* name */;
  /**
   * Owner of the event trigger */

  @ViewColumn({ name: 'evtowner' })
  public readonly evtowner!: number /* oid */;
  /**
   * The function to be called */

  @ViewColumn({ name: 'evtfoid' })
  public readonly evtfoid!: number /* oid */;
  /**
   * Controls in which > modes
   * the event trigger fires.
   * O = trigger fires in origin and local modes,
   * D = trigger is disabled,
   * R = trigger fires in replica mode,
   * A = trigger fires always. */

  @ViewColumn({ name: 'evtenabled' })
  public readonly evtenabled!: unknown /* char */;
  /**
   * Command tags for which this trigger will fire.  If NULL, the firing
   * of this trigger is not restricted on the basis of the command tag. */

  @ViewColumn({ name: 'evttags' })
  public readonly evttags!: string | null /* _text */;
}
