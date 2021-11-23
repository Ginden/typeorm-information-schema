import * as ts from 'typescript';
import { factory } from 'typescript';

export const yesOrNo = () =>
  factory.createUnionTypeNode([
    factory.createLiteralTypeNode(factory.createStringLiteral('YES')),
    factory.createLiteralTypeNode(factory.createStringLiteral('NO')),
  ]);

export const hardCodedTypes: Record<string, Record<string, Record<string, () => ts.TypeNode>>> = {
  information_schema: {
    columns: {
      is_nullable: yesOrNo,
      is_identity: yesOrNo,
      is_updatable: yesOrNo,
      is_self_referencing: yesOrNo,
      identity_cycle: () => factory.createUnionTypeNode([yesOrNo(), factory.createLiteralTypeNode(factory.createNull())]),
      is_generated: () =>
        factory.createUnionTypeNode([
          factory.createLiteralTypeNode(factory.createStringLiteral('ALWAYS')),
          factory.createLiteralTypeNode(factory.createStringLiteral('NEVER')),
        ]),
    },
  },
};
