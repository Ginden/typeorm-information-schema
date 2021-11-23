import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_index',
  synchronize: false,
})
export class PgIndex {
  @ViewColumn({ name: 'indexrelid' })
  public readonly indexrelid!: number /* oid */;

  @ViewColumn({ name: 'indrelid' })
  public readonly indrelid!: number /* oid */;

  @ViewColumn({ name: 'indnatts' })
  public readonly indnatts!: number /* int2 */;

  @ViewColumn({ name: 'indnkeyatts' })
  public readonly indnkeyatts!: number /* int2 */;

  @ViewColumn({ name: 'indisunique' })
  public readonly indisunique!: boolean /* bool */;

  @ViewColumn({ name: 'indisprimary' })
  public readonly indisprimary!: boolean /* bool */;

  @ViewColumn({ name: 'indisexclusion' })
  public readonly indisexclusion!: boolean /* bool */;

  @ViewColumn({ name: 'indimmediate' })
  public readonly indimmediate!: boolean /* bool */;

  @ViewColumn({ name: 'indisclustered' })
  public readonly indisclustered!: boolean /* bool */;

  @ViewColumn({ name: 'indisvalid' })
  public readonly indisvalid!: boolean /* bool */;

  @ViewColumn({ name: 'indcheckxmin' })
  public readonly indcheckxmin!: boolean /* bool */;

  @ViewColumn({ name: 'indisready' })
  public readonly indisready!: boolean /* bool */;

  @ViewColumn({ name: 'indislive' })
  public readonly indislive!: boolean /* bool */;

  @ViewColumn({ name: 'indisreplident' })
  public readonly indisreplident!: boolean /* bool */;

  @ViewColumn({ name: 'indkey' })
  public readonly indkey!: unknown /* int2vector */;

  @ViewColumn({ name: 'indcollation' })
  public readonly indcollation!: unknown /* oidvector */;

  @ViewColumn({ name: 'indclass' })
  public readonly indclass!: unknown /* oidvector */;

  @ViewColumn({ name: 'indoption' })
  public readonly indoption!: unknown /* int2vector */;

  @ViewColumn({ name: 'indexprs' })
  public readonly indexprs!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'indpred' })
  public readonly indpred!: unknown | null /* pg_node_tree */;
}
