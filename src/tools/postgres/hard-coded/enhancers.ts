import * as ts from 'typescript';

export const hardCodedDecorators: Record<string, Record<string, Record<string, () => ts.Decorator[]>>> = {
  pg_catalog: {
    pg_database: {},
  },
};
