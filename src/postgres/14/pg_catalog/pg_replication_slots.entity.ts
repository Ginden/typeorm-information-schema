import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_replication_slots view provides a listing
 *    of all replication slots that currently exist on the database cluster,
 *    along with their current state.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_replication_slots',
  synchronize: false,
})
export class PgReplicationSlots {
  /**
   * A unique, cluster-wide identifier for the replication slot */

  @ViewColumn({ name: 'slot_name' })
  public readonly slot_name!: unknown | null /* name */;
  /**
   * The base name of the shared object containing the output plugin this logical slot is using, or null for physical slots. */

  @ViewColumn({ name: 'plugin' })
  public readonly plugin!: unknown | null /* name */;
  /**
   * The slot type: physical or logical */

  @ViewColumn({ name: 'slot_type' })
  public readonly slot_type!: string | null /* text */;
  /**
   * The OID of the database this slot is associated with, or
   * null. Only logical slots have an associated database. */

  @ViewColumn({ name: 'datoid' })
  public readonly datoid!: number | null /* oid */;
  /**
   * The name of the database this slot is associated with, or
   * null. Only logical slots have an associated database. */

  @ViewColumn({ name: 'database' })
  public readonly database!: unknown | null /* name */;
  /**
   * True if this is a temporary replication slot. Temporary slots are
   * not saved to disk and are automatically dropped on error or when
   * the session has finished. */

  @ViewColumn({ name: 'temporary' })
  public readonly temporary!: boolean | null /* bool */;
  /**
   * True if this slot is currently actively being used */

  @ViewColumn({ name: 'active' })
  public readonly active!: boolean | null /* bool */;
  /**
   * The process ID of the session using this slot if the slot
   * is currently actively being used. NULL if
   * inactive. */

  @ViewColumn({ name: 'active_pid' })
  public readonly active_pid!: number | null /* int4 */;
  /**
   * The oldest transaction that this slot needs the database to
   * retain.  VACUUM cannot remove tuples deleted
   * by any later transaction. */

  @ViewColumn({ name: 'xmin' })
  public readonly xmin!: unknown | null /* xid */;
  /**
   * The oldest transaction affecting the system catalogs that this
   * slot needs the database to retain.  VACUUM cannot
   * remove catalog tuples deleted by any later transaction. */

  @ViewColumn({ name: 'catalog_xmin' })
  public readonly catalog_xmin!: unknown | null /* xid */;
  /**
   * The address (LSN) of oldest WAL which still
   * might be required by the consumer of this slot and thus won't be
   * automatically removed during checkpoints unless this LSN
   * gets behind more than >
   * from the current LSN.  NULL
   * if the LSN of this slot has never been reserved. */

  @ViewColumn({ name: 'restart_lsn' })
  public readonly restart_lsn!: unknown | null /* pg_lsn */;
  /**
   * The address (LSN) up to which the logical
   * slot's consumer has confirmed receiving data. Data older than this is
   * not available anymore. NULL for physical slots. */

  @ViewColumn({ name: 'confirmed_flush_lsn' })
  public readonly confirmed_flush_lsn!: unknown | null /* pg_lsn */;
  /**
   * Availability of WAL files claimed by this slot.
   * Possible values are:
   * reserved means that the claimed files
   * are within max_wal_size.extended means
   * that max_wal_size is exceeded but the files are
   * still retained, either by the replication slot or
   * by wal_keep_size.
   * unreserved means that the slot no longer
   * retains the required WAL files and some of them are to be removed at
   * the next checkpoint.  This state can return
   * to reserved or extended.
   * lost means that some required WAL files have
   * been removed and this slot is no longer usable.
   * The last two states are seen only when
   * > is
   * non-negative. If restart_lsn is NULL, this
   * field is null. */

  @ViewColumn({ name: 'wal_status' })
  public readonly wal_status!: string | null /* text */;
  /**
   * The number of bytes that can be written to WAL such that this slot
   * is not in danger of getting in state "lost".  It is NULL for lost
   * slots, as well as if max_slot_wal_keep_size
   * is -1. */

  @ViewColumn({ name: 'safe_wal_size' })
  public readonly safe_wal_size!: string | null /* int8 */;
  /**
   * True if the slot is enabled for decoding prepared transactions.  Always
   * false for physical slots. */

  @ViewColumn({ name: 'two_phase' })
  public readonly two_phase!: boolean | null /* bool */;
}
