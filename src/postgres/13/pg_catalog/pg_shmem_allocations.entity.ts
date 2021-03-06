import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shmem_allocations',
  synchronize: false,
})
export class PgShmemAllocations {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'off' })
  public readonly off!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'size' })
  public readonly size!: `${number}` | null /* int8 */;

  @ViewColumn({ name: 'allocated_size' })
  public readonly allocated_size!: `${number}` | null /* int8 */;
}
