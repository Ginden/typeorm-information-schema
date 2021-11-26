import * as ts from 'typescript';
import { factory } from 'typescript';

function createTypeNode(v: null | string | number): ts.LiteralTypeNode {
  if (v === null) {
    return factory.createLiteralTypeNode(factory.createNull());
  }
  if (typeof v === 'string') {
    return factory.createLiteralTypeNode(factory.createStringLiteral(v));
  }
  if (typeof v === 'number') {
    return factory.createLiteralTypeNode(factory.createNumericLiteral(v));
  }
  throw new Error();
}

function createTextUnion(...texts: (string | null | number)[]): ts.UnionTypeNode {
  return factory.createUnionTypeNode(texts.map(createTypeNode));
}

export const yesOrNo = () => createTextUnion('YES', 'NO');

export const hardCodedTypes: Record<string, Record<string, Record<string, () => ts.TypeNode>>> = {
  information_schema: {
    administrable_role_authorizations: {
      is_grantable: () => createTypeNode('YES'),
    },
    attributes: {
      maximum_cardinality: () => createTypeNode(null),
    },
    columns: {
      is_nullable: yesOrNo,
      is_identity: yesOrNo,
      is_updatable: yesOrNo,
      is_self_referencing: yesOrNo,
      identity_cycle: () => createTextUnion('YES', 'NO', null),
      is_generated: () => createTextUnion('ALWAYS', 'NEVER'),
      column_name: () => factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    },
    data_type_privileges: {
      object_type: () => createTextUnion('TABLE', 'DOMAIN', 'ROUTINE'),
    },
    referential_constraints: {
      match_options: () => createTextUnion('FULL', 'PARTIAL', 'NONE'),
      update_rule: () => createTextUnion('CASCADE', 'SET NULL', 'SET DEFAULT', 'RESTRICT', 'NO ACTION'),
      delete_rule: () => createTextUnion('CASCADE', 'SET NULL', 'SET DEFAULT', 'RESTRICT', 'NO ACTION'),
    },
    role_column_grants: {
      privilege_type: () => createTextUnion('SELECT', 'INSERT', 'UPDATE', 'REFERENCES'),
    },
    routines: {
      routine_type: () => createTextUnion('FUNCTION', 'PROCEDURE'),
      routine_body: () => createTextUnion('SQL', 'EXTERNAL'),
      sql_data_access: () => createTypeNode('MODIFIES'),
      schema_level_routine: () => createTypeNode('YES'),
      security_type: () => createTextUnion('INVOKER', 'DEFINER'),
      is_udt_dependent: () => createTypeNode('NO'),
    },
    sequences: {
      numeric_precision_radix: () => createTextUnion(2, 10),
      numeric_scale: () => createTextUnion(2, 10),
    },
    sql_features: {
      is_verified_by: () => createTypeNode(null),
    },
    sql_parts: {
      is_verified_by: () => createTypeNode(null),
    },
    table_constraints: {
      constraint_type: () => createTextUnion('CHECK', 'FOREIGN KEY', 'PRIMARY KEY', 'UNIQUE'),
      enforced: () => createTypeNode('YES'),
    },
    table_privileges: {
      privilege_type: () => createTextUnion('SELECT', 'INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'REFERENCES', 'TRIGGER'),
    },
    tables: {
      table_type: () => createTextUnion('BASE TABLE', 'VIEW', 'FOREIGN', 'LOCAL TEMPORARY'),
    },
    transforms: {
      transform_type: () => createTextUnion('FROM SQL', 'TO SQL'),
    },
    triggers: {
      event_manipulation: () => createTextUnion('INSERT', 'UPDATE', 'DELETE'),
      action_orientation: () => createTextUnion('ROW', 'STATEMENT'),
      action_timing: () => createTextUnion('BEFORE', 'AFTER', 'INSTEAD OF'),
    },
    udt_privileges: {
      privilege_type: () => createTypeNode('TYPE USAGE'),
    },
  },
  pg_catalog: {
    pg_stat_activity: {
      wait_event_type: () =>
        createTextUnion('Activity', 'BufferPin', 'Client', 'Extension', 'IO', 'IPC', 'Lock', 'LWLock', 'Timeout', null),
      state: () => createTextUnion('active', 'idle', 'idle in transaction', 'idle in transaction', 'fastpath function call', 'disabled'),
    },
  },
};
