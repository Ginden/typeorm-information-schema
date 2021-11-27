import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_settings',
  synchronize: false,
})
export class PgSettings {
  @ViewColumn({ name: 'name' })
  public readonly name!: string | null /* text */;

  @ViewColumn({ name: 'setting' })
  public readonly setting!: string | null /* text */;

  @ViewColumn({ name: 'unit' })
  public readonly unit!: string | null /* text */;

  @ViewColumn({ name: 'category' })
  public readonly category!: string | null /* text */;

  @ViewColumn({ name: 'short_desc' })
  public readonly short_desc!: string | null /* text */;

  @ViewColumn({ name: 'extra_desc' })
  public readonly extra_desc!: string | null /* text */;

  @ViewColumn({ name: 'context' })
  public readonly context!: string | null /* text */;

  @ViewColumn({ name: 'vartype' })
  public readonly vartype!: string | null /* text */;

  @ViewColumn({ name: 'source' })
  public readonly source!: string | null /* text */;

  @ViewColumn({ name: 'min_val' })
  public readonly min_val!: string | null /* text */;

  @ViewColumn({ name: 'max_val' })
  public readonly max_val!: string | null /* text */;

  @ViewColumn({ name: 'enumvals' })
  public readonly enumvals!: string | null /* _text */;

  @ViewColumn({ name: 'boot_val' })
  public readonly boot_val!: string | null /* text */;

  @ViewColumn({ name: 'reset_val' })
  public readonly reset_val!: string | null /* text */;

  @ViewColumn({ name: 'sourcefile' })
  public readonly sourcefile!: string | null /* text */;

  @ViewColumn({ name: 'sourceline' })
  public readonly sourceline!: number | null /* int4 */;

  @ViewColumn({ name: 'pending_restart' })
  public readonly pending_restart!: boolean | null /* bool */;
}
