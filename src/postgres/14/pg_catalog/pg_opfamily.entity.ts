import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_opfamily defines operator families.
 *    Each operator family is a collection of operators and associated
 *    support routines that implement the semantics specified for a particular
 *    index access method.  Furthermore, the operators in a family are all
 *    compatible, in a way that is specified by the access method.
 *    The operator family concept allows cross-data-type operators to be used
 *    with indexes and to be reasoned about using knowledge of access method
 *    semantics.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_opfamily',
  synchronize: false,
})
export class PgOpfamily {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Index access method operator family is for */

  @ViewColumn({ name: 'opfmethod' })
  public readonly opfmethod!: number /* oid */;
  /**
   * Name of this operator family */

  @ViewColumn({ name: 'opfname' })
  public readonly opfname!: unknown /* name */;
  /**
   * Namespace of this operator family */

  @ViewColumn({ name: 'opfnamespace' })
  public readonly opfnamespace!: number /* oid */;
  /**
   * Owner of the operator family */

  @ViewColumn({ name: 'opfowner' })
  public readonly opfowner!: number /* oid */;
}
