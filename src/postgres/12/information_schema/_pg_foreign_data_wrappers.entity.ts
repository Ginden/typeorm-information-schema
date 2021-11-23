import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'information_schema',
  name: '_pg_foreign_data_wrappers',
  synchronize: false,
})
export class PgForeignDataWrappers {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number | null /* oid */;

  @ViewColumn({ name: 'fdwowner' })
  public readonly fdwowner!: number | null /* oid */;

  @ViewColumn({ name: 'fdwoptions' })
  public readonly fdwoptions!: string | null /* _text */;

  @ViewColumn({ name: 'foreign_data_wrapper_catalog' })
  public readonly foreign_data_wrapper_catalog!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_name' })
  public readonly foreign_data_wrapper_name!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'authorization_identifier' })
  public readonly authorization_identifier!: string | null /* sql_identifier */;

  @ViewColumn({ name: 'foreign_data_wrapper_language' })
  public readonly foreign_data_wrapper_language!: string | null /* character_data */;
}
