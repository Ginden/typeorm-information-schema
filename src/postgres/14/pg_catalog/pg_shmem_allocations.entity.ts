import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_shmem_allocations',
  synchronize: false,
})
export class PgShmemAllocations {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'off' })
  public readonly off!: string | null /* int8 */;

  @ViewColumn({ name: 'size' })
  public readonly size!: string | null /* int8 */;

  @ViewColumn({ name: 'allocated_size' })
  public readonly allocated_size!: string | null /* int8 */;
}
