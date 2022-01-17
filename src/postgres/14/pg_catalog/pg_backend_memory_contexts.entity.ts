import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The view pg_backend_memory_contexts displays all
 *    the memory contexts of the server process attached to the current session.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_backend_memory_contexts',
  synchronize: false,
})
export class PgBackendMemoryContexts {
  /**
   * Name of the memory context */

  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;
  /**
   * Identification information of the memory context. This field is truncated at 1024 bytes */

  @ViewColumn({ name: 'ident' })
  public readonly ident!: string | null /* text */;
  /**
   * Name of the parent of this memory context */

  @ViewColumn({ name: 'parent' })
  public readonly parent!: string | null /* text */;
  /**
   * Distance from TopMemoryContext in context tree */

  @ViewColumn({ name: 'level' })
  public readonly level!: number | null /* int4 */;
  /**
   * Total bytes allocated for this memory context */

  @ViewColumn({ name: 'total_bytes' })
  public readonly total_bytes!: `${number}` | null /* int8 */;
  /**
   * Total number of blocks allocated for this memory context */

  @ViewColumn({ name: 'total_nblocks' })
  public readonly total_nblocks!: `${number}` | null /* int8 */;
  /**
   * Free space in bytes */

  @ViewColumn({ name: 'free_bytes' })
  public readonly free_bytes!: `${number}` | null /* int8 */;
  /**
   * Total number of free chunks */

  @ViewColumn({ name: 'free_chunks' })
  public readonly free_chunks!: `${number}` | null /* int8 */;
  /**
   * Used space in bytes */

  @ViewColumn({ name: 'used_bytes' })
  public readonly used_bytes!: `${number}` | null /* int8 */;
}
