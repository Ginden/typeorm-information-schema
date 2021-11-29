import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_ts_template catalog contains entries
 *    defining text search templates.  A template is the implementation
 *    skeleton for a class of text search dictionaries.
 *    Since a template must be implemented by C-language-level functions,
 *    creation of new templates is restricted to database superusers.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_template',
  synchronize: false,
})
export class PgTsTemplate {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Text search template name */

  @ViewColumn({ name: 'tmplname' })
  public readonly tmplname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this template */

  @ViewColumn({ name: 'tmplnamespace' })
  public readonly tmplnamespace!: number /* oid */;
  /**
   * OID of the template's initialization function (zero if none) */

  @ViewColumn({ name: 'tmplinit' })
  public readonly tmplinit!: unknown /* regproc */;
  /**
   * OID of the template's lexize function */

  @ViewColumn({ name: 'tmpllexize' })
  public readonly tmpllexize!: unknown /* regproc */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'tmplinit',
    referencedColumnName: 'oid',
  })
  readonly tmplinit_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'tmpllexize',
    referencedColumnName: 'oid',
  })
  readonly tmpllexize_rel?: PgProc;
}
