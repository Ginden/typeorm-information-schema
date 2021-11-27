import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_cursors',
  synchronize: false,
})
export class PgCursors {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'statement' })
  public readonly statement!: string | null /* text */;

  @ViewColumn({ name: 'is_holdable' })
  public readonly is_holdable!: boolean | null /* bool */;

  @ViewColumn({ name: 'is_binary' })
  public readonly is_binary!: boolean | null /* bool */;

  @ViewColumn({ name: 'is_scrollable' })
  public readonly is_scrollable!: boolean | null /* bool */;

  @ViewColumn({ name: 'creation_time' })
  public readonly creation_time!: Date | null /* timestamptz */;
}
