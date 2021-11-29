import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgType } from './pg_type.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_sequences provides access to
 *    useful information about each sequence in the database.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_sequences',
  synchronize: false,
})
export class PgSequences {
  /**
   * Name of schema containing sequence */

  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;
  /**
   * Name of sequence */

  @ViewColumn({ name: 'sequencename' })
  public readonly sequencename!: unknown | null /* name */;
  /**
   * Name of sequence's owner */

  @ViewColumn({ name: 'sequenceowner' })
  public readonly sequenceowner!: unknown | null /* name */;
  /**
   * Data type of the sequence */

  @ViewColumn({ name: 'data_type' })
  public readonly data_type!: unknown | null /* regtype */;
  /**
   * Start value of the sequence */

  @ViewColumn({ name: 'start_value' })
  public readonly start_value!: string | null /* int8 */;
  /**
   * Minimum value of the sequence */

  @ViewColumn({ name: 'min_value' })
  public readonly min_value!: string | null /* int8 */;
  /**
   * Maximum value of the sequence */

  @ViewColumn({ name: 'max_value' })
  public readonly max_value!: string | null /* int8 */;
  /**
   * Increment value of the sequence */

  @ViewColumn({ name: 'increment_by' })
  public readonly increment_by!: string | null /* int8 */;
  /**
   * Whether the sequence cycles */

  @ViewColumn({ name: 'cycle' })
  public readonly cycle!: boolean | null /* bool */;
  /**
   * Cache size of the sequence */

  @ViewColumn({ name: 'cache_size' })
  public readonly cache_size!: string | null /* int8 */;
  /**
   * The last sequence value written to disk.  If caching is used,
   * this value can be greater than the last value handed out from the
   * sequence.  Null if the sequence has not been read from yet.  Also, if
   * the current user does not have USAGE
   * or SELECT privilege on the sequence, the value is
   * null. */

  @ViewColumn({ name: 'last_value' })
  public readonly last_value!: string | null /* int8 */;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'data_type',
    referencedColumnName: 'oid',
  })
  readonly data_type_rel?: PgType;
}
