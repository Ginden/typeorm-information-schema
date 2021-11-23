import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_attrdef',
  synchronize: false,
})
export class PgAttrdef {
  @ViewColumn({ name: 'adrelid' })
  public readonly adrelid!: number /* oid */;

  @ViewColumn({ name: 'adnum' })
  public readonly adnum!: number /* int2 */;

  @ViewColumn({ name: 'adbin' })
  public readonly adbin!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'adsrc' })
  public readonly adsrc!: string | null /* text */;
}
