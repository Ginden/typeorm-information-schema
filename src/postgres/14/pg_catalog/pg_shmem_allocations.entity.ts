import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_shmem_allocations view shows allocations
 *    made from the server's main shared memory segment.  This includes both
 *    memory allocated by postgres itself and memory
 *    allocated by extensions using the mechanisms detailed in
 *    >.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shmem_allocations',
  synchronize: false,
})
export class PgShmemAllocations {
  /**
   * The name of the shared memory allocation. NULL for unused memory
   * and anonymous for anonymous
   * allocations. */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * The offset at which the allocation starts. NULL for anonymous
   * allocations, since details related to them are not known. */

  @ViewColumn({ name: 'off' })
  public readonly off!: `${number}` | null /* int8 */;
  /**
   * Size of the allocation */

  @ViewColumn({ name: 'size' })
  public readonly size!: `${number}` | null /* int8 */;
  /**
   * Size of the allocation including padding. For anonymous
   * allocations, no information about padding is available, so the
   * size and allocated_size columns
   * will always be equal. Padding is not meaningful for free memory, so
   * the columns will be equal in that case also. */

  @ViewColumn({ name: 'allocated_size' })
  public readonly allocated_size!: `${number}` | null /* int8 */;
}
