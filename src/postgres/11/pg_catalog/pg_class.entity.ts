import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_class',
  synchronize: false,
})
export class PgClass {
  @ViewColumn({ name: 'relname' })
  public readonly relname!: unknown /* name */;

  @ViewColumn({ name: 'relnamespace' })
  public readonly relnamespace!: number /* oid */;

  @ViewColumn({ name: 'reltype' })
  public readonly reltype!: number /* oid */;

  @ViewColumn({ name: 'reloftype' })
  public readonly reloftype!: number /* oid */;

  @ViewColumn({ name: 'relowner' })
  public readonly relowner!: number /* oid */;

  @ViewColumn({ name: 'relam' })
  public readonly relam!: number /* oid */;

  @ViewColumn({ name: 'relfilenode' })
  public readonly relfilenode!: number /* oid */;

  @ViewColumn({ name: 'reltablespace' })
  public readonly reltablespace!: number /* oid */;

  @ViewColumn({ name: 'relpages' })
  public readonly relpages!: number /* int4 */;

  @ViewColumn({ name: 'reltuples' })
  public readonly reltuples!: number /* float4 */;

  @ViewColumn({ name: 'relallvisible' })
  public readonly relallvisible!: number /* int4 */;

  @ViewColumn({ name: 'reltoastrelid' })
  public readonly reltoastrelid!: number /* oid */;

  @ViewColumn({ name: 'relhasindex' })
  public readonly relhasindex!: boolean /* bool */;

  @ViewColumn({ name: 'relisshared' })
  public readonly relisshared!: boolean /* bool */;

  @ViewColumn({ name: 'relpersistence' })
  public readonly relpersistence!: unknown /* char */;

  @ViewColumn({ name: 'relkind' })
  public readonly relkind!: unknown /* char */;

  @ViewColumn({ name: 'relnatts' })
  public readonly relnatts!: number /* int2 */;

  @ViewColumn({ name: 'relchecks' })
  public readonly relchecks!: number /* int2 */;

  @ViewColumn({ name: 'relhasoids' })
  public readonly relhasoids!: boolean /* bool */;

  @ViewColumn({ name: 'relhasrules' })
  public readonly relhasrules!: boolean /* bool */;

  @ViewColumn({ name: 'relhastriggers' })
  public readonly relhastriggers!: boolean /* bool */;

  @ViewColumn({ name: 'relhassubclass' })
  public readonly relhassubclass!: boolean /* bool */;

  @ViewColumn({ name: 'relrowsecurity' })
  public readonly relrowsecurity!: boolean /* bool */;

  @ViewColumn({ name: 'relforcerowsecurity' })
  public readonly relforcerowsecurity!: boolean /* bool */;

  @ViewColumn({ name: 'relispopulated' })
  public readonly relispopulated!: boolean /* bool */;

  @ViewColumn({ name: 'relreplident' })
  public readonly relreplident!: unknown /* char */;

  @ViewColumn({ name: 'relispartition' })
  public readonly relispartition!: boolean /* bool */;

  @ViewColumn({ name: 'relrewrite' })
  public readonly relrewrite!: number /* oid */;

  @ViewColumn({ name: 'relfrozenxid' })
  public readonly relfrozenxid!: unknown /* xid */;

  @ViewColumn({ name: 'relminmxid' })
  public readonly relminmxid!: unknown /* xid */;

  @ViewColumn({ name: 'relacl' })
  public readonly relacl!: unknown | null /* _aclitem */;

  @ViewColumn({ name: 'reloptions' })
  public readonly reloptions!: string | null /* _text */;

  @ViewColumn({ name: 'relpartbound' })
  public readonly relpartbound!: unknown | null /* pg_node_tree */;
}
