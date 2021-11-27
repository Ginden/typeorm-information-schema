import * as ts from 'typescript';
import { createManyToOne } from '../../typescript-utils/create-relation-property';
import { importFrom } from '../../typescript-utils/import-from';
import { EntityData } from '../generate-view-entities-for-postgres';

const factory = ts.factory;

export type RelationInfo = {
  imports: ts.ImportDeclaration[];
  properties: ts.PropertyDeclaration[];
};

export const hardCodedRelations: Record<string, Record<string, () => RelationInfo>> = {
  pg_catalog: {
    pg_aggregate: () => ({
      imports: [importFrom('./pg_proc.entity', ['PgProc']), importFrom('./pg_type.entity', ['PgType'])],
      properties: [
        createManyToOne({
          references: 'PgProc',
          joinColumn: {
            name: 'aggfnoid',
            referencedColumnName: 'oid',
          },
          propertyName: 'aggfn',
        }),
        ...['aggtransfn', 'aggfinalfn', 'aggcombinefn', 'aggserialfn', 'aggdeserialfn', 'aggmtransfn', 'aggminvtransfn', 'aggmfinalfn'].map(
          (columnName) =>
            createManyToOne({
              references: 'PgProc',
              joinColumn: {
                name: columnName,
                referencedColumnName: 'oid',
              },
            }),
        ),
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

export function getRelationsFor(entityData: EntityData): RelationInfo | null {
  return hardCodedRelations[entityData.table_schema]?.[entityData.table_name]?.() ?? null;
}
