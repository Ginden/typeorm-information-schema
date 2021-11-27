import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_group',
  synchronize: false,
})
export class PgGroup {
  @ViewColumn({ name: 'groname' })
  public readonly groname!: unknown | null /* name */;

  @ViewColumn({ name: 'grosysid' })
  public readonly grosysid!: number | null /* oid */;

  @ViewColumn({ name: 'grolist' })
  public readonly grolist!: unknown | null /* _oid */;
}
