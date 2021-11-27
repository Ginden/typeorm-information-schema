import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_subscription_rel contains the
 *    state for each replicated relation in each subscription.  This is a
 *    many-to-many mapping.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_subscription_rel',
  synchronize: false,
})
export class PgSubscriptionRel {
  /**
   * Reference to subscription */

  @ViewColumn({ name: 'srsubid' })
  public readonly srsubid!: number /* oid */;
  /**
   * Reference to relation */

  @ViewColumn({ name: 'srrelid' })
  public readonly srrelid!: number /* oid */;
  /**
   * State code:
   * i = initialize,
   * d = data is being copied,
   * f = finished table copy,
   * s = synchronized,
   * r = ready (normal replication) */

  @ViewColumn({ name: 'srsubstate' })
  public readonly srsubstate!: unknown /* char */;
  /**
   * Remote LSN of the state change used for synchronization coordination
   * when in s or r states,
   * otherwise null */

  @ViewColumn({ name: 'srsublsn' })
  public readonly srsublsn!: unknown | null /* pg_lsn */;
}
