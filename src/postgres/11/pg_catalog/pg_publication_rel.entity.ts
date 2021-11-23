import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_publication_rel',
  synchronize: false,
})
export class PgPublicationRel {
  @ViewColumn({ name: 'prpubid' })
  public readonly prpubid!: number /* oid */;

  @ViewColumn({ name: 'prrelid' })
  public readonly prrelid!: number /* oid */;
}
