import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_attrdef stores column default
 *    values.  The main information about columns is stored in
 *    pg_attribute.
 *    Only columns for which a default value has been explicitly set will have
 *    an entry here.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_attrdef',
  synchronize: false,
})
export class PgAttrdef {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The table this column belongs to */

  @ViewColumn({ name: 'adrelid' })
  public readonly adrelid!: number /* oid */;
  /**
   * The number of the column */

  @ViewColumn({ name: 'adnum' })
  public readonly adnum!: number /* int2 */;
  /**
   * The column default value, in nodeToString()
   * representation.  Use pg_get_expr(adbin, adrelid) to
   * convert it to an SQL expression. */

  @ViewColumn({ name: 'adbin' })
  public readonly adbin!: unknown /* pg_node_tree */;
}
