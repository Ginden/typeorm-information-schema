import { ViewEntity, ViewColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PgProc } from './pg_proc.entity';
/**
 * Comments in this file were automatically generated from Postgres files */
/**
 *    The catalog pg_type stores information about data
 *    types.  Base types and enum types (scalar types) are created with
 *    CREATE TYPE, and
 *    domains with
 *    CREATE DOMAIN.
 *    A composite type is automatically created for each table in the database, to
 *    represent the row structure of the table.  It is also possible to create
 *    composite types with CREATE TYPE AS.
 *    */

@ViewEntity({
  schema: 'pg_catalog',
  name: 'pg_type',
  synchronize: false,
})
export class PgType {
  /**
   * Row identifier */

  @ViewColumn({ name: 'oid' })
  public readonly oid!: number /* oid */;
  /**
   * Data type name */

  @ViewColumn({ name: 'typname' })
  public readonly typname!: unknown /* name */;
  /**
   * The OID of the namespace that contains this type */

  @ViewColumn({ name: 'typnamespace' })
  public readonly typnamespace!: number /* oid */;
  /**
   * Owner of the type */

  @ViewColumn({ name: 'typowner' })
  public readonly typowner!: number /* oid */;
  /**
   * For a fixed-size type, typlen is the number
   * of bytes in the internal representation of the type.  But for a
   * variable-length type, typlen is negative.
   * -1 indicates a varlena type (one that has a length word),
   * -2 indicates a null-terminated C string. */

  @ViewColumn({ name: 'typlen' })
  public readonly typlen!: number /* int2 */;
  /**
   * typbyval determines whether internal
   * routines pass a value of this type by value or by reference.
   * typbyval had better be false if
   * typlen is not 1, 2, or 4 (or 8 on machines
   * where Datum is 8 bytes).
   * Variable-length types are always passed by reference. Note that
   * typbyval can be false even if the
   * length would allow pass-by-value. */

  @ViewColumn({ name: 'typbyval' })
  public readonly typbyval!: boolean /* bool */;
  /**
   * typtype is
   * b for a base type,
   * c for a composite type (e.g., a table's row type),
   * d for a domain,
   * e for an enum type,
   * p for a pseudo-type,
   * r for a range type, or
   * m for a multirange type.
   * See also typrelid and
   * typbasetype. */

  @ViewColumn({ name: 'typtype' })
  public readonly typtype!: unknown /* char */;
  /**
   * typcategory is an arbitrary classification
   * of data types that is used by the parser to determine which implicit
   * casts should be preferred.
   * See >. */

  @ViewColumn({ name: 'typcategory' })
  public readonly typcategory!: unknown /* char */;
  /**
   * True if the type is a preferred cast target within its
   * typcategory */

  @ViewColumn({ name: 'typispreferred' })
  public readonly typispreferred!: boolean /* bool */;
  /**
   * True if the type is defined, false if this is a placeholder
   * entry for a not-yet-defined type.  When
   * typisdefined is false, nothing
   * except the type name, namespace, and OID can be relied on. */

  @ViewColumn({ name: 'typisdefined' })
  public readonly typisdefined!: boolean /* bool */;
  /**
   * Character that separates two values of this type when parsing
   * array input.  Note that the delimiter is associated with the array
   * element data type, not the array data type. */

  @ViewColumn({ name: 'typdelim' })
  public readonly typdelim!: unknown /* char */;
  /**
   * typtype is
   * b for a base type,
   * c for a composite type (e.g., a table's row type),
   * d for a domain,
   * e for an enum type,
   * p for a pseudo-type,
   * r for a range type, or
   * m for a multirange type.
   * See also typrelid and
   * typbasetype. */

  @ViewColumn({ name: 'typrelid' })
  public readonly typrelid!: number /* oid */;
  /**
   * Subscripting handler function's OID, or zero if this type doesn't
   * support subscripting.  Types that are true array
   * types have typsubscript
   * = array_subscript_handler, but other types may
   * have other handler functions to implement specialized subscripting
   * behavior. */

  @ViewColumn({ name: 'typsubscript' })
  public readonly typsubscript!: unknown /* regproc */;
  /**
   * If typelem is not zero then it
   * identifies another row in pg_type,
   * defining the type yielded by subscripting.  This should be zero
   * if typsubscript is zero.  However, it can
   * be zero when typsubscript isn't zero, if the
   * handler doesn't need typelem to
   * determine the subscripting result type.
   * Note that a typelem dependency is
   * considered to imply physical containment of the element type in
   * this type; so DDL changes on the element type might be restricted
   * by the presence of this type. */

  @ViewColumn({ name: 'typelem' })
  public readonly typelem!: number /* oid */;
  /**
   * If typarray is not zero then it
   * identifies another row in pg_type, which
   * is the true array type having this type as element */

  @ViewColumn({ name: 'typarray' })
  public readonly typarray!: number /* oid */;
  /**
   * Input conversion function (text format) */

  @ViewColumn({ name: 'typinput' })
  public readonly typinput!: unknown /* regproc */;
  /**
   * Output conversion function (text format) */

  @ViewColumn({ name: 'typoutput' })
  public readonly typoutput!: unknown /* regproc */;
  /**
   * Input conversion function (binary format), or zero if none */

  @ViewColumn({ name: 'typreceive' })
  public readonly typreceive!: unknown /* regproc */;
  /**
   * Output conversion function (binary format), or zero if none */

