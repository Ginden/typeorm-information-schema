import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_attrdef',
  synchronize: false,
})
export class PgAttrdef {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'adrelid' })
  public readonly adrelid!: number /* oid */;

  @ViewColumn({ name: 'adnum' })
  public readonly adnum!: number /* int2 */;

  @ViewColumn({ name: 'adbin' })
  public readonly adbin!: unknown /* pg_node_tree */;
}
