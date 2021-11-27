import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_rewrite',
  synchronize: false,
})
export class PgRewrite {
  @ViewColumn({ name: 'rulename' })
  public readonly rulename!: unknown /* name */;

  @ViewColumn({ name: 'ev_class' })
  public readonly ev_class!: number /* oid */;

  @ViewColumn({ name: 'ev_type' })
  public readonly ev_type!: unknown /* char */;

  @ViewColumn({ name: 'ev_enabled' })
  public readonly ev_enabled!: unknown /* char */;

  @ViewColumn({ name: 'is_instead' })
  public readonly is_instead!: boolean /* bool */;

  @ViewColumn({ name: 'ev_qual' })
  public readonly ev_qual!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'ev_action' })
  public readonly ev_action!: unknown | null /* pg_node_tree */;
}
