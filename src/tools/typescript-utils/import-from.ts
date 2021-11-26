import { factory, ImportDeclaration } from 'typescript';

export function importFrom(from: string, identifiers: string[]): ImportDeclaration {
  const elements = identifiers.map((v) => factory.createImportSpecifier(false, undefined, factory.createIdentifier(v)));
  return factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(false, undefined, factory.createNamedImports(elements)),
    factory.createStringLiteral(from),
    undefined,
  );
}
