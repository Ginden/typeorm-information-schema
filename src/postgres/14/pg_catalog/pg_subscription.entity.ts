import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_subscription contains all existing
 *    logical replication subscriptions.  For more information about logical
 *    replication see >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_subscription',
  synchronize: false,
})
export class PgSubscription {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * OID of the database that the subscription resides in */

  @ViewColumn({ name: 'subdbid' })
  public readonly subdbid!: number /* oid */;
  /**
   * Name of the subscription */

  @ViewColumn({ name: 'subname' })
  public readonly subname!: unknown /* name */;
  /**
   * Owner of the subscription */

  @ViewColumn({ name: 'subowner' })
  public readonly subowner!: number /* oid */;
  /**
   * If true, the subscription is enabled and should be replicating */

  @ViewColumn({ name: 'subenabled' })
  public readonly subenabled!: boolean /* bool */;
  /**
   * If true, the subscription will request that the publisher send data
   * in binary format */

  @ViewColumn({ name: 'subbinary' })
  public readonly subbinary!: boolean /* bool */;
  /**
   * If true, the subscription will allow streaming of in-progress
   * transactions */

  @ViewColumn({ name: 'substream' })
  public readonly substream!: boolean /* bool */;
  /**
   * Connection string to the upstream database */

  @ViewColumn({ name: 'subconninfo' })
  public readonly subconninfo!: string /* text */;
  /**
   * Name of the replication slot in the upstream database (also used
   * for the local replication origin name);
   * null represents NONE */

  @ViewColumn({ name: 'subslotname' })
  public readonly subslotname!: unknown | null /* name */;
  /**
   * The synchronous_commit
   * setting for the subscription's workers to use */

  @ViewColumn({ name: 'subsynccommit' })
  public readonly subsynccommit!: string /* text */;
  /**
   * Array of subscribed publication names. These reference
   * publications defined in the upstream database. For more on publications
   * see >. */

  @ViewColumn({ name: 'subpublications' })
  public readonly subpublications!: string /* _text */;
}
