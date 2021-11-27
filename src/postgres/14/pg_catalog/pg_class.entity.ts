import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_class catalogs tables and most
 *    everything else that has columns or is otherwise similar to a
 *    table.  This includes indexes (but see also pg_index),
 *    sequences (but see also pg_sequence),
 *    views, materialized views, composite types, and TOAST tables;
 *    see relkind.
 *    Below, when we mean all of these kinds of objects we speak of
 *    relations.  Not all columns are meaningful for all relation
 *    types.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_class',
  synchronize: false,
})
export class PgClass {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the table, index, view, etc. */

  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this relation */

  @ViewColumn({ name: 'relnamespace' })
  public readonly relnamespace!: number /* oid */;
  /**
   * The OID of the data type that corresponds to this table's row type,
   * if any; zero for indexes, sequences, and toast tables, which have
   * no pg_type entry */

  @ViewColumn({ name: 'reltype' })
  public readonly reltype!: number /* oid */;
  /**
   * For typed tables, the OID of the underlying composite type;
   * zero for all other relations */

  @ViewColumn({ name: 'reloftype' })
  public readonly reloftype!: number /* oid */;
  /**
   * Owner of the relation */

  @ViewColumn({ name: 'relowner' })
  public readonly relowner!: number /* oid */;
  /**
   * If this is a table or an index, the access method used (heap,
   * B-tree, hash, etc.); otherwise zero (zero occurs for sequences,
   * as well as relations without storage, such as views) */

  @ViewColumn({ name: 'relam' })
  public readonly relam!: number /* oid */;
  /**
   * Name of the on-disk file of this relation; zero means this
   * is a mapped relation whose disk file name is determined
   * by low-level state */

  @ViewColumn({ name: 'relfilenode' })
  public readonly relfilenode!: number /* oid */;
  /**
   * The tablespace in which this relation is stored.  If zero,
   * the database's default tablespace is implied.  (Not meaningful
   * if the relation has no on-disk file.) */

  @ViewColumn({ name: 'reltablespace' })
  public readonly reltablespace!: number /* oid */;
  /**
   * Size of the on-disk representation of this table in pages (of size
   * BLCKSZ).  This is only an estimate used by the
   * planner.  It is updated by VACUUM,
   * ANALYZE, and a few DDL commands such as
   * CREATE INDEX. */

  @ViewColumn({ name: 'relpages' })
  public readonly relpages!: number /* int4 */;
  /**
   * Number of live rows in the table.  This is only an estimate used by
   * the planner.  It is updated by VACUUM,
   * ANALYZE, and a few DDL commands such as
   * CREATE INDEX.
   * If the table has never yet been vacuumed or
   * analyzed, reltuples
   * contains -1 indicating that the row count is
   * unknown. */

  @ViewColumn({ name: 'reltuples' })
  public readonly reltuples!: number /* float4 */;
  /**
   * Number of pages that are marked all-visible in the table's
   * visibility map.  This is only an estimate used by the
   * planner.  It is updated by VACUUM,
   * ANALYZE, and a few DDL commands such as
   * CREATE INDEX. */

  @ViewColumn({ name: 'relallvisible' })
  public readonly relallvisible!: number /* int4 */;
  /**
   * OID of the TOAST table associated with this table, zero if none.  The
   * TOAST table stores large attributes out of line in a
   * secondary table. */

  @ViewColumn({ name: 'reltoastrelid' })
  public readonly reltoastrelid!: number /* oid */;
  /**
   * True if this is a table and it has (or recently had) any indexes */

  @ViewColumn({ name: 'relhasindex' })
  public readonly relhasindex!: boolean /* bool */;
  /**
   * True if this table is shared across all databases in the cluster.  Only
   * certain system catalogs (such as pg_database)
   * are shared. */

  @ViewColumn({ name: 'relisshared' })
  public readonly relisshared!: boolean /* bool */;
  /**
   * p = permanent table, u = unlogged table,
   * t = temporary table */

