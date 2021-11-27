import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_constraint stores check, primary
 *    key, unique, foreign key, and exclusion constraints on tables.
 *    (Column constraints are not treated specially.  Every column constraint is
 *    equivalent to some table constraint.)
 *    Not-null constraints are represented in the
 *    pg_attribute
 *    catalog, not here.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_constraint',
  synchronize: false,
})
export class PgConstraint {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Constraint name (not necessarily unique!) */

  @ViewColumn({ name: 'conname' })
  public readonly conname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this constraint */

  @ViewColumn({ name: 'connamespace' })
  public readonly connamespace!: number /* oid */;
  /**
   * c = check constraint,
   * f = foreign key constraint,
   * p = primary key constraint,
   * u = unique constraint,
   * t = constraint trigger,
   * x = exclusion constraint */

  @ViewColumn({ name: 'contype' })
  public readonly contype!: unknown /* char */;
  /**
   * Is the constraint deferrable? */

  @ViewColumn({ name: 'condeferrable' })
  public readonly condeferrable!: boolean /* bool */;
  /**
   * Is the constraint deferred by default? */

  @ViewColumn({ name: 'condeferred' })
  public readonly condeferred!: boolean /* bool */;
  /**
   * Has the constraint been validated?
   * Currently, can be false only for foreign keys and CHECK constraints */

  @ViewColumn({ name: 'convalidated' })
  public readonly convalidated!: boolean /* bool */;
  /**
   * The table this constraint is on; zero if not a table constraint */

  @ViewColumn({ name: 'conrelid' })
  public readonly conrelid!: number /* oid */;
  /**
   * The domain this constraint is on; zero if not a domain constraint */

  @ViewColumn({ name: 'contypid' })
  public readonly contypid!: number /* oid */;
  /**
   * The index supporting this constraint, if it's a unique, primary
   * key, foreign key, or exclusion constraint; else zero */

  @ViewColumn({ name: 'conindid' })
  public readonly conindid!: number /* oid */;
  /**
   * The corresponding constraint of the parent partitioned table,
   * if this is a constraint on a partition; else zero */

  @ViewColumn({ name: 'conparentid' })
  public readonly conparentid!: number /* oid */;
  /**
   * If a foreign key, the referenced table; else zero */

  @ViewColumn({ name: 'confrelid' })
  public readonly confrelid!: number /* oid */;
  /**
   * Foreign key update action code:
   * a = no action,
   * r = restrict,
   * c = cascade,
   * n = set null,
   * d = set default */

  @ViewColumn({ name: 'confupdtype' })
  public readonly confupdtype!: unknown /* char */;
  /**
   * Foreign key deletion action code:
   * a = no action,
   * r = restrict,
   * c = cascade,
   * n = set null,
   * d = set default */

  @ViewColumn({ name: 'confdeltype' })
  public readonly confdeltype!: unknown /* char */;
  /**
   * Foreign key match type:
   * f = full,
   * p = partial,
   * s = simple */

  @ViewColumn({ name: 'confmatchtype' })
  public readonly confmatchtype!: unknown /* char */;
  /**
   * This constraint is defined locally for the relation.  Note that a
   * constraint can be locally defined and inherited simultaneously. */

  @ViewColumn({ name: 'conislocal' })
  public readonly conislocal!: boolean /* bool */;
  /**
   * The number of direct inheritance ancestors this constraint has.
   * A constraint with
   * a nonzero number of ancestors cannot be dropped nor renamed. */

  @ViewColumn({ name: 'coninhcount' })
  public readonly coninhcount!: number /* int4 */;
  /**
   * This constraint is defined locally for the relation.  It is a
   * non-inheritable constraint. */

  @ViewColumn({ name: 'connoinherit' })
  public readonly connoinherit!: boolean /* bool */;
  /**
   * If a table constraint (including foreign keys, but not constraint
   * triggers), list of the constrained columns */

  @ViewColumn({ name: 'conkey' })
  public readonly conkey!: unknown | null /* _int2 */;
  /**
   * If a foreign key, list of the referenced columns */

  @ViewColumn({ name: 'confkey' })
  public readonly confkey!: unknown | null /* _int2 */;
  /**
   * If a foreign key, list of the equality operators for PK = FK comparisons */

  @ViewColumn({ name: 'conpfeqop' })
  public readonly conpfeqop!: unknown | null /* _oid */;
  /**
   * If a foreign key, list of the equality operators for PK = PK comparisons */

  @ViewColumn({ name: 'conppeqop' })
  public readonly conppeqop!: unknown | null /* _oid */;
  /**
   * If a foreign key, list of the equality operators for FK = FK comparisons */

  @ViewColumn({ name: 'conffeqop' })
  public readonly conffeqop!: unknown | null /* _oid */;
  /**
   * If an exclusion constraint, list of the per-column exclusion operators */

  @ViewColumn({ name: 'conexclop' })
  public readonly conexclop!: unknown | null /* _oid */;
  /**
   * If a check constraint, an internal representation of the
   * expression.  (It's recommended to use
   * pg_get_constraintdef() to extract the definition of
   * a check constraint.) */

  @ViewColumn({ name: 'conbin' })
  public readonly conbin!: unknown | null /* pg_node_tree */;
}
