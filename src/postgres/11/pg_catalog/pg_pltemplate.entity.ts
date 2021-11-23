import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_pltemplate',
  synchronize: false,
})
export class PgPltemplate {
  @ViewColumn({ name: 'tmplname' })
  public readonly tmplname!: unknown /* name */;

  @ViewColumn({ name: 'tmpltrusted' })
  public readonly tmpltrusted!: boolean /* bool */;

  @ViewColumn({ name: 'tmpldbacreate' })
  public readonly tmpldbacreate!: boolean /* bool */;

  @ViewColumn({ name: 'tmplhandler' })
  public readonly tmplhandler!: string /* text */;

  @ViewColumn({ name: 'tmplinline' })
  public readonly tmplinline!: string | null /* text */;

  @ViewColumn({ name: 'tmplvalidator' })
  public readonly tmplvalidator!: string | null /* text */;

  @ViewColumn({ name: 'tmpllibrary' })
  public readonly tmpllibrary!: string /* text */;

  @ViewColumn({ name: 'tmplacl' })
  public readonly tmplacl!: unknown | null /* _aclitem */;
}
