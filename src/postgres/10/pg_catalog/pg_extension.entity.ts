import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_extension',
  synchronize: false,
})
export class PgExtension {
  @ViewColumn({ name: 'extname' })
  public readonly extname!: unknown /* name */;

  @ViewColumn({ name: 'extowner' })
  public readonly extowner!: number /* oid */;

  @ViewColumn({ name: 'extnamespace' })
  public readonly extnamespace!: number /* oid */;

  @ViewColumn({ name: 'extrelocatable' })
  public readonly extrelocatable!: boolean /* bool */;

  @ViewColumn({ name: 'extversion' })
  public readonly extversion!: string /* text */;

  @ViewColumn({ name: 'extconfig' })
  public readonly extconfig!: number | null /* _oid */;

  @ViewColumn({ name: 'extcondition' })
  public readonly extcondition!: string | null /* _text */;
}
