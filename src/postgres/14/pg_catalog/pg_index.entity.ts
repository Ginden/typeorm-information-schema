import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_index contains part of the information
 *    about indexes.  The rest is mostly in
 *    pg_class.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_index',
  synchronize: false,
})
export class PgIndex {
  /**
   * The OID of the pg_class entry for this index */

  @ViewColumn({ name: 'indexrelid' })
  public readonly indexrelid!: number /* oid */;
  /**
   * The OID of the pg_class entry for the table this index is for */

  @ViewColumn({ name: 'indrelid' })
  public readonly indrelid!: number /* oid */;
  /**
   * The total number of columns in the index (duplicates
   * pg_class.relnatts); this number includes both key and included attributes */

  @ViewColumn({ name: 'indnatts' })
  public readonly indnatts!: number /* int2 */;
  /**
   * The number of key columns in the index,
   * not counting any included columns, which are
   * merely stored and do not participate in the index semantics */

  @ViewColumn({ name: 'indnkeyatts' })
  public readonly indnkeyatts!: number /* int2 */;
  /**
   * If true, this is a unique index */

  @ViewColumn({ name: 'indisunique' })
  public readonly indisunique!: boolean /* bool */;
  /**
   * If true, this index represents the primary key of the table
   * (indisunique should always be true when this is true) */

  @ViewColumn({ name: 'indisprimary' })
  public readonly indisprimary!: boolean /* bool */;
  /**
   * If true, this index supports an exclusion constraint */

  @ViewColumn({ name: 'indisexclusion' })
  public readonly indisexclusion!: boolean /* bool */;
  /**
   * If true, the uniqueness check is enforced immediately on
   * insertion
   * (irrelevant if indisunique is not true) */

  @ViewColumn({ name: 'indimmediate' })
  public readonly indimmediate!: boolean /* bool */;
  /**
   * If true, the table was last clustered on this index */

  @ViewColumn({ name: 'indisclustered' })
  public readonly indisclustered!: boolean /* bool */;
  /**
   * If true, the index is currently valid for queries.  False means the
   * index is possibly incomplete: it must still be modified by
   * INSERT/UPDATE operations, but it cannot safely
   * be used for queries. If it is unique, the uniqueness property is not
   * guaranteed true either. */

  @ViewColumn({ name: 'indisvalid' })
  public readonly indisvalid!: boolean /* bool */;
  /**
   * If true, queries must not use the index until the xmin
   * of this pg_index row is below their TransactionXmin
   * event horizon, because the table may contain broken HOT chains with
   * incompatible rows that they can see */

  @ViewColumn({ name: 'indcheckxmin' })
  public readonly indcheckxmin!: boolean /* bool */;
  /**
   * If true, the index is currently ready for inserts.  False means the
   * index must be ignored by INSERT/UPDATE
   * operations. */

  @ViewColumn({ name: 'indisready' })
  public readonly indisready!: boolean /* bool */;
  /**
   * If false, the index is in process of being dropped, and should be
   * ignored for all purposes (including HOT-safety decisions) */

  @ViewColumn({ name: 'indislive' })
  public readonly indislive!: boolean /* bool */;
  /**
   * If true this index has been chosen as replica identity
   * using ALTER TABLE ...
   * REPLICA IDENTITY USING INDEX ... */

  @ViewColumn({ name: 'indisreplident' })
  public readonly indisreplident!: boolean /* bool */;
  /**
   * This is an array of indnatts values that
   * indicate which table columns this index indexes.  For example a value
   * of 1 3 would mean that the first and the third table
   * columns make up the index entries.  Key columns come before non-key
   * (included) columns.  A zero in this array indicates that the
   * corresponding index attribute is an expression over the table columns,
   * rather than a simple column reference. */

  @ViewColumn({ name: 'indkey' })
  public readonly indkey!: unknown /* int2vector */;
  /**
   * For each column in the index key
   * (indnkeyatts values), this contains the OID
   * of the collation to use for the index, or zero if the column is not of
   * a collatable data type. */

  @ViewColumn({ name: 'indcollation' })
  public readonly indcollation!: unknown /* oidvector */;
  /**
   * For each column in the index key
   * (indnkeyatts values), this contains the OID
   * of the operator class to use.  See
   * pg_opclass for details. */

  @ViewColumn({ name: 'indclass' })
  public readonly indclass!: unknown /* oidvector */;
  /**
   * This is an array of indnkeyatts values that
   * store per-column flag bits.  The meaning of the bits is defined by
   * the index's access method. */

  @ViewColumn({ name: 'indoption' })
  public readonly indoption!: unknown /* int2vector */;
  /**
   * Expression trees (in nodeToString()
   * representation) for index attributes that are not simple column
   * references.  This is a list with one element for each zero
   * entry in indkey.  Null if all index attributes
   * are simple references. */

  @ViewColumn({ name: 'indexprs' })
  public readonly indexprs!: unknown | null /* pg_node_tree */;
  /**
   * Expression tree (in nodeToString()
   * representation) for partial index predicate.  Null if not a
   * partial index. */

  @ViewColumn({ name: 'indpred' })
  public readonly indpred!: unknown | null /* pg_node_tree */;
}
