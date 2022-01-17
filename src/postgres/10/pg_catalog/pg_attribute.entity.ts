import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_attribute',
  synchronize: false,
})
export class PgAttribute {
  @ViewColumn({ name: 'attrelid' })
  public readonly attrelid!: number /* oid */;

  @ViewColumn({ name: 'attname' })
  public readonly attname!: unknown /* name */;

  @ViewColumn({ name: 'atttypid' })
  public readonly atttypid!: number /* oid */;

  @ViewColumn({ name: 'attstattarget' })
  public readonly attstattarget!: number /* int4 */;

  @ViewColumn({ name: 'attlen' })
  public readonly attlen!: number /* int2 */;

  @ViewColumn({ name: 'attnum' })
  public readonly attnum!: number /* int2 */;

  @ViewColumn({ name: 'attndims' })
  public readonly attndims!: number /* int4 */;

  @ViewColumn({ name: 'attcacheoff' })
  public readonly attcacheoff!: number /* int4 */;

  @ViewColumn({ name: 'atttypmod' })
  public readonly atttypmod!: number /* int4 */;

  @ViewColumn({ name: 'attbyval' })
  public readonly attbyval!: boolean /* bool */;

  @ViewColumn({ name: 'attstorage' })
  public readonly attstorage!: unknown /* char */;

  @ViewColumn({ name: 'attalign' })
  public readonly attalign!: unknown /* char */;

  @ViewColumn({ name: 'attnotnull' })
  public readonly attnotnull!: boolean /* bool */;

  @ViewColumn({ name: 'atthasdef' })
  public readonly atthasdef!: boolean /* bool */;

  @ViewColumn({ name: 'attidentity' })
  public readonly attidentity!: '' | 'a' | 'd';

  @ViewColumn({ name: 'attisdropped' })
  public readonly attisdropped!: boolean /* bool */;

  @ViewColumn({ name: 'attislocal' })
  public readonly attislocal!: boolean /* bool */;

  @ViewColumn({ name: 'attinhcount' })
  public readonly attinhcount!: number /* int4 */;

  @ViewColumn({ name: 'attcollation' })
  public readonly attcollation!: number /* oid */;

  @ViewColumn({ name: 'attacl' })
  public readonly attacl!: unknown | null /* _aclitem */;

  @ViewColumn({ name: 'attoptions' })
  public readonly attoptions!: string | null /* _text */;

  @ViewColumn({ name: 'attfdwoptions' })
  public readonly attfdwoptions!: string | null /* _text */;
}
