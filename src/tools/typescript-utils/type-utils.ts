import { factory } from 'typescript';
import * as ts from 'typescript';

export function createTypeNode(v: null | string | number | ts.TypeNode): ts.TypeNode {
  if (v === null) {
    return factory.createLiteralTypeNode(factory.createNull());
  }
  if (typeof v === 'string') {
    return factory.createLiteralTypeNode(factory.createStringLiteral(v));
  }
  if (typeof v === 'number') {
    return factory.createLiteralTypeNode(factory.createNumericLiteral(v));
  }
  return v;
}

export function createTextUnion(...texts: (string | null | number | ts.TypeNode)[]): ts.UnionTypeNode {
  return factory.createUnionTypeNode(texts.map(createTypeNode));
}
