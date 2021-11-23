import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_constraint',
  synchronize: false,
})
export class PgConstraint {
  @ViewColumn({ name: 'conname' })
  public readonly conname!: unknown /* name */;

  @ViewColumn({ name: 'connamespace' })
  public readonly connamespace!: number /* oid */;

  @ViewColumn({ name: 'contype' })
  public readonly contype!: unknown /* char */;

  @ViewColumn({ name: 'condeferrable' })
  public readonly condeferrable!: boolean /* bool */;

  @ViewColumn({ name: 'condeferred' })
  public readonly condeferred!: boolean /* bool */;

  @ViewColumn({ name: 'convalidated' })
  public readonly convalidated!: boolean /* bool */;

  @ViewColumn({ name: 'conrelid' })
  public readonly conrelid!: number /* oid */;

  @ViewColumn({ name: 'contypid' })
  public readonly contypid!: number /* oid */;

  @ViewColumn({ name: 'conindid' })
  public readonly conindid!: number /* oid */;

  @ViewColumn({ name: 'conparentid' })
  public readonly conparentid!: number /* oid */;

  @ViewColumn({ name: 'confrelid' })
  public readonly confrelid!: number /* oid */;

  @ViewColumn({ name: 'confupdtype' })
  public readonly confupdtype!: unknown /* char */;

  @ViewColumn({ name: 'confdeltype' })
  public readonly confdeltype!: unknown /* char */;

  @ViewColumn({ name: 'confmatchtype' })
  public readonly confmatchtype!: unknown /* char */;

  @ViewColumn({ name: 'conislocal' })
  public readonly conislocal!: boolean /* bool */;

  @ViewColumn({ name: 'coninhcount' })
  public readonly coninhcount!: number /* int4 */;

  @ViewColumn({ name: 'connoinherit' })
  public readonly connoinherit!: boolean /* bool */;

  @ViewColumn({ name: 'conkey' })
  public readonly conkey!: unknown | null /* _int2 */;

  @ViewColumn({ name: 'confkey' })
  public readonly confkey!: unknown | null /* _int2 */;

  @ViewColumn({ name: 'conpfeqop' })
  public readonly conpfeqop!: unknown | null /* _oid */;

  @ViewColumn({ name: 'conppeqop' })
  public readonly conppeqop!: unknown | null /* _oid */;

  @ViewColumn({ name: 'conffeqop' })
  public readonly conffeqop!: unknown | null /* _oid */;

  @ViewColumn({ name: 'conexclop' })
  public readonly conexclop!: unknown | null /* _oid */;

  @ViewColumn({ name: 'conbin' })
  public readonly conbin!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'consrc' })
  public readonly consrc!: string | null /* text */;
}
