import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_publication contains all
 *    publications created in the database.  For more on publications see
 *    >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication',
  synchronize: false,
})
export class PgPublication {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the publication */

  @ViewColumn({ name: 'pubname' })
  public readonly pubname!: unknown /* name */;
  /**
   * Owner of the publication */

  @ViewColumn({ name: 'pubowner' })
  public readonly pubowner!: number /* oid */;
  /**
   * If true, this publication automatically includes all tables
   * in the database, including any that will be created in the future. */

  @ViewColumn({ name: 'puballtables' })
  public readonly puballtables!: boolean /* bool */;
  /**
   * If true, > operations are replicated for
   * tables in the publication. */

  @ViewColumn({ name: 'pubinsert' })
  public readonly pubinsert!: boolean /* bool */;
  /**
   * If true, > operations are replicated for
   * tables in the publication. */

  @ViewColumn({ name: 'pubupdate' })
  public readonly pubupdate!: boolean /* bool */;
  /**
   * If true, > operations are replicated for
   * tables in the publication. */

  @ViewColumn({ name: 'pubdelete' })
  public readonly pubdelete!: boolean /* bool */;
  /**
   * If true, > operations are replicated for
   * tables in the publication. */

  @ViewColumn({ name: 'pubtruncate' })
  public readonly pubtruncate!: boolean /* bool */;
  /**
   * If true, operations on a leaf partition are replicated using the
   * identity and schema of its topmost partitioned ancestor mentioned in the
   * publication instead of its own. */

  @ViewColumn({ name: 'pubviaroot' })
  public readonly pubviaroot!: boolean /* bool */;
}
