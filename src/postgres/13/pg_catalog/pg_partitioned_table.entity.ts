import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_partitioned_table',
  synchronize: false,
})
export class PgPartitionedTable {
  @ViewColumn({ name: 'partrelid' })
  public readonly partrelid!: number /* oid */;

  @ViewColumn({ name: 'partstrat' })
  public readonly partstrat!: unknown /* char */;

  @ViewColumn({ name: 'partnatts' })
  public readonly partnatts!: number /* int2 */;

  @ViewColumn({ name: 'partdefid' })
  public readonly partdefid!: number /* oid */;

  @ViewColumn({ name: 'partattrs' })
  public readonly partattrs!: unknown /* int2vector */;

  @ViewColumn({ name: 'partclass' })
  public readonly partclass!: unknown /* oidvector */;

  @ViewColumn({ name: 'partcollation' })
  public readonly partcollation!: unknown /* oidvector */;

  @ViewColumn({ name: 'partexprs' })
  public readonly partexprs!: unknown | null /* pg_node_tree */;
}
