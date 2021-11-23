import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_locks',
  synchronize: false,
})
export class PgLocks {
  @ViewColumn({ name: 'locktype' })
  public readonly locktype!: string | null /* text */;

  @ViewColumn({ name: 'database' })
  public readonly database!: number | null /* oid */;

  @ViewColumn({ name: 'relation' })
  public readonly relation!: number | null /* oid */;

  @ViewColumn({ name: 'page' })
  public readonly page!: number | null /* int4 */;

  @ViewColumn({ name: 'tuple' })
  public readonly tuple!: number | null /* int2 */;

  @ViewColumn({ name: 'virtualxid' })
  public readonly virtualxid!: string | null /* text */;

  @ViewColumn({ name: 'transactionid' })
  public readonly transactionid!: unknown | null /* xid */;

  @ViewColumn({ name: 'classid' })
  public readonly classid!: number | null /* oid */;

  @ViewColumn({ name: 'objid' })
  public readonly objid!: number | null /* oid */;

  @ViewColumn({ name: 'objsubid' })
  public readonly objsubid!: number | null /* int2 */;

  @ViewColumn({ name: 'virtualtransaction' })
  public readonly virtualtransaction!: string | null /* text */;

  @ViewColumn({ name: 'pid' })
  public readonly pid!: number | null /* int4 */;

  @ViewColumn({ name: 'mode' })
  public readonly mode!: string | null /* text */;

  @ViewColumn({ name: 'granted' })
  public readonly granted!: boolean | null /* bool */;

  @ViewColumn({ name: 'fastpath' })
  public readonly fastpath!: boolean | null /* bool */;
}
