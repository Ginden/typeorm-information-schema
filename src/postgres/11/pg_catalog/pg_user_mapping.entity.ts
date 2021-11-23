import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user_mapping',
  synchronize: false,
})
export class PgUserMapping {
  @ViewColumn({ name: 'umuser' })
  public readonly umuser!: number /* oid */;

  @ViewColumn({ name: 'umserver' })
  public readonly umserver!: number /* oid */;

  @ViewColumn({ name: 'umoptions' })
  public readonly umoptions!: string | null /* _text */;
}
