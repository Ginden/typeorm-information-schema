import * as ts from 'typescript';
import { createManyToOne } from '../../typescript-utils/create-relation-property';
import { importFrom } from '../../typescript-utils/import-from';
import { ColumnData, EntityData } from '../generate-view-entities-for-postgres';

const factory = ts.factory;

export type RelationInfo = {
  imports: ts.ImportDeclaration[];
  properties: ts.PropertyDeclaration[];
};

export const hardCodedRelations: Record<string, Record<string, () => RelationInfo>> = {
  pg_catalog: {
    pg_aggregate: () => ({
      imports: [],
      properties: [
        createManyToOne({
          references: 'PgType',
          joinColumn: {
            name: 'aggtranstype',
            referencedColumnName: 'oid',
          },
        }),
        createManyToOne({
          references: 'PgType',
          joinColumn: {
            name: 'aggmtranstype',
            referencedColumnName: 'oid',
          },
        }),
      ],
    }),

    pg_locks: () => ({
      imports: [importFrom('./pg_database.entity', ['PgDatabase'])],
      properties: [
        createManyToOne({
          references: 'PgDatabase',
          joinColumn: {
            name: 'database',
            referencedColumnName: 'oid',
          },
          propertyName: 'databaseEntity',
        }),
      ],
    }),
  },
};

const specialOidTypes: Record<string, (col: ColumnData) => ts.PropertyDeclaration> = {
  regclass(col: ColumnData) {
    return createManyToOne({
      references: 'PgClass',
      joinColumn: {
        name: col.column_name,
        referencedColumnName: 'oid',
      },
    });
  },
  regcollation(col: ColumnData) {
    return createManyToOne({
      references: 'PgCollation',
      joinColumn: {
        name: col.column_name,
        referencedColumnName: 'oid',
      },
    });
  },
  regtype(col: ColumnData) {
    return createManyToOne({
      references: 'PgType',
      joinColumn: {
        name: col.column_name,
        referencedColumnName: 'oid',
      },
    });
  },
  regoper(col: ColumnData) {
    return createManyToOne({
      references: 'PgOperator',
      joinColumn: {
        name: col.column_name,
        referencedColumnName: 'oid',
      },
    });
  },
  regproc(col: ColumnData) {
    return createManyToOne({
      references: 'PgProc',
      joinColumn: {
        name: col.column_name,
        referencedColumnName: 'oid',
      },
    });
  },
};

export function generateForSpecialOidTypes(entityData: EntityData): ts.PropertyDeclaration[] {
  return entityData.columns
    .map((col) => {
      const fn = specialOidTypes[col.udt_name as string];
      if (!fn) {
        return [];
      }
      return [fn(col)];
    })
    .flat();
}

export function getRelationsFor(entityData: EntityData): RelationInfo {
  const base = hardCodedRelations[entityData.table_schema]?.[entityData.table_name]?.() ?? null;
  const imports = [...(base?.imports ?? [])];
  const generatedEntries = generateForSpecialOidTypes(entityData);
  if (generatedEntries.length) {
    if (entityData.table_name !== 'pg_proc') {
      imports.push(importFrom('./pg_proc.entity', ['PgProc']));
    }
    if (entityData.table_name !== 'pg_type') {
      imports.push(importFrom('./pg_type.entity', ['PgType']));
    }
  }
  return {
    imports,
    properties: [...(base?.properties ?? []), ...generatedEntries],
  };
}
