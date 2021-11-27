import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_shdescription stores optional
 *    descriptions (comments) for shared database objects.  Descriptions can be
 *    manipulated with the COMMENT command and viewed with
 *    psql's \d commands.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shdescription',
  synchronize: false,
})
export class PgShdescription {
  /**
   * The OID of the object this description pertains to */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;
  /**
   * The OID of the system catalog this object appears in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;
  /**
   * Arbitrary text that serves as the description of this object */

  @ViewColumn({ name: 'description' })
  public readonly description!: string /* text */;
}
