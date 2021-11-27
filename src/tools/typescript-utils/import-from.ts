import { factory, ImportDeclaration, ImportSpecifier } from 'typescript';

function createImportSpecifier(v: string): ImportSpecifier {
  return factory.createImportSpecifier(false, undefined, factory.createIdentifier(v));
}

export function importFrom(from: string, identifiers: (ImportSpecifier | string)[]): ImportDeclaration {
  const elements = identifiers.map((v) => (typeof v === 'string' ? createImportSpecifier(v) : v));
  return factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(false, undefined, factory.createNamedImports(elements)),
    factory.createStringLiteral(from),
    undefined,
  );
}
