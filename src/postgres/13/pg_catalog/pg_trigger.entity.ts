import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_trigger',
  synchronize: false,
})
export class PgTrigger {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'tgrelid' })
  public readonly tgrelid!: number /* oid */;

  @ViewColumn({ name: 'tgparentid' })
  public readonly tgparentid!: number /* oid */;

  @ViewColumn({ name: 'tgname' })
  public readonly tgname!: unknown /* name */;

  @ViewColumn({ name: 'tgfoid' })
  public readonly tgfoid!: number /* oid */;

  @ViewColumn({ name: 'tgtype' })
  public readonly tgtype!: number /* int2 */;

  @ViewColumn({ name: 'tgenabled' })
  public readonly tgenabled!: unknown /* char */;

  @ViewColumn({ name: 'tgisinternal' })
  public readonly tgisinternal!: boolean /* bool */;

  @ViewColumn({ name: 'tgconstrrelid' })
  public readonly tgconstrrelid!: number /* oid */;

  @ViewColumn({ name: 'tgconstrindid' })
  public readonly tgconstrindid!: number /* oid */;

  @ViewColumn({ name: 'tgconstraint' })
  public readonly tgconstraint!: number /* oid */;

  @ViewColumn({ name: 'tgdeferrable' })
  public readonly tgdeferrable!: boolean /* bool */;

  @ViewColumn({ name: 'tginitdeferred' })
  public readonly tginitdeferred!: boolean /* bool */;

  @ViewColumn({ name: 'tgnargs' })
  public readonly tgnargs!: number /* int2 */;

  @ViewColumn({ name: 'tgattr' })
  public readonly tgattr!: unknown /* int2vector */;

  @ViewColumn({ name: 'tgargs' })
  public readonly tgargs!: unknown /* bytea */;

  @ViewColumn({ name: 'tgqual' })
  public readonly tgqual!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'tgoldtable' })
  public readonly tgoldtable!: unknown | null /* name */;

  @ViewColumn({ name: 'tgnewtable' })
  public readonly tgnewtable!: unknown | null /* name */;
}
