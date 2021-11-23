import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_foreign_data_wrapper',
  synchronize: false,
})
export class PgForeignDataWrapper {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'fdwname' })
  public readonly fdwname!: unknown /* name */;

  @ViewColumn({ name: 'fdwowner' })
  public readonly fdwowner!: number /* oid */;

  @ViewColumn({ name: 'fdwhandler' })
  public readonly fdwhandler!: number /* oid */;

  @ViewColumn({ name: 'fdwvalidator' })
  public readonly fdwvalidator!: number /* oid */;

  @ViewColumn({ name: 'fdwacl' })
  public readonly fdwacl!: unknown | null /* _aclitem */;

  @ViewColumn({ name: 'fdwoptions' })
  public readonly fdwoptions!: string | null /* _text */;
}
