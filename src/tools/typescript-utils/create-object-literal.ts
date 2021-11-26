import { Expression, factory, ObjectLiteralExpression } from 'typescript';

type AcceptedLiteralType = string | number | Expression | boolean | null | undefined;

function toExpression(v: AcceptedLiteralType): Expression {
  if (v === null) return factory.createNull();
  if (v === undefined) return factory.createIdentifier('undefined');
  if (typeof v === 'string') return factory.createStringLiteral(v);
  if (typeof v === 'number') return factory.createNumericLiteral(v);
  if (typeof v === 'boolean') return v ? factory.createTrue() : factory.createFalse();

  return v;
}

export function createObjectLiteral(v: Record<string, AcceptedLiteralType>): ObjectLiteralExpression {
  return factory.createObjectLiteralExpression(
    Object.entries(v).map(([key, value]) => {
      return factory.createPropertyAssignment(key, toExpression(value));
    }),
    true,
  );
}
