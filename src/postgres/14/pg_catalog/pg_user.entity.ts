import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_user',
  synchronize: false,
})
export class PgUser {
  @ViewColumn({ name: 'usename' })
  public readonly usename!: unknown | null /* name */;

  @ViewColumn({ name: 'usesysid' })
  public readonly usesysid!: number | null /* oid */;

  @ViewColumn({ name: 'usecreatedb' })
  public readonly usecreatedb!: boolean | null /* bool */;

  @ViewColumn({ name: 'usesuper' })
  public readonly usesuper!: boolean | null /* bool */;

  @ViewColumn({ name: 'userepl' })
  public readonly userepl!: boolean | null /* bool */;

  @ViewColumn({ name: 'usebypassrls' })
  public readonly usebypassrls!: boolean | null /* bool */;

  @ViewColumn({ name: 'passwd' })
  public readonly passwd!: string | null /* text */;

  @ViewColumn({ name: 'valuntil' })
  public readonly valuntil!: Date | null /* timestamptz */;

  @ViewColumn({ name: 'useconfig' })
  public readonly useconfig!: string | null /* _text */;
}
