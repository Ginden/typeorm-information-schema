import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_type',
  synchronize: false,
})
export class PgType {
  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;

  @ViewColumn({ name: 'typname' })
  public readonly typname!: unknown /* name */;

  @ViewColumn({ name: 'typnamespace' })
  public readonly typnamespace!: number /* oid */;

  @ViewColumn({ name: 'typowner' })
  public readonly typowner!: number /* oid */;

  @ViewColumn({ name: 'typlen' })
  public readonly typlen!: number /* int2 */;

  @ViewColumn({ name: 'typbyval' })
  public readonly typbyval!: boolean /* bool */;

  @ViewColumn({ name: 'typtype' })
  public readonly typtype!: unknown /* char */;

  @ViewColumn({ name: 'typcategory' })
  public readonly typcategory!: unknown /* char */;

  @ViewColumn({ name: 'typispreferred' })
  public readonly typispreferred!: boolean /* bool */;

  @ViewColumn({ name: 'typisdefined' })
  public readonly typisdefined!: boolean /* bool */;

  @ViewColumn({ name: 'typdelim' })
  public readonly typdelim!: unknown /* char */;

  @ViewColumn({ name: 'typrelid' })
  public readonly typrelid!: number /* oid */;

  @ViewColumn({ name: 'typelem' })
  public readonly typelem!: number /* oid */;

  @ViewColumn({ name: 'typarray' })
  public readonly typarray!: number /* oid */;

  @ViewColumn({ name: 'typinput' })
  public readonly typinput!: unknown /* regproc */;

  @ViewColumn({ name: 'typoutput' })
  public readonly typoutput!: unknown /* regproc */;

  @ViewColumn({ name: 'typreceive' })
  public readonly typreceive!: unknown /* regproc */;

  @ViewColumn({ name: 'typsend' })
  public readonly typsend!: unknown /* regproc */;

  @ViewColumn({ name: 'typmodin' })
  public readonly typmodin!: unknown /* regproc */;

  @ViewColumn({ name: 'typmodout' })
  public readonly typmodout!: unknown /* regproc */;

  @ViewColumn({ name: 'typanalyze' })
  public readonly typanalyze!: unknown /* regproc */;

  @ViewColumn({ name: 'typalign' })
  public readonly typalign!: unknown /* char */;

  @ViewColumn({ name: 'typstorage' })
  public readonly typstorage!: unknown /* char */;

  @ViewColumn({ name: 'typnotnull' })
  public readonly typnotnull!: boolean /* bool */;

  @ViewColumn({ name: 'typbasetype' })
  public readonly typbasetype!: number /* oid */;

  @ViewColumn({ name: 'typtypmod' })
  public readonly typtypmod!: number /* int4 */;

  @ViewColumn({ name: 'typndims' })
  public readonly typndims!: number /* int4 */;

  @ViewColumn({ name: 'typcollation' })
  public readonly typcollation!: number /* oid */;

  @ViewColumn({ name: 'typdefaultbin' })
  public readonly typdefaultbin!: unknown | null /* pg_node_tree */;

  @ViewColumn({ name: 'typdefault' })
  public readonly typdefault!: string | null /* text */;

  @ViewColumn({ name: 'typacl' })
  public readonly typacl!: unknown | null /* _aclitem */;
}
