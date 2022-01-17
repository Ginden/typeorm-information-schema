import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgType } from './pg_type.entity';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_sequences',
  synchronize: false,
})
export class PgSequences {
  @ViewColumn({ name: 'schemaname' })
  public readonly schemaname!: unknown | null /* name */;

  @ViewColumn({ name: 'sequencename' })
  public readonly sequencename!: unknown | null /* name */;

  @ViewColumn({ name: 'sequenceowner' })
  public readonly sequenceowner!: unknown | null /* name */;

  @ViewColumn({ name: 'data_type' })
  public readonly data_type!: unknown | null /* regtype */;

  @ViewColumn({ name: 'start_value' })
  public readonly start_value!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'min_value' })
  public readonly min_value!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'max_value' })
  public readonly max_value!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'increment_by' })
  public readonly increment_by!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'cycle' })
  public readonly cycle!: boolean | null /* bool */;

  @ViewColumn({ name: 'cache_size' })
  public readonly cache_size!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'last_value' })
  public readonly last_value!: `${number}` | null /* int8 */;

  @ManyToOne(() => PgType)
  @JoinColumn({
    name: 'data_type',
    referencedColumnName: 'oid',
  })
  readonly data_type_rel?: PgType;
}
