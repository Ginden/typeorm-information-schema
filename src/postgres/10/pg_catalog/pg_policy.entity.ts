import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_policy',
  synchronize: false,
})
export class PgPolicy {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'polname' })
  public readonly polname!: unknown /* name */;

  @ViewColumn({ name: 'polrelid' })
  public readonly polrelid!: number /* oid */;

  @ViewColumn({ name: 'polcmd' })
  public readonly polcmd!: unknown /* char */;

  @ViewColumn({ name: 'polpermissive' })
  public readonly polpermissive!: boolean /* bool */;

  @ViewColumn({ name: 'polroles' })
  public readonly polroles!: unknown /* _oid */;

  @ViewColumn({ name: 'polqual' })
  public readonly polqual!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'polwithcheck' })
  public readonly polwithcheck!: unknown | null /* pg_node_tree */;
}
