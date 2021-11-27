import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_rewrite stores rewrite rules for tables and views.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_rewrite',
  synchronize: false,
})
export class PgRewrite {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Rule name */

  @ViewColumn({ name: 'rulename' })
  public readonly rulename!: unknown /* name */;
  /**
   * The table this rule is for */

  @ViewColumn({ name: 'ev_class' })
  public readonly ev_class!: number /* oid */;
  /**
   * Event type that the rule is for: 1 = >, 2 =
   * >, 3 = >, 4 =
   * > */

  @ViewColumn({ name: 'ev_type' })
  public readonly ev_type!: unknown /* char */;
  /**
   * Controls in which > modes
   * the rule fires.
   * O = rule fires in origin and local modes,
   * D = rule is disabled,
   * R = rule fires in replica mode,
   * A = rule fires always. */

  @ViewColumn({ name: 'ev_enabled' })
  public readonly ev_enabled!: unknown /* char */;
  /**
   * True if the rule is an INSTEAD rule */

  @ViewColumn({ name: 'is_instead' })
  public readonly is_instead!: boolean /* bool */;
  /**
   * Expression tree (in the form of a
   * nodeToString() representation) for the
   * rule's qualifying condition */

  @ViewColumn({ name: 'ev_qual' })
  public readonly ev_qual!: unknown /* pg_node_tree */;
  /**
   * Query tree (in the form of a
   * nodeToString() representation) for the
   * rule's action */

  @ViewColumn({ name: 'ev_action' })
  public readonly ev_action!: unknown /* pg_node_tree */;
}
