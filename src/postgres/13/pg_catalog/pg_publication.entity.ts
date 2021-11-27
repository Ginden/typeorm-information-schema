import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication',
  synchronize: false,
})
export class PgPublication {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'pubname' })
  public readonly pubname!: unknown /* name */;

  @ViewColumn({ name: 'pubowner' })
  public readonly pubowner!: number /* oid */;

  @ViewColumn({ name: 'puballtables' })
  public readonly puballtables!: boolean /* bool */;

  @ViewColumn({ name: 'pubinsert' })
  public readonly pubinsert!: boolean /* bool */;

  @ViewColumn({ name: 'pubupdate' })
  public readonly pubupdate!: boolean /* bool */;

  @ViewColumn({ name: 'pubdelete' })
  public readonly pubdelete!: boolean /* bool */;

  @ViewColumn({ name: 'pubtruncate' })
  public readonly pubtruncate!: boolean /* bool */;

  @ViewColumn({ name: 'pubviaroot' })
  public readonly pubviaroot!: boolean /* bool */;
}
