import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_trigger stores triggers on tables
 *    and views.
 *    See >
 *    for more information.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_trigger',
  synchronize: false,
})
export class PgTrigger {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The table this trigger is on */

  @ViewColumn({ name: 'tgrelid' })
  public readonly tgrelid!: number /* oid */;
  /**
   * Parent trigger that this trigger is cloned from (this happens when
   * partitions are created or attached to a partitioned table);
   * zero if not a clone */

  @ViewColumn({ name: 'tgparentid' })
  public readonly tgparentid!: number /* oid */;
  /**
   * Trigger name (must be unique among triggers of same table) */

  @ViewColumn({ name: 'tgname' })
  public readonly tgname!: unknown /* name */;
  /**
   * The function to be called */

  @ViewColumn({ name: 'tgfoid' })
  public readonly tgfoid!: number /* oid */;
  /**
   * Bit mask identifying trigger firing conditions */

  @ViewColumn({ name: 'tgtype' })
  public readonly tgtype!: number /* int2 */;
  /**
   * Controls in which > modes
   * the trigger fires.
   * O = trigger fires in origin and local modes,
   * D = trigger is disabled,
   * R = trigger fires in replica mode,
   * A = trigger fires always. */

  @ViewColumn({ name: 'tgenabled' })
  public readonly tgenabled!: 'O' | 'D' | 'R' | 'A';
  /**
   * True if trigger is internally generated (usually, to enforce
   * the constraint identified by tgconstraint) */

  @ViewColumn({ name: 'tgisinternal' })
  public readonly tgisinternal!: boolean /* bool */;
  /**
   * The table referenced by a referential integrity constraint
   * (zero if trigger is not for a referential integrity constraint) */

  @ViewColumn({ name: 'tgconstrrelid' })
  public readonly tgconstrrelid!: number /* oid */;
  /**
   * The index supporting a unique, primary key, referential integrity,
   * or exclusion constraint
   * (zero if trigger is not for one of these types of constraint) */

  @ViewColumn({ name: 'tgconstrindid' })
  public readonly tgconstrindid!: number /* oid */;
  /**
   * True if trigger is internally generated (usually, to enforce
   * the constraint identified by tgconstraint) */

  @ViewColumn({ name: 'tgconstraint' })
  public readonly tgconstraint!: number /* oid */;
  /**
   * True if constraint trigger is deferrable */

  @ViewColumn({ name: 'tgdeferrable' })
  public readonly tgdeferrable!: boolean /* bool */;
  /**
   * True if constraint trigger is initially deferred */

  @ViewColumn({ name: 'tginitdeferred' })
  public readonly tginitdeferred!: boolean /* bool */;
  /**
   * Number of argument strings passed to trigger function */

  @ViewColumn({ name: 'tgnargs' })
  public readonly tgnargs!: number /* int2 */;
  /**
   * Column numbers, if trigger is column-specific; otherwise an
   * empty array */

  @ViewColumn({ name: 'tgattr' })
  public readonly tgattr!: number[] /* int2vector */;
  /**
   * Argument strings to pass to trigger, each NULL-terminated */

  @ViewColumn({ name: 'tgargs' })
  public readonly tgargs!: unknown /* bytea */;
  /**
   * Expression tree (in nodeToString()
   * representation) for the trigger's WHEN condition, or null
   * if none */

  @ViewColumn({ name: 'tgqual' })
  public readonly tgqual!: unknown | null /* pg_node_tree */;
  /**
   * REFERENCING clause name for OLD TABLE,
   * or null if none */

  @ViewColumn({ name: 'tgoldtable' })
  public readonly tgoldtable!: unknown | null /* name */;
  /**
   * REFERENCING clause name for NEW TABLE,
   * or null if none */

  @ViewColumn({ name: 'tgnewtable' })
  public readonly tgnewtable!: unknown | null /* name */;
}
