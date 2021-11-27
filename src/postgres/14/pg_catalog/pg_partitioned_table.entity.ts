import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_partitioned_table stores
 *    information about how tables are partitioned.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_partitioned_table',
  synchronize: false,
})
export class PgPartitionedTable {
  /**
   * The OID of the pg_class entry for this partitioned table */

  @ViewColumn({ name: 'partrelid' })
  public readonly partrelid!: number /* oid */;
  /**
   * Partitioning strategy; h = hash partitioned table,
   * l = list partitioned table, r = range partitioned table */

  @ViewColumn({ name: 'partstrat' })
  public readonly partstrat!: unknown /* char */;
  /**
   * The number of columns in the partition key */

  @ViewColumn({ name: 'partnatts' })
  public readonly partnatts!: number /* int2 */;
  /**
   * The OID of the pg_class entry for the default partition
   * of this partitioned table, or zero if this partitioned table does not
   * have a default partition */

  @ViewColumn({ name: 'partdefid' })
  public readonly partdefid!: number /* oid */;
  /**
   * This is an array of partnatts values that
   * indicate which table columns are part of the partition key.  For
   * example, a value of 1 3 would mean that the first
   * and the third table columns make up the partition key.  A zero in this
   * array indicates that the corresponding partition key column is an
   * expression, rather than a simple column reference. */

  @ViewColumn({ name: 'partattrs' })
  public readonly partattrs!: unknown /* int2vector */;
  /**
   * For each column in the partition key, this contains the OID of the
   * operator class to use.  See
   * pg_opclass for details. */

  @ViewColumn({ name: 'partclass' })
  public readonly partclass!: unknown /* oidvector */;
  /**
   * For each column in the partition key, this contains the OID of the
   * collation to use for partitioning, or zero if the column is not
   * of a collatable data type. */

  @ViewColumn({ name: 'partcollation' })
  public readonly partcollation!: unknown /* oidvector */;
  /**
   * Expression trees (in nodeToString()
   * representation) for partition key columns that are not simple column
   * references.  This is a list with one element for each zero
   * entry in partattrs.  Null if all partition key columns
   * are simple references. */

  @ViewColumn({ name: 'partexprs' })
  public readonly partexprs!: unknown | null /* pg_node_tree */;
}
