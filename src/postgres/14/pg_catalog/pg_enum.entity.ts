import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_enum catalog contains entries
 *    showing the values and labels for each enum type. The
 *    internal representation of a given enum value is actually the OID
 *    of its associated row in pg_enum.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_enum',
  synchronize: false,
})
export class PgEnum {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * The OID of the pg_type entry owning this enum value */

  @ViewColumn({ name: 'enumtypid' })
  public readonly enumtypid!: number /* oid */;
  /**
   * The sort position of this enum value within its enum type */

  @ViewColumn({ name: 'enumsortorder' })
  public readonly enumsortorder!: number /* float4 */;
  /**
   * The textual label for this enum value */

  @ViewColumn({ name: 'enumlabel' })
  public readonly enumlabel!: unknown /* name */;
}
