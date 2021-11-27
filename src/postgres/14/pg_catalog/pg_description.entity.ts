import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_description stores optional descriptions
 *    (comments) for each database object.  Descriptions can be manipulated
 *    with the COMMENT command and viewed with
 *    psql's \d commands.
 *    Descriptions of many built-in system objects are provided in the initial
 *    contents of pg_description.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_description',
  synchronize: false,
})
export class PgDescription {
  /**
   * The OID of the object this description pertains to */

  @ViewColumn({ name: 'objoid' })
  public readonly objoid!: number /* oid */;
  /**
   * The OID of the system catalog this object appears in */

  @ViewColumn({ name: 'classoid' })
  public readonly classoid!: number /* oid */;
  /**
   * For a comment on a table column, this is the column number (the
   * objoid and classoid refer to
   * the table itself).  For all other object types, this column is
   * zero. */

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number /* int4 */;
  /**
   * Arbitrary text that serves as the description of this object */

  @ViewColumn({ name: 'description' })
  public readonly description!: string /* text */;
}
