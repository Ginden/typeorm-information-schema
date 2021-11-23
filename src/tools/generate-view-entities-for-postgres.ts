import { readFileSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { camelCase, groupBy, sortBy, upperFirst } from 'lodash';
import { dirname, join, normalize, relative } from 'path';
import * as ts from 'typescript';
import { addSyntheticLeadingComment, factory, ScriptTarget, SyntaxKind } from 'typescript';
import { Columns as Columns10 } from '../postgres/10/information_schema/columns.entity';
//import { Columns as Columns11 } from '../postgres/11/information_schema/columns.entity';
//import { Columns as Columns12 } from '../postgres/12/information_schema/columns.entity';
//import { Columns as Columns13 } from '../postgres/13/information_schema/columns.entity';
//import { Columns as Columns14 } from '../postgres/14/information_schema/columns.entity';

import { DatabaseEngine } from './generate';

import { hardCodedTypes, yesOrNo } from './hard-coded-types';

export type ColumnData = Columns10;

export type EntityData = {
  table_schema: 'information_schema' | 'pg_catalog';
  table_name: string;
  columns: ColumnData[];
};

function mapPostgresTypesToNodes(col: ColumnData): ts.TypeNode | null {
  switch (col.domain_name) {
    case 'sql_identifier':
      return factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case 'oid':
      return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case 'yes_or_no':
      return yesOrNo();
  }
  switch (col.udt_name) {
    case 'bool':
    case '_bool':
      return factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case 'float4':
    case '_float4':
    case 'float8':
    case 'int2':
    case 'int4':
    case 'oid':
      return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case 'text':
    case 'varchar':
    case 'int8':
    case '_text':
      return factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case 'timestamptz':
      return factory.createTypeReferenceNode(factory.createIdentifier('Date'), undefined);
  }
  return null;
}

function getColumnType(col: ColumnData): ts.TypeNode {
  let typeNode: ts.TypeNode = factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);

  const proposedType = mapPostgresTypesToNodes(col);
  typeNode = proposedType ?? typeNode;

  if (col.is_nullable === 'YES') {
    typeNode = factory.createUnionTypeNode([typeNode, factory.createLiteralTypeNode(factory.createNull())]);
  }

  ts.addSyntheticTrailingComment(typeNode, SyntaxKind.MultiLineCommentTrivia, ` ${col.domain_name ?? col.udt_name} `);

  return typeNode;
}

function createColumnNodes(entityData: EntityData) {
  return sortBy(entityData.columns, 'ordinal_position')
    .map((col) => {
      const columnType =
        hardCodedTypes[entityData.table_schema]?.[entityData.table_name]?.[col.column_name as string]?.() ?? getColumnType(col);
      return factory.createPropertyDeclaration(
        [
          factory.createDecorator(
            factory.createCallExpression(factory.createIdentifier('ViewColumn'), undefined, [
              factory.createObjectLiteralExpression(
                [
                  factory.createPropertyAssignment(
                    factory.createIdentifier('name'),
                    factory.createStringLiteral(col.column_name as string),
                  ),
                ],
                false,
              ),
            ]),
          ),
        ],
        [factory.createModifier(ts.SyntaxKind.PublicKeyword), factory.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
        col.column_name as string,
        factory.createToken(ts.SyntaxKind.ExclamationToken),
        columnType,
        undefined,
      );
    })
    .map((v) => addSyntheticLeadingComment(v, SyntaxKind.SingleLineCommentTrivia, 'REPLACE_WITH_NEW_LINE'));
}

function createEntityNodes(entityData: EntityData) {
  return [
    factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(false, undefined, factory.createIdentifier('ViewEntity')),
          factory.createImportSpecifier(false, undefined, factory.createIdentifier('ViewColumn')),
        ]),
      ),
      factory.createStringLiteral('typeorm'),
      undefined,
    ),
    addSyntheticLeadingComment(factory.createEmptyStatement(), SyntaxKind.SingleLineCommentTrivia, 'REPLACE_WITH_NEW_LINE'),
    factory.createClassDeclaration(
      [
        factory.createDecorator(
          factory.createCallExpression(factory.createIdentifier('ViewEntity'), undefined, [
            factory.createObjectLiteralExpression(
              [
                factory.createPropertyAssignment(factory.createIdentifier('schema'), factory.createStringLiteral(entityData.table_schema)),
                factory.createPropertyAssignment(factory.createIdentifier('name'), factory.createStringLiteral(entityData.table_name)),
                factory.createPropertyAssignment(factory.createIdentifier('synchronize'), factory.createFalse()),
              ],
              true,
            ),
          ]),
        ),
      ],
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createIdentifier(upperFirst(camelCase(entityData.table_name))),
      undefined,
      undefined,
      createColumnNodes(entityData),
    ),
  ];
}

export async function generateViewEntitiesForPostgres(engine: DatabaseEngine, isColumnsPath: string): Promise<void> {
  const entities: EntityData[] = JSON.parse(readFileSync(isColumnsPath, 'utf8'));
  const files: string[] = [];
  const engineDir = join(process.cwd(), 'src', `${engine.outputPath}`);
  for (const entity of entities) {
    const outputDir = join(engineDir, entity.table_schema);
    await mkdir(outputDir, { recursive: true });
    const printer = ts.createPrinter();
    const nodes = createEntityNodes(entity);
    const fileName = `${entity.table_name}.entity.ts`;
    const sourceFile = ts.createSourceFile(fileName, ``, ScriptTarget.ESNext);
    const result = printer.printList(0, factory.createNodeArray(nodes), sourceFile as any);
    const outputPath = join(outputDir, fileName);
    files.push(outputPath);
    await writeFile(
      outputPath,
      result
        .split('\n')
        .map((v) => (v.includes('REPLACE_WITH_NEW_LINE') ? '' : v))
        .join('\n'),
    );
  }
  const subDirs = groupBy(files, dirname);
  for (const [dir, files] of Object.entries(subDirs)) {
    const relativePaths = files
      .map((filePath) => relative(dir, filePath))
      .map((p) => './'.concat(p.slice(0, p.length - '.ts'.length)))
      .sort();
    const exports = relativePaths.map((v) => `export * from ${JSON.stringify(v)};`).join('\n');
    await writeFile(join(dir, 'index.ts'), exports);
  }

  await writeFile(join(engineDir, 'index.ts'), await readFile(join(process.cwd(), 'template.index.ts.txt')));
}
