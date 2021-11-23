import { ViewEntity, ViewColumn } from 'typeorm';

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
  public readonly start_value!: string | null /* int8 */;

  @ViewColumn({ name: 'min_value' })
  public readonly min_value!: string | null /* int8 */;

  @ViewColumn({ name: 'max_value' })
  public readonly max_value!: string | null /* int8 */;

  @ViewColumn({ name: 'increment_by' })
  public readonly increment_by!: string | null /* int8 */;

  @ViewColumn({ name: 'cycle' })
  public readonly cycle!: boolean | null /* bool */;

  @ViewColumn({ name: 'cache_size' })
  public readonly cache_size!: string | null /* int8 */;

  @ViewColumn({ name: 'last_value' })
  public readonly last_value!: string | null /* int8 */;
}
