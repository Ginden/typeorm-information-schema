import * as ts from 'typescript';
import { factory } from 'typescript';
import { createTextUnion, createTypeNode } from '../../typescript-utils/type-utils';
import { ColumnData, EntityData } from '../generate-view-entities-for-postgres';

export const yesOrNo = () => createTextUnion('YES', 'NO');

/*eslint sort-keys: "error"*/

export const hardCodedTypes: Record<string, Record<string, Record<string, () => ts.TypeNode>>> = {
  information_schema: {
    administrable_role_authorizations: {
      is_grantable: () => createTypeNode('YES'),
    },
    attributes: {
      maximum_cardinality: () => createTypeNode(null),
    },
    columns: {
      column_name: () => factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      identity_cycle: () => createTextUnion('YES', 'NO', null),
      is_generated: () => createTextUnion('ALWAYS', 'NEVER'),
      is_identity: yesOrNo,
      is_nullable: yesOrNo,
      is_self_referencing: yesOrNo,
      is_updatable: yesOrNo,
    },
    data_type_privileges: {
      object_type: () => createTextUnion('TABLE', 'DOMAIN', 'ROUTINE'),
    },
    referential_constraints: {
      delete_rule: () => createTextUnion('CASCADE', 'SET NULL', 'SET DEFAULT', 'RESTRICT', 'NO ACTION'),
      match_options: () => createTextUnion('FULL', 'PARTIAL', 'NONE'),
      update_rule: () => createTextUnion('CASCADE', 'SET NULL', 'SET DEFAULT', 'RESTRICT', 'NO ACTION'),
    },
    role_column_grants: {
      privilege_type: () => createTextUnion('SELECT', 'INSERT', 'UPDATE', 'REFERENCES'),
    },
    routines: {
      is_udt_dependent: () => createTypeNode('NO'),
      routine_body: () => createTextUnion('SQL', 'EXTERNAL'),
      routine_type: () => createTextUnion('FUNCTION', 'PROCEDURE'),
      schema_level_routine: () => createTypeNode('YES'),
      security_type: () => createTextUnion('INVOKER', 'DEFINER'),
      sql_data_access: () => createTypeNode('MODIFIES'),
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
      action_orientation: () => createTextUnion('ROW', 'STATEMENT'),
      action_timing: () => createTextUnion('BEFORE', 'AFTER', 'INSTEAD OF'),
      event_manipulation: () => createTextUnion('INSERT', 'UPDATE', 'DELETE'),
    },
    udt_privileges: {
      privilege_type: () => createTypeNode('TYPE USAGE'),
    },
  },
  pg_catalog: {
    pg_aggregate: {
      aggfinalmodify: () => createTextUnion('r', 's', 'w'),
      aggkind: () => createTextUnion('n', 'h'),
      aggmfinalmodify: () => createTextUnion('r', 's', 'w'),
    },
    pg_am: {
      amtype: () => createTextUnion('t', 'i'),
    },
    pg_amop: {
      amoppurpose: () => createTextUnion('s', 'o'),
    },
    pg_attribute: {
      attcompression: () => createTextUnion('p', 'l'),
      attgenerated: () => createTextUnion('s', ''),
      attidentity: () => createTextUnion('', 'a', 'd'),
    },
    pg_cast: {
      castcontext: () => createTextUnion('a', 'i'),
      castmethod: () => createTextUnion('f', 'i', 'b'),
    },
    pg_class: {
      relkind: () => createTextUnion('r', 'i', 'S', 't', 'v', 'm', 'c', 'f', 'p', 'I'),
    },
    pg_constraint: {
      confdeltype: () => createTextUnion('a', 'r', 'c', 'n', 'd'),
      confmatchtype: () => createTextUnion('f', 'p', 's'),
      confupdtype: () => createTextUnion('a', 'r', 'c', 'n', 'd'),
      contype: () => createTextUnion('c', 'f', 'p', 'u', 't', 'x'),
    },

    pg_default_acl: {
      defaclobjtype: () => createTextUnion('r', 'S', 'f', 'T', 'n'),
    },
    pg_depend: {
      deptype: () => createTextUnion('n', 'a', 'i', 'P', 'S', 'e', 'x', 'p'),
    },
    pg_event_trigger: {
      evtenabled: () => createTextUnion('O', 'D', 'R', 'A'),
    },
    pg_init_privs: {
      privtype: () => createTextUnion('i', 'e'),
    },
    pg_operator: {
      oprkind: () => createTextUnion('b', 'l'),
    },
    pg_partitioned_table: {
      partstrat: () => createTextUnion('h', 'l', 'r'),
    },
    pg_policy: {
      polcmd: () => createTextUnion('r', 'a', 'w', 'd', '*'),
    },
    pg_proc: {
      prokind: () => createTextUnion('f', 'p', 'a', 'w'),
      proparallel: () => createTextUnion('s', 'r', 'u'),
      provolatile: () => createTextUnion('i', 's', 'v'),
    },
    pg_rewrite: {
      ev_enabled: () => createTextUnion('O', 'D', 'R', 'A'),
      ev_type: () => createTextUnion('1', '2', '3', '4'),
    },
    pg_stat_activity: {
      state: () => createTextUnion('active', 'idle', 'idle in transaction', 'idle in transaction', 'fastpath function call', 'disabled'),
      wait_event_type: () =>
        createTextUnion('Activity', 'BufferPin', 'Client', 'Extension', 'IO', 'IPC', 'Lock', 'LWLock', 'Timeout', null),
    },
    pg_statistic_ext: {
      stxkind: () => factory.createArrayTypeNode(createTextUnion('d', 'f', 'm', 'e')),
    },
    pg_trigger: {
      tgenabled: () => createTextUnion('O', 'D', 'R', 'A'),
    },
    pg_type: {
      typalign: () => createTextUnion('c', 's', 'i', 'd'),
      typstorage: () => createTextUnion('p', 'e', 'm', 'x'),
    },
  },
};

export function getTypesFor(entityData: EntityData, col: ColumnData): ts.TypeNode | null {
  return hardCodedTypes[entityData.table_schema]?.[entityData.table_name]?.[col.column_name as string]?.() ?? null;
}
