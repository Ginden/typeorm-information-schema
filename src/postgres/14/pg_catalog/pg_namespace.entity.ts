import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_namespace stores namespaces.
 *    A namespace is the structure underlying SQL schemas: each namespace
 *    can have a separate collection of relations, types, etc. without name
 *    conflicts.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_namespace',
  synchronize: false,
})
export class PgNamespace {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Name of the namespace */

  @ViewColumn({ name: 'nspname' })
  public readonly nspname!: unknown /* name */;
  /**
   * Owner of the namespace */

  @ViewColumn({ name: 'nspowner' })
  public readonly nspowner!: number /* oid */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'nspacl' })
  public readonly nspacl!: unknown | null /* _aclitem */;
}
