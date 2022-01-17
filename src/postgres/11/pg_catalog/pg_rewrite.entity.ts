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
  public readonly ev_type!: '1' | '2' | '3' | '4';

  @ViewColumn({ name: 'ev_enabled' })
  public readonly ev_enabled!: 'O' | 'D' | 'R' | 'A';

  @ViewColumn({ name: 'is_instead' })
  public readonly is_instead!: boolean /* bool */;

  @ViewColumn({ name: 'ev_qual' })
  public readonly ev_qual!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'ev_action' })
  public readonly ev_action!: unknown | null /* pg_node_tree */;
}