  @ViewColumn({ name: 'typsend' })
  public readonly typsend!: unknown /* regproc */;
  /**
   * Type modifier input function, or zero if type does not support modifiers */

  @ViewColumn({ name: 'typmodin' })
  public readonly typmodin!: unknown /* regproc */;
  /**
   * Type modifier output function, or zero to use the standard format */

  @ViewColumn({ name: 'typmodout' })
  public readonly typmodout!: unknown /* regproc */;
  /**
   * Custom > function,
   * or zero to use the standard function */

  @ViewColumn({ name: 'typanalyze' })
  public readonly typanalyze!: unknown /* regproc */;
  /**
   * typalign is the alignment required
   * when storing a value of this type.  It applies to storage on
   * disk as well as most representations of the value inside
   * PostgreSQL.
   * When multiple values are stored consecutively, such
   * as in the representation of a complete row on disk, padding is
   * inserted before a datum of this type so that it begins on the
   * specified boundary.  The alignment reference is the beginning
   * of the first datum in the sequence.
   * Possible values are:
   * c = char alignment, i.e., no alignment needed.
   * s = short alignment (2 bytes on most machines).
   * i = int alignment (4 bytes on most machines).
   * d = double alignment (8 bytes on many machines, but by no means all). */

  @ViewColumn({ name: 'typalign' })
  public readonly typalign!: 'c' | 's' | 'i' | 'd';
  /**
   * typstorage tells for varlena
   * types (those with typlen = -1) if
   * the type is prepared for toasting and what the default strategy
   * for attributes of this type should be.
   * Possible values are:
   * p (plain): Values must always be stored plain
   * (non-varlena types always use this value).
   * e (external): Values can be stored in a
   * secondary TOAST relation (if relation has one, see
   * pg_class.reltoastrelid).
   * m (main): Values can be compressed and stored
   * inline.
   * x (extended): Values can be compressed and/or
   * moved to a secondary relation.
   * x is the usual choice for toast-able types.
   * Note that m values can also be moved out to
   * secondary storage, but only as a last resort (e
   * and x values are moved first). */

  @ViewColumn({ name: 'typstorage' })
  public readonly typstorage!: 'p' | 'e' | 'm' | 'x';
  /**
   * typnotnull represents a not-null
   * constraint on a type.  Used for domains only. */

  @ViewColumn({ name: 'typnotnull' })
  public readonly typnotnull!: boolean /* bool */;
  /**
   * typtype is
   * b for a base type,
   * c for a composite type (e.g., a table's row type),
   * d for a domain,
   * e for an enum type,
   * p for a pseudo-type,
   * r for a range type, or
   * m for a multirange type.
   * See also typrelid and
   * typbasetype. */

  @ViewColumn({ name: 'typbasetype' })
  public readonly typbasetype!: number /* oid */;
  /**
   * Domains use typtypmod to record the typmod
   * to be applied to their base type (-1 if base type does not use a
   * typmod).  -1 if this type is not a domain. */

  @ViewColumn({ name: 'typtypmod' })
  public readonly typtypmod!: number /* int4 */;
  /**
   * typndims is the number of array dimensions
   * for a domain over an array (that is, typbasetype is
   * an array type).
   * Zero for types other than domains over array types. */

  @ViewColumn({ name: 'typndims' })
  public readonly typndims!: number /* int4 */;
  /**
   * typcollation specifies the collation
   * of the type.  If the type does not support collations, this will
   * be zero.  A base type that supports collations will have a nonzero
   * value here, typically DEFAULT_COLLATION_OID.
   * A domain over a collatable type can have a collation OID different
   * from its base type's, if one was specified for the domain. */

  @ViewColumn({ name: 'typcollation' })
  public readonly typcollation!: number /* oid */;
  /**
   * If typdefaultbin is not null, it is the
   * nodeToString()
   * representation of a default expression for the type.  This is
   * only used for domains. */

  @ViewColumn({ name: 'typdefaultbin' })
  public readonly typdefaultbin!: unknown | null /* pg_node_tree */;
  /**
   * typdefault is null if the type has no associated
   * default value. If typdefaultbin is not null,
   * typdefault must contain a human-readable version of the
   * default expression represented by typdefaultbin.  If
   * typdefaultbin is null and typdefault is
   * not, then typdefault is the external representation of
   * the type's default value, which can be fed to the type's input
   * converter to produce a constant. */

  @ViewColumn({ name: 'typdefault' })
  public readonly typdefault!: string | null /* text */;
  /**
   * Access privileges; see > for details */

  @ViewColumn({ name: 'typacl' })
  public readonly typacl!: unknown | null /* _aclitem */;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typsubscript',
    referencedColumnName: 'oid',
  })
  readonly typsubscript_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typinput',
    referencedColumnName: 'oid',
  })
  readonly typinput_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typoutput',
    referencedColumnName: 'oid',
  })
  readonly typoutput_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typreceive',
    referencedColumnName: 'oid',
  })
  readonly typreceive_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typsend',
    referencedColumnName: 'oid',
  })
  readonly typsend_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typmodin',
    referencedColumnName: 'oid',
  })
  readonly typmodin_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typmodout',
    referencedColumnName: 'oid',
  })
  readonly typmodout_rel?: PgProc;

  @ManyToOne(() => PgProc)
  @JoinColumn({
    name: 'typanalyze',
    referencedColumnName: 'oid',
  })
  readonly typanalyze_rel?: PgProc;
}
