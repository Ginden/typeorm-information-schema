import { ViewEntity, ViewColumn } from 'typeorm';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The pg_ts_parser catalog contains entries
 *    defining text search parsers.  A parser is responsible for splitting
 *    input text into lexemes and assigning a token type to each lexeme.
 *    Since a parser must be implemented by C-language-level functions,
 *    creation of new parsers is restricted to database superusers.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_ts_parser',
  synchronize: false,
})
export class PgTsParser {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Text search parser name */

  @ViewColumn({ name: 'prsname' })
  public readonly prsname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this parser */

  @ViewColumn({ name: 'prsnamespace' })
  public readonly prsnamespace!: number /* oid */;
  /**
   * OID of the parser's startup function */

  @ViewColumn({ name: 'prsstart' })
  public readonly prsstart!: unknown /* regproc */;
  /**
   * OID of the parser's next-token function */

  @ViewColumn({ name: 'prstoken' })
  public readonly prstoken!: unknown /* regproc */;
  /**
   * OID of the parser's shutdown function */

  @ViewColumn({ name: 'prsend' })
  public readonly prsend!: unknown /* regproc */;
  /**
   * OID of the parser's headline function (zero if none) */

  @ViewColumn({ name: 'prsheadline' })
  public readonly prsheadline!: unknown /* regproc */;
  /**
   * OID of the parser's lextype function */

  @ViewColumn({ name: 'prslextype' })
  public readonly prslextype!: unknown /* regproc */;
}
