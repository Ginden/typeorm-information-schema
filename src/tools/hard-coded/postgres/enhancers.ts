import * as ts from 'typescript';
import { factory } from 'typescript';

export const hardCodedDecorators: Record<string, Record<string, Record<string, () => ts.Decorator[]>>> = {
  pg_catalog: {
    pg_database: {
      oid: () => [factory.createDecorator(factory.createCallExpression(factory.createIdentifier('PrimaryColumn'), undefined, []))],
    },
  },
};
