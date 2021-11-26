import * as ts from 'typescript';
import { createObjectLiteral } from '../../typescript-utils/create-object-literal';

const factory = ts.factory;

export type RelationInfo = {
  imports: ts.ImportDeclaration[];
  properties: ts.PropertyDeclaration[];
};

export const hardCodedRelations: Record<string, Record<string, () => RelationInfo>> = {
  pg_catalog: {
    pg_locks: () => ({
      imports: [
        factory.createImportDeclaration(
          undefined,
          undefined,
          factory.createImportClause(
            false,
            undefined,
            factory.createNamedImports([factory.createImportSpecifier(false, undefined, factory.createIdentifier('PgDatabase'))]),
          ),
          factory.createStringLiteral('./pg_database.entity'),
          undefined,
        ),
      ],
      properties: [
        factory.createPropertyDeclaration(
          [
            factory.createDecorator(
              factory.createCallExpression(factory.createIdentifier('ManyToOne'), undefined, [
                factory.createArrowFunction(
                  undefined,
                  undefined,
                  [],
                  undefined,
                  factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                  factory.createIdentifier('PgDatabase'),
                ),
              ]),
            ),
            factory.createDecorator(
              factory.createCallExpression(factory.createIdentifier('JoinColumn'), undefined, [
                createObjectLiteral({
                  name: 'database',
                  referencedColumnName: 'oid',
                }),
              ]),
            ),
          ],
          [factory.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
          factory.createIdentifier('pgDatabase'),
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createTypeReferenceNode(factory.createIdentifier('PgDatabase'), undefined),
          undefined,
        ),
      ],
    }),
  },
};
