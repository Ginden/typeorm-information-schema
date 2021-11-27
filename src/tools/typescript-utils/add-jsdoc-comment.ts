import { addSyntheticLeadingComment, createPrinter, createSourceFile, EmitHint, JSDoc, Node, ScriptTarget, SyntaxKind } from 'typescript';

export function addJsdocComment<T extends Node>(node: T, jsDoc: JSDoc) {
  const printer = createPrinter();
  const output = printer.printNode(EmitHint.Unspecified, jsDoc, createSourceFile('', '', ScriptTarget.ESNext)).trim().slice(2, -2);
  return addSyntheticLeadingComment<T>(node, SyntaxKind.MultiLineCommentTrivia, output, true);
}
