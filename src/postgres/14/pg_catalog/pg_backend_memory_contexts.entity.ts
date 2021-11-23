import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_backend_memory_contexts',
  synchronize: false,
})
export class PgBackendMemoryContexts {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'ident' })
  public readonly ident!: string | null /* text */;

  @ViewColumn({ name: 'parent' })
  public readonly parent!: string | null /* text */;

  @ViewColumn({ name: 'level' })
  public readonly level!: number | null /* int4 */;

  @ViewColumn({ name: 'total_bytes' })
  public readonly total_bytes!: string | null /* int8 */;

  @ViewColumn({ name: 'total_nblocks' })
  public readonly total_nblocks!: string | null /* int8 */;

  @ViewColumn({ name: 'free_bytes' })
  public readonly free_bytes!: string | null /* int8 */;

  @ViewColumn({ name: 'free_chunks' })
  public readonly free_chunks!: string | null /* int8 */;

  @ViewColumn({ name: 'used_bytes' })
  public readonly used_bytes!: string | null /* int8 */;
}