  @ViewColumn({ name: 'relpersistence' })
  public readonly relpersistence!: unknown /* char */;
  /**
   * r = ordinary table,
   * i = index,
   * S = sequence,
   * t = TOAST table,
   * v = view,
   * m = materialized view,
   * c = composite type,
   * f = foreign table,
   * p = partitioned table,
   * I = partitioned index */

  @ViewColumn({ name: 'relkind' })
  public readonly relkind!: unknown /* char */;
  /**
   * Number of user columns in the relation (system columns not
   * counted).  There must be this many corresponding entries in
   * pg_attribute.  See also
   * pg_attribute.attnum. */

  @ViewColumn({ name: 'relnatts' })
  public readonly relnatts!: number /* int2 */;
  /**
   * Number of CHECK constraints on the table; see
   * pg_constraint catalog */

  @ViewColumn({ name: 'relchecks' })
  public readonly relchecks!: number /* int2 */;
  /**
   * True if table has (or once had) rules; see
   * pg_rewrite catalog */

  @ViewColumn({ name: 'relhasrules' })
  public readonly relhasrules!: boolean /* bool */;
  /**
   * True if table has (or once had) triggers; see
   * pg_trigger catalog */

  @ViewColumn({ name: 'relhastriggers' })
  public readonly relhastriggers!: boolean /* bool */;
  /**
   * True if table or index has (or once had) any inheritance children */

  @ViewColumn({ name: 'relhassubclass' })
  public readonly relhassubclass!: boolean /* bool */;
  /**
   * True if table has row-level security enabled; see
   * pg_policy catalog */

  @ViewColumn({ name: 'relrowsecurity' })
  public readonly relrowsecurity!: boolean /* bool */;
  /**
   * True if row-level security (when enabled) will also apply to table owner; see
   * pg_policy catalog */

  @ViewColumn({ name: 'relforcerowsecurity' })
  public readonly relforcerowsecurity!: boolean /* bool */;
  /**
   * True if relation is populated (this is true for all
   * relations other than some materialized views) */

  @ViewColumn({ name: 'relispopulated' })
  public readonly relispopulated!: boolean /* bool */;
  /**
   * Columns used to form replica identity for rows:
   * d = default (primary key, if any),
   * n = nothing,
   * f = all columns,
   * i = index with
   * indisreplident set (same as nothing if the
   * index used has been dropped) */

  @ViewColumn({ name: 'relreplident' })
  public readonly relreplident!: unknown /* char */;
  /**
   * True if table or index is a partition */

  @ViewColumn({ name: 'relispartition' })
  public readonly relispartition!: boolean /* bool */;
  /**
   * For new relations being written during a DDL operation that requires a
   * table rewrite, this contains the OID of the original relation;
   * otherwise zero.  That state is only visible internally; this field should
   * never contain anything other than zero for a user-visible relation. */

  @ViewColumn({ name: 'relrewrite' })
  public readonly relrewrite!: number /* oid */;
  /**
   * All transaction IDs before this one have been replaced with a permanent
   * (frozen) transaction ID in this table.  This is used to track
   * whether the table needs to be vacuumed in order to prevent transaction
   * ID wraparound or to allow pg_xact to be shrunk.  Zero
   * (InvalidTransactionId) if the relation is not a table. */

  @ViewColumn({ name: 'relfrozenxid' })
  public readonly relfrozenxid!: unknown /* xid */;
  /**
   * All multixact IDs before this one have been replaced by a
   * transaction ID in this table.  This is used to track
   * whether the table needs to be vacuumed in order to prevent multixact ID
   * wraparound or to allow pg_multixact to be shrunk.  Zero
   * (InvalidMultiXactId) if the relation is not a table. */

  @ViewColumn({ name: 'relminmxid' })
  public readonly relminmxid!: unknown /* xid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'relacl' })
  public readonly relacl!: unknown | null /* _aclitem */;
  /**
   * Access-method-specific options, as keyword=value strings */

  @ViewColumn({ name: 'reloptions' })
  public readonly reloptions!: string | null /* _text */;
  /**
   * If table is a partition (see relispartition),
   * internal representation of the partition bound */

  @ViewColumn({ name: 'relpartbound' })
  public readonly relpartbound!: unknown | null /* pg_node_tree */;
}
