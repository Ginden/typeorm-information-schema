import { JoinColumnOptions } from 'typeorm';
import * as ts from 'typescript';
import { createObjectLiteral } from './create-object-literal';

const factory = ts.factory;

export type OneToManyDeclaration = {
  propertyName: string;
  joinColumn: never;
  reverseSideProperty: string;
  references: string;
};

export type ManyToOneDeclaration = {
  propertyName?: string;
  joinColumn: JoinColumnOptions;
  reverseSideProperty?: string;
  references: string;
};

function createOneToMany(def: OneToManyDeclaration): ts.PropertyDeclaration {
  throw new Error();
}

function createPropertyName(p: string | undefined): string {
  if (!p) {
    throw new Error(`${p}`);
  }
  if (p.endsWith('oid')) {
    return p.slice(0, -'oid'.length);
  }
  if (p.endsWith('id')) {
    return p.slice(0, -'id'.length);
  }
  return `${p}Entity`;
}

export function createManyToOne(def: ManyToOneDeclaration): ts.PropertyDeclaration {
  const { joinColumn, propertyName = createPropertyName(joinColumn.name), reverseSideProperty, references } = def;
  const manyToOneDecorator = factory.createDecorator(
    factory.createCallExpression(factory.createIdentifier('ManyToOne'), undefined, [
      factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        factory.createIdentifier(references),
      ),
    ]),
  );

  const joinColumnDecorator = factory.createDecorator(
    factory.createCallExpression(factory.createIdentifier('JoinColumn'), undefined, [createObjectLiteral({ ...joinColumn })]),
  );

  return factory.createPropertyDeclaration(
    [manyToOneDecorator, joinColumnDecorator],
    [factory.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
    propertyName,
    factory.createToken(ts.SyntaxKind.QuestionToken),
    factory.createTypeReferenceNode(factory.createIdentifier(references), undefined),
    undefined,
  );
}
